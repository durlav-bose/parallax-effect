// const printDepth = (graph, source) => {
//   const stack = [ source ];
//   while(stack.length > 0) {
//     const current = stack.pop();
//     console.log('current :>> ', current);
//     for(let neighbour of graph[current]) {
//       stack.push(neighbour);
//     }
//   }
// }

// const printDepthRecursion = (graph, source) => {
//   console.log('source :>> ', source);
//   for(let neighbour of graph[source]) {
//     printDepthRecursion(graph,neighbour);
//   }
// }

// const graph = {
//   a: ['c','b'],
//   b: ['d'],
//   c: ['e'],
//   d: ['f'],
//   e: [],
//   f: []
// }

// printDepth(graph, 'a');

// const changeImageColor = (image,i,j,color) => {

//   let stack = [image[i][j]];
//   console.log('stack :>> ', stack);

//   let arr = {
//     r1: [i-1,j],
//     r2: [i,j-1],
//     r3: [i+1,j],
//     r4: [i,j+1]
//   }

//   // i = arr.r1[0];
//   // j = arr.r1[1];
//   // console.log('i,j :>> ', i,j);

//   while (stack.length > 0) {
//     stack.pop();
//     let x = arr.r1[0];
//     let y = arr.r1[1];
//     if(image[x][y] == image[i][j]) {
//       image[x][y] = color;
//       console.log('image :>> ', image);
//       changeImageColor(image,x,y,color);
//     }
//   }

// }

// const image = [
//   [1,1,1],[1,1,0],[1,0,1]
// ]
// let sr = 1;
// let sc = 1;
// let color = 2;
// changeImageColor(image,sr,sc,color)


// var floodFill = function(image, sr, sc, newColor) {
//   let start = image[sr][sc];
//   image[sr][sc] = newColor;
//   dfs(image, sr, sc, start, newColor);
//   console.log('image :>> ', image);
//   return image;
// };

// function dfs(image, sr, sc, start, newColor) {
//   if (isValid(image, sr-1, sc, start, newColor)) {
//       image[sr-1][sc] = newColor;
//       dfs(image, sr-1, sc, start, newColor);
//   }
//   if (isValid(image, sr+1, sc, start, newColor)) {
//       image[sr+1][sc] = newColor;
//       dfs(image, sr+1, sc, start, newColor);
//   }
//   if (isValid(image, sr, sc-1, start, newColor)) {
//       image[sr][sc-1] = newColor;
//       dfs(image, sr, sc-1, start, newColor);
//   }
//   if (isValid(image, sr, sc+1, start, newColor)) {
//       image[sr][sc+1] = newColor;
//       dfs(image, sr, sc+1, start, newColor);
//   }
// }

// function isValid(image, x, y, startColor, newColor) {
//   if (x >= 0 && x < image.length && y >= 0 && y < image[0].length && image[x][y] === startColor && image[x][y] !== newColor) {
//       return true;
//   } else {
//       return false;
//   }
// }

// const image = [
//   [1,1,1],[1,1,0],[1,0,1]
// ]
// let sr = 1;
// let sc = 1;
// let color = 2;
// floodFill(image,sr,sc,color)




// depthDestination = (graph,start,end) => {
//   let stack = [start];
//   while(stack.length > 0) {
//     let x = stack.pop();
//     if( x == end ) console.log("got it");
//     for(let value of graph[x]) {
//       stack.push(value)
//     }
//   }
// }

// const graph = {
//   f: ["g","i"],
//   g: ["h"],
//   h: [],
//   i: ["g","k"],
//   j: ["i"],
//   k: []
// }

// let src = "f";
// let dst = "k";

// depthDestination(graph,src,dst)



// edges = [
//   ["i","j"],["k","i"],["m","k"],["k","l"],["o","n"]
// ]

// let obj = {}


var aminrootconfig = {
  threshold: 1,
};
  
var cards = document.querySelector('.bg-img-div');

var appearOnScroll = new IntersectionObserver(function(entries,appearOnScroll) {
  entries.forEach(entry => {
    entry.target.classList.toggle('appear', entry.isIntersecting);
    // if(entry.isIntersecting){
    //   appearOnScroll.unobserve(entry.target);
    // }
  })
}, { threshold: 1 , rootMargin: "100px 0px -100px 0px"}); 


  appearOnScroll.observe(cards);


