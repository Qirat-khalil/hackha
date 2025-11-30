// import supabase from "./config.js";

// // ------------------ Fetch user data ------------------
// let username = document.getElementById("username");

// async function fetchdata() {
//   try {
//     const { data, error } = await supabase.auth.getUser();
//     console.log(data);

//     if (data && data.user) {
//       username.innerHTML = data.user.user_metadata.name;
//     }

//     if (error) {
//       console.log(error);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// fetchdata();


// // ------------------ Insert (Add Todo) ------------------
// let title = document.getElementById("title");
// let desc = document.getElementById("description");
// let radio = document.getElementsByName("prio");
// let addbtn = document.getElementById("addbtn");
// let main = document.getElementById("main");

// async function addtodo() {
//   let selectprio = null;

//   // get selected priority
//   for (let p of radio) {
//     if (p.checked) {
//       selectprio = p.value;
//       break;
//     }
//   }

//   // check required fields
//   if (!title.value.trim() && !desc.value.trim() && !selectprio) {
//     alert("Please fill all fields before adding a todo!");
//     return;
//   }

//   if (edId) {
//     console.log("Edit ID mil gaya:", edId);

//     try {


//       const { error } = await supabase
//         .from('todos')
//         .update({
//           title: title.value,
//           description: desc.value,
//           priority: selectprio,
//         })
//         .eq('id', edId)
//       if (error) {
//         console.log(error);

//       } else {
//         console.log("etitttt");
//         AllTodos()
//         title.value = ""
//         description.value = ""
//         radio.forEach((r) => r.checked = false)
//       }
//     } catch (err) {
//       console.log(err);

//     }
//   }
//   else {
//     try {
//       const { error } = await supabase
//         .from("todos")
//         .insert([
//           {
//             title: title.value,
//             description: desc.value,
//             priority: selectprio,
//           },
//         ]);

//       if (error) {
//         console.log("Insert Error:", error);
//       } else {
//         console.log("✅ Todo added successfully!");
//         title.value = "";
//         desc.value = "";
//         radio.forEach((r) => (r.checked = false));
//         AllTodos();
//       }
//     } catch (error) {
//       console.log("Catch Error:", error);
//     }

//   }



// }

// addbtn.addEventListener("click", addtodo);


// // ------------------ Fetch Todos ------------------
// let filtodo = []

// async function AllTodos() {
//   try {
//     const { data, error } = await supabase
//       .from("todos")
//       .select("*");

//     if (error) {
//       console.log("Fetch Error:", error);
//       return;
//     }

//     if (data) {
//       filtodo = data
//       showAllTodos(filtodo);

//     }
//   } catch (err) {
//     console.log(err);
//   }
// }

// AllTodos();


// // ------------------ Display Todos ------------------
// function showAllTodos(todos) {
//   const main = document.getElementById("main");
//   main.innerHTML = "";

//   todos.forEach((todo) => {
//     const card = document.createElement("div");

//     let badgeColor = "";
//     let borderGlow = "";
//     if (todo.priority === "high") {
//       badgeColor = "bg-red-100 text-red-700 border border-red-300";
//       borderGlow = "hover:border-red-400 hover:shadow-red-200";
//     } else if (todo.priority === "medium") {
//       badgeColor = "bg-yellow-100 text-yellow-700 border border-yellow-300";
//       borderGlow = "hover:border-yellow-400 hover:shadow-yellow-200";
//     } else {
//       badgeColor = "bg-green-100 text-green-700 border border-green-300";
//       borderGlow = "hover:border-green-400 hover:shadow-green-200";
//     }

//     card.innerHTML = `

//       <div class="bg-gradient-to-br from-white to-indigo-50 ${borderGlow} shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl p-6 border transform hover:-translate-y-1 hover:scale-[1.02]">
//         <div class="flex justify-between items-start mb-2">
//           <h5 class="text-lg font-semibold text-gray-800">${todo.title}</h5>
//           <span class="text-xs px-3 py-1 rounded-full font-medium ${badgeColor} capitalize">
//             ${todo.priority}
//           </span>
//         </div>
//         <p class="text-gray-600 text-sm leading-relaxed mb-4">${todo.description}</p>
//         <div class="flex justify-end gap-3 mt-3">
//           <button  class="editbtn  text-indigo-500 hover:text-indigo-700 transition-all">
//             <i class="fa-solid fa-pen-to-square text-lg"></i>
//           </button>
//           <button class="delbtn text-red-500 hover:text-red-700  transition-all">
//             <i class="fa-solid fa-trash text-lg"></i>
//           </button>
//         </div>
//       </div>
//     `;

//     const delbtn = card.querySelector(".delbtn");
//     delbtn.addEventListener("click", () => delfunc(todo.id));

//     main.appendChild(card);

//     let editbtn = card.querySelector(".editbtn")
//     editbtn.addEventListener("click", () => editfun(todo.id, todo.title, todo.description, todo.priority))

//   });
// }


// // delete fun

// async function delfunc(id) {
//   try {
//     const { data, error } = await supabase
//       .from('todos')
//       .delete()
//       .eq("id", id)
//     if (error) {
//       console.log(error);

