import './style.css'

function add(a: number, b: number): string {
  return String(a + b);
}
console.log(add(2, 3));
let result: string = add(5, 5);

const bodySelector = document.querySelector('#app')
bodySelector?.append(result);