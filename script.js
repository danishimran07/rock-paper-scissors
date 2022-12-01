const state = ['paper','scissors','rock'];
const classSelect = ['blue','yellow','red'];
const computer = document.getElementById('computer');
const start = document.querySelectorAll('.start');
const display = document.getElementById('display');
const scoreBoard = document.getElementById('score');
const startMenu = document.querySelector('.middle2');
const mainMenu = document.querySelector('.middle');
const result = document.querySelector('.result');
const restart = document.getElementById('restart');
const user = document.getElementById('user');
const selection = document.getElementById('selection');
const com = document.getElementById('com');
const rules = document.querySelector('.lower-lower');
const closeMenu = document.querySelector('.close');
const rulesMenu = document.querySelector('.rules');








let pointer=[];
let score =0;
  function count(){
     const selector = Math.floor(Math.random()*3);
     computer.attributes[1].value =  `./images/icon-${state[selector]}.svg`;
     com.attributes[1].value = classSelect[selector];

   pointer.push(selector)
}

 
  



 function game (q){
  let point1;
  pointer=[];
  mainMenu.style.display="none";
  startMenu.style.display="block";
  user.attributes[1].value =  `./images/icon-${state[q]}.svg`;
  selection.attributes[1].value = classSelect[q];

  

  

  function stop (){
    clearInterval(id);
    point1 = pointer[pointer.length-1];
    if(q!=point1){ if ((q==0&&point1==2)||(q==1&&point1==0)||(q==2&&point1==1))
                       {
                        display.innerText= 'YOU WON'; score+=1; 
                        console.log(score)
                        
                       }else{ display.innerText= 'YOU LOSE';
                       score>0?score-=1:score }
        }else display.innerText= 'Draw';
        scoreBoard.innerText=score;
        result.style.display="flex";

  }
  const id = setInterval(count,100);
   setTimeout(stop, 1000) ;

}



for (let i=0;i<3; i++){
  start[i].addEventListener('click', ()=> game(i))

}

restart.addEventListener('click', ()=>{mainMenu.style.display="flex"; startMenu.style.display="none"; result.style.display="none";
})

rules.addEventListener('click', ()=>{ rulesMenu.style.display='flex'});
closeMenu.addEventListener('click', ()=>{rulesMenu.style.display='none'});


//0px 0px 0px 10px hsl(216, 67%, 64%),0px 0px 0px 30px hsl(216, 49%, 53%),0px 0px 0px 50px hsl(216, 43%, 48%);s