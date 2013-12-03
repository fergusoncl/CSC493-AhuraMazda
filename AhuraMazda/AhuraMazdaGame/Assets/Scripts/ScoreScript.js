/*
	Author: Cody Ferguson
	Script: ScoreScript.js
	Purpose:
		Keep track of the player's score, subtracting from a starting value every frame.
*/

#pragma strict

var scoreValue : int = 1500;
var level_end : boolean = false;
var printer : GUIText;
var subtractIfLevelNotOver : boolean = false;

/*  Update is called once a frame, therefore the function is called once a frame. */
function Update()
{
	subtractFromScore();
}

function subtractFromScore () 
{
	/*  Grab the score-script component in the scene, seize the display text information
		set the value of the text display appropriately, concatenating the new value for score. */
	var object = GameObject.Find("ScoreFloater");
	printer = object.GetComponent(GUIText);
	printer.text = "Score: " + scoreValue;

	/* If the level is not finished, we will continue to subtract, if it is stop! Also
	   if the score will become zero, we should stop and just print zero.*/
	if(!level_end && subtractIfLevelNotOver)
	{
		scoreValue -= 1;
		
		/* While the value is above 0, do this!*/
		if(scoreValue > 0)
		{
			printer = object.GetComponent(GUIText);
			printer.text = "Score: " + scoreValue;
		}
		
		else
		{
			printer = object.GetComponent(GUIText);
			printer.text = "Score: " + 0;
		}
		subtractIfLevelNotOver = false;
	}
	
	/*  This code is meant to subtract in short intervals, as opposed to every frame. */
	else
	{
		subtractIfLevelNotOver = true;
		yield WaitForSeconds(10);
	}

}