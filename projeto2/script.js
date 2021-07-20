let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function updateClock(){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getUTCSeconds();
    // - essa função é utilizada para capturar a data e a hora atual.
    // - Date é a classe utilizada para a manipulação de datas (data, hora, minutos, segundos, fuso horário...)

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;
    // - innerHTML permite adicionar um texto "dentro da variável".


    // Relógio analógico 

    let sDeg = ((360 / 60) * second) - 90 ;
    let mDeg = ((360/60) * minute) - 90;
    let hDeg = ((360/12)* hour) - 90;

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
}

function fixZero(time){
/*    if(time>10){
        return '0'+time;
    } else{
        return time;
    } 
*/
    return time < 10 ? `0${time}` : time;
    //Forma resulmida
}
/* - Função criada para corrigir o erro de formatação que ocorre quando o elemento de hora é inferior a 
10 (ex: 15:11:5), então para solucionar o problema sera concatenado um 0 caso o tempo seja menor que 10 */

setInterval(updateClock, 1000);
updateClock();
// - Essa função gera um loop de tempo infinito no intervalo informado.