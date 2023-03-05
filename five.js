const studentsMap = new Map();

function generateUsername(firstName, lastName) {
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}`;
}

function calculateAverageGrade(grades) {
    const sum = grades.reduce((acc, grade) => acc + grade, 0);
    return sum / grades.length;
}


function addStudent(student) {
    const { name, surname, course, faculty, security, ...grades } = student;

    const username = generateUsername(name, surname);

    const averageGrade = calculateAverageGrade(Object.values(grades));

    const studentInfo = { email: security.email, grades, averageGrade };

    studentsMap.set(username, { password: security.password, info: studentInfo });

    return { username, email: security.email, averageGrade, grades };
}

function getAverageGradeByUsernameAndPassword(username, password) {
    const student = studentsMap.get(username);

    if (!student || student.password !== password) {
        throw new Error('Invalid credentials');
    }

    const { grades } = student.info;
    return calculateAverageGrade(Object.values(grades));
}

function test() {
    // Додати студента до списку
    const student = {
        name: 'Olesia',
        surname: 'Tkachenko',
        course: 1,
        faculty: 'FICE',
        security: {
            email: 'olesiatkachenko@gmail.com',
            password: '123password',
        },
        math: 86,
        physics: 90,
        programing: 94,
    };
    const addedStudent = addStudent(student);

    const expectedUsername = 'olesia.tkachenko';
    const expectedEmail = 'olesiatkachenko@gmail.com';
    const expectedAverageGrade = 90;
    const expectedGrades = { math: 86, physics: 90, programing: 94 };
    if (addedStudent.username !== expectedUsername) {
        console.error(`Error: Unexpected username. Expected ${expectedUsername}, but got ${addedStudent.username}.`);
    }
    if (addedStudent.email !== expectedEmail) {
        console.error(`Error: Unexpected email. Expected ${expectedEmail}, but got ${addedStudent.email}.`);
    }
    if (addedStudent.averageGrade !== expectedAverageGrade) {
        console.error(`Error: Unexpected average grade. Expected ${expectedAverageGrade}, but got ${addedStudent.averageGrade}.`);
    }
    if (JSON.stringify(addedStudent.grades) !== JSON.stringify(expectedGrades)) {
        console.error(`Error: Unexpected grades. Expected ${JSON.stringify(expectedGrades)}, but got ${JSON.stringify(addedStudent.grades)}.`);
    }

    // Отримати середній бал студента по юзернейму і паролю
    const expectedGradeByUsernameAndPassword = expectedAverageGrade;
    try {
        const gradeByUsernameAndPassword = getAverageGradeByUsernameAndPassword(expectedUsername, 'password123');
        if (gradeByUsernameAndPassword !== expectedGradeByUsernameAndPassword) {
            console.error(`Error: Unexpected grade by username and password. Expected ${expectedGradeByUsernameAndPassword}, but got ${gradeByUsernameAndPassword}.`);
        }
    } catch (e) {
        console.error(`Error: Unexpected error: ${e.message}`);
    }

    // Отримати середній бал студента за неправильним паролем
    try {
        getAverageGradeByUsernameAndPassword(expectedUsername, 'wrongpassword');
        console.error('Error: Expected an error, but got none.');
    } catch (e) {
        const expectedErrorMessage = 'Invalid credentials';
        if (e.message !== expectedErrorMessage) {
            console.error(`Error: Unexpected error message. Expected "${expectedErrorMessage}", but got "${e.message}".`);
        }
    }
}

test();
