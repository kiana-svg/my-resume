const projectCards = document.querySelectorAll(".projectcard");
projectCards.forEach(function (card) {
  card.addEventListener("click", function () {
    card.classList.toggle("active");
  });
});
