let Employee={
    Employeeid:uniqueFourDigitsEmployeeIdNumber() ,
    FullName:"Ghazi Samer",
Department:"Administration",
level:"Senior",
ImageurL:'https://bit.ly/3WqtuZG',
salary:randomSalary(1500,2000)
}
let Employee2={
    Employeeid:uniqueFourDigitsEmployeeIdNumber() ,
    FullName:"Lana Ali",
Department:"Finance",
level:"Senior",
ImageurL:'https://bit.ly/43nmr6t',
salary:randomSalary()
}
let Employee3={
    Employeeid:uniqueFourDigitsEmployeeIdNumber() ,
    FullName:"Tamara Ayoub",
Department:"Marketing",
level:"Senior",
ImageurL:'https://bit.ly/42eQhsZ',
salary:randomSalary()
}
let Employee4={
    Employeeid:uniqueFourDigitsEmployeeIdNumber() ,
    FullName:"Safi Walid",
Department:"Administration",
level:"Mid-Senior",
ImageurL:'https://bit.ly/3WsxBV1',
salary:randomSalary()
}
let Employee5={
    Employeeid:uniqueFourDigitsEmployeeIdNumber() ,
    FullName:"Omar Zaid",
Department:"Development",
level:"Senior",
ImageurL:'https://bit.ly/3ooaxKI',
salary:randomSalary()
}
let Employee6={
    Employeeid:uniqueFourDigitsEmployeeIdNumber() ,
    FullName:"Rana Saleh",
Department:"Development",
level:"Junior",
ImageurL:'https://bit.ly/3MMjSFA',
salary:randomSalary()
}
let Employee7={
    Employeeid:uniqueFourDigitsEmployeeIdNumber() ,
    FullName:"Hadi Ahmad",
Department:"Finance",
level:"Mid-Senior",
ImageurL:'https://bit.ly/3OCPJKh',
salary: randomSalary()
}








function uniqueFourDigitsEmployeeIdNumber(){
    var val = Math.floor(1000 + Math.random() * 9000);
return val;
}
console.log(uniqueFourDigitsEmployeeIdNumber())


function randomSalary(){

 let sal=Math.random() * ((max - min) + min)-(salary*7.5-7.5);
 if (level="senior") {
      ;
  } else if (level="mid senior") {
          ;
  } else {
    ;
  }




}
document.getElementById("t").innerHTML = `employee name: ${Employee.FullName} employee salary: ${Employee.salary} `;
document.getElementById("y").innerHTML = `employee name: ${Employee2.FullName} employee salary: ${Employee2.salary} `;
document.getElementById("u").innerHTML = `employee name: ${Employee3.FullName} employee salary: ${Employee3.salary} `;
document.getElementById("i").innerHTML = `employee name: ${Employee4.FullName} employee salary: ${Employee4.salary} `;
document.getElementById("o").innerHTML = `employee name: ${Employee5.FullName} employee salary: ${Employee5.salary} `;
document.getElementById("p").innerHTML = `employee name: ${Employee6.FullName} employee salary: ${Employee6.salary} `;
document.getElementById("a").innerHTML = `employee name: ${Employee7.FullName} employee salary: ${Employee7.salary} `;

