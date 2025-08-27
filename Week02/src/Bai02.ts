function getNumberAfterDelay(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
}

getNumberAfterDelay().then((num) => {
  console.log(num);
});
