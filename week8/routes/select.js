import express from "express";
import {selectSql} from "../database/sql";

const router = express.Router();

router.get('/',async function(req,res){
    const employee = await selectSql.getEmployee();
    const department = await selectSql.getDepartment();//employee와 department가 각각 getEmployee, getDepartment함수를 호출하도록 선언

    res.render('select', {
        title: '직원 테이블',
        title2: '부서 테이블',
        employee,
        department
    });//웹페이지에 현재 테이블 상태 출력
});

module.exports=router;