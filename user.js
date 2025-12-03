
// // -------------------------check



// import supabase from "./config.js";

// let Showquestion = document.getElementById("showQuestion");
// let subResBtn = document.getElementById("subResBtn");
// let username = document.getElementById("username")
// let useremail = document.getElementById("useremail")


// // ---------------------------user get

// const { data: userData, error: userError } = await supabase.auth.getUser();

// if (userError) {
//   console.log("User error:", userError, userData);
// }

// const user_id = userData?.user?.id;  // REAL USER ID
// // console.log("Logged In User ID:", user_id, userData);
// const user_name = userData?.user?.user_metadata?.name;
// username.innerHTML = user_name
// console.log(user_name);

// const user_email = userData?.user?.user_metadata?.email;
// useremail.innerHTML = user_email
// console.log(user_email);


// // --------------------fetch data
// const { data: quests, error } = await supabase
//   .from("MultipleQuestion")
//   .select("*");

// if (error) {
//   console.log(error);
// } else {
//   quests.forEach((quest) => {
//     Showquestion.innerHTML += `
//   <div class="w-full bg-white/60 backdrop-blur-lg border border-white/30 mt-8 shadow-2xl 
//               rounded-2xl p-6 space-y-6 hover:shadow-purple-500/30 transition-all duration-300">

//     <h2 class="text-2xl font-bold text-purple-700 drop-shadow">${quest.question}</h2>

//     <div class="space-y-3">

//       <label class="flex items-center gap-3 p-3 border rounded-xl bg-white/70 
//                     hover:bg-purple-100 cursor-pointer transition-all duration-300 shadow">
//         <input type="radio" name="q${quest.id}" value="${quest.option1}">
//         <span class="text-gray-800 font-medium">${quest.option1}</span>
//       </label>

//       <label class="flex items-center gap-3 p-3 border rounded-xl bg-white/70 
//                     hover:bg-blue-100 cursor-pointer transition-all duration-300 shadow">
//         <input type="radio" name="q${quest.id}" value="${quest.option2}">
//         <span class="text-gray-800 font-medium">${quest.option2}</span>
//       </label>

//       <label class="flex items-center gap-3 p-3 border rounded-xl bg-white/70 
//                     hover:bg-green-100 cursor-pointer transition-all duration-300 shadow">
//         <input type="radio" name="q${quest.id}" value="${quest.option3}">
//         <span class="text-gray-800 font-medium">${quest.option3}</span>
//       </label>

//       <label class="flex items-center gap-3 p-3 border rounded-xl bg-white/70 
//                     hover:bg-yellow-100 cursor-pointer transition-all duration-300 shadow">
//         <input type="radio" name="q${quest.id}" value="${quest.option4}">
//         <span class="text-gray-800 font-medium">${quest.option4}</span>
//       </label>

//     </div>
//   </div>
// `;

//   });
// }

// //  SUBMIT BUTTON 

// subResBtn && subResBtn.addEventListener("click", async () => {


//   if (!user_id) {
//     alert("Please login first, user not found!");
//     return;
//   }

//   let responses = [];

//   quests.forEach(async (quest) => {
//     let selected = document.querySelector(`input[name="q${quest.id}"]:checked`);

//     console.log("User Responses: ", responses);

//     // Insert Into Supabase

//     const { error } = await supabase
//       .from("UserResponses")
//       .insert({

//         username: user_name,
//         useremail: user_email,
//         question_id: quest.id,
//         answer: selected.value,
//         user_id: user_id

//       });
//   });



//   if (error) {
//     alert("Error submitting!");
//     console.log(error);
//   } else {
//     alert("Form submitted successfully!");
//     quests.question.value = ""
//     quests.option1.value = ""
//     quests.option2.value = ""
//     quests.option3.value = ""
//     quests.option4.value = ""

//   }
// });



// // let tfques = document.getElementById("tfques")

// // // true false question

// // async function tfquestion(params) {
// //   try {
// //     const { data: trufalques, error } = await supabase
// //       .from("True-false-question")
// //       .select("*");

