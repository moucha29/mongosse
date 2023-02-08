const mongoose = require('mongoose');
const express = require('express');
const app = express();
const Person = require('./schema')
mongoose.set('strictQuery', true)


mongoose.connect('mongodb://127.0.0.1:27017', err => err? console.log(err): console.log('DB is connected ...'))





//create a Person
/* const newPerson = new Person({name:'Med', age:18, favoriteFoods:['Pizza', 'Pasta']})
newPerson.save()

app.listen(5000, (err) => {
  err? console.log(err) : console.log('Server running on 5000 ...')
}); */


// create person tab 
// const people = [
//     { name: 'taher', age: 30, favoriteFoods: ['pizza', 'burgers'] },
//     { name: 'eya', age: 28, favoriteFoods: ['salad', 'sushi'] },
//     { name: 'hejer', age: 33, favoriteFoods: ['steak', 'potatoes'] }
//   ];
  
//   Person.create(people, (error, docs) => {
//     if (error) {
//       console.error(error);
//     } else {
//       console.log('People created:', docs);
//     }
//   });


// const name = 'taher';

// Person.find({ name: name }, (error, people) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log(`People named ${name}:`, people);
//   }
// });

// 

// const personId = '63e37678e558dc8ad3f4b684';

// Person.findById(personId, (error, person) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log(`Person with id ${personId}:`, person);
//   }
// });

// 
// const personName = 'eya';

// Person.findOneAndUpdate(
//   { name: personName },
//   { age: 20 },
//   { new: true },
//   (error, updatedPerson) => {
//     if (error) {
//       console.error(error);
//     } else {
//       console.log(`Person with name "${personName}" updated successfully:`, updatedPerson);
//     }
//   }
// );

// const personId = '63e37678e558dc8ad3f4b686';

// Person.findByIdAndRemove(personId, (error, removedPerson) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log(`Person with _id "${personId}" removed successfully:`, removedPerson);
//   }
// });

// Person.remove({ name: 'med' }, (error, removedPeople) => {
//     if (error) {
//       console.error(error);
//     } else {
//       console.log(`People with name "med" removed successfully:`, removedPeople);
//     }
//   });
  
Person.find({ favoriteFoods: 'burrito' })
  .sort({ name: 1 })
  .limit(2)
  .select({ age: 0 })
  .exec((error, foundPeople) => {
    if (error) {
      console.error(error);
    } else {
      console.log(`People who like burritos:`, foundPeople);
    }
  });


  