import updateUserContent from "./function.js"

let randomUserBtn = document.querySelector("#randomuser");

async function getRandomUser() {
  let response = await fetch("https://randomuser.me/api/");
  let data = await response.json();
  return data.results[0];
}

randomUserBtn.addEventListener("click", async () => {
  let randomUser = await getRandomUser();
  updateUserContent(randomUser);
});
