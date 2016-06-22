
var expect = require('expect');

var request = require('supertest');

describe('API', function(){

	var server; 
	beforeEach(function(){
		server= require('../src/server.js');

	});

	afterEach(function(){

		server.close();

	});

	it('/ should return specified object.', function(done){
		request(server)
			.get('/api/')
			.set('Acept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200,{ hello: "world"},done);

	});

	it('/status should return specified healthy:true.', function(done){
		request(server)
			.get('/api/status')
			.set('Acept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200,{ healthy: true},done);

	});
	it('/user/id should return a user object with id.', function(done){
		var fakeUserID = 374
		request(server)
			.get('/api/user/' + fakeUserID)
			.set('Acept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200,{ user: {id:fakeUserID}},done);

	});
	it('/ should return specified object.', function (done){
		request(server)
		.get('/api/v1')
		.set('Accept', 'application/json') 
		.expect('Content-Type', /json/)
		.expect(200, {hello: "v1"}, done);
	});
});