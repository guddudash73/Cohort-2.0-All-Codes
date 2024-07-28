let i = 0;
setTimeout(
  (run = () => {
    console.log(i++);
    setTimeout(run, 1000);
  }),
  10000
);
