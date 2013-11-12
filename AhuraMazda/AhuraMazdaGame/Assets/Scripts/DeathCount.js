#pragma strict

var PlayerDeaths : int = 0;
var printer : GUIText;

function Update () 
{	
	var object = GameObject.Find("Death Counter");
	printer = object.GetComponent(GUIText);
	printer.text = "Deaths: " + PlayerDeaths;
}