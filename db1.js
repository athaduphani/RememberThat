
var Promise = require('rsvp').Promise;

module.exports = {
  getType: function() {
  return new Promise(function(resolve, reject) {
    MongoClient.connect(url, function(err, db) {
      if (err) { reject(err); } else { resolve(db); }
    // }
  }).then(function(db) {
    return new Promise(function(resolve, reject) {
    db.collection("items_data").find({"name": "Banana"}).toArray(function(err, result){
        if (err) {
          reject(err);
        } else {
        //   var type = '';
        //   if(result.length == 0){
        //       console.log(" Type is not found for the item");
        //       type = 'Default';
        // }else{
        //   type = result[0].type;
        // }
          resolve(Object.values(result)[0]);
        }
      });
    });
  });
});
}
