module.exports={
    addToList: (req, res) => {
        const {list_id, house_id} = req.body
        const db = req.app.get('db')
        db.wish_list.add_to_wish_list(list_id, house_id)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    },
    getList: (req, res) => {
        // console.log(list_id)
        const {list_id} = req.params
        const db = req.app.get('db')
        console.log(list_id)
        db.wish_list.get_wish_list(list_id)
        .then(items => res.status(200).send(items))
        .catch(err => res.status(500).send(err))
    },
    deleteItem: (req, res) => {
        const {id} = req.params
        const db = req.app.get('db')
        db.wish_list.delete_wish_list(id)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    }
}