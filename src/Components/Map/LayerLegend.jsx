import { useContext, useEffect } from "react"
import EsriLegend from "@arcgis/core/widgets/Legend";
import { MapViewContext } from "./MapContext";
import Expand from "@arcgis/core/widgets/Expand"

function LayerLegend() {
    const { view } = useContext(MapViewContext);
    useEffect(() => {
        if (view) {
            let legend = new EsriLegend({
                view: view
              });
              
            const bgExpand = new Expand({
                view: view,
                content: legend
              });
      
              view.ui.add(bgExpand, "bottom-right");
            // Adds widget below other elements in the top left corner of the view
           
        }

    }, [view])
    return (<></>)
}
export default LayerLegend;