import test1 from 'https://projectcure.github.io/searchScript.js'
$(document).ready(function() {
  alert(test1);
  // import { itemClicked } from "https://projectcure.github.io/searchScript.js"
  // import {clickFunction, itemClicked} from "https://projectcure.github.io/searchScript.js";
  // console.log( itemClicked );
  // Put artistList element and JSON file location into a variable
  //var infoList= $("#infoList");
  var url = "https://projectcure.github.io/Devices/model.json";
  import {test1} from 'https://projectcure.github.io/searchScript.js'

  // //gets the varible from searchScript.js
  // var myModule = require('https://projectcure.github.io/searchScript.js');
  // var name = myModule.name;




  // Get the JSON file




  $.getJSON(url,  function(data) {

    //  this sectino is to get the title info into a variable
    // var bob = data.Datascope1.map
    // make the model loading page to a float variable
    // var test = data.Datascope1;
    // alert(test);
    var x = "Datascope1";     // var model = data + "." + x;
    // var model = data + x;

    // var model = data;
    // var model1 = model + "." + Datascope1;
    // var json = '{}';
    //
    // var obj = JSON.parse(data.json);
    //
    // var last = obj.marquette
    // var jsonObj = JSON.parse(data);
    // var array = [Datascope1];
    alert(test1);






    data[x].map(function(item){

      //return item.manufacture + " (" + item.ProductCode + ")" + item.Model + item.manuelurl + item.Cuff;
      // return JSON.stringify(item.manufacture + " " + item.Model + " ");
      $('#title').html(item.manufacture+ " " + item.Model);
      $('#manufacture').html(item.manufacture);
      $('#Model').append(item.Model);
      $('#ProductCode').append(item.ProductCode);
      $('#Cuff').append(item.Cuff);
      $('#IMGUrl').append('<img class="img" src="' + item.IMGUrl + '" alt="avatar" />');
      $('#manuelUrl').append('<a href="' + item.manuelUrl + '" ><i class="fas fa-book fa-5x"></i></a>');

    });





  });
});
