function initMap() {
        
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 3,
                center: {
                    lat: 56.638488,
                    lng: 5.571360
                },
            });

            var locations= [
        {
        title:"Island Lodge",
        position: {lat: 59.370024, lng:18.379133},
        map: map
        },

        {
        title: "Ice Hotel",
        position: {lat: 67.858899, lng: 20.527139},
        map: map
        },

        {
        title:"Tree Hotel",
        position: {lat: 66.072939, lng: 20.981868},
        map: map
        },

        {
        title:"Narvik Adventures",
        position: {lat: 68.430937, lng:17.436482},
        map: map
        },

        {
        title: "Aurora Glamping Jaris",
        position: {lat: 67.952358, lng: 23.925108},
        map: map
        },

        {
        title:"Torassieppi accomodation",
        position: {lat: 67.952380, lng: 23.925098},
        map: map
        },

        {
        title:"Kakslauttanen Igloo",
        position: {lat: 68.334263, lng:27.334750},
        map: map
        },

        {
        title: "Levin Igloo",
        position: {lat: 67.787191, lng: 24.891061},
        map: map
        },

        {
        title:"Reykjaviks Domes",
        position: {lat: 64.146665, lng:  -21.809352},
        map: map
        },

        {
        title:"Sky sighting Iglúhús",
        position: {lat: 65.944634, lng:  -18.326419},
        map: map
        }
        ]

        for (let i = 0; i < locations.length; i++) {
        let marker = new google.maps.Marker({
            position: locations[i].position,
            map: map
        });

        let contentString = "<h4>"+locations[i].title+"</h4>";
        let infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 400
        });

        marker.addListener("click", () => {
            infowindow.open(map, marker);
        });
    }
        }