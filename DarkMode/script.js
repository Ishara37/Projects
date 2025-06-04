// Step 1: Get the heading and button elements
let heading = document.getElementById("main-heading");
let button = document.getElementById("changeBtn");

//Define two message
let message1="I love You Ishara";
let message2="I love you too Amit";


// Step 2: Add a click event to the button
button.addEventListener("click", function () {
    //Toggle the heading text
  if(heading.textContent===message1){
    heading.textContent=message2;
  }
  else{
    heading.textContent=message1
  }
 
});
const body = document.body;
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", function () {
  body.classList.toggle("dark-mode");

  // Update button text based on mode
  if (body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "Switch to Light Mode";
  } else {
    toggleBtn.textContent = "Switch to Dark Mode";
  }
});
 const image = document.getElementById("randomImage");
const button1 = document.getElementById("newImageBtn");

button1.addEventListener("click", function () {
  const timestamp = new Date().getTime();
  image.src = `https://source.unsplash.com/random/600x400?sig=${timestamp}`;
});