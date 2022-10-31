const express = require("express");
const Router = express.Router()

const {db} = require('../util/db')
Router.post('/login',(req, res) => {
    let $account = req.body.account 
    let $passwd = req.body.passwd
    const sql = 'select * from users where account=? and passwd = ?'
    db(sql, [$account, $passwd]).then(result=>{
        if (result.length!=0) {
            res.end( JSON.stringify({
            code : 200, msg : '登陆成功', 
            // token: jwt.generateToken($account),
            userInfo: result[0]}))
        }
        else {
            res.end(JSON.stringify({code : 400, msg : '登陆失败'}))
        }
    })


})
Router.post('/isExist', (req, res)=>{
    let $account = req.body.account
    const sql = 'select * from users where account=?'
    db(sql, [$account]).then(result=>{
        if (result.length!=0) {
            res.end( JSON.stringify({code : 402, msg : 'this id is uesed!'}))
        }
        else {
            res.end(JSON.stringify({code : 200, msg : 'this id can be uesed'}))
        }
    })
})
Router.post('/isUnameExist', (req, res)=>{
    let $uname = req.body.uname
    console.log('uname: ' + $uname);
    const sql = 'select * from users where uname=?'
    db(sql, [$uname]).then(result=>{
        if (result.length!=0) {
            res.end( JSON.stringify({code : 402, msg : 'this name is uesed!'}))
        }
        else {
            res.end(JSON.stringify({code : 200, msg : 'this name can be uesed'}))
        }
    })
})

Router.post('/register', (req, res)=>{
    let _account = req.body.account
    let _passwd = req.body.passwd
    let _uname = req.body.uname
    let _role = req.body.role
    const sql = 'insert into users(account,uname,passwd,score) values(?,?,?, 0)'
    db(sql, [_account, _uname, _passwd, _role]).then(result=>{
            res.send(JSON.stringify({code: 200, msg: 'succ'}))
      
    }).catch(error=>{
        console.log(error)
        res.send(JSON.stringify({code: 500, msg: 'fail'}))

    })
})
module.exports = Router