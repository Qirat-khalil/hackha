// // admin page 


// {/* // SAMPLE DATA */ }
// const users = [
//     { id: 1, name: "Ali Khan", email: "ali@example.com" },
//     { id: 2, name: "Ayesha Noor", email: "ayesha@example.com" },
//     { id: 3, name: "Hassan Raza", email: "hassan@example.com" },
// ];

// const orders = 45;
// const revenue = 68950;

// // Insert into DOM
// document.getElementById("userCount").innerText = users.length;
// document.getElementById("orderCount").innerText = orders;
// document.getElementById("revenueAmount").innerText = "$" + revenue;

// const tableBody = document.getElementById("userTable");

// users.forEach((u) => {
//     tableBody.innerHTML += `
//         <tr>
//           <td class="border p-2">${u.id}</td>
//           <td class="border p-2">${u.name}</td>
//           <td class="border p-2">${u.email}</td>
//         </tr>
//       `;
// });

// {/* // Mobile Sidebar Toggle */ }
// const sidebar = document.querySelector("aside");
// const menuBtn = document.getElementById("menuBtn");

// menuBtn.addEventListener("click", () => {
//     sidebar.classList.toggle("hidden");
// });




// const qText = document.getElementById("qText");
// const qType = document.getElementById("qType");
// const correctAnswer = document.getElementById("correctAnswer");
// const passMsg = document.getElementById("passMsg");
// const failMsg = document.getElementById("failMsg");
// const mcqOptions = document.getElementById("mcqOptions");
// const trueFalse = document.getElementById("trueFalse");

// const questionsList = document.getElementById("questionsList");
// const usersReport = document.getElementById("usersReport");

// let questions = [];
// let users = [];

// /* ------------ SHOW/HIDE BASED ON QUESTION TYPE ------------ */

// qType.addEventListener("change", () => {
//   if (qType.value === "multiple") {
//     mcqOptions.classList.remove("hidden");
//     trueFalse.classList.add("hidden");
//     correctAnswer.placeholder = "Write correct option";
//   }
//   else if (qType.value === "truefalse") {
//     mcqOptions.classList.add("hidden");
//     trueFalse.classList.remove("hidden");
//     correctAnswer.placeholder = "True / False";
//   }
//   else {
//     mcqOptions.classList.add("hidden");
//     trueFalse.classList.add("hidden");
//     correctAnswer.placeholder = "No correct answer needed";
//   }
// });

// /* ------------ ADD QUESTION ------------ */

// document.getElementById("questionForm").addEventListener("submit", (e) => {
//   e.preventDefault();

//   let question = {
//     text: qText.value,
//     type: qType.value,
//     options: [],
//     correct: correctAnswer.value,
//     passMessage: passMsg.value,
//     failMessage: failMsg.value,
//   };

//   if (qType.value === "multiple") {
//     const optionInputs = document.querySelectorAll(".opt");
//     question.options = [...optionInputs].map((i) => i.value);
//   }

//   if (qType.value === "truefalse") {
//     const checked = document.querySelector("input[name='tf']:checked");
//     question.correct = checked ? checked.value : "";
//   }

//   questions.push(question);
//   renderQuestions();

//   e.target.reset();
// });

// /* ------------ RENDER QUESTIONS ------------ */

// function renderQuestions() {
//   questionsList.innerHTML = "";

//   questions.forEach((q, index) => {
//     questionsList.innerHTML += `
//       <div class="p-3 bg-white border rounded shadow">
//         <p><b>${index + 1}.</b> ${q.text}</p>
//         <p class="text-sm text-gray-600">Type: ${q.type}</p>
//         ${q.options.length ? `<p>Options: ${q.options.join(", ")}</p>` : ""}
//         <p><b>Correct:</b> ${q.correct}</p>
//         <p><b>Pass:</b> ${q.passMessage}</p>
//         <p><b>Fail:</b> ${q.failMessage}</p>
//       </div>
//     `;
//   });
// }

// /* ------------ USERS REPORT MOCK ------------ */
// users = [
//   {
//     name: "Ali",
//     email: "ali@email.com",
//     result: "Pass",
//     score: "8/10",
//     answers: [
//       { q: "Do you have fever?", a: "Yes", comment: "User reported symptoms" }
//     ]
//   }
// ];

// renderUsers();

// /* ------------ RENDER USERS ------------ */
// function renderUsers() {
//   usersReport.innerHTML = "";

//   users.forEach((u) => {
//     usersReport.innerHTML += `
//       <div class="p-3 bg-white border rounded shadow">
//         <p><b>Name:</b> ${u.name}</p>
//         <p><b>Email:</b> ${u.email}</p>
//         <p><b>Result:</b> ${u.result}</p>
//         <p><b>Score:</b> ${u.score}</p>
//       </div>
//     `;
//   });
// }




















// import supabase from "./config";


// // ---------------- DOM Elements ----------------
// const qText = document.getElementById("qText");
// const qType = document.getElementById("qType");
// const correctAnswer = document.getElementById("correctAnswer");
// const passMsg = document.getElementById("passMsg");
// const failMsg = document.getElementById("failMsg");
// const mcqOptions = document.getElementById("mcqOptions");
// const trueFalse = document.getElementById("trueFalse");

