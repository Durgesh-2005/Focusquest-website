document.addEventListener('DOMContentLoaded', function () {
    const signUpForm = document.getElementById('signUpForm');
    const signInForm = document.getElementById('signInForm');
    const signUpBtn = document.getElementById('signUpBtn');
    const signInBtn = document.getElementById('signInBtn');
  
    signUpBtn.addEventListener('click', function () {
      signUpForm.style.display = 'block';
      signInForm.style.display = 'none';
      signUpBtn.classList.add('active');
      signInBtn.classList.remove('active');
    });
  
    signInBtn.addEventListener('click', function () {
      signUpForm.style.display = 'none';
      signInForm.style.display = 'block';
      signUpBtn.classList.remove('active');
      signInBtn.classList.add('active');
    });
  });
  