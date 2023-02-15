'use strict'

// Defining the objects data
const sun = { 
    name: 'Sun', 
    color: '#f37f31', 
    diameter: 1392700,
    mass: (1989*Math.pow(10, 30)),
    gravity: 274,
    distance_from_sun: 0,
    orbital_radius: 0,
    orbital_period: 0,
    rotation_time: 0,
    number_satellites: 0,
    satellites: 'None',
    atmosphere: "None. It's a star burning gas in a process called nuclear fusion. Due to the high energy that involve this process we can see the brightness of the sun while she's burning lighter elements like hidrogen or helius and developing it to heavier elements in the process."
    }

const mercury = { 
    name: 'Mercury', 
    color: '#a39a9f', 
    diameter: 4878,
    mass: (3.285*Math.pow(10, 23)),
    gravity: 3.7,
    distance_from_sun: 58000000,
    orbital_radius: 0.39,
    orbital_period: 365*0.24,
    rotation_time: 24*58.6667,
    number_satellites: 0,
    satellites: 'None',
    atmosphere: 'At major part is composed by hidrogen and helius.'
    }

const venus = { 
    name: 'Venus', 
    color: '#eab34e', 
    diameter: 12100,
    mass: (4.867*Math.pow(10, 24)),
    gravity: 8.87,
    distance_from_sun: 108200000,
    orbital_radius: 0.72,
    orbital_period: 365*0.615,
    rotation_time: 24*243,
    number_satellites: 0,
    satellites: 'None',
    atmosphere: '96% CO2, 3% Nitrogen and 0,1% water.'
    }

const earth = { 
    name: 'Earth', 
    color: '#67a6f9', 
    diameter: 12756,
    mass: (5.972*Math.pow(10, 24)),
    gravity: 9.8,
    distance_from_sun: 149600000,
    orbital_radius: 1,
    orbital_period: 365*1.00,
    rotation_time: 24*1.00,
    number_satellites: 1,
    satellites: 'The Moon',
    atmosphere: "78% Nitrogen, 21% Oxigen and 1% Argon. There are more gases on the Earth's atmosphere, but in a ridiculous quantity."
}

const mars = { 
    name: 'Mars', 
    color: '#862822', 
    diameter: 6787,
    mass: (6.39*Math.pow(10, 23)),
    gravity: 3.721,
    distance_from_sun: 227900000,
    orbital_radius: 1.52,
    orbital_period: 365*1.88,
    rotation_time: 24*1.03,
    number_satellites: 2,
    satellites: 'Fobos and Deimos',
    atmosphere: "95% CO2, 1.6% Argon and 3% Nitrogen."
}

const jupiter = { 
    name: 'Jupiter', 
    color: '#9c8a71', 
    diameter: 142984,
    mass: (1.898*Math.pow(10, 27)),
    gravity: 24.79,
    distance_from_sun: 778500000,
    orbital_radius: 5.20,
    orbital_period: 365*11.86,
    rotation_time: 24*0.414,
    number_satellites: 79,
    satellites: "Jupiter has too many satellites because his outstanding gravity and mass. If you want to know more about Jupiter info, you can take a look at <a target='blank' href='https://www.nasa.gov/jupiter'>NASA's page</a>.",
    atmosphere: "90% Hidrogen, 10% Helius and contains rests of metanus."
}

const saturn = { 
    name: 'Saturn', 
    color: '#cabd8b', 
    diameter: 120536,
    mass: (5.683*Math.pow(10, 26)),
    gravity: 10.44,
    distance_from_sun: (1.434*Math.pow(10, 9)),
    orbital_radius: 9.54,
    orbital_period: 365*29.46,
    rotation_time: 24*0.426,
    number_satellites: 82,
    satellites: "As Jupiter, due to his mass, Saturn has an attraction capability of a monster, having 82 satellites orbiting him",
    atmosphere: "96% Hidrogen, 3% Helius and 0.5% of metanus."
}

const uranus = { 
    name: 'Uranus', 
    color: '#b9f7f7', 
    diameter: 51108,
    mass: (8.681*Math.pow(10, 25)),
    gravity: 8.87,
    distance_from_sun: (2.871*Math.pow(10, 9)),
    orbital_radius: 19.19,
    orbital_period: 365*84.01,
    rotation_time: 24*0.718,
    number_satellites: 27,
    satellites: "Not too much as Saturn or Jupiter because his lower gravity and the distance from the Sun.",
    atmosphere: "84% Hidrogen, 14% Helius and 2% of metanus."
}

