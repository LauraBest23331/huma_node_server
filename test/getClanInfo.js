const express = require("express");
const Router = express.Router()
const axios = require('axios');
const { getClan } = require('../api/clan');


getClan('LYGV880Y').then(res=>{
    console.log(res);
})
