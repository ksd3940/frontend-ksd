import React, { useState } from 'react'

//! useState를 사용한 이벤트 처리
//  react의 이벤트 핸들러
//  : onClick과 같이 'camelCase'를 사용
//  : 문자열이 아닌 함수를 이벤트에 전달

//? useState와 이벤트 처리의 결합
//  사용자의 액션(버튼 클릭, 폼 제출 등)에 따라 상태를 변경
//  이벤트 핸들러 내에서 useState 상태 업데이트 함수를 호출하여 상태를 변경

export default function UseState02() {
  const [inputValue, setInputValue] = useState<string>('');
  return (
    <>
    <input type="text" />
    <p>Input Value: {inputValue}</p>
    </>
  )
}
