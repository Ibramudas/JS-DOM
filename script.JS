
document.getElementById("login").addEventListener("submit", validate);

function validate(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const msgBox = document.getElementById("message");

  if (name === "" || age === "" || email === "" || password === "") {
    msgBox.innerText = "Please fill in all fields.";
    msgBox.style.color = "red";
  } else if (age < 18) {
    msgBox.innerText = "You must be at least 18 years old.";
    msgBox.style.color = "red";
  } else if (!validateEmail(email)) {
    msgBox.innerText = "Invalid email address.";
    msgBox.style.color = "red";
  } else if (password.length < 8) {
    msgBox.innerText = "Password must be at least 8 characters.";
    msgBox.style.color = "red";
  } else {
    msgBox.innerText = "Login Successful";
    msgBox.style.color = "green";
}
}

function validateEmail(email) {
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
return emailRegex.test(email);
}
// Function to validate password
function validatePassword(password) {
    const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
    return passwordRegex.test(password);
    }
    
    // Function to validate age
    function validateAge(age) {
    const ageRegex = /^\d{1,3}$/;
    return ageRegex.test(age) && parseInt(age) >= 18;
    }
    