const scroller = document.querySelector("#image");

window.addEventListener("scroll", () => {
  let y = scroller.getBoundingClientRect().top;
  let int = window.innerHeight
  console.log(int);
  console.log(y);
  let a = int - y 
  let z = a/30
  scroller.style.transform = `scale(${z/100 + 1})`
});