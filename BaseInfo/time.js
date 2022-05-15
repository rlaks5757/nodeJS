// const 아이디 = setTimeout("콜백 함수", "밀리초"); : 주어진 밀리초 이후에 콜백 함수를 실행함
// const 아이디 = setInterval("콜백 함수", "밀리초"); : 주어진 밀리초마다 콜백 함수를 실행함
// const 아이디 = setImmediate("콜백 함수"); : 콜백 함수를 즉시 실행함

//상기 타이머 함수들은 모두 아이디를 반환하며 아래의 메서드를 사용하여 아이디를 사용하여 타이머를 취소할 수 있음

// clearTimeout(아이디);
// clearInterval(아이디);
// clearImmediate(아이디);

// example;

const timeOut = setTimeout(() => {
  console.log("시간이 지났습니다.");
}, 1000);

const interval = setInterval(() => {
  console.log("시간마다 반복합니다.");
}, 1000);

const timeOut2 = setTimeout(() => {
  console.log("안될껄");
}, 3000);

setTimeout(() => {
  clearTimeout(timeOut2);
  clearInterval(interval);
}, 2500);

const immediate = setImmediate(() => {
  console.log("즉시 실행");
});

const immediate2 = setImmediate(() => {
  console.log("안될껄2");
});

clearImmediate(immediate2);

//setImmediate(콜백)과 setTimeout(콜백, 0)
//setImmediate(콜백)과 setTimeout(콜백, 0)에 담긴 콜백 함수는 이벤트 루프를 거친 뒤 즉시 실행됩니다.
// 특수한 경우에 setImmediate는 setTimeout(콜백, 0)보디 먼저 실행됩니다. (파일 시스템 접근, 네트워킹 같은 I/O 작업의 콜백 함수 안에서 타이머를 호출하는 경우)
// 하지만 setImmediate(콜백)가 setTimeout(콜백, 0)보다 먼저 실행하지 않으므로 가급적 setTimeout(콜백, 0)를 사용하지 마십시오.
