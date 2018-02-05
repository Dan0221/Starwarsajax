var response;
document.onreadystatechange=function()
{
	if (document.readyState== "complete")
	{
		personajes();

		document.querySelector('.text').onclick=peliculas;
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
					swname=document.createElement("li");
					swname.innerHTML= el.name;
					swname.setAttribute('films', JSON.stringify(el.films))
					list.appendChild(swname);
				})


			}
		}
	}

	httpRequest.open('GET', 'http://swapi.co/api/people/');
	httpRequest.send();
}


function peliculas(ev)
{
	clicked=ev.target;
	peli=JSON.parse(httpRequest.responseText);

	var film=peli.results;

	var films=(film[0].getAttribute('films'));

	var list=document.querySelector('#results');
	list.innerHTML= "";

	films.forEach(function(url)
	{
		//console.log(43, url);
		var httpRequest= new XMLHttpRequest();

		httpRequest.onreadystatechange= function()
		{
			if (httpRequest.readyState ===4)
		{
			if (httpRequest.status === 200){

				film= JSON.parse(httpRequest.responseText);
				//console.log(film.title);

				li=document.createElement("li");
				li.innerHTML=film.title;
				//li.innerHTML=film.opening_crawl;
				list.appendChild(li);

			}

		}
	};

		httpRequest.open('GET', url);
		httpRequest.send();
	})
}