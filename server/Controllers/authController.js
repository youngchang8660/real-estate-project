const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req,res) => {
        const {email, password} = req.body
        const db = req.app.get('db')
        let foundEmail = await db.users.check_user([email])
        if (foundEmail[0]) {
            return res.status(400).send('Email is already in use')
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        let registeredUser = await db.users.register_user([email, hash])

        let userWishList = await db.wish_list.create_wish_list([registeredUser[0].user_id])
        let sessionUser = {...registeredUser[0], ...userWishList[0]};

        req.session.user = sessionUser
        return res.status(201).send(req.session.user)
    },
    login: async (req,res) => {
        const {email, password} = req.body
        const db = req.app.get('db')
        let existingUser = await db.users.check_user(email);
        if(!existingUser[0]) {
            return res.status(400).send('Email is not found')
        }
        let authorized = bcrypt.compareSync(password, existingUser[0].password)
        if(!authorized) {
            return res.status(401).send('Incorrect password')
        }
        delete existingUser[0].password

        let customerCart = await db.wish_list.find_wish_list(existingUser[0].customer_id);
        let sessionCustomer = {...existingUser[0], ...customerCart[0]};

        req.session.user = sessionCustomer
        return res.status(202).send(req.session.user)
    },
    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    }
}