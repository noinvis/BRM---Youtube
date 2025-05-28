const sidebarEl = document.querySelector(".sidebar")
const voiceEl = document.querySelector(".voice__click")
const addEl = document.querySelector(".add__click")


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


let offset = 53;

const inc = function(){
    offset++;
    document.querySelector(".btn__text").innerHTML = offset
}