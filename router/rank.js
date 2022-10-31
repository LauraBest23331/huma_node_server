const express = require("express");
const Router = express.Router()

const {db} = require('../util/db')

Router.post('/addScore', (req, res)=>{
    const sql = 'update users set score=? where account=?'
    let _score = req.body.score
    let _account = req.body.account
    let _count= req.body.count
    if (_count > 100 || _count < -100) {
     return
    }
    let ultra_score = _score + 2 * _count
    db(sql, [ultra_score, _account]).then(res=>{

    })


    
 
  
})

Router.post('/getZigfRankList', (req, res)=>{
    const sql = 'select uname, score from users'
    db(sql).then(result=>{
        if (result.length != 0) {
            res.end(JSON.stringify({
                code : 200,
                msg : '查询成功',
                data: result
            }))
        }else { 
            res.end(JSON.stringify({
                code : 201,
                msg: 'empty',
                data : []
            }))
        }
    })

})
Router.post('/getMyZigfRankList', (req, res)=>{
    let _account = req.body.account
    const sql = 'select uname, score from users where account=?'
    db(sql, [_account]).then(result=>{
        if (result.length != 0) {
            res.end(JSON.stringify({
                code : 200,
                msg : '查询成功',
                data: result
            }))
        }else { 
            res.end(JSON.stringify({
                code : 201,
                msg: 'empty',
                data : []
            }))
        }
    })

})
// Router.post('/getStarList', (req, res)=>{
//     const sql = 'select * from star_list'
//     db(sql).then(result=>{
//         if (result.length != 0) {
//             res.end(JSON.stringify({
//                 code : 200,
//                 msg : '查询成功',
//                 data: result
//             }))
//         }else { 
//             res.end(JSON.stringify({
//                 code : 201,
//                 msg: 'empty',
//                 data : []
//             }))
//         }
//     })

// })
// Router.post('/addAdmin', (req, res)=>{
//     const sql = 'insert into admin_list(tag, dealer, clan,`rank`) values(?,?,?,?)'
//     let tag = req.body.admin.tag
//     let dealer = req.body.admin.dealer_tag
//     let clan = req.body.admin.clan
//     let rank = req.body.admin.rank

//     db(sql, [tag, dealer, clan, rank]).then(result=>{
//         res.end(JSON.stringify({
//             code: 200,
//             msg: 'success'
//         }))
//     }).catch(error=>{
//         console.log(error)
//         res.send(JSON.stringify({code: 201, msg: 'fail'}))

//     })
// })

// Router.post('/addStar', (req, res)=>{
//     const sql = 'insert into star_list(cname, count, star) values(?,?,?)'
//     let cname = req.body.cname
//     let count = req.body.count
//     let star = req.body.star

//     db(sql, [cname, count, star]).then(result=>{
//         res.end(JSON.stringify({
//             code: 200,
//             msg: 'success'
//         }))
//     }).catch(error=>{
//         console.log(error)
//         res.send(JSON.stringify({code: 201, msg: 'fail'}))

//     })
// })
// Router.post('/deleteAdmin', (req, res)=>{
//     const sql = 'delete from admin_list where tag = ?'
//     let tag = req.body.tag
//     db(sql, [tag]).then(result=>{
//         res.end(JSON.stringify({
//             code: 200,
//             msg: 'success'
//         }))
//     })
// })
// Router.post('/deleteStar', (req, res)=>{
//     const sql = 'delete from star_list where cname = ?'
//     let cname = req.body.cname
//     db(sql, [cname]).then(result=>{
//         res.end(JSON.stringify({
//             code: 200,
//             msg: 'success'
//         }))
//     })
// })
// Router.post('/deleteBlack', (req, res)=>{
//     const sql = 'delete from black_list where tag = ?'
//     let tag = req.body.tag
//     db(sql, [tag]).then(result=>{
//         res.end(JSON.stringify({
//             code: 200,
//             msg: 'success'
//         }))
//     })
// })
// Router.post('/addBlack', (req, res)=>{
//     const sql = 'insert into black_list(tag, dealer, reason, name) values(?,?,?,?)'
//     let tag = req.body.tag
//     let dealer = req.body.dealer
//     let reason = req.body.reason
//     let name ="获取中"
//     db(sql, [tag, dealer, reason, name]).then(result=>{
//         res.end(JSON.stringify({
//             code: 200,
//             msg: 'success'
//         }))
//     }).catch(error=>{
//         console.log(error)
//         res.send(JSON.stringify({code: 201, msg: 'fail'}))

//     })
// })
Router.post('/getAdminList', (req, res)=>{
    const sql = "SELECT\n"

    +"    c.name admin_name,\n"

    + "    a.tag admin_tag,\n"

    + "    `rank`,\n"

    + "    a.`clan`,\n"

    + "    b.name dealer_name\n"

    + "FROM\n"

    + "    `admin_list` a\n"

    + "INNER JOIN clan_info b ON\n"

    + "    a.dealer = b.tag\n"

    + "INNER JOIN clan_info c ON\n"

    +    "    a.tag = c.tag";
    db(sql).then(result=>{
        if (result.length != 0) {
            res.end(JSON.stringify({
                code : 200,
                msg : '查询成功',
                data: result
            }))
        }else {
            res.end(JSON.stringify({
                code : 201,
                msg: 'empty',
                data : []
            }))
        }
    })

})


module.exports = Router