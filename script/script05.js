// 객체
// 속성와 값이 쌍으로 이루어진 데이터 그룹

const name = "홍길동";
const tel = "010-3456-7899";
const email = "hong@naver.com";

const hong ={
    name: "홍길동",
    tel: "010-3456-7899",
    email: "hong@naver.com",
};

const park ={
    name: "박길동",
    tel: "010-0988-4589",
    email: "park@naver.com",
};

console.log(name);
console.log(hong, park);
console.log(park.name);
console.log(park.tel);
console.log(park.email);

park.age = 30;
console.log(park); // { name: '박길동', tel: '010-0988-4589', email: 'park@naver.com', age: 30 }

console.log(park.address);
park.address = "마포";
console.log(park);

//배열 순서 있음
const aryNum = [1, 2, 3, 4];
//객체 순서 없음
//속성과 값이 쌍으로 이루어진 데이터 그룹

//반복처리가 가능 : 이터러블