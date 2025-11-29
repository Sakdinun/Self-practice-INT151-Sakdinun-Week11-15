const logoutbtn = document.querySelector(".ecors-button-signout");
const dialog = document.querySelector('.ecors-dialog');
const exitButton = document.querySelector('.ecors-button-dialog');
const goBackbtn = document.querySelector('.ecors-button-signout');
const message  = document.querySelector('.ecors-dialog-message');
const dropdownPlans  = document.querySelector('.ecors-dropdown-plan');
const declarebtn = document.querySelector('.ecors-button-declare')
const declareStatus = document.querySelector('.ecors-declared-plan span')
const studyPlans = [
    {
        "id": 1,
        "planCode": "FE",
        "nameEng": "Frontend Developer",
        "nameTh": "นักพัฒนาฟรอนเอนด์"
    },
    {
        "id": 2,
        "planCode": "BE",
        "nameEng": "Backend Developer",
        "nameTh": "นักพัฒนาแบ็กเอนด์"
    },
    {
        "id": 3,
        "planCode": "FS",
        "nameEng": "Full-Stack Developer",
        "nameTh": "นักพัฒนาฟูลสแตก"
    },
    {
        "id": 4,
        "planCode": "AI",
        "nameEng": "AI Developer",
        "nameTh": "นักพัฒนาปัญญาประดิษฐ์"
    },
    {
        "id": 5,
        "planCode": "DS",
        "nameEng": "Data Scientist",
        "nameTh": "นักวิทยาการข้อมูล"
    },
    {
        "id": 6,
        "planCode": "DA",
        "nameEng": "Data Analyst",
        "nameTh": "นักวิเคราะห์ข้อมูล"
    },
    {
        "id": 7,
        "planCode": "DE",
        "nameEng": "Data Engineer",
        "nameTh": "วิศวกรข้อมูล"
    },
    {
        "id": 8,
        "planCode": "DB",
        "nameEng": "Database Administrator",
        "nameTh": "ผู้ดูแลฐานข้อมูล"
    },
    {
        "id": 9,
        "planCode": "UX",
        "nameEng": "UX/UI Designer",
        "nameTh": "นักออกแบบประสบการณ์ของผู้ใช้และส่วนต่อประสาน"
    }
]
// ================================
//         Exiting
// ================================
function exit() {
    const redirect = './index.html'
    window.location.href = redirect;
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
goBackbtn.addEventListener('click', ()=> {
    exit() 
})
// ================================

function callModal(){
    // dialog.style.display = 'inline-block';
    dialog.showModal();
}

function showStudyPlans() {
    studyPlans.forEach((item, index) => {
        const option = document.createElement('option')
        const values = [item.id, item.planCode, item.nameEng, item.nameTh];
        option.textContent = `${item.planCode} - ${item.nameEng}`
        option.value = index+1
        dropdownPlans.appendChild(option)
    });
}

dropdownPlans.addEventListener('change', ()=> {
    if (dropdownPlans.value !== ''){
        declarebtn.style.display = 'inline-block'
        declarebtn.classList.add('plan-selected')
    } else {
        declarebtn.style.display = 'none'
        declarebtn.classList.remove('plan-selected')
    }
})

declarebtn.addEventListener('click', ()=> {
    const selectedId = Number(dropdownPlans.value);
    let selectedPlan = studyPlans.find(item => item.id === selectedId);
    declareStatus.textContent = selectedPlan 
    ? `${selectedPlan.planCode} - ${selectedPlan.nameEng}`
    : ''
})




document.addEventListener('DOMContentLoaded', ()=> {
    showStudyPlans()
})

