const express = require("express");

const { getPlayer } = require('../api/player')
const {db} = require('../util/db')



func = async ()=>{
    let list = []
    const sql = 'select * from black_list'
    const updateSql = 'update black_list set name=? where tag=?'
    db(sql).then(async result=>{
        let tempList = result
        for (const it of tempList) {
            await getPlayer(it.tag).then(async res=>{


                await db(updateSql, [res.data.name, it.tag]).then(result=>{
                })
            })
        }
    })
}
func()