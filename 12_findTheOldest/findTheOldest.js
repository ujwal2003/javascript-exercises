const findTheOldest = function(peopleArray) {
    return peopleArray.reduce((oldest, currPerson) => {
        const oldestAge = calculateAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currAge = calculateAge(currPerson.yearOfBirth, currPerson.yearOfDeath);

        return oldestAge < currAge ? currPerson : oldest;
    });
};

const calculateAge = function(birthYear, deathYear) {
    if(!deathYear)
        deathYear = new Date().getFullYear();

    return deathYear - birthYear;
}

// Do not edit below this line
module.exports = findTheOldest;
