const logoutbtn = document.querySelector(".ecors-button-signout");
const dialog = document.querySelector('.ecors-dialog');
const exitButton = document.querySelector('.ecors-button-dialog');
const message  = document.querySelector('.ecors-dialog-message');

function exit() {
//   const redirect = window.location.origin + '/intproj25/or2/itb-ecors/';
  const redirect = './index.html'
  window.location.href = redirect;
}

function callModal(){
    // dialog.style.display = 'inline-block';
    dialog.showModal();
}

window.addEventListener('keydown', (event)=>{
    if (event.key === 'Escape'){
        dialog.close(); 
        exit()
    }
}) 

exitButton.addEventListener('click', ()=> {
    dialog.close(); 
    exit() 
})

document.addEventListener('DOMContentLoaded', ()=> {
    callModal()
})