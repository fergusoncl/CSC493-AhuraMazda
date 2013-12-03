/*
	Author: Cody Ferguson
	Script: Enemy.js
	Purpose:
		Allow platforms in the game to appear as sliding objects in either vertical or horizontal 
		movement patterns.
*/

#pragma strict

private var fall : boolean;
private var fallMax : float;

var isBoss : boolean = false;
var Player : GameObject;
var SpawnPoint : Transform;
var stomp : boolean;

function Start ()
{
	/* For the death animation, how long will the enemy fall downward before the game object
	   is deleted from the scene. */
	fallMax = transform.position.y - 25;
}

function Update () 
{
	/* If the stomp variable is true, the enemy is dead. Move it back along the z-axis 
	   shrink the y-axis scaling of the object "smushing it" and flip it upside down. */
	if(stomp)
	{
		transform.position.z = 150.0;
		transform.localScale.y /= 2;
		transform.rotation.y  = 0;
		stomp = false;
		fall = true;
	}
	
	/* The enemy has been stomped, therefore, decrement it along the y-axis. */
	if(fall)
	{
		transform.position.y -= 0.5;
	}
	
	/* Once the fall max has been reached, delete the object. GG! */
	if(transform.position.y == fallMax)
	{
		Destroy(gameObject);
	}
}

// When the player runs into the enemy, kill him and respawn.
function OnTriggerEnter(other : Collider)
{	
	// Only kill the player, if the enemy hasn't been stomped.
	if(!stomp)
	{
		// if the player collides with the enemy but not at the correct hitbox, kill them.
		if(other.tag == "Player")
		{
			// destroy the player
			Destroy(other.gameObject);
			
			// instantiate the player again at their spawn point and put the camera back on them.
			var P : GameObject = Instantiate(Player, SpawnPoint.position, Quaternion.identity);
			var cam = Camera.main.GetComponent(SmoothCamera);
			cam.target = P.transform;
			
			// increment the PlayerDeaths variable in the Death Counter script.
			var _script = GameObject.Find("Death Counter");
			var variableToChange: DeathCount = _script.GetComponent(DeathCount);
		
			variableToChange.PlayerDeaths += 1;
			
		}
	}
}