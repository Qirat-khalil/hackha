
// import supabase from "./config.js";

// let question = document.getElementById("mq");
// let opt1 = document.getElementById("ma");
// let opt2 = document.getElementById("mb");
// let opt3 = document.getElementById("mc");
// let opt4 = document.getElementById("md");
// let correctAnswer = document.getElementById("mcorrect");
// let saveBtn = document.getElementById("saveBtn1");
// let datashow = document.getElementById("datashow");
// let showscreen =document.getElementById("showscreen")
// let addquestion = document.getElementById("addquestion")


//   // hiden show add question

// addquestion.addEventListener("click",()=>{    
//     showscreen.classList.toggle("hidden")
 
// })

// // Insert Question
// saveBtn.addEventListener("click", async (e) => {
//   e.preventDefault();

//   const qText = question.value;
//   const a = opt1.value;
//   const b = opt2.value;
//   const c = opt3.value;
//   const d = opt4.value;
//   const correct = correctAnswer.value;

//   try {
//     const { error } = await supabase.from("MultipleQuestion").insert({
//       question: qText,
//       correctanswer: correct,
//       option1: a,
//       option2: b,
//       option3: c,
//       option4: d,
//     });

//     if (error) {
//       alert("Insert failed!");
//     } else {
//       alert("Question Added Successfully");
//       question.value = "";
//       opt1.value = "";
//       opt2.value = "";
//       opt3.value = "";
//       opt4.value = "";
//       correctAnswer.value = "";
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });


// // Get Logged User
// const { data: userData, error: userError } = await supabase.auth.getUser();
// if (userError) console.log("User error:", userError);

// // const user_id = userData?.user?.id;
// // const user_name = userData?.user?.user_metadata?.name;
// // const user_email = userData?.user?.user_metadata?.email;

// // Load User Responses
// async function useRespon() {
//   try {
//     // 1️⃣ Fetch user responses
//     const { data: responses, error: userRespError } = await supabase
//       .from("UserResponses")
//       .select("*");

//     if (userRespError) {
//       console.log(userRespError);
//       return;
//     }

//     // 2️⃣ Fetch all MCQ questions
//     const { data: mcqQues } = await supabase.from("MultipleQuestion").select("*");

//     // 3️⃣ Fetch all True/False questions
//     const { data: tfQues } = await supabase.from("True-false-question").select("*");

//     datashow.innerHTML = `
//       <div class="mt-10 bg-white/60 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/30">
//         <h2 class="text-2xl font-bold text-purple-700 mb-4 text-center drop-shadow">
//           📋 User Responses & Results
//         </h2>
//         <table class="w-full rounded-2xl overflow-hidden shadow-xl">
//           <thead class="bg-gradient-to-r from-purple-500 to-emerald-500 text-white text-lg">
//             <tr>
//               <th class="p-4 border border-white/20">User ID</th>
//               <th class="p-4 border border-white/20">User Name</th>
//               <th class="p-4 border border-white/20">User Email</th>
              
//               <th class="p-4 border border-white/20">Correct Answer</th>
//               <th class="p-4 border border-white/20">User Answer</th>
//               <th class="p-4 border border-white/20">Result</th>
//             </tr>
//           </thead>
//           <tbody id="dataRows" class="text-slate-800 text-md bg-white/70 backdrop-blur-xl"></tbody>
//         </table>
//       </div>
//     `;
// {/* <th class="p-4 border border-white/20">Question Type</th> */}
//     let tableBody = document.getElementById("dataRows");

//     responses.forEach((res) => {
//       // Determine correct answer
//       let correct;
//       let type;

//       let mcq = mcqQues.find((q) => q.id === res.question_id);
//       let tf = tfQues.find((q) => q.id === res.question_id);

//       if (mcq) {
//         correct = mcq.correctanswer;
//         type = "MCQ";
//       } else if (tf) {
//         correct = String(tf.tfcorrect);
//         type = "True/False";
//       }

