cord = [31.807268299999997,34.6586236];
var enter = document.getElementById("button"),
mark = document.getElementById("radioMark"),
lay1 = document.getElementById("layer1");
lay2 = document.getElementById("layer2");
lay3 = document.getElementById("layer3");
lay4 = document.getElementById("layer4");
/*pass - lolGuy*/
var map = L.map('map'),
firstConection = true,
checkMark = false,
checkLay1 = false,
checkLay2 = false,
checkLay3 = false,
checkLay4 = false,
zone,
marker = L.marker(cord)
;
/*username - HassanHiraryMizrahi*/
addToMap();
//--------------------------- Event Listener from all button in the site -----------------------------------------
//OutDoor Layer
lay1.addEventListener('click',function()
{	
	checkLay1 = !checkLay1;
	lay1.checked = checkLay1;
	if(checkLay1){
		lay_1 = L.tileLayer('https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=976247ae8c374bad9b99ddccf1f121c5', {
			maxZoom: 20,
		});
		map.setView(cord,17);
		map.addLayer(lay_1);
		cordMark();
	}
	else
		map.removeLayer(lay_1);
})
//Neighbourhood Layer
lay2.addEventListener('click',function()
{	
	checkLay2 = !checkLay2;
	lay2.checked = checkLay2;
	if(checkLay2){
		lay_2 = L.tileLayer('https://tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey=976247ae8c374bad9b99ddccf1f121c5', {
			maxZoom: 20,
		});
		map.setView(cord,16);
		map.addLayer(lay_2);
		cordMark();
	}
	else
		map.removeLayer(lay_2);

})
//openCycle Layer
lay3.addEventListener('click',function()
{	
	checkLay3 = !checkLay3;
	lay3.checked = checkLay3;
	if(checkLay3){
		lay_3 = L.tileLayer('https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=976247ae8c374bad9b99ddccf1f121c5', {
			apikey: '976247ae8c374bad9b99ddccf1f121c5',
			maxZoom: 20,
		});
		map.setView(cord,15);
		map.addLayer(lay_3);
		cordMark();
	}
	else
		map.removeLayer(lay_3);

})
//Transport Dark Layer
lay4.addEventListener('click',function()
{	
	checkLay4 = !checkLay4;
	lay4.checked = checkLay4;
	if(checkLay4){
		lay_4 = L.tileLayer('https://tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey=976247ae8c374bad9b99ddccf1f121c5', {
			apikey: '976247ae8c374bad9b99ddccf1f121c5',
			maxZoom: 20,
		});
		map.setView(cord,16);//set view (cordinatote , zoom)
		map.addLayer(lay_4);//add new layer to map
		cordMark();
	}
	else
		map.removeLayer(lay_4);

})
//Red circle mark
mark.addEventListener('click',function(){

	checkMark = !checkMark;
	mark.checked = checkMark;
	if(checkMark)
		changeZone('red','red');
	else
		map.removeLayer(zone);
});
//when the user click enter after he put cordinatote
enter.addEventListener('click',function(){
	var lat = document.getElementById("lat").value;
	var lon = document.getElementById("lon").value;
	if(isNaN(lat) === false && isNaN(lon) === false){
		cord = [Number(lat),Number(lon)];
		cordMark();
		addToMap();
	}
});

//------------------------------------- Help function --------------------------------------------------
//when we click on PlaceMark we get the red circle on the cordiatote
function changeZone(color1,color2)
{
	zone = L.circle(cord,{
		color:color1,
		fillColor:color2,
		opacity:75,
		radius:100
	});
	map.setView(cord,16);
	map.addLayer(zone);

}
//add the default map on a web
function addToMap(){
	map.setView(cord,13);
	if(firstConection){
		StartMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 20,});
		map.addLayer(StartMap);
		map.addLayer(marker);
		marker.bindPopup("Cordinatote - "+" Latitude: "+cord[0]+" Longitude: "+cord[1]).openPopup();
		firstConection = false;
	}
}
// add the blue marker on the map and when we click on the marker we get the cordinatote
function cordMark()
{
	map.removeLayer(marker);
	marker = L.marker(cord);
	map.addLayer(marker);
	marker.bindPopup("Cordinatote - "+" Latitude: "+cord[0]+" Longitude: "+cord[1]).openPopup();
}
