const delayColor = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay)
  })
}

async function colorChange() {
  await delayColor('red', 1000)
  console.log('there')
  await delayColor('blue', 1000)
  console.log('now')
  await delayColor('green', 1000)
  await delayColor('yellow', 1000)
  await delayColor('white', 1000)
  console.log('Finished here')
}

colorChange()
