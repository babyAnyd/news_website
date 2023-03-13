const loginBtn = document.getElementById("login-btn");
const getId = document.querySelectorAll("#btn");
const getRem = document.querySelectorAll("#to-remove");

//set active state
loginBtn.onclick = () => {
  console.log(true);
  loginBtn.classList.toggle("active");
};

//removing class items
for (let i = 0; i < getId.length; i++) {
  for (let j = i; j < getRem.length; j++) {
    console.log(getRem[j]);
    getId[i].onclick = () => {
      console.log(getRem[j].innerText);
      getRem[j].remove();
    };
    break;
  }
}
