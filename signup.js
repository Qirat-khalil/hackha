// import supabase from "./config.js";

// let userName = document.getElementById("username")
// let userContact = document.getElementById("usercontact")
// let supaemail = document.getElementById("exampleInputEmail1")
// let supapass = document.getElementById("exampleInputPassword1")
// let regform = document.getElementById("regform")

// let adminEmail = "admin39@gmail.com"
// let adminpass = "admin123"

// regform && regform.addEventListener("submit", async (e) => {
//     e.preventDefault()
//     try {

//         if (!supaemail.value) {
//             return alert("plz enter email")
//         }
//         if (!supapass.value) {
//             return alert("plz enter pass")
//         }

//         const { data, error } = await supabase.auth.signUp({
//             email: supaemail.value,
//             password: supapass.value,
//             options: {
//                 data: {
//                     name: userName.value,
//                     // contact: userContact.value,
//                 }
//             }
//         })
//         if (data) {
//             if (adminEmail === supaemail.value && adminpass === supapass.value) {
//                 location.href = "adminPage.html";
//                 return;
//             }
//             else {
//                 console.log(data);
//                 regform.reset()
//                 location.href = 'mainPage.html'
//             }

//         }
//         if (error) {
//             console.log(error);

//         }

//     } catch (err) {
//         console.log(err.message);

//     }
// })




// // login form 


// let loginEmail = document.getElementById("loginEmail")
// let loginform = document.getElementById("loginform")
// let loginPassword = document.getElementById("loginPassword")


// async function login(e) {
//     e.preventDefault();

//     try {
//         // Supabase login
//         const { data, error } = await supabase.auth.signInWithPassword({
//             email: loginEmail.value,
//             password: loginPassword.value,


//         });

//         // Incorrect Email/Password
//         if (error) {
//             alert("Incorrect email or password");
//             console.log(email.value, loginPassword.value);
//             return;
//         }

//         // Correct Login
//         if (data) {
//             if (adminEmail === loginEmail.value && adminpass === loginPassword.value) {
//                 location.href = "adminPage.html";
//                 return;
//             } else {
//                 console.log("Login Success:", data);
//                 location.href = "mainPage.html"; // redirect after success
//             }

//         }

//     } catch (err) {
//         console.log(err.message);
//     }
// }


// loginform && loginform.addEventListener("submit", login)


// // logout btn

// let logoutbtn = document.getElementById("logout-btn")

// async function logout() {
//     const { error } = await supabase.auth.signOut()
//     if (error) {
//         console.log(error);
//         location.href = 'index.html'
//     }
// }

// logoutbtn && logoutbtn.addEventListener("click", logout)




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













import supabase from "./config.js";

let userName = document.getElementById("username")
let userContact = document.getElementById("usercontact")
let supaemail = document.getElementById("exampleInputEmail1")
let supapass = document.getElementById("exampleInputPassword1")
let regform = document.getElementById("regform")

let adminEmail = "admin39@gmail.com"
let adminpass = "admin123"

// ----------------------- REGISTRATION -----------------------
regform && regform.addEventListener("submit", async (e) => {
    e.preventDefault()
    try {
        if (!supaemail.value) {
            return Swal.fire({
                icon: 'warning',
                title: 'Please enter email'
            });
        }
        if (!supapass.value) {
            return Swal.fire({
                icon: 'warning',
                title: 'Please enter password'
            });
        }

        const { data, error } = await supabase.auth.signUp({
            email: supaemail.value,
            password: supapass.value,
            options: {
                data: {
                    name: userName.value,
                    // contact: userContact.value,
                }
            }
        });

        if (data) {
            if (adminEmail === supaemail.value && adminpass === supapass.value) {
                location.href = "adminPage.html";
                return;
            } else {
                console.log(data);
                regform.reset();
                Swal.fire({
                    icon: 'success',
                    title: 'Registration Successful!',
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    location.href = 'mainPage.html';
                });
            }
        }

        if (error) {
            Swal.fire({
                icon: 'error',
                title: 'Registration Failed',
                text: error.message
            });
        }

    } catch (err) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: err.message
        });
    }
});

// ----------------------- LOGIN -----------------------
let loginEmail = document.getElementById("loginEmail")
let loginform = document.getElementById("loginform")
let loginPassword = document.getElementById("loginPassword")

async function login(e) {
    e.preventDefault();

    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: loginEmail.value,
            password: loginPassword.value,
        });

        if (error) {
            return Swal.fire({
                icon: 'error',
                title: 'Incorrect email or password'
            });
        }

        if (data) {
            if (adminEmail === loginEmail.value && adminpass === loginPassword.value) {
                location.href = "adminPage.html";
                return;
            } else {
                console.log("Login Success:", data);
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful!',
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    location.href = "mainPage.html";
                });
            }
        }

    } catch (err) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: err.message
        });
    }
}

loginform && loginform.addEventListener("submit", login);

// ----------------------- LOGOUT -----------------------
let logoutbtn = document.getElementById("logout-btn")

logoutbtn && logoutbtn.addEventListener("click", async () => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You will be logged out!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, log out!',
        cancelButtonText: 'Cancel'
    }).then(async (result) => {
        if (result.isConfirmed) {
            const { error } = await supabase.auth.signOut()
            if (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Logout Failed',
                    text: error.message
                });
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'Logged Out!',
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    location.href = 'index.html';
                });
            }
        }
    });
});

// ----------------------- ADMIN PAGE SAMPLE DATA -----------------------
const users = [
    { id: 1, name: "Ali Khan", email: "ali@example.com" },
    { id: 2, name: "Ayesha Noor", email: "ayesha@example.com" },
    { id: 3, name: "Hassan Raza", email: "hassan@example.com" },
];

const orders = 45;
const revenue = 68950;

// Insert into DOM
document.getElementById("userCount").innerText = users.length;
document.getElementById("orderCount").innerText = orders;
document.getElementById("revenueAmount").innerText = "$" + revenue;

const tableBody = document.getElementById("userTable");
users.forEach((u) => {
    tableBody.innerHTML += `
        <tr>
          <td class="border p-2">${u.id}</td>
          <td class="border p-2">${u.name}</td>
          <td class="border p-2">${u.email}</td>
        </tr>
      `;
});

// ----------------------- MOBILE SIDEBAR -----------------------
const sidebar = document.querySelector("aside");
const menuBtn = document.getElementById("menuBtn");

menuBtn && menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
});
