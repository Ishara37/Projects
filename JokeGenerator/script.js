const jokeBtn = document.getElementById("jokebutton");
const joketext = document.getElementById("joke");

jokeBtn.addEventListener("click", getJoke);

function getJoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json"
    }
  })
  .then(response => response.json())
  .then(data => {
    joketext.textContent = data.joke;
  })
  .catch(error => {
    joketext.textContent = "Oops! Couldn't fetch a joke.";
    console.error("Error:", error);
  });
}
