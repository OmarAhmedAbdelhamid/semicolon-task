const students = [
  {
    name: 'Ahmed',
    score: 68,
  },
  {
    name: 'Ali',
    score: 24,
  },
  {
    name: 'Mariam',
    score: 85,
  },
  {
    name: 'Amr',
    score: 54,
  },
  {
    name: 'Sara',
    score: 99,
  },
];




// Create a function that takes the array of students and prints each student and their grade to the console.

// The grade is calculated as follows:
// If the score is less than 50, the grade is 'F'.
// If the score is between 50 and 60, the grade is 'D'.
// If the score is between 60 and 70, the grade is 'C'.
// If the score is between 70 and 80, the grade is 'B'.
// If the score is higher than 80, the grade is 'A'.

// The output for each student should look like this: "Name: -student name-, Grade: -student grade-"

// Bonus: Sort the students by their grade in descending order into a new array and print the new array to the console. (Hint: Use the sort method)

// Write your code here




function ratingGrade(score) {
  if (score < 50) {
    return 'F';
  } else if (score >= 50 && score < 60) {
    return 'D';
  } else if (score >= 60 && score < 70) {
    return 'C';
  } else if (score >= 70 && score < 80) {
    return 'B';
  } else {
    return 'A';
  }
}

function Results(students) {
  students.forEach(student => {
    grade = ratingGrade(student.score)
    console.log("Name: " + student.name + ",Grade:" + student.score)

  });
}


console.log("hello rep")

Results(students);
