var fact= document.querySelector('#result');
var factText= document.querySelector('#resultText');

var cinput= document.querySelector('#cinput');
cinput.addEventListener('input', getChaAjax);

function getChaAjax ()
{
  console.log('thi is the text')
  var character = cinput.value;
  console.log(character);

  // Request API

  var xhr= new XMLHttpRequest();
  xhr.open('GET', 'https://swapi.co/api/people/?search='+character);
 

  xhr.onload = function ()
  {
    if(this.status == 200)
    {
      console.log(this.responseText);
      var movies = document.getElementById("result");
      var res = JSON.parse(this.responseText);

      fact.style.display = 'block';
      factText.innerText= this.responseText;
    }
  }

  xhr.send();
}