//     } else {
//       AllTodos()
//     }

//   } catch (err) {
//     console.log(err);

//   }
// }


// // search input


// let searinp = document.getElementById("serinp")
// let searchbtn = document.getElementById("searchbtn")

// // console.log(searchbtn ,"searchbtn");


// function searchfunc() {
//   let keyword = searinp.value.trim().toLowerCase();

//   if (!keyword) {

//     showAllTodos(filtodo)
//     return;
//   }


//   // filter todos where priority 
//   let filter = filtodo.filter((task) =>
//     task.priority.toLowerCase().includes(keyword) 
//   // ||
//   //   task.title.toLowerCase().includes(keyword)
//   );

//   // show filtered results on same page
//   showAllTodos(filter);

//   // (optional) agar next page par bhejna hai:
//   // localStorage.setItem("fildata", JSON.stringify(filter));
//   // location.href = "high.html";
// }


// searchbtn.addEventListener("click", searchfunc)


// // edit function


// let edId = null
// // let editingCard = null
// function editfun(id, tit, descrip, prio) {

//   // console.log(tit);
//   title.value = tit
//   description.value = descrip
//   console.log(prio);
//   radio.forEach((onepri) => {
//     onepri.checked = onepri.value === prio
//   })
//   edId = id
//   addbtn.innerHTML = "Edit Task"
//   // if(editingCard){
//   //   editingCard.style.dis
//   // }
// }




import supabase from "./config";

// DOM
const startSurveyBtn = document.getElementById("startSurveyBtn")
const startSurveySection = document.getElementById("startSurveySection")
const surveySection = document.getElementById("surveySection")
const surveyQuestions = document.getElementById("surveyQuestions")
const surveyForm = document.getElementById("surveyForm")
const submitMsg = document.getElementById("submitMsg")

let questions = []

// Load Questions
async function loadQuestions() {
  const { data, error } = await supabase.from("survey_questions").select("*").order("id",{ascending:true})
  if(error) return console.log(error)
  questions = data
  renderQuestions()
}

// Render Questions
function renderQuestions() {
  surveyQuestions.innerHTML=""
  questions.forEach((q, i)=>{
    let html=`<div class="p-4 border rounded bg-gray-50" id="q${q.id}">
      <p class="font-semibold">${i+1}. ${q.question_text}</p>`
    if(q.type==="multiple" && Array.isArray(q.options) && q.options.length){
      q.options.forEach(opt=>{
        html+=`<label class="flex items-center gap-2 mt-1">
          <input type="radio" name="q${q.id}" value="${opt}" required onchange="checkAnswer(${q.id},'${q.correct_answer}')"/>
          ${opt}</label>`
      })
    } else if(q.type==="truefalse"){
      html+=`<label class="flex items-center gap-2 mt-1">
        <input type="radio" name="q${q.id}" value="True" required onchange="checkAnswer(${q.id},'${q.correct_answer}')"/> True</label>
        <label class="flex items-center gap-2 mt-1">
        <input type="radio" name="q${q.id}" value="False" required onchange="checkAnswer(${q.id},'${q.correct_answer}')"/> False</label>`
    } else{
      html+=`<p class="mt-1 text-gray-500">Information Only</p>`
    }
    html+=`<p id="result${q.id}" class="mt-1 font-semibold"></p></div>`
    surveyQuestions.innerHTML+=html
  })
}

// Check Answer
window.checkAnswer = function(qId, correctAnswer){
  const selected=document.querySelector(`input[name="q${qId}"]:checked`)
  const resultEl=document.getElementById(`result${qId}`)
  if(!selected) return
  resultEl.innerText = (selected.value===correctAnswer)?"✅ Pass":"❌ Fail"
  resultEl.classList.toggle("text-green-600", selected.value===correctAnswer)
  resultEl.classList.toggle("text-red-600", selected.value!==correctAnswer)
}

// Start Survey
startSurveyBtn.addEventListener("click",()=>{
  startSurveySection.classList.add("hidden")
  surveySection.classList.remove("hidden")
  loadQuestions()
})

// Submit Survey
surveyForm.addEventListener("submit", async e=>{
  e.preventDefault()
  const user = supabase.auth.user()
  if(!user){ alert("Please login first!"); return }

  let score=0
  let answers=[]
  questions.forEach(q=>{
    const selected=document.querySelector(`input[name="q${q.id}"]:checked`)
    const answer=selected ? selected.value : null
    if(q.type!=="info"){ if(answer===q.correct_answer) score++ }
    answers.push({ question_id:q.id, question:q.question_text, answer, comment:"" })
  })
  const totalQuestions = questions.filter(q=>q.type!=="info").length
  const resultText=`${score}/${totalQuestions}`
  const passFail = score===totalQuestions ? "Pass":"Fail"

  const { data, error } = await supabase.from("survey_results").insert([{
    user_id: user.id,
    score: resultText,
    result: passFail,
    answers
  }])
  if(error) return alert("Error: "+error.message)

  submitMsg.innerText="Survey submitted successfully!"
  surveyForm.reset()
  surveySection.classList.add("hidden")
  startSurveySection.classList.remove("hidden")
})