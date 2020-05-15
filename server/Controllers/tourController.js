module.exports = {
    addNewTour: (req, res) => {
        const {user_id, house_id, date, time, customer_name, customer_number} = req.body
        const db = req.app.get('db')
        db.tour.make_new_tour(user_id, house_id, date, time, customer_name, customer_number)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    }
}