const path = document.querySelector('.path')
const url = document.querySelector('.url')
const portNumber = document.querySelector('.port-number')
const btn = document.querySelector('.btn')
const {main} = require('./lib/core')
const status = document.querySelector('.status')

//local
const PATH_LS = 'toPath';
const PORT_LS = 'toPort';

const loadedToPath = localStorage.getItem(PATH_LS);
const loadedToPORT = localStorage.getItem(PORT_LS)



const AGENT = navigator.userAgent


function pathClick(e) {

  console.log('click')

  const value = dialog.showOpenDialog({
    properties: ['openDirectory']
  })


  value.then(result => {

    console.log(result.filePaths)


    if(result.filePaths.length !== 0){
      
      path.value = result.filePaths

      localStorage.removeItem(PATH_LS);
      localStorage.setItem(PATH_LS, JSON.stringify(path.value));

    }

  }).catch(err => {
    alert('잘못된경로')
    console.log(err)
  })

}




function btnClick(e) {
  
  e.preventDefault()

  if(!(portNumber.value && url.value && path.value && AGENT))
  {
    return
  }

  status.innerText = '잠시만 기다려주세요'

  main(portNumber.value,url.value,path.value,AGENT, (err,Success)=>{
      if(err) {
        status.innerText = err
      }
      if(Success === true){
      }
  })

}



function init() {

  document.addEventListener('DOMContentLoaded', () => {

    if (loadedToPath !== null) {
      path.value = JSON.parse(loadedToPath);
    }
    if (loadedToPORT !== null) {
      portNumber.value = JSON.parse(loadedToPORT)
    }

  })


    path.addEventListener('click', pathClick)

  
  portNumber.addEventListener('change', (e) => {

    localStorage.removeItem(PORT_LS);
    localStorage.setItem(PORT_LS, JSON.stringify(portNumber.value));

  })

  btn.addEventListener('click', btnClick)

}
init()