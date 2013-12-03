/*
	Author: Cody Ferguson
	Script: DeathCount.js
	Purpose:
		When the player is respawned their death counter will increment, this script prints that
		counter's value, every frame.
*/

#pragma strict

var PlayerDeaths : int = 0;
var printer : GUIText;

function Update () 
{	
	/*  Find the local game object Death Counter, update its GUI Text component. */
	var object = GameObject.Find("Death Counter");
	printer = object.GetComponent(GUIText);
	printer.text = "Deaths: " + PlayerDeaths;
}