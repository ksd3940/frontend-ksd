// 첫 번째 매개변수는 체중, 두 번째 매개변수는 키여야 합니다.

/* 만약 내 체중이 65kg이고 키가 1.8m이라면,
   다음과 같이 함수를 호출할 수 있어야 합니다:

   var bmi = bmiCalculator(65, 1.8);

   bmi는 소수점 이하를 반올림하여 정수로 표시될 때 20이 되어야 합니다. 
*/

function bmiCalculator (weight, height) {
  var bmi = weight / (height * height)
  return bmi;
}

var bmi = bmiCalculator(65, 1.8);
console.log(bmi);