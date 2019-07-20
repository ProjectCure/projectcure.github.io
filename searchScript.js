// <!-- Jquery -->
// export feature declared earlier as default
// export { clickFunction as default };
// let test1; export default test1 = null;

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
// document.getElementById("result").addEventListener("click", function(clickFunction){
//
//   if(clickFunction.target && clickFunction.target.nodeName == "A"){
//     globalTest1 = clickFunction.target.id;
//
//
//     //exports = { itemClicked };
//
//
//
//
//   };
// });
// alert(globalTest1);
document.getElementById("result").addEventListener("click", function(clickFunction){



  if(clickFunction.target && clickFunction.target.nodeName == "A"){
    var m = clickFunction.target.id;

    // module.exports.variableName = "variableValue";




    //exports = { itemClicked };




  };
});























});
// file test.js
// let m; export default m = 12;
// export features declared earlier
// export { clickFunction, m };
