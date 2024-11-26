

export default function createFeatureLayer(
    WMSLayer,
    name,
    title
) {
    let layer = new WMSLayer({
        title: 'District',
        url: 'http://localhost:8080/geoserver/admin/wms',
        featureInfoFormat: 'application/json',
        imageFormat: 'image/vnd.jpeg-png8',
        sublayers: [
            {
                name: name,
                title: title,
                popupEnabled: true,
                queryable: true,
                legendEnabled: true,
            },
        ],
        listMode: 'hide-children',
    });
    

    return layer;
}
