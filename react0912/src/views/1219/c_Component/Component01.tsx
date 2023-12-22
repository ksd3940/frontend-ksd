import React from 'react';
import Profile_Pictures_01 from '../../../assets/images/Profile_Pictures_01.png';
//! 컴포넌트(Component)
// : 사용자 인터페이스(UI)를 구축하는 기본 요소

//! 컴포넌트 사용 방법
//? 1. 컴포넌트 내보내기
//? 2. 함수 정의
//  : react 컴포넌트는 일반 JS 함수와 동일하지만 함수명을 항상 대문자로 시작해야한다.
//? 3. 마크업 추가
//  : src 와 alt 속성을 가진 img 태그를 반환
//  JSX: HTML 처럼 작성되만 JS코드로 분류
//     : JS내에서 마크업을 내장할 수 있게 함.
function Image() {
  //  html 코드 내에서 문법 사용 시
  //  : 중괄호 내에서 사용

  //  자바스크립트 문법 내에서 HTML 코드 작성 시
  //  : 소괄호 내에서 사용
  return (
    <img src={Profile_Pictures_01} alt='아로나1' style={{width: '150px'}} />
  )
}


//? 4. 정의된 컴포넌트 사용
export default function Component01() {
  // 마크업이 한 개인 경우 return 키워드와 동일한 줄에 작성 가능
  return (
  // return 키워드와 동일한 줄에 없는 경우 반드시 () 소괄호로 감싸야 함.
  <div>
    <p>아로나 이미지 컴포넌트 사용</p>
    <Image />
    <Image />
    <Image />
  </div>
  )
}

