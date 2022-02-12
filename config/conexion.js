
require('dotenv').config()
const conexion3 = {
    user:'sa',
    password:'123',
    database:'DBMATSPEN',
    server:'SRV-BONILLA',
     options:{
         trustedconnection:false,
         enableArithAbort:true,
         encrypt:false
     }
}

const conexion2 = {
    user:'sa',
    password:'server*2019*',
    database:'DBMATSPEN',
    //server:'SERVER-ERP',
    server:'192.168.1.95',
     options:{
         trustedconnection:false,
         enableArithAbort:true,
         encrypt:false
     }
}

const conexion = {
    user:'root',
    password:'123456789',
    database:'db_soluciones',
    server:'Srv_Soluciones',
     options:{
         trustedconnection:false,
         enableArithAbort:true,
         encrypt:false
     }
}

module.exports =conexion;