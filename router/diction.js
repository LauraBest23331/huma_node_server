const express = require("express");
const Router = express.Router()
const {db} = require('../util/db')


const f_reader = require('../util/f_reader')
Router.post('/search', async (req, res)=>{
    let _key = req.body.key
    f_reader.readfile('./resourse/idff.txt', (data)=>{

        let strings = data.toString()
        let array = strings.split('\n')
        let smap = new Map()
        const sql = 'insert into recode  (word, code) values(?, ?)'
        array.forEach(async element => {
            element = element.split('\t')
            smap.set(element[0], element[1])
            
        });
        // console.log(smap);
        let _result = {code: 201,msg:'没找到'}
        if (smap.get(_key)) {
            _result = {
                code: 200,
                result: smap.get(_key),
                msg: '查找成功',
                ordata: _key
            }
        }

        res.send(JSON.stringify(_result))
    
    })
})
module.exports = Router

