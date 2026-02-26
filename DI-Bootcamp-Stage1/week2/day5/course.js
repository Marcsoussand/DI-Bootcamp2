let add = (function () {
  let counter = 0;
  function calculus() {
      counter += 1; 
      return counter
  }
  return calculus
})();

console.log(add());
console.log(add());
console.log(add());


const a = 2;
if (true) {
    const a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);
