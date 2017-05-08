// business logic

function Location(countries, cities, dates, landmarks, notes) {
  this.countryName = countries;
  this.cityName = cities;
  this.dateName = dates;
  this.landmarkName = landmarks;
  this.noteName = notes;
}

Location.prototype.locationName = function() {
  return this.cityName + " " + this.countryName;
}

//user interface logic
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();

    var inputtedCountry = $("input#new-country").val();
    var inputtedCity = $("input#new-city").val();
    var inputtedDate = $("input#new-date").val();
    var inputtedLandmark = $("input#new-landmark").val();
    var inputtedNote = $("input#new-note").val();

    var newLocation = new Location(inputtedCountry, inputtedCity, inputtedDate, inputtedLandmark, inputtedNote);

    $("ul#locations").append("<li><span class='location'>" + newLocation.locationName() + "</span></li>");

    $("input#new-country").val("");
    $("input#new-city").val("");
    $("input#new-date").val("");
    $("input#new-landmark").val("");
    $("input#new-note").val("");
    $(".location").last().click(function() {
      $("#show-location").show();
      $("#show-location h2").text(newLocation.countryName);
      $(".country").text(newLocation.countryName);
      $(".city").text(newLocation.cityName);
      $(".date").text(newLocation.dateName);
      $(".landmark").text(newLocation.landmarkName);
      $(".note").text(newLocation.noteName);
    });
  });
});
