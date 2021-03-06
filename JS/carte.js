
        // On initialise la latitude et la longitude de Paris (centre de la carte)
            var lat = 43.44608915608209;
            var lon = -1.5537658442331754;
            var macarte = null;
            // Fonction d'initialisation de la carte
            function initMap() {
                // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
                macarte = L.map('map').setView([lat, lon], 11);
                // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
                L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
                    // Il est toujours bien de laisser le lien vers la source des données
                    attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
                    minZoom: 1,
                    maxZoom: 20
                }).addTo(macarte);
                var marker = L.marker([lat, lon]).addTo(macarte);
                marker.bindPopup("<p>Voici le prototype que nous construisons à ESTIA. Si vous cliquez sur le bouton ci-dessous, vous verrez l'état de remplissage et bien d'autres informations intéressantes!</p><p> <a href='gestion.php'>Prototype Triosaure</a></p>")
            }
            window.onload = function(){
		// Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
		initMap();
            };

