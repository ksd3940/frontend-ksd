//! 비동기 처리(Asynchronous) 프로그래밍

//? 1. 정의
//  : 코드의 실행이 완료될 때까지 기다리지 않고 다음 코드를 실행하는 것
//  : 프로그램의 메인 흐름과 병렬적으로 작업 할 수 있는 프로그래밍 방식
//  : 작업이 완료되면 결과를 받을 수 있다.

//? 2. 특징
//  - 응답성 향상
//  : 사용자의 응답이 블로킹되지 않고, 긴 작업이 백그라운드에서 수행
//  - 별도의 스레드 또는 이벤트 루프를 이용하여 동작하기 때문에
//    작업이 완료될 때까지 대기하지 않아도 됨.

//? 3. 비동기 처리 장단점
//  장점
//  : 병렬 처리와 효율성
//  : 응답성 향상

//  단점
//  : 복잡성 증가
//  : 디버깅 어려움

