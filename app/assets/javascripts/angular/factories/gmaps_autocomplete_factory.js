demandsApp.factory('GmapsAutocompleteFactory', ['$resource', function($resource){

  return { 
    
    setup: function(elemId) {
      var defaultBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(-20.6227433, -43.7999582),
        new google.maps.LatLng(-20.4311149, -43.5756612)
      );

      var options = { bounds: defaultBounds, componentRestrictions: { country: 'BR' } };
      var input = document.getElementById(elemId);

      var autocomplete = new google.maps.places.Autocomplete(input, options);
      
      return autocomplete;
    }

  }


}]);
