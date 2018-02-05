var vm= new Vue({

	el: "#app",

	data:
		{
			question:'',
			response:'',
			characters:[],
			films:[],
		},

	watch:
		 {
			question:function(newValue)
			{
				console.log(newValue);
				this.response = "Checking characters";
				axios.get('https://swapi.co/api/films/?format=json')
				.then (function (response){
					console.log(response);
					vm.characters = response.data.results;
				})

				// if theres is kind of error 
				.catch(function(error){
					console.log(error);

				});
			}
		 }


	

});


