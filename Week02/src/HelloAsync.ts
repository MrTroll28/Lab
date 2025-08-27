function helloAsync(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello Async");
    }, 2000);
  });
}
helloAsync().then((msg) => {
  console.log(msg);
});
