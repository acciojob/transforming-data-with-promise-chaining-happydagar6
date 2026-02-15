const btn = document.getElementById("btn");
const input = document.getElementById("ip");
const output = document.getElementById("output");

btn.addEventListener("click", () => {

  const number = Number(input.value);

  new Promise((resolve) => {
    setTimeout(() => {
      output.textContent = `Result: ${number}`;
      resolve(number);
    }, 2000);
  })

  .then(num => {
    return new Promise(resolve => {
      setTimeout(() => {
        const result = num * 2;
        output.textContent = `Result: ${result}`;
        resolve(result);
      }, 1000);
    });
  })

  .then(num => {
    return new Promise(resolve => {
      setTimeout(() => {
        const result = num - 3;
        output.textContent = `Result: ${result}`;
        resolve(result);
      }, 1000);
    });
  })

  .then(num => {
    return new Promise(resolve => {
      setTimeout(() => {
        const result = num / 2;
        output.textContent = `Result: ${result}`;
        resolve(result);
      }, 1000);
    });
  })

  .then(num => {
    return new Promise(resolve => {
      setTimeout(() => {
        const final = num + 10;
        output.textContent = `Final Result: ${final}`;
        resolve(final);
      }, 1000);
    });
  });

});
