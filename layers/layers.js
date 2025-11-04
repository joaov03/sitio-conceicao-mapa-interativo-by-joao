ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4674").setExtent([-37.360538, -6.987211, -37.335743, -6.972732]);
var wms_layers = [];


        var lyr_ImagemOpenStreetMap_0 = new ol.layer.Tile({
            'title': 'Imagem - OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.osm.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_ImagemGoogleSatelite_1 = new ol.layer.Tile({
            'title': 'Imagem - Google Satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_StioConceioPolgonoreaPatosPB_2 = new ol.format.GeoJSON();
var features_StioConceioPolgonoreaPatosPB_2 = format_StioConceioPolgonoreaPatosPB_2.readFeatures(json_StioConceioPolgonoreaPatosPB_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_StioConceioPolgonoreaPatosPB_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StioConceioPolgonoreaPatosPB_2.addFeatures(features_StioConceioPolgonoreaPatosPB_2);
var lyr_StioConceioPolgonoreaPatosPB_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StioConceioPolgonoreaPatosPB_2, 
                style: style_StioConceioPolgonoreaPatosPB_2,
                popuplayertitle: 'Sítio Conceição - Polígono Área Patos/PB',
                interactive: true,
                title: '<img src="styles/legend/StioConceioPolgonoreaPatosPB_2.png" /> Sítio Conceição - Polígono Área Patos/PB'
            });
var format_StioConceioLimitePatosPB_3 = new ol.format.GeoJSON();
var features_StioConceioLimitePatosPB_3 = format_StioConceioLimitePatosPB_3.readFeatures(json_StioConceioLimitePatosPB_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_StioConceioLimitePatosPB_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StioConceioLimitePatosPB_3.addFeatures(features_StioConceioLimitePatosPB_3);
var lyr_StioConceioLimitePatosPB_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StioConceioLimitePatosPB_3, 
                style: style_StioConceioLimitePatosPB_3,
                popuplayertitle: 'Sítio Conceição - Limite Patos/PB',
                interactive: true,
                title: '<img src="styles/legend/StioConceioLimitePatosPB_3.png" /> Sítio Conceição - Limite Patos/PB'
            });
var format_StioConceioCoordenadasPatosPB_4 = new ol.format.GeoJSON();
var features_StioConceioCoordenadasPatosPB_4 = format_StioConceioCoordenadasPatosPB_4.readFeatures(json_StioConceioCoordenadasPatosPB_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_StioConceioCoordenadasPatosPB_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StioConceioCoordenadasPatosPB_4.addFeatures(features_StioConceioCoordenadasPatosPB_4);
var lyr_StioConceioCoordenadasPatosPB_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StioConceioCoordenadasPatosPB_4, 
                style: style_StioConceioCoordenadasPatosPB_4,
                popuplayertitle: 'Sítio Conceição - Coordenadas Patos/PB',
                interactive: true,
                title: '<img src="styles/legend/StioConceioCoordenadasPatosPB_4.png" /> Sítio Conceição - Coordenadas Patos/PB'
            });

lyr_ImagemOpenStreetMap_0.setVisible(true);lyr_ImagemGoogleSatelite_1.setVisible(true);lyr_StioConceioPolgonoreaPatosPB_2.setVisible(true);lyr_StioConceioLimitePatosPB_3.setVisible(true);lyr_StioConceioCoordenadasPatosPB_4.setVisible(true);
var layersList = [lyr_ImagemOpenStreetMap_0,lyr_ImagemGoogleSatelite_1,lyr_StioConceioPolgonoreaPatosPB_2,lyr_StioConceioLimitePatosPB_3,lyr_StioConceioCoordenadasPatosPB_4];
lyr_StioConceioPolgonoreaPatosPB_2.set('fieldAliases', {'FID': 'FID', 'Area_M2': 'Area_M2', 'Nome_Sitio': 'Nome_Sitio', 'Municipio': 'Municipio', 'Estado': 'Estado', 'Bairro': 'Bairro', 'CEP': 'CEP', 'Perimetro': 'Perimetro', });
lyr_StioConceioLimitePatosPB_3.set('fieldAliases', {'Perimetro': 'Perimetro', });
lyr_StioConceioCoordenadasPatosPB_4.set('fieldAliases', {'Vértices': 'Vértices', 'Altitude': 'Altitude', 'LongitudeX': 'LongitudeX', 'LatitudeY': 'LatitudeY', });
lyr_StioConceioPolgonoreaPatosPB_2.set('fieldImages', {'FID': 'TextEdit', 'Area_M2': 'TextEdit', 'Nome_Sitio': 'TextEdit', 'Municipio': 'TextEdit', 'Estado': 'TextEdit', 'Bairro': 'TextEdit', 'CEP': 'TextEdit', 'Perimetro': 'TextEdit', });
lyr_StioConceioLimitePatosPB_3.set('fieldImages', {'Perimetro': '', });
lyr_StioConceioCoordenadasPatosPB_4.set('fieldImages', {'Vértices': 'TextEdit', 'Altitude': 'TextEdit', 'LongitudeX': '', 'LatitudeY': '', });
lyr_StioConceioPolgonoreaPatosPB_2.set('fieldLabels', {'FID': 'hidden field', 'Area_M2': 'header label - always visible', 'Nome_Sitio': 'header label - always visible', 'Municipio': 'header label - always visible', 'Estado': 'header label - always visible', 'Bairro': 'header label - always visible', 'CEP': 'header label - always visible', 'Perimetro': 'hidden field', });
lyr_StioConceioLimitePatosPB_3.set('fieldLabels', {'Perimetro': 'header label - always visible', });
lyr_StioConceioCoordenadasPatosPB_4.set('fieldLabels', {'Vértices': 'header label - always visible', 'Altitude': 'header label - always visible', 'LongitudeX': 'header label - always visible', 'LatitudeY': 'header label - always visible', });
lyr_StioConceioCoordenadasPatosPB_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});