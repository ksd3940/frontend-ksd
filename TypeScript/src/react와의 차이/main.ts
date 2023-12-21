{
  const number = document.getElementById('number');
  const increase = document.getElementById('increase');
  const decrease = document.getElementById('decrease');

  if (increase && decrease && number) {
    increase.onclick = () => {
      const current = parseInt(number.innerText, 10);
      number.innerText = (current + 1).toString();
    };
    decrease;
  }
}
