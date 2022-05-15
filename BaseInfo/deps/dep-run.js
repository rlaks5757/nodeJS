const dep1 = require("./dep1");
const dep2 = require("./dep2");

dep1();
dep2();

// require dep1 {}
// require dep2 [Function (anonymous)]
// dep2 [Function (anonymous)]
// dep1 {}
// (node:97264) Warning: Accessing non-existent property 'Symbol(nodejs.util.inspect.custom)' of module exports inside circular dependency
// (Use `node --trace-warnings ...` to show where the warning was created)
// (node:97264) Warning: Accessing non-existent property 'constructor' of module exports inside circular dependency
// (node:97264) Warning: Accessing non-existent property 'Symbol(Symbol.toStringTag)' of module exports inside circular dependency
// (node:97264) Warning: Accessing non-existent property 'Symbol(Symbol.iterator)' of module exports inside circular dependency
// (node:97264) Warning: Accessing non-existent property 'Symbol(nodejs.util.inspect.custom)' of module exports inside circular dependency
// (node:97264) Warning: Accessing non-existent property 'constructor' of module exports inside circular dependency
// (node:97264) Warning: Accessing non-existent property 'Symbol(Symbol.toStringTag)' of module exports inside circular dependency
// (node:97264) Warning: Accessing non-existent property 'Symbol(Symbol.iterator)' of module exports inside circular dependency

// 이러한 현상을 "순환참조" 이라고 하며, 이러한 경우 순환참조되는 대상을 빈 객체로 만듬.
// 이 때, 에러가 발생하지 않고 빈 객체로 변경되므로 예기치 못한 동작이 발생할 수 있음. 따라서 순환 참조가 발생하지 않도록 구조를 잘 잡아야함.
