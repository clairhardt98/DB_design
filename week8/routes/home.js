import express from "express";
import { insertSql, selectSql} from "../database/sql"

const router = express.Router();

router.get('/',(req,res)=>{
    res.render('home');
});

router.post('/',(req,res)=>{
    const vars = req.body;
    const var_length=Object.keys(req.body).length;

    if (var_length > 4){
        const data = {
            Fname: vars.fname,
            Minit: vars.minit,
            Lname: vars.lname,
            Ssn: vars.ssn,
            Bdate: vars.bdate,
            Address: vars.address,
            Sex: vars.sex,
            Salary: vars.salary,
            Super_ssn: vars.super_ssn,
            Dno: vars.dno
        };//employee의 경우 data에 해당하는 값을 담음
        insertSql.setEmployee(data);
    }
    else{
        const data = {
            Dname: vars.dname,
            Dnumber: vars.dnumber,
            Mgr_ssn: vars.mgr_ssn,
            Mgr_start_date: vars.mgr_start_date
        };//department의 경우 data에 해당하는 값을 담음
        insertSql.setDepartment(data);
    }
    res.redirect('/');
})
//home.hbs에서 얻어온 데이터를 data변수에 입력, sql.js의 insert함수에 넘겨줌
module.exports=router;