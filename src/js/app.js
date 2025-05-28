const sidebarEl = document.querySelector(".sidebar")
const voiceEl = document.querySelector(".voice__click")
const addEl = document.querySelector(".add__click")
const notificationEl = document.querySelector(".notification__click")
const dotsEl = document.querySelector(".dots__click")
const shareEl = document.querySelector(".share__click")

function showSidebar(){
    sidebarEl.classList.toggle("active")
}
function clickVoice(){
    voiceEl.classList.add("active")
}
function closeVoice(){
    voiceEl.classList.remove("active")
}
function showAdd(){
    addEl.classList.toggle("active")
}
function showNotification(){
    notificationEl.classList.toggle("active")
}
function showProfile(){
    profileEl.classList.toggle("active")
}
function openDots(){
    dotsEl.classList.toggle("active")
}
function shareClick(){
    shareEl.classList.add("active")
}
function shareClick(){
    shareEl.classList.remove("active")
}

let offset = 53;

const inc = function(){
    offset++;
    document.querySelector(".btn__text").innerHTML = offset
}