// 배열
let a = 1;
let b = 2;
let c = 3;
let d = 4;

// 자료구조(데이터 효율적으로 저장) 배열
//동일한 데이터를 연속적인 메모리에 저장한 구조
const aryNum = [1, 2, 3, 4];
const datas = [1, 2, undefined, null, a, "hello"];
// 다른 언어와 달리 전혀 다른 데이터를 저장할 수 있다.
aryNum[4] = 5;
aryNum[10] = 9;
console.log(aryNum); //[ 1, 2, 3, 4, 5, <5 empty items>, 9 ]
aryNum.push(10); // 자료구조 스택
console.log(aryNum); //[ 1, 2, 3, 4, 5, <5 empty items>, 9, 10 ]

aryNum.pop(); /// 맨 뒤에 있는 데이터 삭제
aryNum.pop(); /// 맨 뒤에 있는 데이터 삭제
aryNum.pop(); /// 맨 뒤에 있는 데이터 삭제
console.log(aryNum); //[ 1, 2, 3, 4, 5, <4 empty items> ]

// 스택 : 컵 위로 데이터 삽입, 위로 데이터 삭제 (LAST INPUT LAST OUT : LILO)
// 큐 : (FIRST INPUT FIRST OUT : FIFO)

aryNum[4] = "STRING";
console.log(aryNum); // [ 1, 2, 3, 4, 'STRING', <4 empty items> ]
