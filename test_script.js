// var cors_api_url = 'https://cors-anywhere.herokuapp.com/'; // this is the public api (has limitations)
var cors_api_url = "http://localhost:8080/"; // locally hosted
var arrLinks = [];
var arrDOM = []; 
var x = new XMLHttpRequest();
x.open("GET", cors_api_url + document.location.href);
x.onload = function () {
  // console.log(x.responseText);

  // create a fake 'div' to house source code in so we can use DOM elements in it
  // var div = document.createElement('div');
  // div.innerHTML = x.responseText;

  // find 2 other links in the page to compare and get nav structure (we cannot find using tagname nav or whatever because diff people has diff coding style)
  // best is to compare webpages of the website and get those similar dom structure. those similarity will be navigation, footer, etc.
  let total = 0;
  var l = document.links;
  for (var i = 0; i < l.length; i++) {
    if (
      l[i].href.includes(window.location.hostname) &&
      total < 2 &&
      !arrLinks.includes(l[i].href) &&
      l[i].href != window.location.href
    ) {
      arrLinks.push(l[i].href);
      total++;
    }
  }
  arrLinks.push(window.location.href);

  // console.log(arrLinks);
  arrLinks.forEach(getDOM);
};
x.send();

function getDOM(link, index) {
  // console.log(link);
  // console.log(index);
  $.get(link, function (responseText) {
    // console.log(responseText);
    let div = document.createElement("div");
    div.innerHTML = responseText;
    arrDOM.push(div.innerHTML); 
    console.log(arrDOM); 
  });
}

// if (document.readyState !== 'loading') {
//   console.log("document is ready");
//   var nav=document.getElementsByTagName('nav');
//   if (nav.length > 0) {
//     nav.forEach(console.log(nav));
//     // console.log(nav);
//   } else {
//     var body = document.getElementsByTagName('body');
//     console.log(body);
//   }

// } else {
//   document.addEventListener("DOMContentLoaded", function() {
//     console.log("document not ready");
//   })
// }

// put this line of code at bookmark's URL/location.
//javascript:(function(){document.body.appendChild(document.createElement('script')).src='http://127.0.0.1:8000/test_script.js';})();

// https://stackoverflow.com/questions/30083602/how-can-i-scrape-a-website-for-the-nav-menu-only
// scrap multiple pages of the website , do a diff (of the DOM) and retain only the common structure
// these common structure should consist of headers, footers, navbars, and other elements more  or less constant across the website
// how to scrap multiple pages?
// get all the links where url is the same just with diff routes? like google.com/helllo and google.com/bye is same website but different webpage
// access dom of website (DOMParser) https://stackoverflow.com/questions/58073160/is-it-possible-to-access-the-dom-of-a-website-through-a-url-with-javascript
// but if website got CORS restriction... how...  https://github.com/buffermet/CORS-bypass  https://www.npmjs.com/package/cors-anywhere
