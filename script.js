
let Beers = [];
var addBeer = function (name, category, rate) {
    let beer = { name: name, category: category, rate: rate }
    Beers.push(beer)
};

$(".post-beer").click(function () {
    addBeer($(".beer-input").val(), $(".category-input").val(), GetVal());
    renderBeers();
})

const renderBeers = function () {
    $(".beers-list").empty();
    for (let i in Beers) {
        $(".beers-list").append("<li>" + " name: " + Beers[i].name + " category: " + Beers[i].category + " rate: " + Beers[i].rate + "</li>");
    }
}

function GetVal() {
    var inputs = $(".rate-input");
    for (let input of inputs) {
        if (input.checked) {
            return input.value;
        }
        sortVal();
    }
}

//extention 5.1
function sortVal() {
    Beers.sort(function (a, b) {
        if (a.rate < b.rate)
            return -1;
        else if (a.rate == b.rate)
            return 0;
        else
            return 1;
    })
    renderBeers();
}

//extention 5.2
function sortVal2() {
    Beers.sort(function (a, b) {
        if (a.rate > b.rate)
            return -1;
        else if (a.rate == b.rate)
            return 0;
        else
            return 1;
    })
    renderBeers();
}
  
var timesClicked = 0;
$(".user-review").click(function () {
    timesClicked++;
    if (timesClicked > 1) {
        sortVal2();
    } else {
        sortVal();
    }
})


