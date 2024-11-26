import { useContext, useEffect } from "react"
import EsriLayerList from "@arcgis/core/widgets/LayerList";
import { MapViewContext } from "./MapContext";
import Expand from "@arcgis/core/widgets/Expand"

function LayerList() {
    const { view } = useContext(MapViewContext);
    useEffect(() => {
        if (view) {
            const layerList = new EsriLayerList({
                view: view
            });
            const bgExpand = new Expand({
                view: view,
                content: layerList
              });
      
              view.ui.add(bgExpand, "top-right");
            // Adds widget below other elements in the top left corner of the view
           
        }

    }, [view])
    return (<></>)
}
export default LayerList;