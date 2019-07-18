// <!-- Jquery -->
$(document).ready(function() {

    $('#search').keyup(function(event) {
        // $.ajaxSetup({ cache: false });
        $('#result').html('');
        var searchField = $('#search').val();
        var expression = new RegExp(searchField, "i");
        $.getJSON('data.json',function(data) {
            $.each(data, function(key, value) {
              //search bias
                if (value.manufacture.search(expression) != -1 || value.Model.search(expression) != -1)
                {



                  //need to reduce this to just get the name
                  // $('#result').append('<li class="list-group-item link-class"><a href=" '+value.manuelurl+' " class="btn btn-secondary btn-lg" role="button" aria-pressed="true">Link</a>'+value.manufacture+' | <span class="text-muted">'+value.Model+'</span></li>');
                  // $('#result').append('<li class="list-group-item link-class"><button id="'+value.Model+'" class="btn btn-secondary btn-lg" aria-pressed="true">'+value.manufacture+'</button></li>');
                  // $('#result').append('<li class="list-group-item link-class" id="'+value.Model+'"><a  class="btn btn-secondary btn-lg" role="button" aria-pressed="true">Link</a>'+value.manufacture+' | <span class="text-muted">'+value.Model+'</span></li>');
                  $('#result').append('<li class="list-group-item link-class"><a type="button" href="https://projectcure.github.io/models.html" id="'+value.Model+'" class="btn btn-secondary btn-lg btn-block" aria-pressed="true">'+value.manufacture+' | '+value.Model+'</a></li>');




                }





        });
    });


});

// function button(event){
//   var element = event.target;
//   alert(element.id);
//
// }
// function button(e){
//   if (e.target.tagName == 'BUTTON'){
//     alert(e.target.id);
//   }


//}
// $('#result').on('click', function() {
//   alert($(this).text());
//
//
//
//
// });
// $('#result li:selected').text();
// var bob = $('#result').manufacture;
// alert($('#result').manufacture);
document.getElementById("result").addEventListener("click", function(clickFunction){

  if(clickFunction.target && clickFunction.target.nodeName == "A"){
    window.test = clickFunction.target.id;

    //exports = { itemClicked };
    //alert(test);



  }













  // import { itemClicked } from "https://projectcure.github.io/searchScript.js"
  // import {clickFunction, itemClicked} from "https://projectcure.github.io/searchScript.js";
  // console.log( itemClicked );
  // Put artistList element and JSON file location into a variable
  // var infoList= $("#infoList");
  var url = "https://projectcure.github.io/Devices/model.json";

  // //gets the varible from searchScript.js
  // var myModule = require('https://projectcure.github.io/searchScript.js');
  // var name = myModule.name;




  // Get the JSON file




  $.getJSON(url,  function(data) {
      alert(test);

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
    //alert(data[x]);






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












});
