/*
Copy the code from the previous exercise (about employees) to a 
new form and add the functionality needed to answer the question: 
Who has worked at the company the longest? Output their name.
Note: change the names of employees, employeeYears, newEmp, 
deleteEmp, foundIndex variables to employees2, employeeYears2, 
newEmp2, deleteEmp2, foundIndex2 so they aren't duplicates as 
the project will tell you that you have already declared variables 
with these names. 
*/

function longestWorking(time) {
  let foundIndex = -1
  let largestValue = -1
  for (i = 0; i < time.length; i++) {
    if (time[i] > largestValue) {
      largestValue = time[i]
      foundIndex = i
    }
  }
}

let employees2 = ['Mary Edwards', 'Don Smith', 'Tricia Evans']
let years2 = [22, 10, 5]

longest