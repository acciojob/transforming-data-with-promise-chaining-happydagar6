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

  delay(2000, number)

    .then(num => {
      output.textContent = `Result: ${num}`;
      return delay(2000, num * 2);
    })

    .then(num => {
      output.textContent = `Result: ${num}`;
      return delay(1000, num - 3);
    })

    .then(num => {
      output.textContent = `Result: ${num}`;
      return delay(1000, num / 2);
    })

    .then(num => {
      const final = num + 10;
      output.textContent = `Final Result: ${final}`;
    });

});