//       let result = String(res.answer) === String(correct) ? "PASS" : "FAIL";

//       tableBody.innerHTML += `
//         <tr class="hover:bg-purple-100 transition-all duration-300">
//           <td class="border p-3">${res.user_id}</td>
//           <td class="border p-3">${res.username}</td>
//           <td class="border p-3">${res.useremail}</td>
          
//           <td class="border p-3">${correct}</td>
//           <td class="border p-3">${res.answer}</td>
//           <td class="border p-3 font-semibold ${result === "PASS" ? "text-green-600" : "text-red-600"}">
//             ${result}
//           </td>
//         </tr>
//       `;
//     });

//   } catch (error) {
//     console.log(error);
//   }
// }

// useRespon();


// // logout functionailty

// let adminlogout = document.getElementById("adminlogout")

// adminlogout && adminlogout.addEventListener("click", async()=>{

//     const { error } = await supabase.auth.signOut()
//     if (error) {
//         console.log(error);
        
//     }else{
//       location.href = 'index.html'
//     }
// })

// //  true false question
// let trufalquse = document.getElementById("trufalquse");
// let tfCorrect = document.getElementById("tfCorrect");
// let saveBtn2 = document.getElementById("saveBtn2");

// saveBtn2 && saveBtn2.addEventListener("click", async (e) => {
//   e.preventDefault();

//   let tfQuesValue = trufalquse.value;
//   let tfCorrectValue = tfCorrect.value;

//   try {
//     const { error } = await supabase.from("True-false-question").insert({
//       tfques: tfQuesValue,
//       tfcorrect: tfCorrectValue,
//     });

//     if (error) {
//       console.log(error);
//       alert("Insert Failed!");
//       return;
//     }

//     alert("Successfully Added ✔");

//     trufalquse.value = "";
//     tfCorrect.value = "";

//   } catch (error) {
//     console.log(error);
//   }
// });




// //-------------------------------- user Detail pgae

// let userResdetail = document.getElementById("userResdetail")
// let responseContainer = document.getElementById("responseContainer")



// userResdetail && userResdetail.addEventListener("click",(e)=>{
//   e.preventDefault()
//     location.href="userDetail.html"
//     // Load User Responses
// async function useResponse() {
//   try {
//     // 1️⃣ Fetch user responses
//     const { data: responses, error: userRespError } = await supabase
//       .from("UserResponses")
//       .select("*");

//     if (userRespError) {
//       console.log(userRespError);
//       return;
//     }

//     // 2️⃣ Fetch all MCQ questions
//     const { data: mcqQues } = await supabase.from("MultipleQuestion").select("*");

//     // 3️⃣ Fetch all True/False questions
//     const { data: tfQues } = await supabase.from("True-false-question").select("*");

//     responseContainer.innerHTML = `
//       <div class="mt-10 bg-white/60 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/30">
//         <h2 class="text-2xl font-bold text-purple-700 mb-4 text-center drop-shadow">
//           📋 User Responses & Results
//         </h2>
//         <table class="w-full rounded-2xl overflow-hidden shadow-xl">
//           <thead class="bg-gradient-to-r from-purple-500 to-emerald-500 text-white text-lg">
//             <tr>
//               <th class="p-4 border border-white/20">User ID</th>
//               <th class="p-4 border border-white/20">User Name</th>
//               <th class="p-4 border border-white/20">User Email</th>
              
//               <th class="p-4 border border-white/20">Correct Answer</th>
//               <th class="p-4 border border-white/20">User Answer</th>
//               <th class="p-4 border border-white/20">Result</th>
//             </tr>
//           </thead>
//           <tbody id="dataRows" class="text-slate-800 text-md bg-white/70 backdrop-blur-xl"></tbody>
//         </table>
//       </div>
//     `;
// {/* <th class="p-4 border border-white/20">Question Type</th> */}
//     let tableBody = document.getElementById("dataRows");

