const API = 'http://localhost:5000';

/* LOGIN */

async function login() {

    const username = document.getElementById('username').value;

    const password = document.getElementById('password').value;

    try {

        const response = await fetch(API + '/login', {

            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                username: username,
                password: password
            })

        });

        const data = await response.json();

        if (data.success) {

            if (data.role === 'admin') {

                window.location.href = 'admin-dashboard.html';

            }
            else {

                window.location.href = 'student-dashboard.html';

            }

        }
        else {

            alert('Invalid Username or Password');

        }

    }
    catch (error) {

        console.log(error);

        alert('Server Error');

    }

}

/* ADD STUDENT */

async function addStudent() {

    const student = {

        name: document.getElementById('name').value,

        roll_no: document.getElementById('roll_no').value,

        class_name: document.getElementById('class_name').value,

        section_name: document.getElementById('section_name').value,

        email: document.getElementById('email').value

    };

    try {

        const response = await fetch(API + '/add-student', {

            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(student)

        });

        const data = await response.text();

        alert(data);

    }
    catch (error) {

        console.log(error);

        alert('Unable to Add Student');

    }

}

/* ADD SUBJECT */

async function addSubject() {

    const subject = {

        subject_name: document.getElementById('subject_name').value,

        class_name: document.getElementById('class_name').value

    };

    try {

        const response = await fetch(API + '/add-subject', {

            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(subject)

        });

        const data = await response.text();

        alert(data);

    }
    catch (error) {

        console.log(error);

        alert('Unable to Add Subject');

    }

}

/* ADD RESULT */

async function addResult() {

    const result = {

        student_name: document.getElementById('student_name').value,

        m1: document.getElementById('m1').value,

        m2: document.getElementById('m2').value,

        m3: document.getElementById('m3').value,

        m4: document.getElementById('m4').value,

        m5: document.getElementById('m5').value

    };

    try {

        const response = await fetch(API + '/add-result', {

            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(result)

        });

        const data = await response.text();

        alert(data);

    }
    catch (error) {

        console.log(error);

        alert('Unable To Generate Result');

    }

}

/* LOGOUT */

function logout() {

    window.location.href = 'login.html';

}