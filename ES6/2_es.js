var promiseFn = (ms) => {
  return  new Promise((resolve, reject) => {
  
    setTimeout(() => {
        
    resolve(`done${ms}`)}, ms)
   
});
} ;
// promiseFn(1000)
// .then(data => promiseFn(500))
// .then(data => promiseFn(500))
// .then(data => console.log(data));
// console.log('ok');

// async function asyncDelay() {
//   const data = await promiseFn(2000)
//   console.log(data);
// }
// asyncDelay()
// console.log('ok');
const cityField = "city"

const person = {
  age: 25,
  [cityField] : 'kiyv'
}
console.log(person)
console.log(person.cityField)


// ${array.indexOf(item) + 1}