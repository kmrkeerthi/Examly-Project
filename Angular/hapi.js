const Hapi = require('hapi');
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
 database: 'product'
});
 const server = Hapi.Server({
	port: 3000,
	host:'localhost'
});
connection.connect();
server.route({
	method:'GET',
	path:'/',
	handler: (request,h)=>{
		connection.query('SELECT * FROM product_list',function(error,results,fields){
		if(error) throw error;
		console.log(results[0]);
		});
		return 'results[0].product_code';
	}
});
server.start(function(){
	console.log('Server is running');
});
