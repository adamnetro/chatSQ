let btnSend = document.querySelector('.plcSend button');
let inpSend = document.querySelector('.plcSend input');
let chat = document.querySelector('.chat');
let ErrMs = document.querySelector('.ErrMs');

function boxMsg(){
    return `<div class="msUser">${inpSend.value}</div>`
};

function boxMsg2(){
    return `<div class="user">${inpSend.value}</div>`
};

function Err(){
    ErrMs.style.display = "flex"
    setTimeout(() => {
        ErrMs.style.opacity = "1"
    },0)
    setTimeout(() => {
        ErrMs.style.opacity = "0"
    },3000)
    setTimeout(() => {
        ErrMs.style.display = "none"
    },3500)
}

function sendMsg(){
        if(inpSend.value){
            chat.innerHTML += boxMsg();
            inpSend.value = '';
            btnSend.style.opacity = "0.3"
        }else{
            Err();
            ErrMs.children[0].innerHTML = "You have to write something"
        }
}


document.addEventListener('keydown', (e) => {
    if(e.key === "Enter"){
        sendMsg();
    }
    if(e.key === "p"){
        if(inpSend.value){
            chat.innerHTML += boxMsg2();
            inpSend.value = '';
        }else{
            Err();
            ErrMs.children[0].innerHTML = "You have to write something"
        }
    }
})

inpSend.addEventListener('keyup', () => {
    if(inpSend.value){
        btnSend.style.opacity = "1"
    }else{
        btnSend.style.opacity = "0.3"
    }
})