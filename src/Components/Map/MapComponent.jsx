import AdministratorLayer from "./AdministratorLayer";
import BasemapGallary from "./BasemapGallary";
import LayerLegend from "./LayerLegend";
import LayerList from "./LayerList";
import MapViewContextPrvider from "./MapContext";

const MapComponent = () => {


    return (<>
        <MapViewContextPrvider>
            <BasemapGallary/>
            <AdministratorLayer/>
            <LayerList/>
            <LayerLegend/>
        </MapViewContextPrvider>
    </>);
}
export default MapComponent;


