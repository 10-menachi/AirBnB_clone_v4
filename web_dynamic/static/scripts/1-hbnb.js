$(document).ready(function () {
  let selectedAmenities = {};

  $('input[type="checkbox"]').change(function () {
    const amenityId = $(this).attr("data-id");
    const amenityName = $(this).attr("data-name");

    if ($(this).is(":checked")) {
      selectedAmenities[amenityId] = amenityName;
    } else {
      delete selectedAmenities[amenityId];
    }

    updateAmenitiesDisplay();
  });

  function updateAmenitiesDisplay() {
    const amenitiesList = Object.values(selectedAmenities).join(", ");
    if (amenitiesList.length > 0) {
      $(".amenities h4").text(amenitiesList);
    } else {
      $(".amenities h4").html("&nbsp;");
    }
  }
});