const neptune = { 
    name: 'Neptune', 
    color: '#537cc4', 
    diameter: 49538,
    mass: (1.024*Math.pow(10, 26)),
    gravity: 11.15,
    distance_from_sun: (4.495*Math.pow(10, 9)),
    orbital_radius: 30.06,
    orbital_period: 365*164.79,
    rotation_time: 24*0.6745,
    number_satellites: 14,
    satellites: "Farthest planet on our system by far. Have just 14 satellites because the distance from the Sun",
    atmosphere: "74% Hidrogen, 25% Helius and 1% of metanus."
}


// Taking the planets and the planet buttons from the DOM
// Sun
var getSun = document.getElementById('sun');
getSun.addEventListener("click", function(){shotAPlanet(sun)});
var getSunBut = document.getElementById('button-sun');
getSunBut.addEventListener("click", function(){shotAPlanet(sun)});

// Mercury
var getMercury = document.getElementById('mercury');
getMercury.addEventListener("click", function(){shotAPlanet(mercury)});
var getMercuryBut = document.getElementById('button-mercury');
getMercuryBut.addEventListener("click", function(){shotAPlanet(mercury)});

// Venus
var getVenus = document.getElementById('venus');
getVenus.addEventListener("click", function(){shotAPlanet(venus)});
var getVenusBut = document.getElementById('button-venus');
getVenusBut.addEventListener("click", function(){shotAPlanet(venus)});

// Earth
var getEarth = document.getElementById('earth');
getEarth.addEventListener("click", function(){shotAPlanet(earth)});
var getEarthBut = document.getElementById('button-earth');
getEarthBut.addEventListener("click", function(){shotAPlanet(earth)});

// Mars
var getMars = document.getElementById('mars');
getMars.addEventListener("click", function(){shotAPlanet(mars)});
var getMarsBut = document.getElementById('button-mars');
getMarsBut.addEventListener("click", function(){shotAPlanet(mars)});

// Jupiter
var getJupiter = document.getElementById('jupiter');
getJupiter.addEventListener("click", function(){shotAPlanet(jupiter)});
var getJupiterBut = document.getElementById('button-jupiter');
getJupiterBut.addEventListener("click", function(){shotAPlanet(jupiter)});

// Saturn
var getSaturn = document.getElementById('saturn');
getSaturn.addEventListener("click", function(){shotAPlanet(saturn)});
var getSaturnBut = document.getElementById('button-saturn');
getSaturnBut.addEventListener("click", function(){shotAPlanet(saturn)});

// Uranus
var getUranus = document.getElementById('uranus');
getUranus.addEventListener("click", function(){shotAPlanet(uranus)});
var getUranusBut = document.getElementById('button-uranus');
getUranusBut.addEventListener("click", function(){shotAPlanet(uranus)});

// Neptune
var getNeptune = document.getElementById('neptune');
getNeptune.addEventListener("click", function(){shotAPlanet(neptune)});
var getNeptuneBut = document.getElementById('button-neptune');
getNeptuneBut.addEventListener("click", function(){shotAPlanet(neptune)});


// Taking the spans for writing the planets data
var getName = document.getElementById('chosen-planet');
var getAtmosphere = document.getElementById('planet-atmosphere');
var getSatellites = document.getElementById('planet-satellites');
var getDistance = document.getElementById('planet-distance');
var getDiameter = document.getElementById('planet-diameter');
var getMass = document.getElementById('planet-mass');
var getGravity = document.getElementById('planet-gravity');
var getOrbital = document.getElementById('planet-orbital');
var getRotation = document.getElementById('planet-rotation');

//Getting the clear data button
var getClear = document.getElementById('clear');
getClear.addEventListener("click", function(){clearData()});

// Defining the writing onclick function
function shotAPlanet(planet){
    getName.innerHTML = '';
    getName.innerHTML = '<h3>'+planet.name+'</h3>';

    getAtmosphere.innerHTML = '';
    getAtmosphere.innerHTML = '<p>'+planet.atmosphere+'</p>';

    getSatellites.innerHTML = '';
    getSatellites.innerHTML = '<p>'+planet.satellites+'</p>';

    getDistance.innerHTML = '';
    getDistance.innerHTML = '<p>'+planet.distance_from_sun+' Km</p>';

    getDiameter.innerHTML = '';
    getDiameter.innerHTML = '<p>'+planet.diameter+' Km</p>';

    getMass.innerHTML = '';
    getMass.innerHTML = '<p>'+planet.mass+' Kg</p>';

    getGravity.innerHTML = '';
    getGravity.innerHTML = '<p>'+planet.gravity+' m2/s</p>';

    getOrbital.innerHTML = '';
    getOrbital.innerHTML = '<p>'+planet.orbital_period+' days ('+planet.orbital_period/365+' terrestrial years)</p>';

    getRotation.innerHTML = '';
    getRotation.innerHTML = '<p>'+planet.rotation_time+' hours ('+planet.rotation_time/24+' terrestrial days)</p>';
}

