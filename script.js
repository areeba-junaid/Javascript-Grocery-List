addEventListener("submit", (e) => {
  e.preventDefault();
  let items = document.getElementById("items").value;
  let ul = document.getElementById("list");
  const l = `<li class="list-items">${items} <img class="pic one"  src="images/bin (1).png" alt="no image">
    <img class="pic"></li>`;
  ul.innerHTML += l;
});

let todelete = document.getElementsByClassName("one");
console.log(todelete);
todelete.forEach(
  todelete,
  addEventListener("click", (e) => {
    if (e.target.classList.contains("one")) e.target.parentElement.remove();
  })
);
function Deletion() {
  all_lists = Array.from(document.getElementsByClassName("list-items"));
  all_lists.map((all_lists) => {
    all_lists.remove();
  });
}
