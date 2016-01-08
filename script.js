$(document).ready(function() {
//    $.get("/airquality/countries/es/cities/barcelona/stations", function(stations){
//        alert("GET");
//    });
    var stations = getCityStations();
    var cityValue = getCityValue().value;
    var i;
    var currentRow;
    var col = 2;
    createCityValueBox(cityValue);
    for(i = 0; i < stations.length; i++) {
        $("#mainContainer .row:last-child").append('<div class="col-md-4"><div class="jumbotron"><p>'+stations[i].name+'</p></div></div>');
        col++;
        if(col == 3) {
            col = 0;
            $("#mainContainer").append('<div class="row"></div>');
        }
    }
});

function getCityStations(country, city) {
    var stations = [ 
        {"name": "Gracia", "link": "/airquality/countries/es/cities/barcelona/stations/gracia"}, 
        {"name": "Eixample", "link": "/airquality/countries/es/cities/barcelona/stations/eixample"}, 
        {"name": "Palau Reial", "link": "/airquality/countries/es/cities/barcelona/stations/palaureial"},
        {"name": "Poblenou", "link": "/airquality/countries/es/cities/barcelona/stations/poblenou"},
        {"name": "Ciutadella", "link": "/airquality/countries/es/cities/barcelona/stations/ciutadella"}
    ];
    return stations;
};

function getStation(id) {
    return {"status": 4, "value": 23.00, "unit": "&microg/m&sup3"};
}

function getCityValue(country, city) {
    return {"value": "50:00" };
}


function createCityValueBox(cityValue) {
    $("#mainContainer").append('<div class="row"><div class="col-md-8"><div class="jumbotron"><p>Polution level in Barcelona: '+cityValue+'</p></div></div></div>');
}
