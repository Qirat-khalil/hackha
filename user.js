
import supabase from "./config.js";

let Showquestion = document.getElementById("showQuestion");

const { data, error } = await supabase
  .from("MultipleQuestion")
  .select("*");

if (error) {
  console.log(error);
} else {
  data.forEach((quest) => {
    console.log(data,"data show ====");
    
    Showquestion.innerHTML += `
      <div class="w-full max-w-xl bg-white shadow-lg rounded p-6 space-y-6">

        <!-- Question Box -->
        <div id="questionBox" class="space-y-3">
          <h2 class="text-xl font-semibold">${quest.question}</h2>

          <!-- Options -->
          <div class="space-y-2">
            <p>${quest.option1}</p>
            <p>${quest.option2}</p>
            <p>${quest.option3}</p>
            <p>${quest.option4}</p>
          </div>
        </div>

        <!-- Next Button -->
        <button class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Next
        </button>

      </div>
    `;
  });
}


  

