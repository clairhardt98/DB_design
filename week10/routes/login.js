import express from "express";
import { selectSql } from "../database/sql"

const router = express.Router();

router.get('/',(req,res)=>{
    res.render('login');
});

router.post('/',async(req,res)=>{
    const vars = req.body;
    const users = await selectSql.getUsers();
    let whoAmI = '';
    let checkLogin = false;//whoAmI와 checkLogin변수를 선언하여 각각 빈 문자열과 false로 선언
    
    users.map((user) => {
        console.log(user.Id);
        if(vars.id === user.Id && vars.password === user.Password){
            checkLogin = true;//id, pw가 맞다면 checkLogin을 true로 변경
            if (vars.id === 'admin'){
                whoAmI = 'admin';//id가 admin이라면 whoAmI를 admin으로 설정
            } else {
                whoAmI = 'users';//id가 admin이 아니라면 whoAmI를 users으로 설정
            }
        }
    })

    console.log('whoAmI: ',whoAmI);

    if (checkLogin && whoAmI === 'admin'){
        res.redirect('/delete');
    } else if(checkLogin && whoAmI === 'users'){
        res.redirect('/select');//admin이면 delete로 redirect, 아니라면 select로 redirect
    } else {
        console.log('login failed!');
        res.send("<script>alert('로그인에 실패했습니다.'); location.href='/';</script>");
    }
})
//home.hbs에서 얻어온 데이터를 data변수에 입력, sql.js의 insert함수에 넘겨줌
module.exports=router;