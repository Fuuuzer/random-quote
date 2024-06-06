const btn = document.querySelector(".btn");
const url = "https://api.quotable.io/random";
const quote = document.getElementById("quote");

function fetchQuote(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      quote.innerHTML = `“${data.content}”
      `;
    });
}

btn.addEventListener("click", generateQuote);

function generateQuote() {
  fetchQuote(url);
}
