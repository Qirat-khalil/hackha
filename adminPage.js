
import supabase from "./config.js";

let question = document.getElementById("mq");
let opt1 = document.getElementById("ma");
let opt2 = document.getElementById("mb");
let opt3 = document.getElementById("mc");
let opt4 = document.getElementById("md");
let correctAnswer = document.getElementById("mcorrect");
let saveBtn = document.getElementById("saveBtn1");
let datashow = document.getElementById("datashow");

// Get Logged User
const { data: userData, error: userError } = await supabase.auth.getUser();
if (userError) console.log("User error:", userError);

const user_id = userData?.user?.id;
const user_name = userData?.user?.user_metadata?.name;
const user_email = userData?.user?.user_metadata?.email;

// Load User Responses
async function useRespon() {
  try {
    const { data, error } = await supabase.from("UserResponses").select("*");

    if (error) {
      console.log(error);
      return;
    }

    datashow.innerHTML = `
  <div class="mt-10 bg-white/60 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/30">

    <h2 class="text-2xl font-bold text-purple-700 mb-4 text-center drop-shadow">
      📋 User Responses
    </h2>

    <table class="w-full rounded-2xl overflow-hidden shadow-xl">
      <thead class="bg-gradient-to-r from-purple-500 to-emerald-500 text-white text-lg">
        <tr>
          <th class="p-4 border border-white/20">User ID</th>
          <th class="p-4 border border-white/20">User Name</th>
          <th class="p-4 border border-white/20">User Email</th>
          <th class="p-4 border border-white/20">Answer</th>
        </tr>
      </thead>

      <tbody id="dataRows" class="text-slate-800 text-md bg-white/70 backdrop-blur-xl">
      </tbody>
    </table>

  </div>
`;


    let tableBody = document.getElementById("dataRows");

    data.forEach((show) => {
    tableBody.innerHTML += `
  <tr class="hover:bg-purple-100 transition-all duration-300">
    <td class="border p-3">${show.user_id}</td>
    <td class="border p-3">${show.username}</td>
    <td class="border p-3">${show.useremail}</td>
    <td class="border p-3 font-semibold text-emerald-700">${show.answer}</td>
  </tr>
`;

    });

  } catch (error) {
    console.log(error);
  }
}

useRespon();


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
