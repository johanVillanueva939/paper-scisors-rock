let rock= document.getElementById('rock')
let paper= document.getElementById('paper')
let scissor= document.getElementById('scissor')
let resultado

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
        console.log("empate")
    } else if (
        (resultado == "scissor" && cpu =="paper" || resultado == "paper" && cpu == "rock" || resultado == "rock" && cpu == "scissor")
    ) { 
        console.log('You win!!');
    } else {
        console.log('Cpu win!!');
    }
}






