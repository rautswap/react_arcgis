import { useContext, useEffect } from "react";
import { MapViewContext } from "./MapContext";
import EsriBasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import Basemap from "@arcgis/core/Basemap";
import Expand from "@arcgis/core/widgets/Expand"
function BasemapGallary()  {
    const { view } = useContext(MapViewContext)
    useEffect(() => {
        if (view) {
            const basemapGallery = new EsriBasemapGallery({
                view: view,
                container: document.createElement("div"),
                source: [Basemap.fromId("topo-vector"), Basemap.fromId("hybrid")] // autocasts to LocalBasemapsSource
            });
            const bgExpand = new Expand({
              view: view,
              content: basemapGallery
            });
    
            view.ui.add(bgExpand, "top-right");
             
        }
    }, [view])
    return (<div className="mapDiv" ></div>);
}
export default BasemapGallary;


