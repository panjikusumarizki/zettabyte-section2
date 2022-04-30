/**
 * Direction:
 * Find all fields that have different value & must can detect all field dynamically
 *
 * Expected Result:
 * ['firstName', 'lastName']
 *
 */
const data = [
  { firstName: 'Adi', lastName: 'Nugroho', age: 25 },
  { firstName: 'Deddy', lastName: 'Dores', age: 25 },
];

function result(data) {
  // your code here
  const a = data[0];
  const b = data[1];

  let unMatchVal = {};
  Object.keys(a).forEach(i => {
    if (a[i] !== b[i]) {
      unMatchVal[i] = a[i]
    }
  })
  return Object.keys(unMatchVal);
}

console.log(result(data));