//     responses.forEach((res) => {
//       // Determine correct answer
//       let correct;
//       let type;

//       let mcq = mcqQues.find((q) => q.id === res.question_id);
//       let tf = tfQues.find((q) => q.id === res.question_id);

//       if (mcq) {
//         correct = mcq.correctanswer;
//         type = "MCQ";
//       } else if (tf) {
//         correct = String(tf.tfcorrect);
//         type = "True/False";
//       }

//       let result = String(res.answer) === String(correct) ? "PASS" : "FAIL";

//       tableBody.innerHTML += `
//         <tr class="hover:bg-purple-100 transition-all duration-300">
//           <td class="border p-3">${res.user_id}</td>
//           <td class="border p-3">${res.username}</td>
//           <td class="border p-3">${res.useremail}</td>
          
//           <td class="border p-3">${correct}</td>
//           <td class="border p-3">${res.answer}</td>
//           <td class="border p-3 font-semibold ${result === "PASS" ? "text-green-600" : "text-red-600"}">
//             ${result}
//           </td>
//         </tr>
//       `;
//     });

//   } catch (error) {
//     console.log(error);
//   }
// }

// useResponse();

// })


// // if (correct === show.answer){
// //   console.log("pass");
  
// // }





















// import supabase from "./config.js";

// let datashow = document.getElementById("datashow");

// // Load All User Responses (Grouped by User)
// async function loadUsersTable() {
//   try {
//     // Fetch all responses
//     const { data: responses, error } = await supabase
//       .from("UserResponses")
//       .select("*");

//     if (error) {
//       console.log(error);
//       return;
//     }

//     // Group responses by user_id
//     let userMap = {};

//     responses.forEach((res) => {
//       if (!userMap[res.user_id]) {
//         userMap[res.user_id] = {
//           user_id: res.user_id,
//           username: res.username,
//           useremail: res.useremail,
//           results: []
//         };
//       }

//       userMap[res.user_id].results.push(res);
//     });

//     datashow.innerHTML = `
//       <table class="w-full border mt-10">
//         <thead class="bg-purple-600 text-white">
//           <tr>
//             <th class="p-3">User ID</th>
//             <th class="p-3">Name</th>
//             <th class="p-3">Email</th>
//             <th class="p-3">Status</th>
//             <th class="p-3">Details</th>
//           </tr>
//         </thead>
//         <tbody id="userRows"></tbody>
//       </table>
//     `;

//     let row = document.getElementById("userRows");

//     Object.values(userMap).forEach((user) => {

//       // Calculate result summary
//       let total = user.results.length;
//       let pass = 0;

//       user.results.forEach((ans) => {
//         if (ans.answer === ans.correct_answer) pass++;
//       });

//       let status = pass === total ? "PASS" : "FAIL";

//       row.innerHTML += `
//         <tr class="border">
//           <td class="p-3">${user.user_id}</td>
//           <td class="p-3">${user.username}</td>
//           <td class="p-3">${user.useremail}</td>
//           <td class="p-3 font-bold ${status === "PASS" ? "text-green-600" : "text-red-600"}">
//             ${status}
//           </td>
//           <td class="p-3">
//             <button class="bg-blue-600 text-white p-2 rounded"
//               onclick="viewUserDetails('${user.user_id}')">
//               View Details
//             </button>
//           </td>
//         </tr>
//       `;
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }

// loadUsersTable();

// // Save user_id and go to userDetail.html
// window.viewUserDetails = (user_id) => {
//   localStorage.setItem("selected_user_id", user_id);
//   location.href = "userDetail.html";
// };






// // -------------------userdeatl





// let responseContainer = document.getElementById("responseContainer");

// // Get selected user ID
// let user_id = localStorage.getItem("selected_user_id");

// if (!user_id) {
//   responseContainer.innerHTML = "<h2>No User Selected!</h2>";
// }

