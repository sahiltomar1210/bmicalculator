
function calculate(){
    let age = document.querySelector("#age").value;
    let height = document.querySelector("#height").value;
    let weight = document.querySelector("#weight").value;
    let value = document.querySelector("#bmi");
    let bmitype = document.querySelector("#bmitype");

    if(age ===''|| height ==='' || weight ===''){
        alert("Please provide input in all fields");
        return;
    }
   
    if(age<2 || age>120){
        alert("Please provide age in between 2 and 120")
        return;
    }
    if(height < 1){
        alert("Please provide height greater or equal to 1");
        return;
    }
    if(weight < 1){
        alert("Please provide weight greater or equal to 1");
        return;
    }
    let BMI,h;
    h = height/100;
    BMI = weight/(h*h)
    let newBMI =BMI.toFixed(2);
    value.innerHTML = newBMI;
      if(BMI<16){
        bmitype.innerHTML ="Severe Thickness"
      }
      if(BMI>=40){
        bmitype.innerHTML ="Obese Class III"
      }
      if(BMI>=16 && BMI< 17)
      {
        bmitype.innerHTML ="Moderate Thickness";
      }
      if(BMI>=17 && BMI< (18.50))
      {
        bmitype.innerHTML ="Mild Thickness";
      }
      if(BMI>=(18.50) && BMI< 25)
      {
        bmitype.innerHTML ="Normal";
      }
      if(BMI>=(25) && BMI< 30)
      {
        bmitype.innerHTML ="Over Weight";
      }
      if(BMI>=(30) && BMI< 35)
      {
        bmitype.innerHTML ="Obese Class I";
      }
      if(BMI>=(35) && BMI < 40)
      {
        bmitype.innerHTML ="Obese Class II";
      }
       
    
}

function clear(){
    let age = document.querySelector("#age")
    let height = document.querySelector("#height").value;
    let weight = document.querySelector("#weight").value;
    let value = document.querySelector("#bmi");
    let bmitype = document.querySelector("#bmitype");
    

    console.log(age.nodeValue)

}