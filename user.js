

// import supabase from "./config.js";

// let Showquestion = document.getElementById("showQuestion");
// let submitBtn = document.getElementById("submitBtn");
//  let username = document.getElementById("username")
//    let useremail = document.getElementById("useremail")


// // ---------------------------user get

// const { data: userData, error: userError } = await supabase.auth.getUser();

// if (userError) {
//   console.log("User error:", userError,userData);
// }

// const user_id = userData?.user?.id;  // REAL USER ID
// console.log("Logged In User ID:", user_id,userData);
// const user_name = userData?.user?.user_metadata?.name; 
// username.innerHTML=user_name
// console.log(user_name);

// const user_email = userData?.user?.user_metadata?.email; 
// username.innerHTML=user_email
// console.log(user_email );


// // --------------------fetch data
// const { data: questions, error } = await supabase
//   .from("MultipleQuestion")
//   .select("*");

// if (error) {
//   console.log(error);
// } else {
//   questions.forEach((quest) => {
//     Showquestion.innerHTML += `
//       <div class=" w-[580px] bg-white mt-8   shadow-lg rounded p-6 space-y-6">
//         <h2 class="text-xl font-semibold">${quest.question}</h2>

//         <div class="space-y-3">
//             <label class="flex items-center gap-3 p-3 border rounded">
//               <input type="radio" name="q${quest.id}" value="${quest.option1}">
//               <span>${quest.option1}</span>
//             </label>

//             <label class="flex items-center gap-3 p-3 border rounded">
//               <input type="radio" name="q${quest.id}" value="${quest.option2}">
//               <span>${quest.option2}</span>
//             </label>

//             <label class="flex items-center gap-3 p-3 border rounded">
//               <input type="radio" name="q${quest.id}" value="${quest.option3}">
//               <span>${quest.option3}</span>
//             </label>

//             <label class="flex items-center gap-3 p-3 border rounded">
//               <input type="radio" name="q${quest.id}" value="${quest.option4}">
//               <span>${quest.option4}</span>
//             </label>
//         </div>
//       </div>
//     `;
//   });
// }

// //  SUBMIT BUTTON 

// submitBtn && submitBtn.addEventListener("click", async () => {

//   if (!user_id) {
//     alert("Please login first, user not found!");
//     return;
//   }

//   let responses = [];

//   questions.forEach((quest) => {
//     let selected = document.querySelector(`input[name="q${quest.id}"]:checked`);
//     if (selected) {
//       responses.push({
//         question_id: quest.id,
//         answer: selected.value,
//         user_id: user_id  
//       });
//     }
//   });

//   console.log("User Responses: ", responses);

//   // Insert Into Supabase
//   const { error } = await supabase
//     .from("UserResponses")
//     .insert(responses);

//   if (error) {
//     alert("Error submitting!");
//     console.log(error);
//   } else {
//     alert("Form submitted successfully!");
//     quest.question=""
//     quest.option1=""
//     quest.option2=""
//     quest.option3=""
//     quest.option4=""

//   }
// });







// -------------------------check










import supabase from "./config.js";

let Showquestion = document.getElementById("showQuestion");
let subResBtn = document.getElementById("subResBtn");
let username = document.getElementById("username")
let useremail = document.getElementById("useremail")


// ---------------------------user get

const { data: userData, error: userError } = await supabase.auth.getUser();

if (userError) {
  console.log("User error:", userError, userData);
}

const user_id = userData?.user?.id;  // REAL USER ID
console.log("Logged In User ID:", user_id, userData);
const user_name = userData?.user?.user_metadata?.name;
username.innerHTML = user_name
console.log(user_name);

const user_email = userData?.user?.user_metadata?.email;
useremail.innerHTML = user_email
console.log(user_email);


// --------------------fetch data
const { data: quests, error } = await supabase
  .from("MultipleQuestion")
  .select("*");

if (error) {
  console.log(error);
} else {
  quests.forEach((quest) => {
   Showquestion.innerHTML += `
  <div class="w-full bg-white/60 backdrop-blur-lg border border-white/30 mt-8 shadow-2xl 
              rounded-2xl p-6 space-y-6 hover:shadow-purple-500/30 transition-all duration-300">

    <h2 class="text-2xl font-bold text-purple-700 drop-shadow">${quest.question}</h2>

    <div class="space-y-3">

      <label class="flex items-center gap-3 p-3 border rounded-xl bg-white/70 
                    hover:bg-purple-100 cursor-pointer transition-all duration-300 shadow">
        <input type="radio" name="q${quest.id}" value="${quest.option1}">
        <span class="text-gray-800 font-medium">${quest.option1}</span>
      </label>

      <label class="flex items-center gap-3 p-3 border rounded-xl bg-white/70 
                    hover:bg-blue-100 cursor-pointer transition-all duration-300 shadow">
        <input type="radio" name="q${quest.id}" value="${quest.option2}">
        <span class="text-gray-800 font-medium">${quest.option2}</span>
      </label>

      <label class="flex items-center gap-3 p-3 border rounded-xl bg-white/70 
                    hover:bg-green-100 cursor-pointer transition-all duration-300 shadow">
        <input type="radio" name="q${quest.id}" value="${quest.option3}">
        <span class="text-gray-800 font-medium">${quest.option3}</span>
      </label>

      <label class="flex items-center gap-3 p-3 border rounded-xl bg-white/70 
                    hover:bg-yellow-100 cursor-pointer transition-all duration-300 shadow">
        <input type="radio" name="q${quest.id}" value="${quest.option4}">
        <span class="text-gray-800 font-medium">${quest.option4}</span>
      </label>

    </div>
  </div>
`;

  });
}

//  SUBMIT BUTTON 

subResBtn && subResBtn.addEventListener("click", async () => {


  if (!user_id) {
    alert("Please login first, user not found!");
    return;
  }

  let responses = [];

  quests.forEach( async(quest) => {
    let selected = document.querySelector(`input[name="q${quest.id}"]:checked`);
    // if (selected) {
    //   responses.push({

    //   });
    // }


    console.log("User Responses: ", responses);

    // Insert Into Supabase

    const { error } = await supabase
      .from("UserResponses")
      .insert({

        username: user_name,
        useremail: user_email,
        question_id: quest.id,
        answer: selected.value,
        user_id: user_id

      });
  });



  if (error) {
    alert("Error submitting!");
    console.log(error);
  } else {
    alert("Form submitted successfully!");
    quests.question = ""
    quests.option1 = ""
    quests.option2 = ""
    quests.option3 = ""
    quests.option4 = ""

  }
});

