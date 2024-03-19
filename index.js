const rate = document.getElementById("rate");
const result = document.getElementById("result");
const card_rating = document.getElementById("card_rating");
const rating = document.getElementById("rating")

const buttons = card_rating.getElementsByTagName("button")
for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", () => {
        rating.innerHTML = buttons[i].innerHTML.trim()
    })
}

const submit = document.getElementById("card_submit")

submit.addEventListener("click", () => {
    rate.style.display = "none";
    result.classList.remove("hidden");
    console.log(rating)
})