const express = require('express')
const { lstat } = require('fs');
const cors = require('cors')
const app = express()
const port = 3000
// const clan_router = require('./router/clan')
const user_router = require('./router/user')
const rank_router = require('./router/rank')

const diction_router = require('./router/diction')
const bodyParser = require('body-parser')
// const conf_router = require('./router/conf')
const Jwt = require('./util/jwt')
 // 配置body-parser模块
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const url = require('url');
const { application } = require('express');

app.use(cors())
app.use('/*', (req, res, next)=>{
    next()

    
})
// app.use('/clan',clan_router)

app.use('/diction', diction_router)
app.use('/user', user_router)
app.use('/rank', rank_router)
app.listen(port)
