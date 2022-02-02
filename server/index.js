require('dotenv').config()
const express = require('express'),
      session = require('express-session'),
      cors = require('cors'),
      massive = require('massive'),
      {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
      houseCtrl = require('./Controllers/houseController'),
      authCtrl = require('./Controllers/authController'),
      wishListCtrl = require('./Controllers/wishListController'),
      tourCtrl = require('./Controllers/tourController')
      port = SERVER_PORT,
      path = require('path'),
      app = express();

console.log('server port', SERVER_PORT);

app.use(express.json())
app.use(cors())
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60}
}))

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log('db connected')
})

//getHouse endpoints
app.get('/api/all-house', houseCtrl.getAllHouses)
app.get('/api/house/:house_id', houseCtrl.getOneHouse)
app.get('/api/houses-by-city/:city', houseCtrl.getHouseByCity)
app.get('/api/houses-by-zip/:zip_code', houseCtrl.getHouseByZip)
app.get('/api/house/images/:house_id', houseCtrl.getImages)

//authentication endpoints
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.get('/auth/logout', authCtrl.logout)

//tour endpoints
app.post('/api/tour', tourCtrl.addNewTour)

//wishlist endpoints
app.post('/api/add/list', wishListCtrl.addToList)
app.get('/api/get/list/:list_id', wishListCtrl.getList)
app.delete('/api/delete/item/:id', wishListCtrl.deleteItem)

app.use(express.static(__dirname + '/../build'))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
})

app.listen(port, () => console.log(`Server running on ${port}`))