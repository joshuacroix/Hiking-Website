var api_key = '200733677-2cf41c5402cbd83eb7ff4af92cf19adf';
var button = document.querySelector('.button');
var latitude = document.querySelector('.lat');
var longitude = document.querySelector('.lon');
var trail0n = document.querySelector('.trail0n');
var trail1n = document.querySelector('.trail1n');
var trail2n = document.querySelector('.trail2n');
var trail3n = document.querySelector('.trail3n');
var trail4n = document.querySelector('.trail4n');

var trail0r = document.querySelector('.trail0r');
var trail1r = document.querySelector('.trail1r');
var trail2r = document.querySelector('.trail2r');
var trail3r = document.querySelector('.trail3r');
var trail4r = document.querySelector('.trail4r');

var trail0l = document.querySelector('.trail0l');
var trail1l = document.querySelector('.trail1l');
var trail2l = document.querySelector('.trail2l');
var trail3l = document.querySelector('.trail3l');
var trail4l = document.querySelector('.trail4l');

var trail0b = document.querySelector('.trail0b');
var trail1b = document.querySelector('.trail1b');
var trail2b = document.querySelector('.trail2b');
var trail3b = document.querySelector('.trail3b');
var trail4b = document.querySelector('.trail4b');

var trailArrayn = new Array("");
var trailArrayr = new Array("");
var trailArrayl = new Array("");
var trailArrayLng = new Array();
var trailArrayLat = new Array();

button.addEventListener('click', function() {
    fetch('https://www.hikingproject.com/data/get-trails?maxResults=5&lat=' + latitude.value + '&lon=' + longitude.value + '&key=' + api_key)
    .then(response => response.json())
    .then(data => {
        for (var i = 0; i < data.trails.length; i++) {
            trailArrayn[i] = data.trails[i].name;
            trailArrayr[i] = data.trails[i].stars;
            trailArrayl[i] = data.trails[i].length;
            trailArrayLng[i] = data.trails[i].longitude;
            trailArrayLat[i] = data.trails[i].latitude;
        }
        for (var i = data.trails.length; i < 5; i++) {
            // by default, this gets overwritten upon successful call
            trailArrayn[i] = "No trail found in this area";
            trailArrayr[i] = "N/A";
            trailArrayl[i] = "N/A";
            trailArrayLng[i] = -96.3165;
            trailArrayLat[i] = 30.6096;
        }
        
            trail0n.innerHTML = trailArrayn[0];
            trail1n.innerHTML = trailArrayn[1];
            trail2n.innerHTML = trailArrayn[2];
            trail3n.innerHTML = trailArrayn[3];
            trail4n.innerHTML = trailArrayn[4];
        
            trail0r.innerHTML = trailArrayr[0];
            trail1r.innerHTML = trailArrayr[1];
            trail2r.innerHTML = trailArrayr[2];
            trail3r.innerHTML = trailArrayr[3];
            trail4r.innerHTML = trailArrayr[4];
        
            trail0l.innerHTML = trailArrayl[0];
            trail1l.innerHTML = trailArrayl[1];
            trail2l.innerHTML = trailArrayl[2];
            trail3l.innerHTML = trailArrayl[3];
            trail4l.innerHTML = trailArrayl[4];
        });
})

function viewInMap(lng, lat) {
    // setup variables that can be used by the mapbox page
    sessionStorage.lng = JSON.stringify(lng);
    sessionStorage.lat = JSON.stringify(lat);
    // redirect to the map
    window.location.href = "./mapbox.html";
}

trail0b.addEventListener('click', function(){viewInMap(trailArrayLng[0], trailArrayLat[0])});
trail1b.addEventListener('click', function(){viewInMap(trailArrayLng[1], trailArrayLat[1])});
trail2b.addEventListener('click', function(){viewInMap(trailArrayLng[2], trailArrayLat[2])});
trail3b.addEventListener('click', function(){viewInMap(trailArrayLng[3], trailArrayLat[3])});
trail4b.addEventListener('click', function(){viewInMap(trailArrayLng[4], trailArrayLat[4])});
