import mysql from "mysql2";

const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'week10',
        password: 'root',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }//데이터베이스설정
);

const promisePool = pool.promise();

export const selectSql = {
    getUsers : async () => {
        const [rows] = await promisePool.query(`select * from user`);
        return rows
    },//select 쿼리문을 이용하여 모든 user를 출력
    getDepartment : async() => {
        const [rows] = await promisePool.query(`select * from department`)
        return rows
    },//select 쿼리문을 이용하여 모든 department를 출력
}//select 기능


export const deleteSql = {
    deleteDepartment : async(data) => {
        console.log('deleteSql.deleteDepartment: ', data.Dname);
        const sql = `delete from department where Dname = "${data.Dname}"`;
        await promisePool.query(sql);
    },
}//sql문을 이용하여 department 를 delete
