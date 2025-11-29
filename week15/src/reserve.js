const logoutbtn = document.querySelector(".ecors-button-signout");
const dialog = document.querySelector('.ecors-dialog');
const exitButton = document.querySelector('.ecors-button-dialog');
const goBackbtn = document.querySelector('.ecors-button-signout');
const message  = document.querySelector('.ecors-dialog-message');
const dropdownPlans  = document.querySelector('.ecors-dropdown-plan');
const declarebtn = document.querySelector('.ecors-button-declare')
const cancelbtn = document.querySelector('.ecors-button-cancel')
const declareStatus = document.querySelector('.ecors-declared-plan span')
const reservationSection = document.querySelector('.reservation')
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
const reservationPeriod = {
    "currentPeriod": {
        "id": 7,
        "semesterId": 3,
        "startDateTime": "2025-11-28T09:00:00.000Z",
        "endDateTime": "2025-12-01T17:00:00.000Z",
        "cumulativeCreditLimit": 12
    },
    "nextPeriod": {
        "id": 8,
        "semesterId": 4,
        "startDateTime": "2026-03-04T09:00:00.000Z",
        "endDateTime": "2026-03-06T18:30:00.000Z",
        "cumulativeCreditLimit": 9
    }
}

const options = {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
  timeZone: 'Asia/Bangkok'
};

const startCurrentTime = new Date(reservationPeriod.currentPeriod.startDateTime).toLocaleString("en-US", options)
const endCurrentTime = new Date(reservationPeriod.currentPeriod.endDateTime).toLocaleString("en-US", options)
const startNextTime = new Date(reservationPeriod.nextPeriod.startDateTime).toLocaleString("en-US", options)
const endNextTime = new Date(reservationPeriod.nextPeriod.endDateTime).toLocaleString("en-US", options)

function showPeriod() {
    const openText = document.createElement('h3')
    const openPeriod = document.createElement('p')
    const nextText = document.createElement('h3')
    const nextPeriod = document.createElement('p')

    openText.textContent = `Reservation is open`
    openPeriod.textContent = `Period: ${startCurrentTime} - ${endCurrentTime}`

    nextText.textContent = `Next reservation period:`
    nextPeriod.textContent = `Period: ${startNextTime} - ${endNextTime}`
    reservationSection.appendChild(openText)
    reservationSection.appendChild(openPeriod)
    reservationSection.appendChild(nextText)
    reservationSection.appendChild(nextPeriod)
    
}
const startCurrentTimeISO = new Date(reservationPeriod.currentPeriod.startDateTime);
const endCurrentTimeISO = new Date(reservationPeriod.currentPeriod.endDateTime);

let now = new Date()
console.log('Now:', now);
console.log('Start:', startCurrentTime);
console.log('End:', endCurrentTime);
const testTime = document.getElementById('test-time').addEventListener(('click'), ()=>{
    const fakeNow = new Date('2025-11-25T00:01:00'); // หรือรูปแบบอื่นที่ JS parse ได้
    console.log('Fake now:', fakeNow);
    if (fakeNow <= startCurrentTimeISO || fakeNow >= endCurrentTimeISO) {
        dialog.showModal();
    }

})







// ================================
//         Exiting
// ================================
function exit() {
    const redirect = './index.html'
    window.location.href = redirect;
}
window.addEventListener('keydown', (event)=>{
    if (event.key === 'Escape' && dialog.open){
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
        option.value = item.id
        dropdownPlans.appendChild(option)
    });
}

dropdownPlans.addEventListener('change', ()=> {
    if (dropdownPlans.value !== ''){
        declarebtn.classList.add('plan-selected')
        declarebtn.disabled = false;
        
    } else {
        declarebtn.classList.remove('plan-selected')
        declarebtn.disabled = true;
        
    }
})

declarebtn.addEventListener('click', ()=> {
    const now = new Date(Date.now()).toLocaleString("th-TH")
    const selectedId = Number(dropdownPlans.value);
    let selectedPlan = studyPlans.find(item => item.id === selectedId);
    declareStatus.textContent = selectedPlan 
    ? `${selectedPlan.planCode} - ${selectedPlan.nameEng} Created at : ${now}`
    : ''
    declarebtn.classList.remove('plan-selected')
    declarebtn.disabled = true;
})

cancelbtn.addEventListener('click', () => {
   declareStatus.textContent =  '' 
   dropdownPlans.value = ''
})






document.addEventListener('DOMContentLoaded', ()=> {
    showStudyPlans()
    showPeriod()
})

