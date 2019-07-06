<!-- Jquery -->
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




                  console.log(value)

                  $('#result').append('<li class="list-group-item link-class"><a href=" '+value.manuelurl+' " class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Link</a>'+value.manufacture+' | <span class="text-muted">'+value.Model+'</span></li>');








        });
    });
});
});
