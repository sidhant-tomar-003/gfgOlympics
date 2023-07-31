import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiaGFycnkxMjM0OTgiLCJhIjoiY2s4OXh1c3BqMGFsZzNvbXA3YmYyaGFhYSJ9.wmVMiMxlSqpzJPsj-UXr3Q';

const Map = () => {
  const [markers, setMarkers] = useState([]); // Store markers in state

  useEffect(() => {
    // Create the map instance
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/dark-v10',
      zoom: 1,
      center: [0, 20]
    });

    // Function to remove all existing markers from the map
    const removeMarkers = () => {
      markers.forEach(marker => marker.remove());
      setMarkers([]);
    };
    // "Country-name":"Australia",
    // "NOC":"AUS",
    // "lat":-27,
    // "long":133,
    // "Gold-Medals":2,
    // "Silver-Medals":455,
    // "Bronze-Medals":517
    // Function to update the map with the fetched data
    const updateMap = () => {
      fetch("/assests/data.json")
        .then(response => response.json())
        .then(rsp => {
          removeMarkers(); // Remove existing markers before adding new ones
          rsp.data.forEach(element => {
            const { Country_name, NOC, lat, long, Gold_Medals, Silver_Medals, Bronze_Medals } = element;
            let color;
            // cases = element.infected;
            let sum = Gold_Medals + Silver_Medals + Bronze_Medals;
            if (sum > 25)
              color = "rgb(255,0,0)";
            else
              color = `rgb(${sum * 10},0,0)`;

            // Create a marker on the map
            const marker = new mapboxgl.Marker({
              draggable: false,
              color: color
            }).setLngLat([long, lat])
              .addTo(map);

            const popup = new mapboxgl.Popup({
              closeButton: false,
              closeOnClick: false
            });

            marker.getElement().addEventListener('mouseenter', () => {
              popup.setLngLat(marker.getLngLat())
                .setHTML(
                  `<h3>${Country_name}</h3>` +
                  `<p>NOC: ${NOC}</p>` +
                  `<p>GOLD: ${Gold_Medals}</p>` +
                  `<p>SILVER: ${Silver_Medals}</p>` +
                  `<p>BRONZE: ${Bronze_Medals}</p>`
                )
                .addTo(map);
            });

            marker.getElement().addEventListener('mouseleave', () => {
              popup.remove();
            });

            // Add the marker to the 'markers' state
            setMarkers(prevMarkers => [...prevMarkers, marker]);
          });
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    };

    // Call the updateMap function initially to populate the map
    updateMap();

    // Update the map every 20 seconds
    const interval = setInterval(updateMap, 20000);

    // Clear the interval when the component unmounts to avoid memory leaks
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h4 className="mb-3 mt-4" style={{display:"flex", justifyContent:"center", fontFamily:"'Montserrat', sans-serif", fontSize:"20px"}}>hello this is vinay </h4>
      <div id='map' style={{ width: '100%', height: '700px' }}></div>
    </div >
  );
};

export default Map;
