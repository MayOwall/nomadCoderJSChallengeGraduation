/*
목표 : 아이디를 입력하고, login버튼을 누르면, 기존의 로그인박스는 사라지고, hello (아이디)가 나타나도록 하기.
*/
const CLASSNAME_HIDDEN = "hidden";
const USERNAME_KEY = "username";

const loginForm = document.querySelector("#loginForm");
const loginText = document.querySelector("#loginText");
const greeting = document.querySelector("#greeting");
const savedUsername = localStorage.getItem(USERNAME_KEY);



function onloginHandler(event) {
  //submit 기본동작 방지  
  event.preventDefault();
  //loginForm 사라지게 만들기
  loginForm.classList.add(CLASSNAME_HIDDEN);
  //username을 localStorage에 저장하기.  
  const username = loginText.value;
  localStorage.setItem(USERNAME_KEY, username);
  //greeting 나타나게 만들기
  showingGreeting();
};

function showingGreeting() {
  greeting.innerText = `Hello, ${savedUsername}!`;
  greeting.classList.remove(CLASSNAME_HIDDEN);
};


if(savedUsername === null) {
  loginForm.classList.remove(CLASSNAME_HIDDEN);
  loginForm.addEventListener("submit", onloginHandler);
} else {
  showingGreeting();
};
