//데이터 타입을 특별히 처리하지 않음
//typescript
let num = 10;
num = "kim"; // 오류 아님 자동형변환. 숫자를 저장했던 공간이 문자를 저장하는 공간으로 변한다.

// 그룹 데이터 : 함수, 배열, 객체, 심볼, 클래스
// 낱개 데이터 :숫자(실수), 문자열, true, false, undefined, Null, NaN

num = 20; // 20.0으로 저장
let tel1 = "010-2345-5678"; //문자열 처리, 기본 문자, 계산되지 않는 숫자
let tel2 = "010-2345-5678"; //"", '' 로 묶어 표현

//template literal(임시문자열) : `(백틱) 문자열
let tag1 = '<input type="text" />' + tel1; // 큰따옴표나 작은따옴표는 + 처리를 해야한다.
let tag2 = "<input type='text' />" + tel2;
let tag3 = `<input type='text' />
    줄바꿈처리 가능
    변수처리 ${tel1}
    `; // `할때는 변수처리를 한다.

    console.log(tag1);
    console.log(tag2);
    console.log(tag3);

    let boolVariable = false; //"", ', ` 문자열이 아니다.
    console.log(boolVariable);

    let ano;
    console.log(ano); // undefind // 아무값도 저장되지 않았다. 값을 저장하지 않았다. 값을 정의하지 않았다. // 연산 처리를 못함

    let nullData = null;
    // null 공백과 같은 빈값 : 비어있는 공간의 뜻

    console.log(ano + nullData); // NaN (Not a Number)