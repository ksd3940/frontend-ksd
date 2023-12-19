/* 리액트 환경설정

! 웹팩(webpack)과 바벨(Babel)

? 웹팩(webpack)
: 모듈(주로 js 파일) 번들러
: bundle(번들러) - 여러 개로 모듈화된 JS 파일을 하나로 합치는 기능의 도구

- 로더(Loader)
: 웹팩은 오직 JS와 JSON으로 구성된 파일만 읽고 변환
: 로더는 다른 유형의 파일(CSS, 이미지 등)을 처리하고 웹팩이 이해할 수 있는 형태로 변환

? 바벨(Babel)
: js 컴파일러, 최신 es6+ 코드를 이전 버전 es5로 변환하여 브라우저 호환성을 개선

! CRA 
: 리액트 기반 프로젝트를 쉽게 설정할 수 있는 환경 구축 도구(보일러 플레이트)
: 복잡한 환경 설정 없이 리액트 프로젝트를 설치

? 리액트를 cra로 설치하기 전 필수 사항
- node.js 설치
- npm 설치
- 코드 IDE 툴(vscode)

? 설치
- cra 홈페이지 > get started > template 설정

npx create-react-app react0912 --template typescript

? cra으로 설치된 react 폴더 구조

*/