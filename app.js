// var yourName = prompt("What is Your Name?");

// var gender = prompt("Enter your gender please!");

// if(gender.toLocaleLowerCase() == "male" || gender.toLocaleLowerCase() == "female"){
    

// var yourAge = prompt("What's your age?");
// if (yourAge <=0){
//     alert("your age less than or equal zero");
// } 

// var ans = confirm("Are you wants to skip the welcoming message?");
// if (ans == false){
//     switch(gender.toLocaleLowerCase()){
//         case"male":
//         alert("Welcome Mr " + yourName);
//         break;
    
//         case "female":
//         alert("Welcome Ms " + yourName);
//         break;
//         default:
//             alert("Welcome!");
//             break;
// }
// }

// }else {
//     alert("Enter the gender correctly");
//     alert("Welcome  " + yourName);}

function print(answers){
    for (let i = 0 ; i < answers.length ; i++){
        console.log(answers[i])
    }
}
function Questions(){
    let answers = [];
    let arrayQuestions = [" Do you like cooking? (Yes/NO) ",
    " Do you like playing game? (Yes/NO)",
    " Declarations must appear at the start of the body of a Java method?(Yes/NO) "];

    for (let i = 0 ; i < arrayQuestions.length ; i++){
       let notInvalidAnswer = prompt(arrayQuestions[i]) ;
       if(notInvalidAnswer != ""){
        answers.push(notInvalidAnswer);
       }else{
        answers.push("invalid");
       }
    console.log(answers) ;
}
return answers;
}
let answers = Questions();
print(answers);