// //       if (error) {
// //          console.log(error);
// //          return
// //       }
      
// //       trufalques.forEach((tfq)=>{
// //         tfques.innerHTML +=`
// //         <h2 class="text-2xl font-bold text-purple-700 drop-shadow">${tfq.tfques}</h2>
// //                <h2 class="text-2xl font-bold text-purple-700 drop-shadow">${tfq.tfcorrect}</h2>
// //         `
// //       })


// //   } catch (error) {
// //     console.log(error);

// //   }
// // }
// // tfquestion()



// let tfques = document.getElementById("tfques");

// async function tfquestion() {
//   try {
//     const { data: trufalques, error } = await supabase
//       .from("True-false-question")
//       .select("*");

//     if (error) {
//       console.log(error);
//       return;
//     }

//     trufalques.forEach((tfq) => {
//     tfques.innerHTML = `
//     <h2 class="text-2xl font-bold text-purple-700 mb-4">
//       ${tfq.tfques}
//     </h2>

//     <div class="flex gap-6 text-lg">

//       <label class="flex items-center gap-2">
//         <input type="radio" name="tf" value="true" class="w-5 h-5">
//           ${tfq.tfcorrect}
//       </label>

//       <label class="flex items-center gap-2">
//         <input type="radio" name="tf" value="false" class="w-5 h-5">
//           ${tfq.tfcorrect}
//       </label>

//     </div>
//   `;

//     });

//   } catch (error) {
//     console.log(error);
//   }
// }

// tfquestion();


// // logout 

// let userlogout = document.getElementById("userlogout")

// userlogout && userlogout.addEventListener("click", async () => {

//   const { error } = await supabase.auth.signOut()
//   if (error) {
//     console.log(error);

//   } else {
//     location.href = 'index.html'
//   }
// })

























import supabase from "./config.js";

let Showquestion = document.getElementById("showQuestion");
let subResBtn = document.getElementById("subResBtn");
let username = document.getElementById("username");
let useremail = document.getElementById("useremail");

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

if (mcqError) console.log(mcqError);
else {
  quests.forEach((quest) => {
    Showquestion.innerHTML += `
    <div class="w-full bg-white/60 backdrop-blur-lg border border-white/30 mt-8 shadow-2xl 
                rounded-2xl p-6 space-y-6 hover:shadow-purple-500/30 transition-all duration-300">

      <h2 class="text-2xl font-bold text-purple-700 drop-shadow">${quest.question}</h2>

      <div class="space-y-3">
        ${[quest.option1, quest.option2, quest.option3, quest.option4]
          .map(
            (opt) => `
            <label class="flex items-center gap-3 p-3 border rounded-xl bg-white/70 
                          hover:bg-purple-100 cursor-pointer transition-all duration-300 shadow">
              <input type="radio" name="q${quest.id}" value="${opt}">
              <span class="text-gray-800 font-medium">${opt}</span>
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

      <h2 class="text-2xl font-bold text-purple-700 drop-shadow">${tfq.tfques}</h2>

      <div class="flex gap-6 text-lg">
        <label class="flex items-center gap-2">
          <input type="radio" name="tf${tfq.id}" value="true" class="w-5 h-5">
          True
        </label>
        <label class="flex items-center gap-2">
          <input type="radio" name="tf${tfq.id}" value="false" class="w-5 h-5">
          False
        </label>
      </div>
    </div>
  `;
  });
}

// --------------------------- Submit Button
subResBtn && subResBtn.addEventListener("click", async () => {
  if (!user_id) {
    alert("Please login first!");
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
        user_id: user_id
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
        user_id: user_id
      });
    }

    alert("Form submitted successfully!");
  } catch (error) {
    console.log(error);
    alert("Error submitting form!");
  }
});

// --------------------------- Logout
let userlogout = document.getElementById("userlogout");
userlogout && userlogout.addEventListener("click", async () => {
  const { error } = await supabase.auth.signOut();
  if (error) console.log(error);
  else location.href = "index.html";
});
