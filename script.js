let modebtn = document.querySelector("#btn1");
let currmode = "light";
let body = document.querySelector("body");
let newGamebtn= document.querySelector(".new-btn");
let msgContainer= document.querySelector(".new_container");
let msg=document.querySelector(".winner")
modebtn.addEventListener("click", () => {
    if (currmode === "light") {
        currmode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else if (currmode === "dark") {
        currmode = "nude";
        body.classList.add("nude");
        body.classList.remove("dark");
    } 
    else if (currmode === "nude") {
        currmode = "blue";
        body.classList.add("blue");
        body.classList.remove("nude");
    } 
    else if (currmode === "blue") {
        currmode = "rose";
        body.classList.add("rose");
        body.classList.remove("blue");
    }
    else if (currmode === "rose") {
        currmode = "blueish";
        body.classList.add("blueish");
        body.classList.remove("rose");
    }
    else if (currmode === "blueish") {
        currmode = "cerulian";
        body.classList.add("cerulian");
        body.classList.remove("blueish");
    }   
    else {
        currmode = "light";
        body.classList.add("light");
        body.classList.remove("cerulian");
    }
    console.log(currmode);
});

let boxes=document.querySelectorAll(".box");
let reset_btn=document.querySelector(".reset")
let turn0 = true; // player 0
let winning_pattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [6,7,8],
    [3,4,5],
];

const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

// boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//         console.log("box clicked");
//         box.innerText = turn0 ? "X" : "O"; // Alternates between X and O
//         turn0 = !turn0; // Switch player
//         box.style.pointerEvents = "none"; // Disable further clicks on this box
//     });
// });
//    or

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("box clicked ");
        if(turn0){

            box.innerText="0";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkeWinners();
    });
    
});
const disableBoxes=()=>{
    for(box of boxes){
        box.disabled=true;

    }
};
const enableBoxes=()=>{
    for( box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner = (winner) => {
    msg.innerText = `CONGRATULATIONS, Winner is: ${winner}`;
    msgContainer.classList.remove("hide");
    
};
const checkeWinners= () =>{
    for (let pattern of winning_pattern ){
        
            let position1val= boxes[pattern[0]].innerText;
            let position2val=  boxes[pattern[1]].innerText;
            let position3val =boxes[pattern[2]].innerText;

            if(position1val !="" && position2val!="" && position3val!=""){
                if(position1val===position2val && position2val===position3val){
                    // console.log("winner",position1val); 
                    disableBoxes();
                    showWinner(position1val);
                }
            }
    
    };
    
};

newGamebtn.addEventListener("click",resetGame);
reset_btn.addEventListener("click",resetGame);