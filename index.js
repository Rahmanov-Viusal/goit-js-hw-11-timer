const secs = document.querySelector('[data-value="secs"]');

let date = new Date('Aug 6 2021 19:19:00');
let textTimer = "это таймер отсчитывает времья до конца акции"
function counts(){
    let now = new Date();
    gap = date - now;
    console.log(gap)
    let days = Math.floor(gap / 1000 / 60 / 60 / 24);
    let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
    let minute = Math.floor(gap / 1000 / 60 ) % 60;
    let seconds = Math.floor(gap / 1000) % 60;


    
if(gap < 0){
    document.getElementById('timer-1').innerText =   `${textTimer}`;;
    stopTimer();
}else{
    document.querySelector('[data-value="days"]').innerText = days;
    document.querySelector('[data-value="hours"]').innerText  = hours;
    document.querySelector('[data-value="mins"]').innerText  = minute;
    secs.innerText  = seconds;
}};

const startTimer = setInterval(counts, 1000);

// function stopTimer(){
//     clearSetInterval(startTimer)
//     console.log()
// }
function stopTimer(){
    clearInterval(startTimer)

}