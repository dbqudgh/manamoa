const {
    dialog
  } = require('electron').remote;

  

const input = document.querySelector('.viewPath')




function inputClick(){
    
    const value = dialog.showOpenDialog({
        properties: ['openDirectory']
      })

      value.then(result => {

        console.log(result.filePaths)
        

      }).catch(err => {
        alert('잘못된경로')
        console.log(err)
      })

}

input.addEventListener('click',inputClick)

