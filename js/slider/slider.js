const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const itemsList = document.querySelector("#items");
const computedStyles = window.getComputedStyle(itemsList);
const items = document.querySelectorAll(".item");

const minRight = 0;
const itemWidth = getComputedStyle(items[0]).width;
const step = parseInt(itemWidth);
const preShownItems = 300 / step;
const maxRight = (items.length - preShownItems) * step;
let currentRight = 0;

itemsList.style.right = currentRight;

right.addEventListener("click", e => {
  e.preventDefault();
  if (currentRight < maxRight) {
    currentRight += step;
    itemsList.style.right = `${currentRight}px`;
  }
})

left.addEventListener("click", e => {
  e.preventDefault();

  if (currentRight > minRight) {
    currentRight -= step;
    itemsList.style.right = `${currentRight}px`;
  }
})


/*let currentRight = 0;

rightBtn.addEventListener("click", e => {
    e.preventDefault();
    let currentRight = parseInt(getComputedStyle.right)

    if (currentRight < 500) {
        items.style.right = `${currentRight + 100}px`;
    }
    
});

leftBtn.addEventListener("click", e => {
    e.preventDefault();
    let currentRight = parseInt(getComputedStyle.right)

    if (currentRight < 0) {
        items.style.right = `${currentRight - 100}px`;
    }
}); */