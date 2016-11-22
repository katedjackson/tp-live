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
  for (let i = 0; i < activities.length; i++) {
    const $newActivity = `${activities[i].name}`;
    const $newLi = $('<option></option>');
    $newLi.append($newActivity);
    $('#activity-choices').append($newLi);
  }
};

hotelSelector();
restaurantSelector();
activitySelector();

$('').on('click', function () {});

});
