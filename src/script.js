import "./style.scss";

/* PRELOAD
-----------------------------------------------------*/
window.onload = function() {
  const nav = document.querySelector('#fp-nav');
  nav.style.opacity = 0;
  setTimeout(() => {
  nav.style.opacity = 1;
    finishedLoading();
  }, 2000);
};

function finishedLoading() {
  const pageLoader = document.querySelector(".page-loader");
  pageLoader.style.opacity = 0;
  setTimeout(() => {
    pageLoader.style.transition = "all 0.5s ease-out";
    pageLoader.style.display = "none";
  }, 2000);
}

/* FULLPAGE SCROLL
-----------------------------------------------------*/
new fullpage("#main", {
  autoScrolling: true,
  anchors: ["Home", "About", "Projects", "Contact"],
  navigation: true,
  navigationPosition: "right",
  // navigationTooltips: ["Home", "About", "Projects", "Contact"],
  showActiveTooltip: true,
  slidesNavigation: true,
  slidesNavPosition: "bottom",

  afterRender: function(){
    const nav = document.querySelector('#fp-nav');
    nav.style.opacity = 0;
    setTimeout(() => {
    nav.style.opacity = 1;
      finishedLoading();
    }, 1000);
  },
  
});  

/* SUBMIT FORM
-----------------------------------------------------*/
const button = document.getElementById("submit");
button.addEventListener("click", async e => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const data = { name, email, message, subject };

  postData(data);
  clearForm();
});

async function postData(data) {
  return await fetch("/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(json => console.log(json));
}

function clearForm(data) {
  document.querySelector(".response").textContent =
    "Message Sent! I'm looking forward working with you :)";
  document.querySelector(".form").reset();
}
