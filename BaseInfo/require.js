console.log("require가 가장 위에 오지 않아도 됩니다.");

module.exports = "저를 찾아보세요";

require("./var");

console.log("require.cache");
console.log(require.cache);
// [Object: null prototype] {
//   '/Users/gimgiman/Desktop/NodeJs/Practice/BaseInfo/require.js': Module {
//     id: '.',
//     path: '/Users/gimgiman/Desktop/NodeJs/Practice/BaseInfo',
//     exports: '저를 찾아보세요',
//     filename: '/Users/gimgiman/Desktop/NodeJs/Practice/BaseInfo/require.js',
//     loaded: false,
//     children: [ [Module] ],
//     paths: [
//       '/Users/gimgiman/Desktop/NodeJs/Practice/BaseInfo/node_modules',
//       '/Users/gimgiman/Desktop/NodeJs/Practice/node_modules',
//       '/Users/gimgiman/Desktop/NodeJs/node_modules',
//       '/Users/gimgiman/Desktop/node_modules',
//       '/Users/gimgiman/node_modules',
//       '/Users/node_modules',
//       '/node_modules'
//     ]
//   },
//   '/Users/gimgiman/Desktop/NodeJs/Practice/BaseInfo/var.js': Module {
//     id: '/Users/gimgiman/Desktop/NodeJs/Practice/BaseInfo/var.js',
//     path: '/Users/gimgiman/Desktop/NodeJs/Practice/BaseInfo',
//     exports: { odd: '홀수입니다.', even: '짝수입니다.' },
//     filename: '/Users/gimgiman/Desktop/NodeJs/Practice/BaseInfo/var.js',
//     loaded: true,
//     children: [],
//     paths: [
//       '/Users/gimgiman/Desktop/NodeJs/Practice/BaseInfo/node_modules',
//       '/Users/gimgiman/Desktop/NodeJs/Practice/node_modules',
//       '/Users/gimgiman/Desktop/NodeJs/node_modules',
//       '/Users/gimgiman/Desktop/node_modules',
//       '/Users/gimgiman/node_modules',
//       '/Users/node_modules',
//       '/node_modules'
//     ]
//   }
// }

console.log("require.main");
console.log(require.main === module);
// true
// 현재 파일이 첫 module인지 확인하기 위함
console.log(require.main.filename);
// /Users/gimgiman/Desktop/NodeJs/Practice/BaseInfo/require.js

// 한 번 require한 것은 require.cache에 저장됨. 다음 번 require할 땐 새로 불러오지 않고 require.cache에 있는 것을 재 사용함.
// require.main은 노드 실행 시 첫 모듈을 가르킴. 현재 실행 중인 모듈이 main이됨. (현재는 node require로 실행 했음으로 require.js가 main임)
