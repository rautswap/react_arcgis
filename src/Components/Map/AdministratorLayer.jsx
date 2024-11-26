import { useContext, useEffect } from "react";
import WMSLayer from "@arcgis/core/layers/WMSLayer";
import { MapViewContext } from "./MapContext";
function AdministratorLayer() {
    const { view } = useContext(MapViewContext)
    useEffect(() => {
        if (view) {
            const districtLayer = new WMSLayer({
                title: 'Administrator Layer',
                url: 'http://localhost:8080/geoserver/admin/wms',
                featureInfoFormat: 'application/json',
                imageFormat: 'image/vnd.jpeg-png8',
                sublayers: [
                    {
                        name: 'mpdistrict',
                        title: 'District',
                        popupEnabled: true,
                        queryable: true,
                        legendEnabled: true,
                    },
                    {
                        name: 'mpstate',
                        title: 'State',
                        popupEnabled: true,
                        queryable: true,
                        legendEnabled: true,
                    },
                ],
            });
           

            view.map.add(districtLayer);
        }

    }, [view])

    return (<></>);
}
export default AdministratorLayer;