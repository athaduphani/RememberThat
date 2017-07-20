

module.exports = {

responseforMultiple: function (result, startStatement, middleStatement, endStatement){
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
}
}
