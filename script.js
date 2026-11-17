const cards = document.querySelectorAll(".destination-card");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const dots = document.querySelectorAll(".destination-dots span");
let currentIndex = 0;
function showCard(index) {

    cards.forEach((card) => {
        card.classList.remove("active");
    });

    cards[index].classList.add("active");
    dots.forEach((dot) => {
    dot.classList.remove("active");
});

dots[index].classList.add("active");

}
nextBtn.addEventListener("click", () => {
    currentIndex++;

    if (currentIndex >= cards.length) {
        currentIndex = 0;
    }

    showCard(currentIndex);
});
prevBtn.addEventListener("click", () => {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = cards.length - 1;
    }

    showCard(currentIndex);
});
const exploreBtns = document.querySelectorAll(".destination-info button");
exploreBtns.forEach((btn) => {
    btn.addEventListener("click", () => {

        const card = btn.closest(".destination-card");

        const city = card.querySelector("h1").textContent;
        const country = card.querySelector(".country").textContent;
        const place = card.querySelector(".destination-details div:nth-child(3) p").textContent;
        console.log(city, country, place);

        alert(`Discover ${city} in ${country}!
Famous Place: ${place}`);

    });
});
showCard(0);