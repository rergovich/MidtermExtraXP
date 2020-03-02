/*
Write a program that uses an array(s) to keep track of
employees and the number of years they have been at the
company. Use the data below.
Then let the user add a new employee and years
of service, and delete the last employee added using an array method.
You must use array(s), array method(s), for loop(s), and if/else
statement(s).
Output to the console: 
> the array(s), one name per line, before data has been changed
> the array(s) after a new employee has been added
> the array(s) after the last employee has been deleted.

Use this data:
  Mary Edwards, 22 years, Don Smith, 10 years, Tricia Evans, 5 years
*/

let employees = ['Mary Edwards', '22 years', 'Don Smith', '10 years', 'Tricia Evans', '5 years']

let userAnswer = prompt('Do you want to run a loop?').toLowerCase()

while (userAnswer == 'yes') {

  for(i = 0; i <= employees.length - 1; i++) {
    console.log(employees[i])
  }

  let newEmployee = prompt('Please add a new employee')
  let employeeYears = prompt('Please enter the number of years they have been at the company')

  employees.unshift(employeeYears)
  employees.unshift(newEmployee)

  console.log(employees)

  employees.pop()
  employees.pop()

  console.log(employees)

  let userAnswer = prompt('Do you want to run a loop?').toLowerCase()

  if (userAnswer == 'no') {
    alert ('Thank you, have a nice day')
  }
}
