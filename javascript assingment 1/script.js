// DOM Elements
const form = document.getElementById('registrationForm');
const studentTable = document.querySelector('#studentTable tbody');
const students = JSON.parse(localStorage.getItem('students')) || [];

// Functions
function displayStudents() {
    studentTable.innerHTML = '';
    students.forEach((student, index) => {
        const row = `<tr>
            <td>${student.name}</td>
            <td>${student.id}</td>
            <td>${student.email}</td>
            <td>${student.contact}</td>
            <td class="actions">
                <button class="edit" onclick="editStudent(${index})">Edit</button>
                <button onclick="deleteStudent(${index})">Delete</button>
            </td>
        </tr>`;
        studentTable.innerHTML += row;
    });
}

function addStudent(event) {
    event.preventDefault();
    const name = document.getElementById('studentName').value.trim();
    const id = document.getElementById('studentId').value.trim();
    const email = document.getElementById('email').value.trim();
    const contact = document.getElementById('contact').value.trim();

    if (!name || !id || !email || !contact) {
        alert('All fields are required!');
        return;
    }

    students.push({ name, id, email, contact });
    localStorage.setItem('students', JSON.stringify(students));
    displayStudents();
    form.reset();
}

function editStudent(index) {
    const student = students[index];
    document.getElementById('studentName').value = student.name;
    document.getElementById('studentId').value = student.id;
    document.getElementById('email').value = student.email;
    document.getElementById('contact').value = student.contact;

    deleteStudent(index);
}

function deleteStudent(index) {
    students.splice(index, 1);
    localStorage.setItem('students', JSON.stringify(students));
    displayStudents();
}

// Event Listener
form.addEventListener('submit', addStudent);

// Initial Render
displayStudents();
 console.log('form submitted')