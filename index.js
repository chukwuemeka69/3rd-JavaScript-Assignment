//&&&&&&& 1.BMI Calculator Advanced (IF/ELSE)&&&&&&&&&&&&&&&&&&&&&&
function bmiCalculator(weight, height) {
    // let height = Number (prompt("Enter the height on meter:"));
    // let weight = Number (prompt ("Enter the weight in Kg:"));
     let bmi = weight / height**2; //weight in Kg and height in meters
    if (bmi < 18.5) {
        return `Your BMI is, ${bmi} so you are underweight.`;
    }
    else if (18.5 <= bmi && bmi <= 24.9 ) {
        return `Your BMI is, ${bmi} so you are normal weight.`;
    }
    else {
        return `Your BMI is, ${bmi} so you are overweight.`;
    }
}

alert(bmiCalculator(90,2));


//######## 2.JavaScript for a new automated system ##############

function movieAgeControl(age, accompanied) {

    if ( age >= 13 || accompanied ) {
        return "allowed";
    }
    
    else {
        return "not allowed"
    }

}

alert (movieAgeControl(12,true))

