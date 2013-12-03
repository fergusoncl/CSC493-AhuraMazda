/*
	Author: Cody Ferguson
	Script: World_Jump.js
	Purpose:
		Move the player from one scene to another.
*/


#pragma strict

var level : int = 1; // integer representing the index of the world/scene in the build list.

function OnTriggerEnter(other : Collider)
{		
		/*  When the player hits this collider, move them to the appropriate scene. */
		if(other.tag == "Player")
		{
			Application.LoadLevel(level);
		}
}