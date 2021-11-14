import express from "express";
import {selectSql} from "../database/sql";

const router = express.Router();

router.get('/',async function(req,res){
    const department = await selectSql.getDepartment();

    res.render('select', {
        title: 'IT 공대',
        department
    });//select로 redirect됐을 때, "IT 공대"를 탭 이름으로 출력하도록 설정
});

module.exports=router;