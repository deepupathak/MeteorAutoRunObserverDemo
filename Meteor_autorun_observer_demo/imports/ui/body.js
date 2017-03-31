/*----------- Import Template ---------*/

import { Template } from 'meteor/templating';

/*----------- Import collection.js file from api folder ---------*/

import { Student } from '../api/collection.js';

/*----- Add Student Collection to window scope -----*/

window.Student = Student;

/*----------- Import body.html file from current folder ---------*/

import './body.html';

/*---------- Handle event on AddRecordForm Template ---------*/

Template.AddRecordForm.events({

  	/*----------- Handle button click event --------------*/

	'click .add'(e, t) {
  		e.preventDefault();

    	/*-------------- Get the value of form elements ---------*/ 

  		var fname = t.find('#fname').value;
  		var lname = t.find('#lname').value;
  		var email = t.find('#email').value;
  		var address = t.find('#address').value;

    	/*------------ Call insertRecord method -------------*/

		Meteor.call("insertRecord", fname, lname, email, address);
  	}
});

/*--------- Helper for AddRecordForm Template ---------*/

Template.AddRecordForm.helpers({

  	/*-------- For showing record in table --------*/

  	students: function() {
    	return Student.find().fetch();
  	},

  	/*---------- for counting total no of records in student collection in databse ---------*/

  	Count: function(){
    	return Student.find().count();
  	}
});

/*--------- onRendered function of AddRecordForm ----------*/

Template.AddRecordForm.onRendered(function() {
  	var self = this;

  	/*---------- Autorun ---------*/

  	self.autorun(function() {
    	self.subscribe("studentRecord");
  	});

  	/*--------- Observer ---------*/

  	Student.find().observe({

    	/*-------- Invoked when record added in database ----------*/
  	
    	added: function(document){
  			console.log("Record added ->", document._id);
  		},

    	/*-------- Invoked when record updated/changed in database ----------*/
    
  		changed: function(newDocument, oldDocument) {
    		console.log("Record changed ->", newDocument);
  		},

    	/*-------- Invoked when record deleted from database ----------*/
    
  		removed: function(oldDocument) {
  			console.log("Record removed ->", oldDocument._id);
  		}
  	})
});