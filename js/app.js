let rock= document.getElementById('rock')
let paper= document.getElementById('paper')
let scissor= document.getElementById('scissor')
let playerPoints=0
let cpuPoints=0
let drawPoints=0

rock.addEventListener('click', rockEvent),
paper.addEventListener('click', paperEvent),
scissor.addEventListener('click', scissorEvent);

function rockEvent() {
    resultado='rock'
    return cpuEvent(resultado)
}
function paperEvent() {
    resultado='paper'
    return cpuEvent(resultado)
}
function scissorEvent() {
    resultado='scissor'
    return cpuEvent(resultado)
}
function cpuEvent() {
    const options = ["rock", "paper", "scissor"]
    const cpu= options[Math.floor(Math.random() * options.length)]
    if (resultado === cpu ) {
        drawPoints ++;
        document.getElementById('drawScore').innerHTML = drawPoints;
    } else if (
        (resultado == "scissor" && cpu =="paper" || resultado == "paper" && cpu == "rock" || resultado == "rock" && cpu == "scissor")
    ) { 
        playerPoints ++;
        document.getElementById('playerScore').innerHTML = playerPoints;
    } else {
        cpuPoints++;
        document.getElementById('cpuScore').innerHTML = cpuPoints;
    }
    if (playerPoints=='3') {
        alert("PLAYER WIN")
        document.location.reload()
        return;
    }else if(cpuPoints=='3'){
        alert("CPU WIN")
        document.location.reload()
        return;
    }else if(drawPoints=='3'){
        alert("draw")
        document.location.reload()
        return;
}
}






