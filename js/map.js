// /*
//  * Copyright 2017 Google Inc. All rights reserved.
//  *
//  *
//  * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
//  * file except in compliance with the License. You may obtain a copy of the License at
//  *
//  *     http://www.apache.org/licenses/LICENSE-2.0
//  *
//  * Unless required by applicable law or agreed to in writing, software distributed under
//  * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
//  * ANY KIND, either express or implied. See the License for the specific language governing
//  * permissions and limitations under the License.
//  */

// // Style credit: https://snazzymaps.com/style/1/pale-dawn
// const mapStyle = [
//   {
//     "featureType": "administrative",
//     "elementType": "all",
//     "stylers": [
//       {
//         "visibility": "on"
//       },
//       {
//         "lightness": 33
//       }
//     ]
//   },
//   {
//     "featureType": "landscape",
//     "elementType": "all",
//     "stylers": [
//       {
//         "color": "#f2e5d4"
//       }
//     ]
//   },
//   {
//     "featureType": "poi.park",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#c5dac6"
//       }
//     ]
//   },
//   {
//     "featureType": "poi.park",
//     "elementType": "labels",
//     "stylers": [
//       {
//         "visibility": "on"
//       },
//       {
//         "lightness": 20
//       }
//     ]
//   },
//   {
//     "featureType": "road",
//     "elementType": "all",
//     "stylers": [
//       {
//         "lightness": 20
//       }
//     ]
//   },
//   {
//     "featureType": "road.highway",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#c5c6c6"
//       }
//     ]
//   },
//   {
//     "featureType": "road.arterial",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#e4d7c6"
//       }
//     ]
//   },
//   {
//     "featureType": "road.local",
//     "elementType": "geometry",
//     "stylers": [
//       {
//         "color": "#fbfaf7"
//       }
//     ]
//   },
//   {
//     "featureType": "water",
//     "elementType": "all",
//     "stylers": [
//       {
//         "visibility": "on"
//       },
//       {
//         "color": "#acbcc9"
//       }
//     ]
//   }
// ];

// // Escapes HTML characters in a template literal string, to prevent XSS.
// // See https://www.owasp.org/index.php/XSS_%28Cross_Site_Scripting%29_Prevention_Cheat_Sheet#RULE_.231_-_HTML_Escape_Before_Inserting_Untrusted_Data_into_HTML_Element_Content
// function sanitizeHTML(strings) {
//   const entities = {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'};
//   let result = strings[0];
//   for (let i = 1; i < arguments.length; i++) {
//     result += String(arguments[i]).replace(/[&<>'"]/g, (char) => {
//       return entities[char];
//     });
//     result += strings[i];
//   }

//   return result;
// }

// function initMap() {

//   // Create the map.
//   const map = new google.maps.Map(document.getElementsByClassName('map')[0], {
//     zoom: 7,
//     center: {lat:  40.730610, lng: -73.935242},
//     styles: mapStyle
//   });

//   //added
//  // Try HTML5 geolocation.
//  if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(function(position) {
//     var pos = {
//       lat: position.coords.latitude,
//       lng: position.coords.longitude
//     };

//     infoWindow.setPosition(pos);
//     infoWindow.setContent('Your Location.');
//     infoWindow.open(map);
//     map.setCenter(pos);
//   }, function() {
//     handleLocationError(true, infoWindow, map.getCenter());
//   });
// } else {
//   // Browser doesn't support Geolocation
//   handleLocationError(false, infoWindow, map.getCenter());
// }

// //added end
  


//   // Load the stores GeoJSON onto the map.
//   map.data.loadGeoJson('js/stores2.json');

//   // Define the custom marker icons, using the store's "category".
//   // map.data.setStyle(feature => {
//   //   return {
//   //     icon: {
//   //       url: `img/${feature.getProperty('category')}.png`,
//   //       scaledSize: new google.maps.Size(64, 64), 
//   //     }
//   //   };
//   // });

//   const apiKey = 'AIzaSyAgGM-6T6s5uLyFe2Of7Hz2UhjwW29HVkA';
//   // const infoWindow = new google.maps.InfoWindow();
//   // infoWindow.setOptions({pixelOffset: new google.maps.Size(0, -30)});

//   // Show the information for a store when its marker is clicked.
//   map.data.addListener('click', event => {

//     const category = event.feature.getProperty('category');
//     const name = event.feature.getProperty('name');
//     const description = event.feature.getProperty('description');
//     const address = event.feature.getProperty('address');
//     const hours = event.feature.getProperty('hours');
//     const phone = event.feature.getProperty('phone');
//     const position = event.feature.getGeometry().get();
//     const content = sanitizeHTML`
//       <img style="float:left; width:200px" src="img/logo-${category}.png" class="toyotaImage">
//       <div class="toyota-body" style="margin-left:220px;">
//         <h2>${name}</h2><p>${description}</p>
//         <p><b>Address:</b> ${address}
//         <p><b>Open:</b> ${hours}<br/><b>Phone:</b> ${phone}</p>
        
//       </div>
//     `;



//     infoWindow.setContent(content);
//     infoWindow.setPosition(position);
//     infoWindow.open(map);
//   });


// }


// // <p><img src="https://maps.googleapis.com/maps/api/streetview?size=350x120&location=${position.lat()},${position.lng()}&key=${apiKey}"></p>




