'use strict';
const roll=document.querySelector('.roll');
const dice=document.getElementById('image');
const reset=document.querySelector('.new');
const hold=document.querySelector('.hold');
let rand;
let sum=0;
let diceOneCheck=0;
const img=["dice-1.png","dice-2.png","dice-3.png","dice-4.png","dice-5.png","dice-6.png"];
function switchScore(){
    document.getElementById('left').classList.toggle("disactive");
    document.getElementById('right').classList.toggle("disactive");
    if(diceOneCheck===0){
        document.querySelector('.hold-score').innerHTML=Number(document.querySelector('.hold-score').innerHTML)+sum;
        if(Number(document.querySelector('.hold-score').innerHTML)>=100){
            if(document.getElementById('hold-left').classList.contains('hold-score')){
                document.getElementById('left').classList.add('win');
                setTimeout(function(){
                    alert('Player 1 wins 🎉');
                },500);
            }else{
                document.getElementById('right').classList.add('win');
                setTimeout(function(){
                    alert('Player 2 wins 🎉');
                },500);
            }
            roll.classList.add('deactivate');
            hold.classList.add('deactivate');
        }
    }
    sum=0;
    diceOneCheck=0;
    document.getElementById('hold-left').classList.toggle('hold-score');
    document.getElementById('hold-right').classList.toggle('hold-score');
    document.querySelector('.current-score').innerHTML=sum;
    document.querySelector('.score-left').classList.toggle('current-score');
    document.querySelector('.score-right').classList.toggle('current-score');
}
roll.addEventListener('click',function(){
    rand=Math.floor(Math.random() * (5-0+1))+0;
    sum=sum+(rand+1);
    dice.style.cssText+='animation-name: rollDice; animation-duration: 1s;';
    dice.addEventListener('animationend',function(){
        dice.style.cssText='height: 90px; width: 90px; position: absolute; top: 185px; left: 595px;'
        dice.setAttribute('src',img[rand]);
    })
    setTimeout(function(){
        if(rand===0){
            diceOneCheck=1;
            switchScore();
        }
        else{
            document.querySelector('.current-score').innerHTML=sum;
        }
    },1000);
})
reset.addEventListener('click',function(){
    dice.setAttribute('src',"dice.png");
    roll.classList.remove('deactivate');
    roll.classList.add('activate');
    hold.classList.remove('deactivate');
    hold.classList.add('activate');
    document.getElementById('hold-left').innerHTML=0;
    document.getElementById('hold-right').innerHTML=0;
    document.querySelector('.current-score').innerHTML=0;
    sum=0;
    document.getElementById('left').classList.remove('win');
    document.getElementById('right').classList.remove('win');
})
hold.addEventListener('click',switchScore);