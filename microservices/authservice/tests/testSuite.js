const expect = require("chai").expect; 
const app = require("../index");
const request = require("supertest"); 

// We are going to test the POST route to '/api/auth/login'; 

// Let's setup the required credentials which are username and password 
const userCredentials = {
	username: 'johndoe', 
	password: 'lovecode'
}

// Lets log the user in then write a test 
let authenticatedUser = request.agent(app); 

before((done) => {
	authenticatedUser
		.post('/api/auth/signin')
		.send(userCredentials)
		.end((err, res) => {
			expect(res.status).to.equal(200); 
			done(); 
		});
});


// We are going to test authourization to the '/profile' route === A protected endpoint
describe('GET /profile', function(done) {
	it('should return status of 401 if the user is NOT logged in', (done) => {
		authenticatedUser.get('/profile')
			.expect(401, done)
	}); 
}); 