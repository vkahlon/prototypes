// Asyc functions are newer and cleaner syntax for working with async code.
async function hello() {
  return 'Hey Vick!';
}
// not async
// const helloVick = async () => {
//   throw 'A Problem has occured.'
//   return 'hello vick'
// }
// helloVick()
//   .then((data) => {
//     console.log('promised resolved: ' + data)
//   })
//   .catch(err => {
//     console.log("Error occured")
//     console.log(err)
//   })

const login = async (username, password) => {
  if (!username || !password) throw 'Missing login Input'
  if (password === 'asyncIsAwesome') return 'Welcome to the Prototype'
  throw 'Invalid Password'
}
login('asyncPrototype', 'asyncIsAwesome')
  .then (msg => {
      console.log('Logged In')
      console.log(msg)
  })
  .catch (err => {
      console.log('Error')
      console.log(err)
  })
