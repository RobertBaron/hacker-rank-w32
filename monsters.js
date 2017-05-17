// O(t*n)


const getMaxMonsters = (n, hit, t, h) => {

let r = 0;
let removed = 0;
  while(t) {
    let min = h[0];
    let startI = 0;
    let minI = startI;

    for(let i = 0;i < h.length; i++) {
      if(h[i] < min && h[i] > 0){
        min = h[i];
        minI = i;
      }
    }

    h[minI] -= hit;

    if(h[minI] <= 0){
      removed++;
    }

    t--;
  }

  return removed;
}


var start, finish;
start = new Date();
console.log(getMaxMonsters(7, 8, 6, '16 19 7 11 23 8 16'.split(' ').map((n)=> parseInt(n))));
finish = new Date();
console.log("Operation took " + (finish.getTime() - start.getTime()) + " ms");