const { I } = inject();
const mainStep = require('../steps/main_steps.js');
const registerSteps = require('../steps/register_steps.js');
var Factory = require('rosie').Factory;
var faker = require('@faker-js/faker');

let randomUserName = faker.internet.userName();
let randomEmail = faker.internet.email();
let randomName = faker.name.findName();
let randomPassword = 'Pass1234!';
let randomPL = 'Python';
let randomCheckAddson = 'true';

// Add in your custom step files

Given('Click Display a Toast button and verify message', () => {
  // TODO: replace with your own step
  mainStep.case1();

});
Given('Uncheck on I accept adds checkbox', () => {
  // TODO: replace with your own step
  mainStep.case2();

});
Given('Register a user', () => {
  // TODO: replace with your own step
  registerSteps.case3(randomName, randomUserName, randomPassword, randomEmail, randomPL, randomCheckAddson);

});


