/*----------- Import body.js file from imports/ui folder ---------*/

import '../imports/ui/body.js';

/*--------------- Import Flow router package -------------*/

import { FlowRouter } from 'meteor/kadira:flow-router';

/*---- Router for home page ------*/

FlowRouter.route('/', {
  	action: function() {

  		/*---------- Render AddRecordForm template at homepage --------*/
  	
    	BlazeLayout.render('AddRecordForm');
  	}
});