// const questionsList = document.getElementById("questionsList");
// const usersReport = document.getElementById("usersReport");

// // ---------------- Show/Hide Options Based on Question Type ----------------
// qType.addEventListener("change", () => {
//   if (qType.value === "multiple") {
//     mcqOptions.classList.remove("hidden");
//     trueFalse.classList.add("hidden");
//     correctAnswer.placeholder = "Write correct option";
//   } else if (qType.value === "truefalse") {
//     mcqOptions.classList.add("hidden");
//     trueFalse.classList.remove("hidden");
//     correctAnswer.placeholder = "True / False";
//   } else {
//     mcqOptions.classList.add("hidden");
//     trueFalse.classList.add("hidden");
//     correctAnswer.placeholder = "No correct answer needed";
//   }
// });

// // ---------------- Add Question ----------------
// document.getElementById("questionForm").addEventListener("submit", async (e) => {
//   e.preventDefault();

//   let options = [];
//   if (qType.value === "multiple") {
//     options = Array.from(document.querySelectorAll(".opt")).map((o) => o.value);
//   }

//   let correct = correctAnswer.value;
//   if (qType.value === "truefalse") {
//     const checked = document.querySelector("input[name='tf']:checked");
//     correct = checked ? checked.value : "";
//   }

//   // Insert into Supabase
//   const { data, error } = await supabase.from("survey_questions").insert([
//     {
//       question_text: qText.value,
//       type: qType.value,
//       options: options.length ? options : null,
//       correct_answer: correct || null,
//       pass_message: passMsg.value,
//       fail_message: failMsg.value,
//     },
//   ]);

//   if (error) return alert("Error adding question: " + error.message);

//   alert("Question added successfully!");
//   document.getElementById("questionForm").reset();
//   mcqOptions.classList.remove("hidden");
//   trueFalse.classList.add("hidden");

//   loadQuestions();
// });

// // ---------------- Load Questions ----------------
// async function loadQuestions() {
//   const { data, error } = await supabase
//     .from("survey_questions")
//     .select("*")
//     .order("id", { ascending: true });

//   if (error) return console.log(error);

//   questionsList.innerHTML = "";
//   data.forEach((q, i) => {
//     questionsList.innerHTML += `
//       <div class="p-3 bg-white border rounded shadow">
//         <p><b>${i + 1}.</b> ${q.question_text}</p>
//         <p class="text-sm text-gray-600">Type: ${q.type}</p>
//         ${q.options ? `<p>Options: ${q.options.join(", ")}</p>` : ""}
//         <p><b>Correct:</b> ${q.correct_answer || "-"}</p>
//         <p><b>Pass:</b> ${q.pass_message}</p>
//         <p><b>Fail:</b> ${q.fail_message}</p>
//       </div>
//     `;
//   });
// }

// // ---------------- Load Users & Results ----------------
// // async function loadUsersResults() {
// //   const { data, error } = await supabase
// //     .from("survey_results")
// //     .select(`*, users(*)`)
// //     .order("id", { ascending: true });

// //   if (error) return console.log(error);

// //   usersReport.innerHTML = "";
// //   data.forEach((u) => {
// //     let answersHTML = u.answers
// //       ? u.answers
// //           .map(
// //             (a, i) => `
// //       <div class="p-2 mb-2 border rounded bg-gray-50">
// //         <p><b>Q${i + 1}:</b> ${a.question}</p>
// //         <p><b>Answer:</b> ${a.answer}</p>
// //         <p><b>Comment:</b> ${a.comment || "No comment"}</p>
// //       </div>
// //     `
// //           )
// //           .join("")
// //       : "";

// //     usersReport.innerHTML += `
// //       <div class="p-4 bg-white border rounded shadow">
// //         <p><b>Name:</b> ${u.users.name}</p>
// //         <p><b>Email:</b> ${u.users.email}</p>
// //         <p><b>Score:</b> ${u.score}</p>
// //         <p><b>Result:</b> ${u.result}</p>
// //         <details class="mt-2">
// //           <summary class="cursor-pointer text-blue-600">View Answers</summary>
// //           <div class="mt-2">${answersHTML}</div>
// //         </details>
// //       </div>
// //     `;
// //   });
// // }

// // // ---------------- Initial Load ----------------
// // loadQuestions();
// // loadUsersResults();





// async function loadQuestions() {
//   const { data, error } = await supabase
//     .from("survey_questions")
//     .select("*")
//     .order("id", { ascending: true });

//   if (error) return console.log(error);

//   questionsList.innerHTML = "";
//   data.forEach((q, i) => {
//     // Display for admin (same as user will see)
//     let optionsHTML = "";
//     if (q.type === "multiple" && q.options) {
//       optionsHTML = `<ul class="list-disc ml-5 mt-1">
//         ${q.options.map((o) => `<li>${o}</li>`).join("")}
//       </ul>`;
//     }
//     else if (q.type === "truefalse") {
//       optionsHTML = `<p class="mt-1">True / False</p>`;
//     }
//     else {
//       optionsHTML = `<p class="mt-1 text-gray-500">Information Only</p>`;
//     }

