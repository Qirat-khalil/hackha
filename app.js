const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// DRAG & DROP VARIABLE
let draggedItem = null;

function attachTaskEvents(cardContainer) {
  let taskUl = cardContainer.querySelectorAll(".task-ul");
  let taskInput = cardContainer.querySelectorAll(".task-input");
  let saveTask = cardContainer.querySelectorAll(".save-task");
  let closeInput = cardContainer.querySelectorAll(".close-input");
  let showInput = cardContainer.querySelectorAll(".show-input");
  let inputArea = cardContainer.querySelectorAll(".input-area");

  // Show input area
  showInput.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      inputArea[index].classList.remove("hidden");
      btn.classList.add("hidden");
    });
  });

  // Close input area
  closeInput.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      inputArea[index].classList.add("hidden");
      showInput[index].classList.remove("hidden");
      taskInput[index].value = "";
    });
  });

  // Add new task
  saveTask.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      if (taskInput[index].value.trim() !== "") {
        let li = document.createElement("li");
        li.classList.add("p-2", "bg-indigo-50", "rounded", "cursor-move", "hover-lift");
        // li.draggable = true;

        li.innerHTML = `
          <div class="flex items-center justify-between gap-2">
            <div class="flex items-center gap-3">
              <input class="checkbox cursor-pointer accent-indigo-500" type="checkbox">
              <span>${taskInput[index].value}</span>
            </div>
            <div class="flex gap-2">
              <i class="delete-icon fa-solid fa-trash cursor-pointer text-red-500 hover:text-red-600 transition"></i>
              <i class="edit-icon fa-solid fa-pen-to-square cursor-pointer text-blue-500 hover:text-blue-600 transition"></i>
            </div>
          </div>`;

        taskUl[index].appendChild(li);
        taskInput[index].value = "";
        inputArea[index].classList.add("hidden");
        showInput[index].classList.remove("hidden");

        // Delete task
        li.querySelector(".delete-icon").addEventListener("click", () => {
          li.classList.add("opacity-0", "scale-90", "transition", "duration-300");
          setTimeout(() => li.remove(), 300);
        });

        // Edit task
        li.querySelector(".edit-icon").addEventListener("click", () => {
          let taskText = li.querySelector("span");
          let currentCard = li.closest(".card-container");
          let inputField = currentCard.querySelector(".task-input");
          let inputAreaDiv = currentCard.querySelector(".input-area");
          let showButton = currentCard.querySelector(".show-input");

          inputField.value = taskText.textContent;
          li.remove();
          inputAreaDiv.classList.remove("hidden");
          showButton.classList.add("hidden");
        });

        // Drag Events
        // li.addEventListener("dragstart", () => {
        //   draggedItem = li;
        //   setTimeout(() => li.classList.add("opacity-50"), 0);
        // });

        // li.addEventListener("dragend", () => {
        //   draggedItem = null;
        //   li.classList.remove("opacity-50");
        // });
      }
    });
  });

  // taskUl.forEach((ul) => {
  //   ul.addEventListener("dragover", (e) => e.preventDefault());
  //   ul.addEventListener("drop", (e) => {
  //     if (draggedItem) {
  //       ul.appendChild(draggedItem);
  //     }
  //   });
  // });
}

document.querySelectorAll(".card-container").forEach((card) => attachTaskEvents(card));

let addcardbtn = document.querySelectorAll(".show-list-btn");
let cardarea = document.querySelectorAll(".card-area");
let tittleInput = document.querySelectorAll(".tittle-input");
let savelist = document.querySelectorAll(".save-list");
let closelist = document.querySelectorAll(".close-list");
let rightside = document.querySelector(".rightside");

// Show new list area
addcardbtn.forEach((btn, ind) => {
  btn.addEventListener("click", () => {
    cardarea[ind].classList.remove("hidden");
    addcardbtn[ind].classList.add("hidden");
  });
});

// Close list area
closelist.forEach((btn, ind) => {
  btn.addEventListener("click", () => {
    cardarea[ind].classList.add("hidden");
    addcardbtn[ind].classList.remove("hidden");
    tittleInput[ind].value = "";
  });
});

// Save new list
savelist.forEach((btn1, ind) => {
  btn1.addEventListener("click", () => {
    let title = tittleInput[ind].value.trim();
    if (title === "") return;

    let newcard = document.createElement("div");
    newcard.className =
      "card-container hover-lift w-full sm:w-[280px] bg-white shadow-md rounded-xl p-4 font-semibold border border-indigo-100";
    newcard.innerHTML = `
      <div class="flex justify-between items-center mb-2">
        <h3 class="text-gray-700">${title}</h3>
        <button class="card-close text-gray-500 hover:text-red-500 transition text-lg">✖</button>
      </div>
      <ul class="task-ul space-y-2 mb-3"></ul>
      <div class="input-area hidden">
        <input class="task-input p-2 border rounded w-full mt-2 focus:ring-2 focus:ring-indigo-400 outline-none" type="text" placeholder="Enter your task">
        <button class="save-task bg-indigo-600 text-white px-3 py-2 mt-2 rounded w-full hover:bg-indigo-700 btn-anim">Add Task</button>
        <button class="close-input bg-gray-300 px-3 py-2 mt-2 rounded w-full hover:bg-gray-400 btn-anim">✖ Cancel</button>
      </div>
      <button class="show-input bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-2 mt-2 rounded w-full btn-anim">
        <i class="fa-solid fa-plus"></i> Add Task
      </button>
    `;

    rightside.appendChild(newcard);
    cardarea[ind].classList.add("hidden");
    addcardbtn[ind].classList.remove("hidden");
    tittleInput[ind].value = "";

    // close card animation
    const closeBtn = newcard.querySelector(".card-close");
    closeBtn.addEventListener("click", () => {
      newcard.classList.add("opacity-0", "scale-90", "transition", "duration-300");
      setTimeout(() => newcard.remove(), 300);
    });

    attachTaskEvents(newcard);
  });
});


let mode = document.querySelector(".mode")
let body =document.body

mode.addEventListener("click",()=>{
    body.classList.toggle("dark-mode")
})