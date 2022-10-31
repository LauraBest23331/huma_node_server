const express = require("express");
const Router = express.Router()
const { getClan } = require('../api/clan');
const { getPlayer } = require("../api/player");
const { verifyPlayer} = require('../api/player')
let CLAN_TAGS= ['#LYGV880Y', '#2PURL2U2', '#G2R8CYPR', '#CLJYPJQR']
const {db} = require('../util/db')

Router.post('/getOriginData', async (req, res)=>{
    getClan('LYGV880Y').then(result=>{
        res.end(JSON.stringify(result.data))
    })
    

})
Router.post('/testConn', async (req, res)=>{
    res.end(JSON.stringify({
        code: 200,
        msg: 'good'
    }))
})



module.exports = Router