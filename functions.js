module.exports = {
  // Start responseforOneParam function
  responseforOneParam1: function(parameter, startStatement, endStatement){
    let response = startStatement;
    for (var i = 0; i < req.body.result.parameters.type.length; i++) {
      if (req.body.result.parameters.type.length == 1) {
        response = response + req.body.result.parameters.type[i] +' '+ endStatement;
      }
      else if (i == req.body.result.parameters.type.length-1){
        response = response + 'and ' + req.body.result.parameters.type[i] +' '+ endStatement ;
      }else{
        response = response + req.body.result.parameters.type[i]+ ' ' ;
    }
    }
    return response;
  }, // End responseforOneParam function
// Start responseforMultiple function
responseforMultiple1: function(result, startStatement, middleStatement, endStatement){
  let response = '';
  let itemName = 'NA';
  for (var i = 0; i < result.length; i++) {
    if(result[i].item == itemName){
      if( i != result.length-1){
      if(result[i].item == result[i+1].item){
        response = response + ', ' + result[i].date;
      }else{
        response = response + ' and ' + result[i].date;
      }
    }else{
      response = response + ' and ' + result[i].date+ endStatement;
    }
    }
    else{
      if(result.length == 1){
        response = response + startStatement + result[i].item + middleStatement  + result[i].date+'.\n';
      }
      else if(i == 0){
        response = response + startStatement + result[i].item + middleStatement +'['  + result[i].date;
      }else if (i == result.length-1) {
        response = response + endStatement +startStatement + result[i].item + middleStatement  +result[i].date+'.\n';
      }else {
        response = response + endStatement +startStatement + result[i].item + middleStatement+'['  +result[i].date;
      }
      itemName = result[i].item;
  }
}
  return response;
}// End responseforMultiple function
// Start responseforMultipleExpire function
// responseforMultipleExpire: function(result, startStatement, middleStatement1, middleStatement2, endStatement){
//   let response = '';
//   let itemName = 'NA';
//   for (var i = 0; i < result.length; i++) {
//     var expiryDateStart = result[i].expiryDateStart;
//     var expiryDateEnd = result[i].expiryDateEnd;
//     if(result[i].item == itemName){
//       if( i != result.length-1){
//        if(result[i].item == result[i+1].item){
//         response = response + ', ' + expiryDateStart + middleStatement2 + expiryDateEnd;
//        }else{
//         response = response + ' and ' + expiryDateStart + middleStatement2 + expiryDateEnd;
//        }
//      }else{
//       response = response + ' and ' + expiryDateStart + middleStatement2 + expiryDateEnd+ endStatement;
//       }
//     }else{
//       if(result.length == 1){
//         response = response + startStatement + result[i].item + middleStatement1  + expiryDateStart + middleStatement2 + expiryDateEnd +'.\n';
//       }else if(i == 0){
//         response = response + startStatement + result[i].item + middleStatement1 +'['  + expiryDateStart + middleStatement2 + expiryDateEnd;
//       }else if(i == result.length-1) {
//         response = response + endStatement +startStatement + result[i].item + middleStatement1  + expiryDateStart + middleStatement2 + expiryDateEnd+'.\n';
//       }else {
//         response = response + endStatement +startStatement + result[i].item + middleStatement1 +'['  + expiryDateStart + middleStatement2 + expiryDateEnd;
//       }
//       itemName = result[i].item;
//   }
// }
//   return response;
// } // End responseforMultipleExpire function
}
