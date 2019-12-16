let express = require('express')
let layouts = require('express-ejs-layouts')

let app = express()

app.set('view engine', 'ejs')
app.use(layouts)

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(process.env.PORT || 3000)