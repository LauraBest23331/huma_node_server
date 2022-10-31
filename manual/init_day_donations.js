const express = require("express");
const Router = express.Router()
const axios = require('axios');
const { getClan } = require('../api/clan');
const {db} = require('../util/db')

let CLAN_TAGS= ['LYGV880Y', '2PURL2U2', 'G2R8CYPR', 'CLJYPJQR']
const ROOT_URL = "https://api.clashofclans.com/v1"
let map = new Map();
map.set("leader", '首领')
map.set("coLeader", '副首领')
map.set('admin', '长老')
map.set('member', '成员')


func = async ()=>{

let allMember = []
let count = 0
let task = []
for (item of CLAN_TAGS) {
    await getClan(item)
    .then(response => {
        for (let item of response.data.memberList) {
        
            let member = {
                tag : item.tag,
                name : item.name,
                role : map.get(item.role),
                donations : item.donations,
                clan : count,
                donationsReceived: item.donationsReceived,
                expLevel:item.expLevel
            }
            allMember.push(member)
        }
        count++
    }).catch(error => {
        console.log(error);
    })
}
const sql = 'insert into clan_info(tag, name, role, donations, donationsReceived, expLevel, clan)' +
    ' values(?, ?, ?, ?, ?, ?, ?)'

await db('delete from clan_info')

for (let item of allMember) {
    await db(sql, [item.tag, item.name, item.role, item.donations
        , item.donationsReceived, item.expLevel, item.clan])
}


}
func()