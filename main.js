require(["esri/Map","esri/layers/FeatureLayer","esri/views/MapView"], function (
    Map,
    FeatureLayer,
    MapView
) {



    //This creates the basemap
    const map = new Map({
            basemap: "gray-vector"
        });
    //This creates the featurelayer
    const NTALayer = new FeatureLayer({
        url: "https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/NYC_Neighborhood_Tabulation_Areas/FeatureServer/0/query?outFields=*&where=1%3D1"
    })

    view = new MapView({
        container: "viewDiv",
        map: map,
        zoom: 10,
        center: [-74.01205757492652, 40.70290881594061] // longitude, latitude

    });
    view.when(function(){
        //add the layer
        map.add(NTALayer);
    });


});
