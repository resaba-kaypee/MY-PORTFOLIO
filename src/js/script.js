/* SCROLL EFFECT
-----------------------------------------------------*/
new fullpage("#main", {
  autoScrolling: true,
  navigation: true,
  navigationPosition: 'right',
  navigationTooltips: ["Home", "About", "Projects", "Contact"],
  showActiveTooltip: true,
  slidesNavigation: true,
  slidesNavPosition: 'bottom'
});

/* SUBMIT FORM
-----------------------------------------------------*/
const button = document.getElementById("submit");
button.addEventListener("click", async e => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const data = { name, email, message, subject };

  postData(data);
  clearForm();
});

async function postData(data) {
    return await fetch('/email', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(json => console.log(json));
}


function clearForm(data){
  document.querySelector('.response').textContent = "Message Sent! I'm looking forward working with you :)";
  document.querySelector('.form').reset();
}


/* HOME - TYPE EFFECT
-----------------------------------------------------*/

// class TypeWriter {
//   constructor(txtElem, words, wait = 3000){
//     this.txtElem = txtElem;
//     this.words = words;
//     this.txt = '';
//     this.wIndx = 0;
//     this.wait = parseInt(wait, 10);
//     this.type();
//     this.isDeleting = false;
//   }

//   type(){

//     const current = this.wIndx % this.words.length;
//     const fullTxt = this.words[current];
//     let typeSpeed = 300;

//     if(this.isDeleting){
//       this.txt = fullTxt.substring(0, this.txt.length - 1);
//     } else {
//       this.txt = fullTxt.substring(0, this.txt.length + 1);
//     }

//     this.txtElem.innerHTML = `<span class="txt-cursor">${this.txt}</span>`

//     if(this.isDeleting) {
//       typeSpeed /= 2;
//     }

//     if(!this.isDeleting && this.txt === fullTxt){
//       typeSpeed = this.wait;
//       this.isDeleting = true;
//     } else if (this.isDeleting && this.txt === ''){
//       this.isDeleting = false;
//       this.wIndx++;

//       typeSpeed = 500;
//     }
//     setTimeout(() => this.type(), typeSpeed);
//   }
// }

// function getElems(){
//   const txtElem = document.querySelector('.text');
//   const words = JSON.parse(txtElem.getAttribute('data-words'));
//   const wait = txtElem.getAttribute('data-wait');
//   return new TypeWriter(txtElem, words, wait);
// }

// getElems();










