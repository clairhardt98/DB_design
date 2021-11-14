import mysql from "mysql2";

const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'week8',
        password: 'root',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }//데이터베이스설정
);

const promisePool = pool.promise();

export const selectSql = {
    getEmployee:async () => {
        const [rows] = await promisePool.query(`select * from employee`);
        console.log(rows)
        return rows
    },
    getDepartment : async() => {
        const [rows] = await promisePool.query(`select * from department`)
        console.log(rows)
        return rows
    },
}//mysql의 select문을 통하여 출력

export const insertSql = {
    setEmployee : async(data) => {
        const sql = `insert into employee values (
            "${data.Fname}", "${data.Minit}", "${data.Lname}", "${data.Ssn}", "${data.Bdate}",
            "${data.Address}", "${data.Sex}", "${data.Salary}", "${data.Super_ssn}", "${data.Dno}" )`;
            await promisePool.query(sql);
        },

    setDepartment : async(data) => {
        const sql = `insert into department values (
            "${data.Dname}", "${data.Dnumber}", "${data.Mgr_ssn}", "${data.Mgr_start_date}" )`;

            await promisePool.query(sql);
    },
}//home.js에서 데이터를 읽어와 mysql에 데이터 입력

export const updateSql = {
    updateEmployee : async(data)=>{
        const sql = `update employee set salary = "${data.Salary}" where Minit = "F"`;
        await promisePool.query(sql);

    },
    updateDepartment : async(data) => {
        const sql = `update department set dname = "${data.Dname}" where Dnumber = 1`;
        await promisePool.query(sql);
    },
}//update.js로부터 업데이트 할 데이터를 가져와 mysql에서 업데이트

