var whateveryourthingis = [1, 2, 3]

whateveryourthingis.length

var listOfWords = ['jam', 'yam', 'fish']

console.log('I like ' + listOfWords[0])
console.log('I like ' + listOfWords[1])
console.log('I like ' + listOfWords[2])

for (var counter = 0; counter < listOfWords.length; counter = counter + 1) {
  var food = listOfWords[counter]
  console.log('I like ' + food)
}

var counter = 0
while (counter < listOfWords.length) {
  var food = listOfWords[counter]
  console.log('I like ' + food)
  counter = counter + 1 // counter++
}

var geoff = {
  name: 'geoff',
  species: 'elemphant'
}

var bareth = {
  name: 'bareth',
  species: 'echidna'
}

var zooList = [geoff, bareth]

var zooObject = {
  geoff: geoff,
  bareth: bareth
}

var directory = {}
for (var counter = 0; counter < zooList.length; counter++) {
  var animal = zooList[counter]
  var animalSpecies = animal.species
  directory[animalSpecies] = animal
}

var barethsName = 'bareth'
directory.bareth
directory['bareth']
directory[barethsName]
