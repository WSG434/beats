let myMap;

const init = () => {
  myMap = new ymaps.Map("map", {
    center: [55.756709, 37.601607],
    zoom: 14,
    controls: []
  });

  const coords = [
      [55.747608, 37.581248],
      [55.760612, 37.579194],
      [55.749992, 37.606727],
      [55.758120, 37.624665]
  ];

  const myCollection = new ymaps.GeoObjectCollection({}, {
      draggable: false,
      iconLayout: 'default#image',
      iconImageHref: "./img/marker.png",
      iconImageSize: [46, 57],
      iconImageOffset: [-35, -52]

  });

  for (var i = 0; i < coords.length; i++) {
    myCollection.add(new ymaps.Placemark(coords[i],{
        balloonContentHeader: 'Однажды',
        balloonContentBody: 'В студеную зимнюю пору',
        balloonContentFooter: 'Мы пошли в гору',
        hintContent: 'Зимние происшествия'
    }));
  }

  
  myMap.geoObjects.add(myCollection);


  myMap.behaviors.disable('scrollZoom');



};

ymaps.ready(init);