// // Load User Details
// async function loadUserDetails() {
//   try {
//     const { data: responses } = await supabase
//       .from("UserResponses")
//       .select("*")
//       .eq("user_id", user_id);

//     const { data: mcqQues } = await supabase
//       .from("MultipleQuestion")
//       .select("*");

//     const { data: tfQues } = await supabase
//       .from("True-false-question")
//       .select("*");

//     let user = responses[0];

//     responseContainer.innerHTML = `
//       <h2 class="text-4xl font-bold text-purple-800 mb-2">User Details</h2>
      
//       <div class="bg-white/40 p-4 rounded-xl border border-purple-200 shadow-sm mb-5">
//         <p class="text-lg"><b class="text-purple-700">Name:</b> ${user.username}</p>
//         <p class="text-lg"><b class="text-purple-700">Email:</b> ${user.useremail}</p>
//       </div>

//       <h3 class="text-2xl font-bold text-purple-900 mt-5 mb-3">Responses</h3>

//       <div class="overflow-x-auto rounded-xl shadow-lg">
//         <table class="w-full text-left border-collapse backdrop-blur bg-white/40">
//           <thead class="bg-purple-600 text-white">
//             <tr>
//               <th class="p-4">Question</th>
//               <th class="p-4">Correct Answer</th>
//               <th class="p-4">User Answer</th>
//               <th class="p-4">Result</th>
//               <th class="p-4">Delete</th>
//             </tr>
//           </thead>
//           <tbody id="responseRows" class="backdrop-blur-xl text-purple-900">
//           </tbody>
//         </table>
//       </div>
//     `;

//     let row = document.getElementById("responseRows");

//     responses.forEach((res) => {
//       let question, correct;

//       let mcq = mcqQues.find((q) => q.id === res.question_id);
//       let tf = tfQues.find((q) => q.id === res.question_id);

//       if (mcq) {
//         question = mcq.question;
//         correct = mcq.correctanswer;
//       } else if (tf) {
//         question = tf.tfques;
//         correct = String(tf.tfcorrect);
//       }

//       let status = res.answer === correct ? "PASS" : "FAIL";

//       row.innerHTML += `
//         <tr class="border-b border-purple-200 hover:bg-purple-100/50 transition">
//           <td class="p-4">${question}</td>
//           <td class="p-4 font-semibold">${correct}</td>
//           <td class="p-4">${res.answer}</td>

//           <td class="p-4">
//             <span class="px-3 py-1 text-sm font-semibold rounded-full 
//               ${status === "PASS"
//                 ? "bg-green-200 text-green-700"
//                 : "bg-red-200 text-red-700"}">
//               ${status}
//             </span>
//           </td>

//           <td class="p-4">
//             <button 
//               class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow"
//               onclick="deleteResponse(${res.id})">
//               Delete
//             </button>
//           </td>
//         </tr>
//       `;
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

// loadUserDetails();

// // DELETE FUNCTION
// window.deleteResponse = async (id) => {
//   const { error } = await supabase.from("UserResponses").delete().eq("id", id);

//   if (error) {
//     alert("Delete Failed!");
//   } else {
//     alert("Deleted Successfully");
//     location.reload();
//   }
// };



























import supabase from "./config.js";

// ----------------------- ELEMENTS -------------------------
let datashow = document.getElementById("datashow");
let showscreen = document.getElementById("showscreen");
let addquestion = document.getElementById("addquestion");

// Toggle Add Question Screen
addquestion && addquestion.addEventListener("click", () => {
  showscreen.classList.toggle("hidden");
});

// ----------------------- MCQ ADD -------------------------
let question = document.getElementById("mq");
let opt1 = document.getElementById("ma");
let opt2 = document.getElementById("mb");
let opt3 = document.getElementById("mc");
let opt4 = document.getElementById("md");
let correctAnswer = document.getElementById("mcorrect");
let saveBtn1 = document.getElementById("saveBtn1");

