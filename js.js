const cards_buttons=document.querySelectorAll(".cards_button button");
const cards =document.querySelectorAll(".cards .ca");


const filters=(e)=>{
             document.querySelector(".active").classList.remove("active")
             e.target.classList.add("active");
            
             cards.forEach(card=>{
               card.classList.add("hide");
               if(card.dataset.name=== e.target.dataset.name||e.target.dataset.name==="all")
                              card.classList.remove("hide")
             })
}

cards_buttons.forEach(button=>button.addEventListener("click",filters));