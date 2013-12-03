/*
	Author: Cody Ferguson
	Script: Stomp.js
	Purpose:
		Defeat/kill an enemy by colliding with the appropriate hitbox.	
*/

#pragma strict

var _script : GameObject; // will grab a script and alter information in it for the score.

function OnTriggerEnter(other : Collider)
{
	/*  When the player hits the hitbox of the enemy, defeat it and give the player points. */
	if(other.tag == "Player")
	{
		transform.root.gameObject.GetComponent(Enemy).stomp = true;
		var _script = GameObject.Find("ScoreFloater");
		var variableToChange: ScoreScript = _script.GetComponent(ScoreScript);
		
		variableToChange.scoreValue += 1000;
		
		/*  If the defeated opponent has a boss flag, reward the player with more points. */
		if(transform.root.gameObject.GetComponent(Enemy).isBoss)
		{
			variableToChange.scoreValue += 10000;
		}	
		
	}
}