saveBtn1 &&
  saveBtn1.addEventListener("click", async (e) => {
    e.preventDefault();

    let qText = question.value.trim();
    let a = opt1.value.trim();
    let b = opt2.value.trim();
    let c = opt3.value.trim();
    let d = opt4.value.trim();
    let correct = correctAnswer.value.trim();

    if (!qText || !a || !b || !c || !d || !correct) {
      Swal.fire({ icon: "warning", title: "All fields are required!" });
      return;
    }

    const { error } = await supabase.from("MultipleQuestion").insert({
      question: qText,
      correctanswer: correct,
      option1: a,
      option2: b,
      option3: c,
      option4: d,
    });

    if (error) {
      Swal.fire({ icon: "error", title: "Insert Failed!", text: error.message });
    } else {
      Swal.fire({ icon: "success", title: "MCQ Added ✔", showConfirmButton: false, timer: 1500 });
      question.value = opt1.value = opt2.value = opt3.value = opt4.value = correctAnswer.value = "";
    }
  });

// ----------------------- TRUE/FALSE ADD -------------------------
let trufalquse = document.getElementById("trufalquse");
let tfCorrect = document.getElementById("tfCorrect");
let saveBtn2 = document.getElementById("saveBtn2");

saveBtn2 &&
  saveBtn2.addEventListener("click", async (e) => {
    e.preventDefault();

    let tfQuesValue = trufalquse.value.trim();
    let tfCorrectValue = tfCorrect.value.trim();

    if (!tfQuesValue || !tfCorrectValue) {
      Swal.fire({ icon: "warning", title: "All fields are required!" });
      return;
    }

    const { error } = await supabase.from("True-false-question").insert({
      tfques: tfQuesValue,
      tfcorrect: tfCorrectValue,
    });

    if (error) {
      Swal.fire({ icon: "error", title: "Insert Failed!", text: error.message });
    } else {
      Swal.fire({ icon: "success", title: "True/False Question Added ✔", showConfirmButton: false, timer: 1500 });
      trufalquse.value = tfCorrect.value = "";
    }
  });

// ----------------------- LOAD USERS TABLE -------------------------
async function loadUsersTable() {
  if (!datashow) return; // exit if datashow does not exist on this page

  try {
    const { data: responses, error } = await supabase.from("UserResponses").select("*");
    if (error) throw error;

    let userMap = {};
    responses.forEach((res) => {
      if (!userMap[res.user_id]) {
        userMap[res.user_id] = { user_id: res.user_id, username: res.username, useremail: res.useremail, results: [] };
      }
      userMap[res.user_id].results.push(res);
    });

    datashow.innerHTML = `
      <table class="w-full border mt-10">
        <thead class="bg-purple-600 text-white">
          <tr>
            <th class="p-3">User ID</th>
            <th class="p-3">Name</th>
            <th class="p-3">Email</th>
            <th class="p-3">Status</th>
            <th class="p-3">Details</th>
          </tr>
        </thead>
        <tbody id="userRows"></tbody>
      </table>
    `;

    let row = document.getElementById("userRows");

    Object.values(userMap).forEach((user) => {
      let total = user.results.length;
      let pass = user.results.filter(ans => ans.answer == ans.correct_answer).length;
      let status = pass === total ? "PASS" : "FAIL";

      row.innerHTML += `
        <tr class="border">
          <td class="p-3">${user.user_id}</td>
          <td class="p-3">${user.username}</td>
          <td class="p-3">${user.useremail}</td>
          <td class="p-3 font-bold ${status === "PASS" ? "text-green-600" : "text-red-600"}">${status}</td>
          <td class="p-3">
            <button class="bg-blue-600 text-white p-2 rounded" onclick="viewUserDetails('${user.user_id}')">View Details</button>
          </td>
        </tr>
      `;
    });
  } catch (err) {
    Swal.fire({ icon: "error", title: "Error loading users", text: err.message });
    console.log(err);
  }
}

if (datashow) loadUsersTable();

