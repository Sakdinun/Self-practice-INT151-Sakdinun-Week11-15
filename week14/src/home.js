const reserveBtn = document.querySelector('.ecors-button-manage');
const dropdownPlans = document.getElementById('plans-tbody');
const respond = [
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
// Navigation Logic
// ================================
function goReservePage() {
    window.location.href = './reserve.html';
}

// Bind Event Listener
if (reserveBtn) {
    reserveBtn.addEventListener('click', goReservePage);
}

// ================================
// Init Home Page
// ================================
document.addEventListener('DOMContentLoaded', async () => {
    respond.forEach(item => {
        const tr = document.createElement('tr');

        const values = [item.id, item.planCode, item.nameEng, item.nameTh]
        const className = ["ecors-id", "ecors-planCode", "ecors-nameEng", "ecors-nameTh"]
        values.forEach((value, index)=>{
            console.log(value)
            const td = document.createElement('td');
            td.textContent = value 
            td.classList = className[index]
            console.log(td)
            tr.appendChild(td)
        })
        console.log(tr)
        dropdownPlans.appendChild(tr)

    })
});