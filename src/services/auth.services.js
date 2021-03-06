const axios = require('axios');
const baseURL = '/api/auth';

function authenticateUser(userObject) {
    return axios
        .post(`${baseURL}/login`, userObject)
        .then(res => res)
        .catch(err => {
            console.error('Error connecting to server.');
            throw err;
        });
}

function registerUser(userObject) {
    return axios
        .post(`${baseURL}/register`, userObject)
        .then(res => res)
        .catch(err => {
            console.error('Error connecting to server.');
            throw err
        });
}

export {
    authenticateUser,
    registerUser,
};