window.viewUserDetails = (user_id) => {
  localStorage.setItem("selected_user_id", user_id);
  location.href = "userDetail.html";
};

// ----------------------- USER DETAIL PAGE -------------------------
let responseContainer = document.getElementById("responseContainer");
let selected_user_id = localStorage.getItem("selected_user_id");

async function loadUserDetails() {
  if (!responseContainer) return; // exit if container not on this page

  try {
    const { data: responses } = await supabase.from("UserResponses").select("*").eq("user_id", selected_user_id);
    const { data: mcqQues } = await supabase.from("MultipleQuestion").select("*");
    const { data: tfQues } = await supabase.from("True-false-question").select("*");

    if (!responses || responses.length === 0) {
      responseContainer.innerHTML = "<h2>No Responses Found!</h2>";
      return;
    }

    let user = responses[0];

    responseContainer.innerHTML = `
      <h2 class="text-4xl font-bold text-purple-800 mb-2">User Details</h2>
      <div class="bg-white/40 p-4 rounded-xl border border-purple-200 shadow-sm mb-5">
        <p class="text-lg"><b class="text-purple-700">Name:</b> ${user.username}</p>
        <p class="text-lg"><b class="text-purple-700">Email:</b> ${user.useremail}</p>
      </div>
      <h3 class="text-2xl font-bold text-purple-900 mt-5 mb-3">Responses</h3>
      <table class="w-full bg-white/60 rounded-xl shadow">
        <thead class="bg-purple-600 text-white">
          <tr>
            <th class="p-4">Question</th>
            <th class="p-4">Correct Answer</th>
            <th class="p-4">User Answer</th>
            <th class="p-4">Status</th>
            <th class="p-4">Delete</th>
          </tr>
        </thead>
        <tbody id="responseRows"></tbody>
      </table>
    `;

    let row = document.getElementById("responseRows");

    responses.forEach((res) => {
      let question, correct;
      let mcq = mcqQues.find((q) => q.id === res.question_id);
      let tf = tfQues.find((q) => q.id === res.question_id);

      if (mcq) question = mcq.question, correct = mcq.correctanswer;
      else if (tf) question = tf.tfques, correct = String(tf.tfcorrect);

      let status = res.answer == correct ? "PASS" : "FAIL";

      row.innerHTML += `
        <tr class="border-b">
          <td class="p-4">${question}</td>
          <td class="p-4">${correct}</td>
          <td class="p-4">${res.answer}</td>
          <td class="p-4 font-bold ${status === "PASS" ? "text-green-600" : "text-red-600"}">${status}</td>
          <td class="p-4">
            <button class="bg-red-500 text-white px-3 py-1 rounded" onclick="deleteResponse(${res.id})">Delete</button>
          </td>
        </tr>
      `;
    });
  } catch (error) {
    Swal.fire({ icon: "error", title: "Error loading user details", text: error.message });
    console.log(error);
  }
}

if (responseContainer) loadUserDetails();

// ----------------------- DELETE RESPONSE -------------------------
window.deleteResponse = (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete it!"
  }).then(async (result) => {
    if (result.isConfirmed) {
      const { error } = await supabase.from("UserResponses").delete().eq("id", id);
      if (error) Swal.fire("Error!", "Delete Failed!", "error");
      else {
        Swal.fire("Deleted!", "The response has been deleted.", "success");
        if (responseContainer) loadUserDetails(); // refresh table without reload
      }
    }
  });
};

// logout functionailty

// logout functionality with SweetAlert
let adminlogout = document.getElementById("adminlogout");

adminlogout &&
  adminlogout.addEventListener("click", async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, log me out!",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { error } = await supabase.auth.signOut();
        if (error) {
          Swal.fire({
            icon: "error",
            title: "Logout Failed",
            text: error.message,
          });
        } else {
          Swal.fire({
            icon: "success",
            title: "Logged Out!",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            location.href = "index.html";
          });
        }
      }
    });
  });
