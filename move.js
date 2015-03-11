var http = require('http');
var request = require('request');
http.createServer(function (req, res) {
}).listen(1337, '127.0.0.1');

setInterval(function () 
	{
		request.post(
		    'http://localhost:3000/api/runnerTrackers',
		    { 
		    		runnerId: '126',
		    		location: '2.1235358,102.4534135'
		    },
		    function (error, response, body) {
		        if (!error && response.statusCode == 200) {
		            console.log(body)
		        }
		        
		    }
		);
	}, 3000);


//console.log('Server running at http://127.0.0.1:1337/');
