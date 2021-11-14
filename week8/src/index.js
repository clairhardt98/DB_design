import express from "express";
import logger from "morgan";
import path from"path";

import homeRouter from "../routes/home";
import updateRouter from "../routes/update";
import selectRouter from "../routes/select";

const PORT = 3000;

const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'hbs')
//views를 사용할 수 있도록 설정
app.use(logger("dev"));

app.use('/',homeRouter);
app.use('/update',updateRouter);
app.use('/select',selectRouter);//routes폴더의 home, update,select 파일에서 router를 import하여 사용

    app.listen(PORT,() => {
        console.log(`Example app listening at http://localhost:${PORT}`)
    })//해당 port에서 접속 가능임을 출력