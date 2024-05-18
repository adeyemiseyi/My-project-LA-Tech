let cta = document.getElementById("cta")
let error = document.getElementById("error")
let success = document.getElementById("success")
let signup = document.getElementById("signup")
let email = document.getElementById("email")

cta.addEventListener('click', (event)=>{
   if(this.email.value == null || this.email.value == "") {
      alert('Inpute your email')
      return error.innerHTML ="Please input your email"
   }else {
      let fetchData = {
         method: 'POST',
         body: JSON.stringify({email: this.email.value, js: true}),
         hearder: {"Content-Type": "application/json"}
      }

      fetch('/public', fetchData)
            .then(res =>{
               if (res.ok){
                  alert("success")
               }else{
                  alert("error")
               }
            })
   }
})



//responsive hadle bar
const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById('navbar')

if (bar) {
   bar.addEventListener('click', () => {
      nav.classList.add('active');
   })
}

if (close) {
   close.addEventListener('click', () => {
      nav.classList.remove('active');
   })
}


//Home page text animation
var typed = new Typed('.element', {
            strings: ["Website.", "Graphic Design.","UI/UX.","General Printing"],
            typeSpeed: 100,
            backSpeed:100,
            loop:true 
        });


//Form Loading

function formload(){
   if (document.getElementById("order-now")){
         if (document.getElementById("order-now").style.display == "none"){
            document.getElementById("order-now").style.display = "block";
            document.getElementById("formDisplay").style.direction = "none";
         }
         else {
            document.getElementById("order-now").style.display = "none";
            document.getElementById("formDisplay").style.display = "block"
         }
   }
   /*var x = document.getElementById("order-now")
   if (x.style.dispplay === "none"){
      x.style.display = "block"
   }else{
      x.style.display = "none"
   }*/
}

function off(){
     document.getElementById("order-now").style.display = "none";
}








