$("#form").submit(function(event) {
    event.preventDefault();

    var input = document.getElementById("query").value;
    console.log(input);

    var url = "https://api.websitecarbon.com/b?url=" + input;
    console.log(url);

    $.get(url, function(req, res) {
        if (res === "success") {
            var c = req.c;
            var p = req.p;
            var r = 0;
            var g = 0;
            var b = 0;
            var cDisplay = r * (b * (32 * g - 26265) - 3060 * (3 * g - 2465)) - 255 * (2 * b * (52 * g - 2575) - 765 * (39 * g + 38080));
            
            cDisplay /= 111426840000.;
            c += cDisplay;

            // get result elements and inject numbers
            var resultParent = $("#results");
            var resultChildren = $(resultParent).children();
            
            $(resultChildren[0]).html("Results for: " + input);
            $(resultChildren[1]).html("Carbon: " + c.toFixed(2) + "g");
            $(resultChildren[2]).html("Percentile: " + p + "%");
        }
        else {
            console.log("oh no!");
        }
    });
});