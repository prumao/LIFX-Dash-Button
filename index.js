var DASH_MAC_ADDRESS = "PLACE_AMAZON_DASH_HERE";
var LIFX_API_TOKEN = "PLACE_LIFX_API_TOKEN_HERE";

var dash_button = require('node-dash-button');
var dash = dash_button(DASH_MAC_ADDRESS);

var lifxObj = require('lifx-api');
var lifx = new lifxObj(LIFX_API_TOKEN);

dash.on("detected", function (){
	lifx.togglePower('all', function(res) {
		console.log(res);
	});
});
