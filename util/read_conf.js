var fs = require('fs');

//读取配置文件，变量config的类型是Object类型

//修改配置文件
// //将修改后的配置写入文件前需要先转成json字符串格式

    
// }); 
 
function getConf() {
    let rawdata = fs.readFileSync('./conf/config.json');
    let student = JSON.parse(rawdata);
    return student
}
async function  setConf(confObj) {
    var jsonstr = JSON.stringify(confObj)

    //将修改后的内容写入文件
    await fs.writeFile('./conf/config.json', jsonstr, function(err) {
    if (err) {
        console.error(err);
        return false
    }else{
        return true
    }})
}
module.exports = {
    getConf,
    setConf
}