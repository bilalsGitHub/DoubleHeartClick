const box = document.querySelector(".box");

box.addEventListener("dblclick", (event) => {
  const x = event.clientX;
  const y = event.clientY;

  const xekseni = event.target.offsetLeft;
  const yekseni = event.target.offsetTop;

  console.log(x);
  console.log(event.target.offsetLeft);

  const a = x - xekseni;
  const b = y - yekseni;

  const heart = document.createElement("i");

  heart.style.left = `${a}px`;
  heart.style.top = `${b}px`;
  heart.classList.add("fas");
  heart.classList.add("fa-heart");
  box.appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, 500);
});
