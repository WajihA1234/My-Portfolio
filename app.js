 const social = document.getElementById('LI');
 const otherSocial = document.getElementById('GH');

 social.addEventListener('click', function() {
    window.open('https://www.linkedin.com/in/wajih-aziz-182805264/')
 });
 
//  const otherSocial = document.getElementById('GH');
// both buttons work but when i put the second const here githubs button doest work

 otherSocial.addEventListener('click', function() {
    window.open('https://github.com/WajihA1234')
 });

const hamburger = document.querySelector("#hamburgerMenu");
const hidden = document.querySelector('.extra');

hamburger.addEventListener('click', function(){
    hidden.style.display = hidden.style.display == "none" ? "flex" : "none";
})
 