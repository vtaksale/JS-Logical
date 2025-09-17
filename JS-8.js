let c = { test:'abc'}
let d;
d = c;
c.test = 'hello'

console.log(d.test)