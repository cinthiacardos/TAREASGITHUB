
array1 = ["uno", "dos", "tres"];    
array2 = ["tres", "dos", "uno"];

//Se ordenan ambos arreglos
array1.sort();
array2.sort();

// y se realiza la comparación de cada elemento
array1.length==array2.length && array1.every(function(v,i) { return v === array2[i] } );

///

let student1Courses = ['Math', 'English', 'Programming','Calculo', 'Astrofisic'];
let student2Courses = ['Geography', 'Spanish', 'Programming','Astrofisic', 'art'];

function findCommonCourses(courses1, courses2) {
    let commonCourses = [];
    for (let course of courses1) {
        if (courses2.includes(course)) {
            commonCourses.push(course);
        }
    }
    return commonCourses;
}

let commonCourses = findCommonCourses(student1Courses, student2Courses);

console.log ("Cursos en comun");
console.log(commonCourses);
