import express from "express";
import { selectSql, deleteSql} from "../database/sql";

const router = express.Router();


router.get('/',async(req,res)=>{
    const department = await selectSql.getDepartment();
    res.render('delete', {
        title: "삭제 기능",
        department
    })//delete로 redirect했을 때, "삭제 기능"을 출력
});



router.post('/',async (req,res)=>{
    console.log('delete router: ',req.body.delBtn);

    const data = {
        Dname: req.body.delBtn,
    };//department 테이블의 dname 갱신
    await deleteSql.deleteDepartment(data);

    res.redirect('/delete');
});//삭제 버튼이 눌렸을 경우 해당 번호를 Dnumber로 초기화, deleteDepartment로 넘겨줌

module.exports = router;