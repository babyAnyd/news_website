const loginBtn = document.getElementById("login-btn");
const cardState = document.querySelectorAll("#card-state");
const cardText = document.querySelectorAll(".card-text");
const searchInput = document.getElementById("searchInput");
const cardBtnDelete = document.querySelectorAll("#btn-del");
const check = document.querySelectorAll("#check");
const favorite = document.querySelectorAll("#favorite");

//set active state in login btn
loginBtn.onclick = () => {
  console.log(true);
  loginBtn.classList.toggle("active");
};

//removing news items
cardBtnDelete.forEach((btn) => {
  btn.onclick = () => {
    const card = btn.closest("#card-state");
    card.remove();
  };
});

//search news

searchInput.addEventListener("keyup", function () {
  const inputQuery = this.value.toLowerCase();

  for (let i = 0; i < cardState.length; i++) {
    for (let j = i; j < cardText.length; i++) {
      const itemsText = cardText[i].textContent.toLowerCase();

      if (itemsText.includes(inputQuery)) {
        cardState[i].style.display = "block";
      } else {
        cardState[i].style.display = "none";
      }
      break;
    }
  }
});

//usable state btn trigger

function useFavorite(enableState, setColor) {
  for (let i = 0; i < enableState.length; i++) {
    enableState[i].onclick = () => {
      enableState[i].classList.toggle(setColor);
    };
  }
}

useFavorite(check, "blue");
useFavorite(favorite, "blue");
