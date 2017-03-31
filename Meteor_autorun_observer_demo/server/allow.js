/*----------- Import collection.js file from imports/api folder ---------*/

import { Student } from '../imports/api/collection.js';

/*------------ Allow methods in Student collection -----------*/

Student.allow({
	insert: function(userId, doc) {
  		return true;
	},
	update: function(userId, doc, fieldNames, modifier) {
  		return true;
	},
	remove: function(userId, doc) {
  		return true;
	}
});