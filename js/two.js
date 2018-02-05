var response;
document.onreadystatechange=function()
{
	if (document.readyState== "complete")
	{
		personajes();

		document.querySelector('.text').onchange=peliculas;
	}
}


function personajes ()
{
	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function ()
	{
		if (httpRequest.readyState ===4)
		{
			if (httpRequest.status === 200){
				//console.log(httpRequest.responseText);
				response=JSON.parse(httpRequest.responseText);


				var list = document.querySelector(".text");
				list.innerHTML = ""

				response.results.forEach(function(el)
				{
					li=document.createElement("li");
					li.innerHTML= el.name;
					li.setAttribute('films', JSON.stringify(el.films))
					list.appendChild(li);
					


				})


			}
		}
	}

	httpRequest.open('GET', 'http://swapi.co/api/people/');
	httpRequest.send();
}


function peliculas(ev)
{
	selected=ev.target;
	films=JSON.parse(selected.selectedOptions[0].getAttribute('films'));
	
	list.innerHTML= ""

	films.forEach(function(url)
	{
		console.log(43, url);
		var httpRequest= new XMLHttpRequest();

		httpRequest.onclick= function()
		{
			if (httpRequest.readyState ===4)
		{
			if (httpRequest.status === 200){

				film= JSON.parse(httpRequest.responseText);
				console.log(film.title);

				div=document.createElement("div");
				dov.innerHTML=film.title;
				list.appendChild(div);

			}

		}
	}

		httpRequest.open('GET', url);
		httpRequest.send();
	})
}