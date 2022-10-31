const axios = require('axios')
const ROOT_URL = "https://api.clashofclans.com/v1"

const KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImNkNTc2MDQzLWE5YTktNDdlMy04NmFkLTIxODJjODIyMGM5YyIsImlhdCI6MTYzMjY0NjEzMSwic3ViIjoiZGV2ZWxvcGVyL2U5ODZiM2ExLTZjOGUtZTFmYS1mNTcyLTkzNDliYzk5MTA4ZCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjExOS44LjEyMy4xOSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.O77aD4kGCDCkCkn9iqgr1jahBOFqDrSsBkiBKOHvWOXG9LjnhAQbnGFW-a9-YA7vUAFy5mkdItwGA0F405-yYw'


exports.getPlayer = (tag)=>{   
    if (tag) {
        tag = tag.replace('#', '')
    }
    return axios.get(ROOT_URL + '/players/%23'+tag , {
        headers: {
            Authorization : "Bearer " + KEY
        }   
    })
}
exports.verifyPlayer = (tag, token)=>{
    if (tag) {
        tag = tag.replace('#', '')
    }
    return axios({
        url : ROOT_URL + '/players/%23' + tag + '/verifytoken',
        method: 'post',
        data:{token : token },
        headers: {
            Authorization : "Bearer " + KEY
        }
    })
}
