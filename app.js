var yourName = prompt("What is Your Name?");

var gender = prompt("Enter your gender please!");

if(gender.toLocaleLowerCase() == "male" || gender.toLocaleLowerCase() == "female"){
    

var yourAge = prompt("What's your age?");
if (yourAge <=0){
    alert("your age less than or equal zero");
} 

var ans = confirm("Are you wants to skip the welcoming message?");
if (ans == false){
    switch(gender.toLocaleLowerCase()){
        case"male":
        alert("Welcome Mr " + yourName);
        break;
    
        case "female":
        alert("Welcome Ms " + yourName);
        break;
        default:
            alert("Welcome!");
            break;
}
}

}else {
    alert("Enter the gender correctly");
    alert("Welcome  " + yourName);}
