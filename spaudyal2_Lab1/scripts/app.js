document.getElementById("btnCalculate").addEventListener("click", function(){
    
    let weight = document.getElementById("numWeight").value;
    let height = document.getElementById("numHeight").value;

    //Formula to calculate BMI= weight/(height ** 2) * 703
    
    let calculate = weight/(height**2)*703;
    
    alert(`Your BMI is ${calculate.toFixed(2)}.`);
   
});