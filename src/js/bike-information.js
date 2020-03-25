$(function() {
    hidePopup();
    fillPage();
});

function showBikeInformation(bike_id) {
    let bike = getBikeById(bike_id);
    $($("#image")[0]).attr("src", bike.image);
    $("#brand")[0].innerHTML = "<b>Brand:</b> " + bike.brand;
    $("#model")[0].innerHTML = "<b>Model:</b> " + bike.model;
    $("#power")[0].innerHTML = "<b>Power:</b> " + bike.power;
    $("#price")[0].innerHTML = "<b>Price:</b> " + bike.price;
    $("#bikeInformation").show();
}

function showCreateForm(category) {
    $($("#setCategory")[0]).attr("value", category);
    $("#createBike").show();
}

function hidePopup() {
    $("#bikeInformation").hide();
    $("#createBike").hide();
}

function fillPage() {
    let bikes = getBikes();

    bikes.forEach(function(bike, i) {
        addBikeToPage(bike, i);
    });
    $(document.body).attr("class", JSON.stringify(bikes));
}

function getBikes() {
    let json = $(document.body).attr("class");
    return JSON.parse(json);
}

function getBikeById(bike_id) {
    let bikes = getBikes();
    return bikes[bike_id];
}

function createBike() {
    let bike = {
        "image": $("#setImage")[0].value,
        "brand": $("#setBrand")[0].value,
        "model": $("#setModel")[0].value,
        "power": $("#setPower")[0].value,
        "price": $("#setPrice")[0].value,
        "category": $("#setCategory")[0].value
    };
    let bikes = getBikes();
    bikes.push(bike);
    addBikeToPage(bike, bikes.length - 1);
    $(document.body).attr("class", JSON.stringify(bikes));
    hidePopup();
}

function addBikeToPage(bike, bike_id) {
    let a = document.createElement('a');
    let img = document.createElement('img');
    $(img).attr("class", "category-img");
    $(img).attr("src", bike.image);
    a.append(img);

    $(a).attr("id", bike_id);

    $(a).attr("href", "#!");

    $(a).attr("onclick", "showBikeInformation(" + a.id + ")");
    document.getElementById(bike.category).before(a);
}