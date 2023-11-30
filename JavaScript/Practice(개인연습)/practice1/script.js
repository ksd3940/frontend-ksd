//^ function 예제
/* 
? 현재 나이를 입력으로 받아 90세까지 남은 일수, 주수, 월수를 계산하여 해당 정보를 메시지로 출력하는 함수를 만들어야 합니다. 
? 함수는 다음과 같은 메시지를 console.log로 출력해야 합니다.
? "당신은 X일, y주, 그리고 z개월 남았습니다."
? 여기서 x, y, z는 계산된 실제 숫자로 대체됩니다. 문제에서는 1년이 365일, 1주가 52주, 1달이 12달이라고 가정합니다.
? 예를 들어, 현재 나이가 56세인 경우:
? lifeInWeeks(56)
? 예제 출력: "당신은 12410일, 1768주, 그리고 408개월 남았습니다."
*/

function lifeInWeeks(age) {
  /************Don't change the code above************/
  let lifeOver = 90 - age;
  let dayYear = lifeOver * 365;
  let weekYear = lifeOver * 52;
  let monthYear = lifeOver * 12;

  console.log(
    `당신은 ${dayYear} 일, ${weekYear},주 그리고 ${monthYear} 개월 남았습니다.`
  );
  /*************Don't change the code below**********/
}

lifeInWeeks(56);

