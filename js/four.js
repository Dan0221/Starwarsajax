function personajes(url, callback) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.status == 200) {
    
            try {
                var data = JSON.parse(xmlhttp.responseText);
            } catch(err) {
                
                return;
            }
            callback(data);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

personajes("https://swapi.co/api/people/", function(data) {
    
    
    var persons=data.results;
    var html ;
    
    var container = document.querySelector(".text ul");
       
       for(var i = 0; i < persons.length; i++){
         
          var item = container.innerHTML += "<li><a class='ajax_item' onClick= 'obtenerDatos()'  > "+ persons[i].name + "</a></li>";

      
          
       }
    
})

function obtenerDatos(url) {


    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.status == 200) {
    
            
                var data = JSON.parse(xmlhttp.responseText);
                console.log("hello");
            
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();

}


