$("#run-search").on('click', function(event) {
    event.preventDefault();
    var searchq = $("#search-term").val();
    var startDate = $("#start-year").val();
    var endYear = $("#end-year").val();
    var numRecord = $("#num-records-select").val();

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'api-key': "987a6b86ec174fc9acebed6162976797",
        'q': searchq,

    });

    $.ajax({
        url: url,
        method: 'GET',
    }).done(function(result) {
        console.log(result);
        var resp = result.response.docs;
        for (var i = 0; i < resp.length; i++) {
            var myDiv = $('<div>');
            var p = $("<p>").text("written: " + resp[i].headline.main);
            myDiv.append(p);
            $('#well-section').append(myDiv);
            $("#search-term").val("");
            $("#start-year").val("");
            $("#end-year").val("");
            $("#num-records-select").val("");
        }
        console.log(resp);

    }).fail(function(err) {
        console.log(err)
        throw err;
    });
});