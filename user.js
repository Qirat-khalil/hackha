

// import supabase from "./config.js";
// let Showquestion = document.getElementById("showQuestion");
// let subResBtn = document.getElementById("subResBtn");
// let username = document.getElementById("username");
// let useremail = document.getElementById("useremail");


// // startbtn

// let startbtn =document.getElementById("startbtn")
// startbtn && startbtn.addEventListener("click",(e)=>{
// e.preventDefault()
// location.href="user.html"
// })



// // --------------------------- Get Logged User
// const { data: userData, error: userError } = await supabase.auth.getUser();
// if (userError) console.log("User error:", userError);

// const user_id = userData?.user?.id;
// const user_name = userData?.user?.user_metadata?.name;
// const user_email = userData?.user?.user_metadata?.email;

// username.innerHTML = user_name;
// useremail.innerHTML = user_email;

// // --------------------------- Fetch MCQ questions
// const { data: quests, error: mcqError } = await supabase
//   .from("MultipleQuestion")
//   .select("*");

// let questionNumber = 1;

// if (mcqError) console.log(mcqError);
// else {
//   quests.forEach((quest) => {
//     let options = [quest.option1, quest.option2, quest.option3, quest.option4];
//     let letters = ["A", "B", "C", "D"];

//     Showquestion.innerHTML += `
//       <div class="w-full bg-white/60 backdrop-blur-lg border border-white/30 mt-8 shadow-2xl 
//                   rounded-2xl p-6 space-y-6 hover:shadow-purple-500/30 transition-all duration-300">

//         <h2 class="text-2xl font-bold text-purple-700 drop-shadow">
//           ${questionNumber++}. ${quest.question}
//         </h2>

//         <div class="space-y-3">
//           ${options
//             .map(
//               (opt, i) => `
//               <label class="flex items-center gap-3 p-3 border rounded-xl bg-white/70 
//                             hover:bg-purple-100 cursor-pointer transition-all duration-300 shadow">
//                 <input type="radio" name="q${quest.id}" value="${opt}">
//                 <span class="text-gray-800 font-medium"><b>${letters[i]}.</b> ${opt}</span>
//               </label>`
//             )
//             .join("")}
//         </div>
//       </div>
//     `;
//   });
// }

// // --------------------------- Fetch True/False questions
// const { data: tfQuestions, error: tfError } = await supabase
//   .from("True-false-question")
//   .select("*");

// if (tfError) console.log(tfError);
// else {
//   tfQuestions.forEach((tfq) => {
//     Showquestion.innerHTML += `
//       <div class="w-full bg-white/60 backdrop-blur-lg border border-white/30 mt-8 shadow-2xl 
//                   rounded-2xl p-6 space-y-6 hover:shadow-purple-500/30 transition-all duration-300">

//         <h2 class="text-2xl font-bold text-purple-700 drop-shadow">
//           ${questionNumber++}. ${tfq.tfques}
//         </h2>

//         <div class="space-y-3">
//           <label class="flex items-center gap-3 p-3 border rounded-xl bg-white/70 
//                         hover:bg-purple-100 cursor-pointer transition-all duration-300 shadow">
//             <input type="radio" name="tf${tfq.id}" value="true">
//             <span>True</span>
//           </label>

//           <label class="flex items-center gap-3 p-3 border rounded-xl bg-white/70 
//                         hover:bg-purple-100 cursor-pointer transition-all duration-300 shadow">
//             <input type="radio" name="tf${tfq.id}" value="false">
//             <span> False</span>
//           </label>
//         </div>
//       </div>
//     `;
//   });
// }

// // --------------------------- Submit Button
// subResBtn && subResBtn.addEventListener("click", async () => {
//   if (!user_id) {
//     alert("Please login first!");
//     return;
//   }

//   try {
//     // --------------------------- Submit MCQ answers
//     for (let quest of quests) {
//       let selected = document.querySelector(`input[name="q${quest.id}"]:checked`);
//       await supabase.from("UserResponses").insert({
//         username: user_name,
//         useremail: user_email,
//         question_id: quest.id,
//         answer: selected?.value || "",
//         user_id: user_id
//       });
//     }

//     // --------------------------- Submit True/False answers
//     for (let tfq of tfQuestions) {
//       let selected = document.querySelector(`input[name="tf${tfq.id}"]:checked`);
//       await supabase.from("UserResponses").insert({
//         username: user_name,
//         useremail: user_email,
//         question_id: tfq.id,
//         answer: selected?.value || "",
//         user_id: user_id
//       });
//     }

//     alert("Form submitted successfully!");
//   } catch (error) {
//     console.log(error);
//     alert("Error submitting form!");
//   }
// });

// // --------------------------- Logout
// let userlogout = document.getElementById("userlogout");
// userlogout && userlogout.addEventListener("click", async () => {
//   const { error } = await supabase.auth.signOut();
//   if (error) console.log(error);
//   else location.href = "index.html";
// });






















