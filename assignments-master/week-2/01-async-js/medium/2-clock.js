setInterval(() => {
  const date = new Date();
  let hr = date.getHours().toString().padStart(2, 0);
  let min = date.getMinutes().toString().padStart(2, 0);
  let sec = date.getSeconds().toString().padStart(2, 0);

  //   console.log(`${hr}:${min}::${sec}`);

  if (hr >= 12) {
    console.log(`${hr}:${min}::${sec}  PM`);
  } else {
    console.log(`${hr}:${min}::${sec}  AM`);
  }
}, 1000);
