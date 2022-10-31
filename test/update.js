var exec = require('child_process').exec;
var cmdStr = 'node';
exec(cmdStr, function(err,stdout,stderr){
    if(err) {
        console.log(stderr);
    } else {
        var data = JSON.parse(stdout);
        console.log(data);
    }
});