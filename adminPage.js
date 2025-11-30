

import supabase from "./config.js";
// let multipleQues = document.getElementById("multipleForm")
let question= document.getElementById("mq")
let opt1= document.getElementById("ma")
let opt2= document.getElementById("mb")
let opt3= document.getElementById("mc")
let opt4= document.getElementById("md")
let correctAnswer= document.getElementById("mcorrect")
let saveBtn = document.getElementById("saveBtn1")


saveBtn && saveBtn.addEventListener("click",async(e)=>{
  e.preventDefault()
  console.log("hello");
  
   try{
       const { error } =  await supabase
  .from('MultipleQuestion')
  .insert({ question:question.value, 
    correctanswer:correctAnswer.value,
    option1:opt1.value,
    option2:opt2.value,
    option3:opt3.value,
    option4:opt4.value})
    if (error) {
        alert("fail",error.message)
      
    }else{
      alert("insert success")
    }
   }catch (error){
    console.log(error);
    
   }
})

