var app = new Vue({
	el:"#app",
	data:{
		datos:{},
		state:true
	},
	created : function(){
		const APOD_url = "https://api.nasa.gov/planetary/apod?api_key=vA0riTUsAPoQGZWx5PKzZXbZtCReuAwsFU5D30tb"
		this.$http.get(APOD_url).then(function (res){
			this.datos = res.body;
			console.log(this.datos);
		});
	},

	methods:{
		changeEstate : function(){
			this.state = !this.state;
		}
	}

});

