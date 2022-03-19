const form = document.getElementById('form');




form.addEventListener('submit', (e)=>{
  e.preventDefault();

  const first = form['firstname'].value;
const last = form['lastname'].value;
const email = form['email'].value;
const password =form['password'].value;


if(first === ""){

  const small = form['firstname'].parentNode.querySelector('small');

  small.innerText = 'First Name is required'

  small.style.opacity = '1'

}

  

})

