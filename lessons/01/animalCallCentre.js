var bill = {
  name: 'bill',
  species: 'cat',
  age: 3400
}

var bob = {
  name: 'bob',
  species: 'dog',
  age: 100
}

var janine = {
  name: 'janine',
  species: 'guinea pig',
  age: 8
}

function callAnimal (animal) {
  if (animal.age > 70) {
    console.log('Stay indoors!!!!!!!!')
  } else if (animal.species === 'cat') {
    console.log('Hi cat')
  } else if (animal.species === 'dog') {
    console.log('Go away!!!! (Dog)')
  } else {
    console.log('Your call is important to us... please stay on the line.')
  }
}

callAnimal(bill)
callAnimal(bob)
callAnimal(janine)

// <- This starts a comment on a single line, comments get ignored by the terminal!
/* <- This starts a comment that can go over multiple lines
      This ends a comment on multiple lines -> */

/*
    Assignment 1: Modify the "callAnimal" function so that it addresses each animal by name
    Bonus assignment: Dog years are different to cat years! Make the age requirement change depending on which animal is calling.
*/
