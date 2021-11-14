# DB_design

## 3주차 실습
1. STUDENT1 테이블 생성
    <pre>
    <code>
    CREATE TABLE STUDENT1(
        StudentNumber int not null,
        Name varchar(30) not null,
        Class int not null,
        Major varchar(30) not null,
        Date date not null,
        Emain varchar(30) not null
    );
    </code>
    </pre>
2. insert문을 통해 값 입력
    <pre>
    <code>
    insert into student1 values (12123456,"김철수",4,"정보통신공학과","Thu Mar 01 2012 00:00:00 GMT +0900(대한민국표준시)","철수@gmail.com");
    insert into student1 values (12211234,"홍길동",1,"정보통신공학과","Mon Mar 01 2021 00:00:00 GMT +0900(대한민국표준시)","길동@gmail.com");
    </code>
    </pre>

3. select문을 통하여 Name 선택
    > select name from student1;

    |Name|
    |---|
    |김철수|
    |홍길동|

4. select문을 통하여 StudentNumber가 12123456dls 데이터의 Name을 선택
    > select Name from student1 where StudentNumber = 12123456;

    |Name|
    |---|
    |김철수|




## 8주차 실습
1. employee 테이블
    |Fname|Minit|Lname|Ssn|Bdate|Address|Sex|Salary|Super_ssn|Dno|
    |---|---|---|---|---|---|---|---|---|---|
    |김|M|강산|10101010|Sun Oct 10 1999 00:00:00 GMT +0900 (대한민국표준시)|전주|남|20000||2|
    |황|F|형의|11111111|Fri Jan 01 1999 00:00:00 GMT +0900 (대한민국표준시)|수원|여|5000||2|
    |윤|1|우재|12171813|Wed Jan 10 1998 00:00:00 GMT +0900 (대한민국표준시)|인천|남|1000||1|
    |김|F|철수|12345678|Sat Jan 01 2000 00:00:00 GMT +0900 (대한민국표준시)|서울|남|1000||1|
    |유|F|지수|12345789|Sat Jan 01 2000 00:00:00 GMT +0900 (대한민국표준시)|부산|여|1000||3|
2. department 테이블
    |Dname|Dnumber|Mgr_ssn|Mgr_start_date|
    |---|---|---|---|
    |정보통신공학과|0|12171813|Sat Jan 01 2000 00:00:00 GMT +0900 (대한민국표준시)| 
    |컴퓨터공학과|1|12171813|Sat Jan 01 2000 00:00:00 GMT +0900 (대한민국표준시)|
    |전기공학과|2|12171813|Sat Jan 01 2000 00:00:00 GMT +0900 (대한민국표준시)|

3. employee의 salary, department의 Dname 변경 (sql.js)
    <pre>
    <code>
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
    </code>
    </pre>
    - Minit이 "F"인 employee의 salary를 update할 수 있게 작성
    - Dnumber = 1인 department의 Dname을 update할 수 있게 작성


.
.
## 10주차 실습

1. department 테이블
    |Dname|Dnumber|
    |---|---|
    |경영학과|4|
    |경제학과|6|
    |국제통상학과|5|
    |물리학과|8|
    |수학과|7|
    |전기공학과|2|
    |전자공학과|3|
    |정보통신공학과|0|
    |컴퓨터공학과|1|
    |통계학과|9|
    |화학과|10|

2. department의 데이터 제거
    - sql.js의 deleteSql 함수
    <pre>
    <code>
        export const deleteSql = {
        deleteDepartment : async(data) => {
            console.log('deleteSql.deleteDepartment: ', data.Dname);
            const sql = `delete from department where Dname = "${data.Dname}"`;
            await promisePool.query(sql);
        },
    }//sql문을 이용하여 department 를 delete
    </code>
    </pre>
        - where문의 조건에 맞는 Dname을 갖는 요소를 삭제
    - delete.js의 department 제거 코드
    <pre>
    <code>
        router.post('/',async (req,res)=>{
        console.log('delete router: ',req.body.delBtn);

        const data = {
            Dname: req.body.delBtn,
        };//department 테이블의 dname 갱신
        await deleteSql.deleteDepartment(data);

        res.redirect('/delete');
    });//삭제 버튼이 눌렸을 경우 해당 번호를 Dname으로 초기화, deleteDepartment로 넘겨줌
    </code>
    </pre>
        -삭제 버튼이 눌리면 dname을 초기화 한 후 전달
    

## 텍스트 강조
- **데이터베이스** 실습은 재미 ~~없어요~~있어요.