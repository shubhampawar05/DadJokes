let btn = document.querySelector("button");
let showjoke = document.querySelector("p");

btn.addEventListener("click", () => {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.api-ninjas.com/v1/dadjokes?limit=1");
  xhr.setRequestHeader("x-api-key", "2utc0s8rTdP/oAT7JK7XcQ==ex6alK39YLoQgHXb");
  xhr.send();
  showjoke.innerText = "Loading....";
  xhr.onload = () => {
//     console.log(xhr);
    if (xhr.status == 200) {
      console.log(JSON.parse(xhr.response)[0].joke);
      let joke = JSON.parse(xhr.response)[0].joke;
      showjoke.innerText = joke;
    }
  };
});

/*
 var xhr = new XMLHttpRequest();
var url = 'https://api.example.com/data';
xhr.open('GET', url, true);
xhr.setRequestHeader('x-api-key', 'your-api-key');
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4 && xhr.status == 200) {
    var response = JSON.parse(xhr.responseText);
    console.log(response);
  }
};
xhr.send(); */
