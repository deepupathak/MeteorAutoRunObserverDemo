/*----------- Import collection.js file from imports/api folder ---------*/

import { Student } from '../imports/api/collection.js';

/*---------- Publish function ----------*/

Meteor.publish('studentRecord', function() {
  	return Student.find();
});