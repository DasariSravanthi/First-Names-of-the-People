const peopleNamesList = require("../country/state/city/index");

const getNamesFunc = require("../utilities/utils/index");

const getPeopleInCity = (peopleNamesList) => getNamesFunc(peopleNamesList);

module.exports = getPeopleInCity;
