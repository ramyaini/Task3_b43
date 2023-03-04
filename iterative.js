//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.id);
    console.log(obj.batch);
    console.log(obj.age);
    console.log(obj.Batchtype);

}
//for Each
json.forEach(function(obj) { console.log(obj.id); });

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].id);
  //console.log(json[key].batch);
 //console.log(json[key].age);
}//console.log(json[key].Batchtype);
}
//for Of
let text = "";
for (let x of json[key].id) {
 text += x; 
}
 console.log(text);

