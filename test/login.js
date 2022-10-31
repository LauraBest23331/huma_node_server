const axios = require('axios')

axios('http://10.120.2.20/eportal/InterFace.do?method=login', {
  "headers": {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "cookie": "EPORTAL_COOKIE_OPERATORPWD=; EPORTAL_AUTO_LAND=; EPORTAL_COOKIE_DOMAIN=false; EPORTAL_COOKIE_SAVEPASSWORD=true; EPORTAL_COOKIE_USERNAME=1815034129; EPORTAL_COOKIE_PASSWORD=2fcaacff085b87e017d1f3884fa3ce9387b5deb82990285a7e14eb6a977908ea45922540d9aab3298d3b1295d71c09fab4a4078fc6a9f8d945de952e01a2adc92bb80b721c9cf40fd6c15b0be428ac3d6c7351f1939109ee33ab2cfe4ceaf65badb89ed64dbad724ce4d7a6326b2f45d3c96b077893882208c91d6af85eb7ff7; EPORTAL_USER_GROUP=%E5%AD%A6%E7%94%9F; EPORTAL_COOKIE_SERVER=; EPORTAL_COOKIE_SERVER_NAME=; JSESSIONID=EA6FB84447FBA3575EBC0EFECBD95578",
    "Referer": "http://10.120.2.20/eportal/index.jsp?wlanuserip=1c2462c11f8603f207977eded8251aab&wlanacname=9ba73f565ad339de&ssid=&nasip=b3f4bb5d65ed76b6d96950ac2be0015a&snmpagentip=&mac=ac88c93b448a73b56bbf681afb6c250a&t=wireless-v2&url=2c0328164651e2b4f13b933ddf36628bea622dedcc302b30&apmac=&nasid=9ba73f565ad339de&vid=93e1896c8b74fdcf&port=69234e479c043b42&nasportid=a4ea9de28cbfe9fc659fd94ce124213517c832d511eec81979dfc8cdd027c9d60649bba6879a9dee",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "userId=1815034129&password=123&service=%25E6%25B5%258B%25E8%25AF%2595&queryString=wlanuserip%253D1c2462c11f8603f207977eded8251aab%2526wlanacname%253D9ba73f565ad339de%2526ssid%253D%2526nasip%253Db3f4bb5d65ed76b6d96950ac2be0015a%2526snmpagentip%253D%2526mac%253Dac88c93b448a73b56bbf681afb6c250a%2526t%253Dwireless-v2%2526url%253D2c0328164651e2b4f13b933ddf36628bea622dedcc302b30%2526apmac%253D%2526nasid%253D9ba73f565ad339de%2526vid%253D93e1896c8b74fdcf%2526port%253D69234e479c043b42%2526nasportid%253Da4ea9de28cbfe9fc659fd94ce124213517c832d511eec81979dfc8cdd027c9d60649bba6879a9dee&operatorPwd=&operatorUserId=&validcode=&passwordEncrypt=false",
  "method": "POST"

}).then(res=>{
	console.log(res.data)
})
