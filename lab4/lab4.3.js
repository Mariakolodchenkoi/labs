const ages = (persons) => {
  const agesResult = {}; 
  
  for (const personName in persons) {

    if (persons.hasOwnProperty(personName)) {
      
      const personData = persons[personName]; 
      const age = personData.died - personData.born;
      agesResult[personName] = age;
    }
  }

  return agesResult;
};

const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};

console.log(ages(persons));