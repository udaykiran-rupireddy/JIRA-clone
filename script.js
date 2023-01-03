let addBtn = document.querySelector(".add-btn");
let removeBtn = document.querySelector(".remove-btn");
let modalCont = document.querySelector(".modal-cont");
let mainCont = document.querySelector(".main-cont");
let textareaCont = document.querySelector(".textarea-cont");
let allPriorityColors = document.querySelectorAll(".priority-color");
let lockElem = document.querySelector(".ticket-lock");

let colors = ["ligthpink","lightblue","lightgreen","black"];
let modalPriorityColor = colors[colors.length-1];

let addFlag=false;
let removeFlag = false;

//Listener for modal priority coloring
allPriorityColors.forEach((colorElem,idx)=>{
    colorElem.addEventListener("click",(e)=>{
        allPriorityColors.forEach((priorityColorElem, idx)=>{
            priorityColorElem.classList.remove("border");
        })
        colorElem.classList.add("border");

        modalPriorityColor = colorElem.classList[0];
    })
})

addBtn.addEventListener("click",(e)=>{ 
    //Display Modal
    //Generate ticket

    //AddFlag is true -> Modal Display
    //AddFlag is false -> Modal None
    addFlag=!addFlag;
    if(addFlag){
        modalCont.style.display="flex";
    }
    else{
        modalCont.style.display="none";
    }
})

removeBtn.addEventListener("click",(e)=>{
    removeFlag = !removeFlag;
})

modalCont.addEventListener("keydown",(e)=>{
    let key=e.key;
    if(key === "Shift"){
        createTicket(modalPriorityColor, textareaCont.value, shortid());
        modalCont.style.display="none";
        addFlag=false;
        textareaCont.value = "";
    }
})

function createTicket(ticketColor, ticketTask,ticketID){
    let ticketCount = document.createElement("div");
    ticketCount.setAttribute("class","ticket-cont");
    ticketCount.innerHTML = `
        <div class="ticket-color ${ticketColor}"></div>
        <div class="task-area">${ticketTask}</div>
        <div class="ticket-id">${ticketID}</div>
        <div class="ticket-lock">
            <i class="fa-solid fa-lock"></i>
        </div>
    `;
    mainCont.appendChild(ticketCount);

    handleRemoval(ticketCont);
    handleLock(ticketCont);
}

function handleRemoval(ticket){
    //removeFlag -> true -> remove
    if(removeFlag) ticket.remove();
}
function handleLock(ticket){
    let ticketLockElem = ticket.querySelector(".ticket-lock");
    let ticketLock = ticketLockElem.children[0];
    ticketLock.addEventListener("click",(e)=>{
        
    })
}