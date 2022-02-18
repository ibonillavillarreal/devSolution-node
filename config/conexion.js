
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

const conexion4 = {
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

const conexion = {
    user:'uhn5pbh5istumqfb',
    password:'7ljtMlsD8ALg0I7ppvJu',
    database:'b16ymttopulg8hncsmky',
    server:'b16ymttopulg8hncsmky-mysql.services.clever-cloud.com',
     options:{
         trustedconnection:false,
         enableArithAbort:true,
         encrypt:false
     }
}


module.exports =conexion;