// Defining the clear function
function clearData(){
    getName.innerHTML = '<h5 class="chosen-planet">Click on a planet to see the information</h5>';
    getAtmosphere.innerHTML = '';
    getSatellites.innerHTML = '';
    getDistance.innerHTML = '';
    getDiameter.innerHTML = '';
    getMass.innerHTML = '';
    getGravity.innerHTML = '';
    getOrbital.innerHTML = '';
    getRotation.innerHTML = '';
}

//Creating an array of the objects for sorting
const planets = [sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune];

//Getting the selected option of the filter
var filter_by = document.getElementById("ranking-filter");

//Getting the filter button
var filter_button = document.getElementById("filter_button");
filter_button.addEventListener("click", function(){sortingPlanets()});

//Getting the field for writing the ranking
var rankingBox = document.getElementById("ranking-list");

//Functions for writting and cleaning the top
function writeRanking(){
    rankingBox.innerHTML = '<div id="ranking-'+planets[0].name.toLowerCase()+'">'+planets[0].name.toUpperCase()+'</div> <div id="ranking-'+planets[1].name.toLowerCase()+'">'+planets[1].name.toUpperCase()+'</div> <div id="ranking-'+planets[2].name.toLowerCase()+'">'+planets[2].name.toUpperCase()+'</div> <div id="ranking-'+planets[3].name.toLowerCase()+'">'+planets[3].name.toUpperCase()+'</div><div id="ranking-'+planets[4].name.toLowerCase()+'">'+planets[4].name.toUpperCase()+'</div><div id="ranking-'+planets[5].name.toLowerCase()+'">'+planets[5].name.toUpperCase()+'</div><div id="ranking-'+planets[6].name.toLowerCase()+'">'+planets[6].name.toUpperCase()+'</div><div id="ranking-'+planets[7].name.toLowerCase()+'">'+planets[7].name.toUpperCase()+'</div><div id="ranking-'+planets[8].name.toLowerCase()+'">'+planets[8].name.toUpperCase()+'</div>';
}
function clearRanking(){
    rankingBox.innerHTML = '';
}

//Creating the comparision functions
function compareDistance(a,b){
    if(a.distance_from_sun < b.distance_from_sun){
        return 1;
    }
    else if(a.distance_from_sun > b.distance_from_sun){
        return -1;
    }
    else{
        return 0;
    }
}

function compareDiameter(a,b){
    if(a.diameter < b.diameter){
        return 1;
    }
    else if(a.diameter > b.diameter){
        return -1;
    }
    else{
        return 0;
    }
}

function compareMass(a,b){
    if(a.mass < b.mass){
        return 1;
    }
    else if(a.mass > b.mass){
        return -1;
    }
    else{
        return 0;
    }
}

function compareGravity(a,b){
    if(a.gravity < b.gravity){
        return 1;
    }
    else if(a.gravity > b.gravity){
        return -1;
    }
    else{
        return 0;
    }
}

function compareOrbital(a,b){
    if(a.orbital_period < b.orbital_period){
        return 1;
    }
    else if(a.orbital_period > b.orbital_period){
        return -1;
    }
    else{
        return 0;
    }
}

function compareTime(a,b){
    if(a.rotation_time < b.rotation_time){
        return 1;
    }
    else if(a.rotation_time > b.rotation_time){
        return -1;
    }
    else{
        return 0;
    }
}


//Creating the sorting function    
function sortingPlanets(){
    if(filter_by.value == "distance_from_sun"){
        planets.sort(compareDistance);
        writeRanking();
    }
    else if(filter_by.value == "diameter"){
        planets.sort(compareDiameter);
        writeRanking();
    }
    else if(filter_by.value == "mass"){
        planets.sort(compareMass);
        writeRanking();
    }
    else if(filter_by.value == "gravity"){
        planets.sort(compareGravity);
        writeRanking();

    }
    else if(filter_by.value == "orbital_period"){
        planets.sort(compareOrbital);
        writeRanking();

    }
    else if(filter_by.value == "rotation_time"){
        planets.sort(compareTime);
        writeRanking();
    }
    else{
        clearRanking();
    }
    
}