import supabase from "./config.js";
let Showquestion = document.getElementById("showQuestion");
let subResBtn = document.getElementById("subResBtn");
let username = document.getElementById("username");
let useremail = document.getElementById("useremail");

// Start button
let startbtn = document.getElementById("startbtn");
startbtn && startbtn.addEventListener("click", (e) => {
  e.preventDefault();
  location.href = "user.html";
});

// --------------------------- Get Logged User
const { data: userData, error: userError } = await supabase.auth.getUser();
if (userError) console.log("User error:", userError);

const user_id = userData?.user?.id;
const user_name = userData?.user?.user_metadata?.name;
const user_email = userData?.user?.user_metadata?.email;

username.innerHTML = user_name;
useremail.innerHTML = user_email;

// --------------------------- Fetch MCQ questions
const { data: quests, error: mcqError } = await supabase
  .from("MultipleQuestion")
  .select("*");

let questionNumber = 1;

if (mcqError) console.log(mcqError);
else {
  quests.forEach((quest) => {
    let options = [quest.option1, quest.option2, quest.option3, quest.option4];
    let letters = ["A", "B", "C", "D"];

    Showquestion.innerHTML += `
      <div class="w-full bg-white/60 backdrop-blur-lg border border-white/30 mt-8 shadow-2xl 
                  rounded-2xl p-6 space-y-6 hover:shadow-purple-500/30 transition-all duration-300">

        <h2 class="text-2xl font-bold text-purple-700 drop-shadow">
          ${questionNumber++}. ${quest.question}
        </h2>

        <div class="space-y-3">
          ${options
            .map(
              (opt, i) => `
              <label class="flex items-center gap-3 p-3 border rounded-xl bg-white/70 
                            hover:bg-purple-100 cursor-pointer transition-all duration-300 shadow">
                <input type="radio" name="q${quest.id}" value="${opt}">
                <span class="text-gray-800 font-medium"><b>${letters[i]}.</b> ${opt}</span>
              </label>`
            )
            .join("")}
        </div>
      </div>
    `;
  });
}

// --------------------------- Fetch True/False questions
const { data: tfQuestions, error: tfError } = await supabase
  .from("True-false-question")
  .select("*");

if (tfError) console.log(tfError);
else {
  tfQuestions.forEach((tfq) => {
    Showquestion.innerHTML += `
      <div class="w-full bg-white/60 backdrop-blur-lg border border-white/30 mt-8 shadow-2xl 
                  rounded-2xl p-6 space-y-6 hover:shadow-purple-500/30 transition-all duration-300">

        <h2 class="text-2xl font-bold text-purple-700 drop-shadow">
          ${questionNumber++}. ${tfq.tfques}
        </h2>

        <div class="space-y-3">
          <label class="flex items-center gap-3 p-3 border rounded-xl bg-white/70 
                        hover:bg-purple-100 cursor-pointer transition-all duration-300 shadow">
            <input type="radio" name="tf${tfq.id}" value="true">
            <span>True</span>
          </label>

          <label class="flex items-center gap-3 p-3 border rounded-xl bg-white/70 
                        hover:bg-purple-100 cursor-pointer transition-all duration-300 shadow">
            <input type="radio" name="tf${tfq.id}" value="false">
            <span> False</span>
          </label>
        </div>
      </div>
    `;
  });
}

// --------------------------- Submit Button
subResBtn && subResBtn.addEventListener("click", async () => {
  if (!user_id) {
    Swal.fire({
      icon: "warning",
      title: "Login Required",
      text: "Please login first!",
      confirmButtonColor: "#6366f1",
    });
    return;
  }

  try {
    // --------------------------- Submit MCQ answers
    for (let quest of quests) {
      let selected = document.querySelector(`input[name="q${quest.id}"]:checked`);
      await supabase.from("UserResponses").insert({
        username: user_name,
        useremail: user_email,
        question_id: quest.id,
        answer: selected?.value || "",
        user_id: user_id,
      });
    }

    // --------------------------- Submit True/False answers
    for (let tfq of tfQuestions) {
      let selected = document.querySelector(`input[name="tf${tfq.id}"]:checked`);
      await supabase.from("UserResponses").insert({
        username: user_name,
        useremail: user_email,
        question_id: tfq.id,
        answer: selected?.value || "",
        user_id: user_id,
      });
    }

    Swal.fire({
      icon: "success",
      title: "Submitted!",
      text: "Form submitted successfully!",
      confirmButtonColor: "#6366f1",
    });
  } catch (error) {
    console.log(error);
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Error submitting form!",
      confirmButtonColor: "#f87171",
    });
  }
});

// --------------------------- Logout
let userlogout = document.getElementById("userlogout");
userlogout &&
  userlogout.addEventListener("click", async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.log(error);
    else {
      Swal.fire({
        icon: "success",
        title: "Logged Out",
        text: "You have been logged out successfully.",
        confirmButtonColor: "#6366f1",
      }).then(() => {
        location.href = "index.html";
      });
    }
  });
