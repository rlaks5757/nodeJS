const string = "Hello World";
const num = 10;
const bool = true;
const obj = {
  outside: {
    inside: {
      key: "value",
    },
  },
};
console.time("전체 시간");
//console.tileEnd(레이블)과 대응되어 같은 레이블을 가진 time과 timeEnd 사이의 시간을 측정함.
console.time("시간 측정");
for (i = 0; i < 1000000; i++) {}
console.timeEnd("시간 측정");
// 시간 측정: 14.406ms

console.log("구분을 위한 로그입니다.");
//평범한 로그를 콘솔에 표시함. 여러 내용을 동시에 표시가능함.

console.error("에러 메시지입니다.");
//에러를 콘솔에 표시함

console.table([
  { name: "John", age: 20 },
  { name: "Jane", age: 30 },
]);
// 배열 요소로 객체 리터널을 넣으면 객체 속성들이 테이블 형식으로 아래와 같이 표시됨.
// ┌─────────┬────────┬─────┐
// │ (index) │  name  │ age │
// ├─────────┼────────┼─────┤
// │    0    │ 'John' │ 20  │
// │    1    │ 'Jane' │ 30  │
// └─────────┴────────┴─────┘

console.dir(obj, { colors: false, depth: 2 });
console.dir(obj, { colors: true, depth: 1 });
//console.dir(객체, 옵션)
//객체를 콘솔에 표시함. 첫 번쨰 인수로 표시할 객체를 널고 두 번째 인수로 옵션을 넣을 수 있음.
//옵션의 colors는 색상을 사용할지 여부를 결정함. depth는 객체의 깊이를 설정함.(몇 단계까지 보여줄지 결정하며 기본값은 2임.)
// { outside: { inside: { key: 'value' } } }
// { outside: { inside: [Object] } }

const b = () => {
  console.trace("error trace");
};

const a = () => {
  b();
};

a();
// console.trace(레이블) 에러가 어디서 발생했는지 아래와 같이 추적할 수 있게 해줌.
// 일반적으로는 에러의 위치를 알려주어 사용하지않지만 에러의 위치가 나오지 않으면 사용함.
// Trace: error trace
//     at b (/Users/gimgiman/Desktop/NodeJs/Practice/console.js:45:11)
//     at a (/Users/gimgiman/Desktop/NodeJs/Practice/console.js:49:3)
//     at Object.<anonymous> (/Users/gimgiman/Desktop/NodeJs/Practice/console.js:52:1)

console.timeEnd("전체 시간");
