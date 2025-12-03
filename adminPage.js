
import supabase from "./config.js";

let question = document.getElementById("mq");
let opt1 = document.getElementById("ma");
let opt2 = document.getElementById("mb");
let opt3 = document.getElementById("mc");
let opt4 = document.getElementById("md");
let correctAnswer = document.getElementById("mcorrect");
let saveBtn = document.getElementById("saveBtn1");
let datashow = document.getElementById("datashow");
let showscreen =document.getElementById("showscreen")
let addquestion = document.getElementById("addquestion")


  // hiden show add question

addquestion.addEventListener("click",()=>{    
    showscreen.classList.toggle("hidden")
 
})

// Insert Question
saveBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  const qText = question.value;
  const a = opt1.value;
  const b = opt2.value;
  const c = opt3.value;
  const d = opt4.value;
  const correct = correctAnswer.value;

  try {
    const { error } = await supabase.from("MultipleQuestion").insert({
      question: qText,
      correctanswer: correct,
      option1: a,
      option2: b,
      option3: c,
      option4: d,
    });

    if (error) {
      alert("Insert failed!");
    } else {
      alert("Question Added Successfully");
      question.value = "";
      opt1.value = "";
      opt2.value = "";
      opt3.value = "";
      opt4.value = "";
      correctAnswer.value = "";
    }
  } catch (error) {
    console.log(error);
  }
});


// Get Logged User
const { data: userData, error: userError } = await supabase.auth.getUser();
if (userError) console.log("User error:", userError);

// const user_id = userData?.user?.id;
// const user_name = userData?.user?.user_metadata?.name;
// const user_email = userData?.user?.user_metadata?.email;

// Load User Responses
async function useRespon() {
  try {
    // 1️⃣ Fetch user responses
    const { data: responses, error: userRespError } = await supabase
      .from("UserResponses")
      .select("*");

    if (userRespError) {
      console.log(userRespError);
      return;
    }

    // 2️⃣ Fetch all MCQ questions
    const { data: mcqQues } = await supabase.from("MultipleQuestion").select("*");

    // 3️⃣ Fetch all True/False questions
    const { data: tfQues } = await supabase.from("True-false-question").select("*");

    datashow.innerHTML = `
      <div class="mt-10 bg-white/60 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/30">
        <h2 class="text-2xl font-bold text-purple-700 mb-4 text-center drop-shadow">
          📋 User Responses & Results
        </h2>
        <table class="w-full rounded-2xl overflow-hidden shadow-xl">
          <thead class="bg-gradient-to-r from-purple-500 to-emerald-500 text-white text-lg">
            <tr>
              <th class="p-4 border border-white/20">User ID</th>
              <th class="p-4 border border-white/20">User Name</th>
              <th class="p-4 border border-white/20">User Email</th>
              
              <th class="p-4 border border-white/20">Correct Answer</th>
              <th class="p-4 border border-white/20">User Answer</th>
              <th class="p-4 border border-white/20">Result</th>
            </tr>
          </thead>
          <tbody id="dataRows" class="text-slate-800 text-md bg-white/70 backdrop-blur-xl"></tbody>
        </table>
      </div>
    `;
{/* <th class="p-4 border border-white/20">Question Type</th> */}
    let tableBody = document.getElementById("dataRows");

    responses.forEach((res) => {
      // Determine correct answer
      let correct;
      let type;

      let mcq = mcqQues.find((q) => q.id === res.question_id);
      let tf = tfQues.find((q) => q.id === res.question_id);

      if (mcq) {
        correct = mcq.correctanswer;
        type = "MCQ";
      } else if (tf) {
        correct = String(tf.tfcorrect);
        type = "True/False";
      }

      let result = String(res.answer) === String(correct) ? "PASS" : "FAIL";

      tableBody.innerHTML += `
        <tr class="hover:bg-purple-100 transition-all duration-300">
          <td class="border p-3">${res.user_id}</td>
          <td class="border p-3">${res.username}</td>
          <td class="border p-3">${res.useremail}</td>
          
          <td class="border p-3">${correct}</td>
          <td class="border p-3">${res.answer}</td>
          <td class="border p-3 font-semibold ${result === "PASS" ? "text-green-600" : "text-red-600"}">
            ${result}
          </td>
        </tr>
      `;
    });

  } catch (error) {
    console.log(error);
  }
}

useRespon();


// logout functionailty

let adminlogout = document.getElementById("adminlogout")

adminlogout && adminlogout.addEventListener("click", async()=>{

    const { error } = await supabase.auth.signOut()
    if (error) {
        console.log(error);
        
    }else{
      location.href = 'index.html'
    }
})

//  true false question
let trufalquse = document.getElementById("trufalquse");
let tfCorrect = document.getElementById("tfCorrect");
let saveBtn2 = document.getElementById("saveBtn2");

saveBtn2 && saveBtn2.addEventListener("click", async (e) => {
  e.preventDefault();

  let tfQuesValue = trufalquse.value;
  let tfCorrectValue = tfCorrect.value;

  try {
    const { error } = await supabase.from("True-false-question").insert({
      tfques: tfQuesValue,
      tfcorrect: tfCorrectValue,
    });

    if (error) {
      console.log(error);
      alert("Insert Failed!");
      return;
    }

    alert("Successfully Added ✔");

    trufalquse.value = "";
    tfCorrect.value = "";

  } catch (error) {
    console.log(error);
  }
});







// if (correct === show.answer){
//   console.log("pass");
  
// }