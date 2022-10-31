const express = require("express");
const Router = express.Router()
const clanSetting = require('../util/read_conf')

Router.post('/getClanSetting', async (req, res)=>{
    res.end(JSON.stringify({
        code: 200,
        msg: 'good',
        data:clanSetting.getConf()
    }))
})
Router.post('/setClanSetting', async (req, res)=>{
    let _config = req.body.config
    let stat = clanSetting.setConf(_config)
    if(stat) {
        res.end(JSON.stringify({
            code: 200,
            msg: 'good'
        }))
    }else {
        res.end(JSON.stringify({
            code: 500,
            msg: 'fail'
        }))
    }
 
})



module.exports = Router