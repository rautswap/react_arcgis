import React, {  createContext, useState } from "react";
import MapView from "@arcgis/core/views/MapView";
import EsriMap from "@arcgis/core/Map";
import { useEffect, useRef } from "react";
export const MapViewContext = createContext();
function MapViewContextPrvider({children}) {
    const [view, setView] = useState();
    const mapDiv = useRef(null);
    useEffect(() => {
        if (mapDiv.current) {
            /**
             * Initialize application
             */
            const webmap = new EsriMap({
                basemap: "topo-vector"
            });

            const _view = new MapView({
                container: mapDiv.current, // The id or node representing the DOM element containing the view.
                map: webmap, // An instance of a Map object to display in the view.
                center: [78.440309, 23.250908],
                zoom: 7
            });

            setView(_view)

            return () => _view && _view.destroy();

        }
    }, []);

    return (<MapViewContext.Provider
        value={{view}}>
        <div className="mapDiv" ref={mapDiv} style={{ height: '100vh', width: "100%" }}></div>
        {children}
    </MapViewContext.Provider>)
    // ;

}
export default MapViewContextPrvider;