const clock = document.querySelector("#clock");

//1. 매 초마다 hour, minute, second를 불러와서 자리에 할당하는 함수 만들기.

function clockHandler() {
    const date = new Date();

    const hour = String(date.getHours());
    const minute = String(date.getMinutes());
    const second = String(date.getSeconds());

    clock.innerText = `${hour.padStart(2, "0")} : ${minute.padStart(2, "0")} : ${second.padStart(2, "0")}`;
};

clockHandler();
setInterval(clockHandler, 1000);