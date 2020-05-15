module.exports = {
    getAllHouses: (req, res) => {
        const db = req.app.get('db')
        db.houses.get_all_houses()
        .then(houses => res.status(200).send(houses))
        .catch(err => res.status(500).send(err))
    },
    getOneHouse: (req, res) => {
        const db = req.app.get('db')
        const {house_id} = req.params
        db.houses.get_one_house(house_id)
        .then(house => res.status(200).send(house))
        .catch(err => res.status(500).send(err))
    },
    getHouseByCity: (req, res) => {
        const db = req.app.get('db')
        const {city} = req.params
        console.log('hit')
        db.houses.get_house_by_city(city)
        .then(result => res.status(200).send(result))
        .catch(err => res.status(500).send(err))
    },
    getHouseByZip: (req, res) => {
        console.log('hit')
        const db = req.app.get('db')
        const {zip_code} = req.params
        db.houses.get_house_by_zip(+zip_code)
        .then(house => res.status(200).send(house))
        .catch(err => res.status(500).send(err))
    },
    getImages: (req, res) => {
        const db = req.app.get('db')
        const {house_id} = req.params
        db.houses.get_images(+house_id)
        .then(images => res.status(200).send(images))
        .catch(err => res.status(500).send(err))
    }
}