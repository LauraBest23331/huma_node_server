const mysql = require('mysql')

const HUAWEI_HOST = '124.71.20.246'
const HONGKONG_HOST = '119.8.123.19'


const config = {
    host: 'localhost',
    database: 'huma',
    user: 'vhgyhe',
    password: 'Laura58662'
}

// [], {}, [{}, id]
exports.db = (sql, sqlParams) => {
    sqlParams = sqlParams || []
    // sqlParams = sqlParams == null ? [] : sqlParams
    return new Promise((resolve, reject) => {
        const pool = mysql.createPool(config)
        pool.getConnection((err, conn) => {
            if (!err) {
                conn.query(sql, sqlParams, (e, results) => {
                    if (!e) {
                        resolve(results)
                        conn.destroy() 
                    } else {
                        reject(e)
                    }
                })
            } else {
                conn.destroy() 

                reject(err)
            }
           
        })
    })
}

//l8lMrGivIveFmroR
//debian-sys-maint
/**
 * create database huma;
 * 创建mysql数据库用户可以远程访问
 * CREATE USER 'vhgyhe'@'%' IDENTIFIED BY 'Laura58662';
 * 把数据库授权给该用户
 * grant all privileges on huma.* to vhgyhe;;
 *  CREATE TABLE huma.recode (
	word varchar(30) NOT NULL,
	id INT auto_increment NOT NULL,
	code varchar(100) NOT NULL,
	CONSTRAINT recode_PK PRIMARY KEY (id)
)
    ENGINE=InnoDB
    DEFAULT CHARSET=utf8
    COLLATE=utf8_general_ci;
    创建user表
    CREATE TABLE huma.users (
	account varchar(100) NOT NULL,
	passwd varchar(100) NULL,
	uname varchar(100) NULL,
	score INT NULL,
	CONSTRAINT users_PK PRIMARY KEY (account)
)
    ENGINE=InnoDB
    DEFAULT CHARSET=utf8
    COLLATE=utf8_general_ci;

 */


//CREATE USER 'huma'@'%' IDENTIFIED BY 'test1'