//     questionsList.innerHTML += `
//       <div class="p-3 bg-white border rounded shadow">
//         <p><b>${i + 1}.</b> ${q.question_text}</p>
//         <p class="text-sm text-gray-600">Type: ${q.type}</p>
//         ${optionsHTML}
//         <p><b>Correct:</b> ${q.correct_answer || "-"}</p>
//         <p><b>Pass:</b> ${q.pass_message}</p>
//         <p><b>Fail:</b> ${q.fail_message}</p>
//       </div>
//     `;
//   });
// }










import supabase from "./config";


// DOM Elements
const qText = document.getElementById("qText")
const qType = document.getElementById("qType")
const correctAnswer = document.getElementById("correctAnswer")
const passMsg = document.getElementById("passMsg")
const failMsg = document.getElementById("failMsg")
const mcqOptions = document.getElementById("mcqOptions")
const trueFalse = document.getElementById("trueFalse")
const questionsList = document.getElementById("questionsList")
const usersReport = document.getElementById("usersReport")

// Show/hide options
qType.addEventListener("change", () => {
  if(qType.value==="multiple"){ mcqOptions.classList.remove("hidden"); trueFalse.classList.add("hidden"); correctAnswer.placeholder="Correct Option"}
  else if(qType.value==="truefalse"){ mcqOptions.classList.add("hidden"); trueFalse.classList.remove("hidden"); correctAnswer.placeholder="True / False"}
  else{ mcqOptions.classList.add("hidden"); trueFalse.classList.add("hidden"); correctAnswer.placeholder="No answer"}
})

// Add Question
document.getElementById("questionForm").addEventListener("submit", async e=>{
  e.preventDefault()
  let options=[]
  if(qType.value==="multiple"){
    options = Array.from(document.querySelectorAll(".opt"))
                  .map(o=>o.value.trim())
                  .filter(o=>o!=="")
  }
  let correct=correctAnswer.value.trim()
  if(qType.value==="truefalse"){
    const checked=document.querySelector("input[name='tf']:checked")
    correct=checked?checked.value:""
  }

  const { error } = await supabase.from("survey_questions").insert([{
    question_text: qText.value.trim(),
    type: qType.value,
    options: options.length ? options : null,
    correct_answer: correct || null,
    pass_message: passMsg.value || "Pass",
    fail_message: failMsg.value || "Fail"
  }])
  if(error) return alert("Error: "+error.message)
  document.getElementById("questionForm").reset()
  mcqOptions.classList.remove("hidden"); trueFalse.classList.add("hidden")
  loadQuestions()
})

// Load Questions
async function loadQuestions(){
  const {data,error}=await supabase.from("survey_questions").select("*").order("id",{ascending:true})
  if(error) return console.log(error)
  questionsList.innerHTML=""
  data.forEach((q,i)=>{
    let optionsHTML=""
    if(q.type==="multiple" && Array.isArray(q.options) && q.options.length){ optionsHTML=`<ul class="list-disc ml-5 mt-1">${q.options.map(o=>`<li>${o}</li>`).join("")}</ul>` }
    else if(q.type==="truefalse"){ optionsHTML="<p>True / False</p>" }
    else{ optionsHTML="<p class='text-gray-500'>Information Only</p>" }
    questionsList.innerHTML+=`
      <div class="p-3 bg-white border rounded shadow">
        <p><b>${i+1}.</b> ${q.question_text}</p>
        <p class="text-sm text-gray-600">Type: ${q.type}</p>
        ${optionsHTML}
        <p><b>Correct:</b> ${q.correct_answer||"-"}</p>
        <p><b>Pass:</b> ${q.pass_message}</p>
        <p><b>Fail:</b> ${q.fail_message}</p>
      </div>`
  })
}

// Load User Results
async function loadUsersResults(){
  const {data,error}=await supabase.from("survey_results").select("*,users(*)").order("id",{ascending:true})
  if(error) return console.log(error)
  usersReport.innerHTML=""
  data.forEach(u=>{
    const answersHTML=u.answers?u.answers.map(a=>`<div class="p-2 mb-2 border rounded bg-gray-50"><p><b>Q:</b> ${a.question}</p><p><b>Answer:</b> ${a.answer}</p></div>`).join(""):""
    usersReport.innerHTML+=`
      <div class="p-4 bg-white border rounded shadow">
        <p><b>Name:</b> ${u.users?.name||"N/A"}</p>
        <p><b>Email:</b> ${u.users?.email}</p>
        <p><b>Score:</b> ${u.score}</p>
        <p><b>Result:</b> ${u.result}</p>
        <details class="mt-2"><summary class="cursor-pointer text-blue-600">View Answers</summary><div class="mt-2">${answersHTML}</div></details>
      </div>`
  })
}

// Initial load
loadQuestions()
loadUsersResults()