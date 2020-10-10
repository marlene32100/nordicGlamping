function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: {
      lat: 63.850504,
      lng: 0.179492,
    },
  });

  var locations = [
    {
      title: "Island Lodge",
      position: { lat: 59.370024, lng: 18.379133 },
      map: map,
      image: "assets/images/islandlodge.jpg",
      url: "https://islandlodge.se/Island_Lodge/HOME.html",
    },

    {
      title: "Ice Hotel",
      position: { lat: 67.858899, lng: 20.527139 },
      map: map,
      image: "assets/images/ice.jpg",
      url: "https://www.icehotel.com/",
    },

    {
      title: "Tree Hotel",
      position: { lat: 66.072939, lng: 20.981868 },
      map: map,
      image: "assets/images/treehotel.jpg",
      url: "https://www.treehotel.se/en/",
    },

    {
      title: "Narvik Adventure",
      position: { lat: 68.430937, lng: 17.436482 },
      map: map,
      image: "assets/images/narvik.jpg",
      url: "https://narvikadventures-com.webnode.com/",
    },

    {
      title: "Aurora Glamping Jeris",
      position: { lat: 67.952358, lng: 23.925108 },
      map: map,
      image: "assets/images/jeris.jpg",
      url:
        "https://harriniva.fi/holiday-destination/jeris/aurora-glamping-jeris/",
    },

    {
      title: "Torassieppi Jerisjärvi",
      position: { lat: 67.95238, lng: 23.925098 },
      map: map,
      image: "assets/images/torassieppi.jpg",
      url:
        "https://harriniva.fi/holiday-destination/torassieppi/auroraclamping_torassieppi/",
    },

    {
      title: "Kakslauttanen Igloo",
      position: { lat: 68.334263, lng: 27.33475 },
      map: map,
      image: "assets/images/kakslauttanen.jpg",
      url: "https://www.kakslauttanen.fi/",
    },

    {
      title: "Levin Igloo",
      position: { lat: 67.787191, lng: 24.891061 },
      map: map,
      image: "assets/images/levin.jpg",
      url: "https://leviniglut.net/glass-igloos-lapland-finland/",
    },

    {
      title: "Reykjaviks Domes",
      position: { lat: 64.146665, lng: -21.809352 },
      map: map,
      image: "assets/images/domes.jpg",
      url: "https://www.reykjavikdomes.com/",
    },

    {
      title: "Buubble",
      position: { lat: 64.165032, lng: -20.501192 },
      map: map,
      image: "assets/images/buubble.jpg",
      url: "https://www.buubble.com/",
    },
  ];

  var infoWindowContent = [
    [
      '<a href="' +
        locations[0].url +
        '" target="_blank" class="link-map">' +
        '<div class="card infowindow" style="width: 15rem;">' +
        '<img class="card-img-top" src="' +
        locations[0].image +
        '" alt="Card image cap">' +
        '<div class="card-body">' +
        '<h1 class="card-text map-title">' +
        locations[0].title +
        "</h1>" +
        "</div>" +
        "</div>" +
        "</a>",
    ],
    [
      '<a href="' +
        locations[1].url +
        '" target="_blank" class="link-map">' +
        '<div class="card infowindow" style="width: 15rem;">' +
        '<img class="card-img-top" src="' +
        locations[1].image +
        '" alt="Card image cap">' +
        '<div class="card-body">' +
        '<h1 class="card-text map-title">' +
        locations[1].title +
        "</h1>" +
        "</div>" +
        "</div>" +
        "</a>",
    ],
    [
      '<a href="' +
        locations[2].url +
        '" target="_blank" class="link-map">' +
        '<div class="card infowindow" style="width: 15rem;">' +
        '<img class="card-img-top" src="' +
        locations[2].image +
        '" alt="Card image cap">' +
        '<div class="card-body">' +
        '<h1 class="card-text map-title">' +
        locations[2].title +
        "</h1>" +
        "</div>" +
        "</div>" +
        "</a>",
    ],
    [
      '<a href="' +
        locations[3].url +
        '" target="_blank" class="link-map">' +
        '<div class="card infowindow" style="width: 15rem;">' +
        '<img class="card-img-top" src="' +
        locations[3].image +
        '" alt="Card image cap">' +
        '<div class="card-body">' +
        '<h1 class="card-text map-title">' +
        locations[3].title +
        "</h1>" +
        "</div>" +
        "</div>" +
        "</a>",
    ],
    [
      '<a href="' +
        locations[4].url +
        '" target="_blank" class="link-map">' +
        '<div class="card infowindow" style="width: 15rem;">' +
        '<img class="card-img-top" src="' +
        locations[4].image +
        '" alt="Card image cap">' +
        '<div class="card-body">' +
        '<h1 class="card-text map-title">' +
        locations[4].title +
        "</h1>" +
        "</div>" +
        "</div>" +
        "</a>",
    ],
    [
      '<a href="' +
        locations[5].url +
        '" target="_blank" class="link-map">' +
        '<div class="card infowindow" style="width: 15rem;">' +
        '<img class="card-img-top" src="' +
        locations[5].image +
        '" alt="Card image cap">' +
        '<div class="card-body">' +
        '<h1 class="card-text map-title">' +
        locations[5].title +
        "</h1>" +
        "</div>" +
        "</div>" +
        "</a>",
    ],
    [
      '<a href="' +
        locations[6].url +
        '" target="_blank" class="link-map">' +
        '<div class="card infowindow" style="width: 15rem;">' +
        '<img class="card-img-top" src="' +
        locations[6].image +
        '" alt="Card image cap">' +
        '<div class="card-body">' +
        '<h1 class="card-text map-title">' +
        locations[6].title +
        "</h1>" +
        "</div>" +
        "</div>" +
        "</a>",
    ],
    [
      '<a href="' +
        locations[7].url +
        '" target="_blank" class="link-map">' +
        '<div class="card infowindow" style="width: 15rem;">' +
        '<img class="card-img-top" src="' +
        locations[7].image +
        '" alt="Card image cap">' +
        '<div class="card-body">' +
        '<h1 class="card-text map-title">' +
        locations[7].title +
        "</h1>" +
        "</div>" +
        "</div>" +
        "</a>",
    ],
    [
      '<a href="' +
        locations[8].url +
        '" target="_blank" class="link-map">' +
        '<div class="card infowindow" style="width: 15rem;">' +
        '<img class="card-img-top" src="' +
        locations[8].image +
        '" alt="Card image cap">' +
        '<div class="card-body">' +
        '<h1 class="card-text map-title">' +
        locations[8].title +
        "</h1>" +
        "</div>" +
        "</div>" +
        "</a>",
    ],
    [
      '<a href="' +
        locations[9].url +
        '" target="_blank" class="link-map">' +
        '<div class="card infowindow" style="width: 15rem;">' +
        '<img class="card-img-top" src="' +
        locations[9].image +
        '" alt="Card image cap">' +
        '<div class="card-body">' +
        '<h1 class="card-text map-title">' +
        locations[9].title +
        "</h1>" +
        "</div>" +
        "</div>" +
        "</a>",
    ],
  ];

  var infoWindow = new google.maps.InfoWindow(),
    marker,
    i;

  for (let i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: locations[i].position,
      map: map,
    });

    infoWindow = new google.maps.InfoWindow();

    google.maps.event.addListener(
      marker,
      "click",
      (function (marker, i) {
        return function () {
          infoWindow.setContent(infoWindowContent[i][0]);
          infoWindow.open(map, marker);
        };
      })(marker, i)
    );
  }
}
