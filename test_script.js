
// alert('hello world!')
document.addEventListener("DOMContentLoaded", () => {
  // alert("DOM ready!");
  var body=document.getElementsByTagName('nav')[0];
  console.log(body); 
});


// put this line of code at bookmark's URL/location. 
//javascript:(function(){document.body.appendChild(document.createElement('script')).src='http://127.0.0.1:8000/test_script.js';})();
