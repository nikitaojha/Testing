const { expect } = require('chai');
const axios = require('axios');
const { Given } = require('cucumber')

Given('I am on the register page', async () => {
  const response = await axios.get('http://localhost:90/signup');
  // console.log(response.data);
  expect(response.data.title).to.be.equal('delectus aut autem');

})