$(document).ready(function initializeSelectors () {

  let places = [ hotels, restaurants, activities  ];

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
    let $category = $(this).siblings('select').data().type;
    let $id = `#${$category}-choices`;
    let $optionName = $($id).val();
    let findTable = function () {
      if ($category === 'hotel') return places[0];
      if ($category === 'restaurant') return places[1];
      if ($category === 'activity') return places[2];
    };
    let tableName = findTable();

    let optionObj = tableName.filter(function(value) {
      return value.name === $optionName;
    });

    let optionCoords = optionObj[0].place.location;

    newItineraryItem($optionName, $category);
    drawMarker($category, optionCoords);

  });

  $('.remove').on('click', function () {
    console.log('Ive been clicked!');
    let $optionName = $(this).siblings('span').text();
    console.log($optionName);
  });

});

//changing days use --> marker.setMap(null) to clear map
