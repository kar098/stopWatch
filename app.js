console.log('working');
let display=document.querySelector('.display-time');
let int=null;
let msec=0;
let sec=0;
let min=0;
let hour=0;
document.querySelector('.btn-start').addEventListener('click',()=>{
   if (int !==null){
     clearInterval(int);
     console.log(int);
  }
  int= setInterval(displayFun,10);
})
function displayFun(){
    msec+=10;
    if(msec===1000){
msec=0;
sec++;

    }
    if(sec===60){
        sec=0;
        min++;
    }
    if(min===60){
        min=0;
        hour++;
    }
    let hr=hour>10?hour:'0'+hour;
    let minute=min>10?min:'0'+min;
    let second=sec>10?sec:'0'+sec;
    let msecond=msec>10?msec:'00'+msec;

    display.innerHTML=`${hr}:${minute}:${second}:${msecond}`;
}
document.querySelector('.btn-pause').addEventListener('click',()=>{
    clearInterval(int);
})
document.querySelector('.btn-restart').addEventListener('click',()=>{
    clearInterval(int);
    msec=0;
    sec=0;
    min=0;
    hour=0;
    display.innerHTML='00:00:00:000';
})