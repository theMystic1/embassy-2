'use strict'
const sectionTitle = document.querySelector('.section-title')
const nav = document.querySelector('.nav')
const selectInput = document.querySelector('#country')
const nameInput = document.querySelector('#name')
const emailInput = document.getElementById('email')
const docInput = document.getElementById('doc')
const picInput = document.getElementById('avatar')
const submitBtn = document.querySelector('.btn')
const navHeight = nav.getBoundingClientRect().height
const main = document.querySelector('.main')
const sections = document.querySelectorAll('.section')
const js = document.querySelector('.js')
let options = {
  root: null,
  rootMargin: `-${navHeight}px`,
  threshold: 0,
};

let callBack = function(entries) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) nav.classList.add('nav--sticky')
    else nav.classList.remove('nav--sticky')
  })
}

let observer = new IntersectionObserver(callBack, options);

observer.observe(sectionTitle)


submitBtn.addEventListener('click', function(e) {

  e.preventDefault()
  if(nameInput.value === '' && emailInput.value === '' && docInput.value === '' && picInput.value === '' ) alert('Please make sure to fill in the forms')
  else{
  
   main.classList.add('hidden')

   
   js.textContent = `Hello ${nameInput.value} , your request is under review, you will receive an email shortly with our reply`
  }
})
// console.log(emailInput.value)

