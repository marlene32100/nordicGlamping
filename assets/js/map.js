function initMap() {
        
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 3,
                center: {
                    lat: 63.850504,
                    lng: 0.179492
                },
            });

            var locations= [
        {
        title:"Island Lodge",
        position: {lat: 59.370024, lng:18.379133},
        map: map,
        image: "assets/images/islandlodge.jpg"
        },

        {
        title: "Ice Hotel",
        position: {lat: 67.858899, lng: 20.527139},
        map: map,
        image: "assets/images/ice.jpg"
        },

        {
        title:"Tree Hotel",
        position: {lat: 66.072939, lng: 20.981868},
        map: map,
        image: "assets/images/treehotel.jpg"
        },

        {
        title:"Narvik Adventures",
        position: {lat: 68.430937, lng:17.436482},
        map: map,
        image: "assets/images/narvik.jpg"
        },

        {
        title: "Aurora Glamping Jeris",
        position: {lat: 67.952358, lng: 23.925108},
        map: map,
        image: "assets/images/jeris.jpg"
        },

        {
        title:"Torassieppi Jerisjärvi",
        position: {lat: 67.952380, lng: 23.925098},
        map: map,
        image: "assets/images/torassieppi.jpg"
        },

        {
        title:"Kakslauttanen Igloo",
        position: {lat: 68.334263, lng:27.334750},
        map: map,
        image: "assets/images/kakslauttanen.jpg"
        },

        {
        title: "Levin Igloo",
        position: {lat: 67.787191, lng: 24.891061},
        map: map,
        image: "assets/images/levin.jpg"
        },

        {
        title:"Reykjaviks Domes",
        position: {lat: 64.146665, lng:  -21.809352},
        map: map,
        image: "assets/images/domes.jpg"
        },

        {
        title:"Buubble",
        position: {lat: 64.165032, lng: -20.501192},
        map: map,
        image: "assets/images/buubble.jpg"
        }
        ]

        for (let i = 0; i < locations.length; i++) {
        let marker = new google.maps.Marker({
            position: locations[i].position,
            map: map
        });

        let contentString = '<div class="card" style="width: 20rem;">'+'<img class="card-img-top" src="'+locations[i].image+'" alt="Card image cap">'
  +'<div class="card-body">'+'<h1 class="card-text map-title">'+locations[i].title+'</h1>'+'</div>'+'</div>';

        let infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 400
        });

        marker.addListener("click", () => {
        
            if (infowindow) {
                infowindow.close();
            }
            infowindow.open(map, marker);
        });

        map.addListener("click", () => {
            if (infowindow) {
                infowindow.close();
            }
        })
    }
        }