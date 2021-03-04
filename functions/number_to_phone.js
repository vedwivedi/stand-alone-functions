exports.handler = function(context, event, callback) {
    const phoneFormatter = require('phone-formatter');
  
       let response = {result:""};
      var agentnumber=event.AgentPhone;
      
      var returnact="";
      returnact=returnact=phoneFormatter.format(agentnumber, "(NNN) NNN-NNNN");
      
      response.result=returnact;
      callback(null, response);
      
  };