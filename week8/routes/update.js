import express from "express";
import { selectSql, updateSql} from "../database/sql";

const router = express.Router();

router.get('/employee',async(req,res)=>{
    const emp_res = await selectSql.getEmployee();
    res.render('updateEmployee', {
        title: "직원 테이블 갱신",
        emp_res
    });//employee 테이블 갱신 출력
});

router.get('/department',async(req,res)=>{
    const dept_res = await selectSql.getDepartment();
    res.render('updateDepartment', {
        title: "부서 테이블 갱신",
        dept_res
    });//department 테이블 갱신 출력
});

router.post('/employee',async (req,res)=>{
    const vars = req.body;
    console.log(vars.salary);

    const data ={
        Salary: vars.salary
    }
    
    await updateSql.updateEmployee(data);

    res.redirect('/select');
});//employee 테이블의 salary 갱신

router.post('/department',async (req,res)=>{
    const vars = req.body;
    console.log(vars.dname);

    const data = {
        Dname: vars.dname
    }//department 테이블의 dname 갱신
    await updateSql.updateDepartment(data);

    res.redirect('/select');
});

module.exports = router;