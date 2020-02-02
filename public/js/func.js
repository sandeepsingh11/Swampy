// results element
var resultParent = $("#results");
var resultChildren = $(resultParent).children();

// on form submit
$("#form").submit(function(event) {

    // stop form refresh
    event.preventDefault();

    // get user input
    var input = document.getElementById("query").value;

    // check / correct url validity
    input = correctUrl(input);

    // if invalid url, try again
    if (input === null) {
        $(resultChildren[0]).html("Please enter a valid url :)");
    }
    else {
        // make full url
        var greenUrl = "https://api.websitecarbon.com/b?url=" + input;
        var colorUrl = "https://www.colorfyit.com/api/swatches/list.json?url=" + input;
        
        // get green api data
        $.get(greenUrl, function(req, res) {
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
                $("#results").css("display", "block");
                
                $(resultChildren[0]).html("Results for: " + input);
                $(resultChildren[1]).html("Carbon: " + c.toFixed(2) + "g").css("display", "block");
                $(resultChildren[2]).html("Percentile: " + p + "%").css("display", "block");
            }
        });

        // get color api data
        $.get(colorUrl, function(req, res) {
            if (res === "success") {
                var colorObj = JSON.parse(req);
                console.log(colorObj);
            }
        });
    }
});

function correctUrl(input) {

    // check if there is a valid extension
    var extension = input.search(/\.[a-z]{2,}/i); // ".??(?..)" ie. ".ru", ".com", ".space"
    if (extension === -1) {
        console.log(`${input} is not a valid url`);

        $("#results").css("display", "block");
        $(resultChildren[1]).html("").css("display", "none");
        $(resultChildren[2]).html("").css("display", "none");
        
        return null;
    }

    // check if there is a "/" at the end of the url
    var backslash = input.endsWith("/");
    if (!backslash)
        input+= "/";

    console.log(`correction: ${input}`);

    return input;
}