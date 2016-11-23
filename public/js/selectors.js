$(document).ready(function initializeSelectors () {

  const hotelSelector = function () {
    for (let i = 0; i < hotels.length; i++) {
      const $newHotel = `${hotels[i].name}`;
      const $newLi = $('<option></option>');
      $newLi.append($newHotel);
      $('#hotel-choices').append($newLi);
    }
  };

  const restaurantSelector = function () {
    for (let i = 0; i < restaurants.length; i++) {
      const $newRestaurant = `${restaurants[i].name}`;
      const $newLi = $('<option></option>');
      $newLi.append($newRestaurant);
      $('#restaurant-choices').append($newLi);
    }
  };

  const activitySelector = function () {
    $.each(activities, function (index, value) {
      const $newActivity = `${value.name}`;
      const $newLi = $('<option></option>');
      $newLi.append($newActivity);
      $('#activity-choices').append($newLi);
    });
    //.each version
  };

  hotelSelector();
  restaurantSelector();
  activitySelector();

  const newItineraryItem = function (name, category) {
    $(`#${category}`).append(`<div class="itinerary-item">
        <span class="title">${name}</span>
        <button class="btn btn-xs btn-danger remove btn-circle">x</button>
      </div>`);
  };

  $('.btn-primary').on('click', function () {
    const $category = $(this).siblings('select').data().type;
    const $id = `#${$category}-choices`;
    const $optionName = $($id).val();
    newItineraryItem($optionName, $category);
  });

});
