//global variables
let inData = document.getElementsByName('inData');
let spaceBar = document.getElementById('spaceBar');
let enter = document.getElementById('enter');
let btnDelete = document.getElementById('btnDelete');



//Casila
let casilla = document.getElementById('casilla')



//variables temporales 
casillaTemp =""
const sendChar = (evt) =>{
    casillaTemp += evt.target.innerText
    casilla.innerHTML = casillaTemp

}
const addSpace = ()=>{
    casillaTemp += " "
    casilla.innerHTML = casillaTemp
}

const enterFunction = () =>{
    casillaTemp += "\n"
    casilla.innerHTML = casillaTemp
}

const deleteFunction =  () =>{
    casillaTemp = casillaTemp.substring(0,casillaTemp.length-1)
    casilla.innerHTML = casillaTemp
}


//onclick

inData.forEach(element=>{
    element.onclick = (evt) =>{
        sendChar(evt);
    }
})

spaceBar.onclick = ()=>{
    addSpace()
}

enter.onclick = () =>{
    enterFunction()
}

btnDelete.onclick = () =>{
    deleteFunction()
}
