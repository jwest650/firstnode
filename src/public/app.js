const bookContainer = document.querySelector(".books");
const body = document.querySelector("body");

const url = "http://localhost:3000/books";
fetch(url)
    .then((res) => res.json())
    .then((data) => {
        displayBooks(data);
    });

function displayBooks(books) {
    books.map(({ title, image, desc, price }) => {
        let div = document.createElement("div");
        let img = document.createElement("img");
        let title1 = document.createElement("h5");
        let desc1 = document.createElement("p");
        let btn = document.createElement("button");
        let pr = document.createElement("p");
        img.src = image;
        title1.textContent = title;
        desc1.textContent = desc;
        btn.textContent = "add to cart";
        btn.setAttribute("class", "myclass");
        btn.addEventListener("click", addToCart);
        pr.setAttribute("id", "price");
        pr.textContent = price;
        div.append(img);
        div.append(title1);
        div.append(desc1);
        div.append(pr);
        div.append(btn);
        div.setAttribute("class", "heading");
        bookContainer.append(div);
    });
}
const form = document.querySelector("form");
const addBtn = document.querySelector(".btn");
addBtn.addEventListener("click", addbook);
function addbook() {
    window.location.href = "/addbook";
}

const cartadded = [];
function addToCart(e) {
    cartadded.push(e.target.previousElementSibling.textContent.slice(1));
    document.querySelector(".price").textContent =
        "$" + cartadded.reduce((a, c) => +a + +c, 0).toFixed(2);
    document.querySelector(".total").textContent = cartadded.length;
    cartItems(e);
    gsap.from(".total", { duration: 0.1, y: -100 });
}
const items = document.querySelector(".items");

function cartItems(e) {
    let div = document.createElement("div");

    let title = document.createElement("p");
    let amount = document.createElement("span");
    let remove = document.createElement("span");
    remove.setAttribute("id", "remove");
    div.setAttribute("id", "container");
    title.setAttribute("class", "item-title");

    title.textContent =
        e.target.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
    amount.textContent = e.target.previousElementSibling.textContent;
    remove.textContent = "remove";
    div.append(title);
    div.append(amount);
    div.append(remove);
    items.append(div);
    console.log(
        e.target.previousElementSibling,
        e.target.previousElementSibling.previousElementSibling
            .previousElementSibling
    );
}
gsap.from(".head1", { duration: 2, y: -100, ease: "bounce.out", delay: 0.5 });
gsap.from(".head2", { duration: 2, y: -100, ease: "bounce.out" });
gsap.from(".books ", {
    duration: 2,
    x: -100,
    opacity: 0,
    stagger: 1,
    // scaleX: 0.5,
    ease: "elastic.out(1, 0.3)",
});
gsap.from(".img", {
    duration: 2,
    ease: "bounce",
    y: -10,
    delay: 0.5,
    repeat: -1,
    yoyo: true,
});
