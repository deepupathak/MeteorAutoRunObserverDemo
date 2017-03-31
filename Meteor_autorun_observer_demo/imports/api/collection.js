/*---------- Import Mongo ---------*/

import { Mongo } from 'meteor/mongo';

/*---------- Import Simple schema package ---------*/

import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/*---------- Import check package ---------*/

import { check } from 'meteor/check';

/*---------- Mongo Collection ----------*/

export const Student = new Meteor.Collection('student');

/*---------- Schema for Student collection -------*/

StudentSchema = new SimpleSchema({
	firstname: {
  		type: String,
  		max: 50
	},
	lastname: {
  		type: String,
  		max: 50
	},
	email: {
  		type: String,
  		max: 50
	},
	Address: {
  		type: String,
  		max: 50
	}
});

/*----------- Attach schema to Student Collection -------*/

Student.attachSchema(StudentSchema);


/*--------- Methods --------*/

Meteor.methods({

	/*------------- Method to insert record in Student collection in database --------------*/

	insertRecord: function(fname, lname, email, address){

		check(fname, String);
		check(lname, String);
		check(email, String);
		check(address, String);

		/*--------- Insert record in Student Collection --------*/
		
		Student.insert({
			"fname": fname,
			"lname": lname,
			"email": email,
			"address": address
		});
	}
});