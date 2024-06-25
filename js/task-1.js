const list = document.querySelectorAll(".item");
console.log(`Number of categories: ${list.length}`);

list.forEach((item) => {
  const title = item.firstElementChild.textContent;
  const elements = item.lastElementChild.children.length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements}`);
});
