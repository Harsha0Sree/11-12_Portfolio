let h = 0;
let m = 0;
let s = 0;

function tick() {
  s++;

  if (s === 60) {
    s = 0;
    m++;
  }

  if (m === 60) {
    m = 0;
    h++;
  }

  if (h === 24) {
    h = 0;
  }

  console.clear();
  console.log("hours:", h, "minutes:", m, "seconds:", s);
}

setInterval(tick, 1000);
