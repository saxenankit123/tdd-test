import request from "supertest";
import app from "../src/app.js";
import http from "http"

let server
describe('User Signup', () => {

    before((done) => {
        server = http.createServer(app).listen(3000, done);
    });


    it('User should not be able to signup if age is less than 18', (done) => {
        request(server)
            .post('/users')
            .send({ name: 'Ankit', age: 16 })
            .expect(400)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });
    it('User should be able to signup if age is more than 18', (done) => {
        request(server)
            .post('/users')
            .send({ name: 'Ankit', age: 23 })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });
    it('User should not be able to signup if name is more than 20 chars long', (done) => {
        request(server)
            .post('/users')
            .send({ name: 'Mr. Pradeep Kumar Saxena', age: 23 })
            .expect(400)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });
    it('User should be able to signup if name is less than 20 chars long', (done) => {
        request(server)
            .post('/users')
            .send({ name: 'Pradeep Saxena', age: 23 })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });
    it('User should not be able to signup if ID card is missing and if profession is student', (done) => {
        request(server)
            .post('/users')
            .send({ name: 'Pradeep Saxena', age: 23, profession: 'Student' })
            .expect(400)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });
    it('User should be able to signup if ID card is present and if profession is student', (done) => {
        request(server)
            .post('/users')
            .send({ name: 'Pradeep Saxena', age: 23, profession: 'Student', Id: 'A42511' })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });

    after((done) => {
        server.close(done);
    });

})