// true, false 대용 데이터
// true : 0이 아닌 숫자(음수, 양수), 문자열, 그룹데이터, 함수 등
// flase : 0, undefined, null, NaN

console.log(true);
console.log(!true); // false로 바꿈
console.log("!0 : ", !0); // 0는 원래 false 인데 true로 바꿈
console.log("!-5, !+5 : ", !-5, !+5); // false false
console.log("!!undefined : ", !!undefined); // false