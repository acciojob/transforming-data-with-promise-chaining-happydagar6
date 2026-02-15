const btn = document.getElementById("btn");
const input = document.getElementById("ip");
const output = document.getElementById("output");

function delay(time, value) {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), time);
  });
}

btn.addEventListener("click", () => {

  let number = Number(input.value);

  // First Promise (2 sec)
  delay(2000, number)

    .then(num => {
      output.textContent = `Result: ${num}`;
      return delay(1000, num * 2);   // 1 sec
    })

    .then(num => {
      output.textContent = `Result: ${num}`;
      return delay(1000, num - 3);   // 1 sec
    })

    .then(num => {
      output.textContent = `Result: ${num}`;
      return delay(1000, num / 2);   // 1 sec
    })

    .then(num => {
      const final = num + 10;
      output.textContent = `Final Result: ${final}`;
    });

});
