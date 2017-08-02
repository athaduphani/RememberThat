module.exports = {
  // Start responseforOneParam function
  // responseforOneParam1: function(parameter, startStatement, endStatement){
  //   let response = startStatement;
  //   for (var i = 0; i < req.body.result.parameters.type.length; i++) {
  //     if (req.body.result.parameters.type.length == 1) {
  //       response = response + req.body.result.parameters.type[i] +' '+ endStatement;
  //     }
  //     else if (i == req.body.result.parameters.type.length-1){
  //       response = response + 'and ' + req.body.result.parameters.type[i] +' '+ endStatement ;
  //     }else{
  //       response = response + req.body.result.parameters.type[i]+ ' ' ;
  //   }
  //   }
  //   return response;
  // }, // End responseforOneParam function
  // Start itemsForResult function
itemsForResult: function(result, startStatement, endStatement){
    let response = startStatement;
    var itemName = 'NA';
    for (var i = 0; i < result.length; i++) {
      if(itemName != result[i].item){
      if (result.length == 1) {
        response = response + result[i].item + endStatement;
      }
      else if (i == result.length-1){
        response = response + ' and ' + result[i].item + endStatement ;
      }else if (i == 0){
        response = response + result[i].item ;
        itemName = result[i];
      }else{
        response = response +', '+ result[i].item ;
        itemName = result[i].item;
    }
  }else{
  }
    }
    return response;
  } // End itemsForResult function

}
