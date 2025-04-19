const usertab=document.querySelector("[data-userweather]");
const searchtab=document.querySelector("[data-searchweather]");
const grantlocation=document.querySelector(".grant location-container");
const formcontainer=document.querySelector(".form-container");

const grantAccesscontainer=document.querySelector(".grant location-container");
const searchform=document.querySelector(".form-container");
const loadingscreen=document.querySelector(".loading-container");
const userinfocontainer=document.querySelector(".user-information-container");

//intialy variable need

let currenttab=usertab;
const API_KEY="d1845658f92b31c64bd94f06f7188c9c";
currenttab.classList.add("current-tab");

 function switchtab(clickedtab){

    if(clickedtab!=currenttab){
        currenttab.classList.remove("current-tab");
        currenttab==clickedtab;
        currenttab.classList.add("clicked-tab");
    }

 }

usertab.addEventListener("click",()=>{
    switchtab(usertab);
});
searchtab.addEventListener("click",()=>{
    switchtab(searchtab);
});

