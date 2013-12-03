/*
	Author: Cody Ferguson
	Script: CheckPoint.js
	Purpose:
		As the player progresses, this script moves the game object "spawn point" to 
		"checkpoints" allowing the player to respawn at more convenient locations.
*/

#pragma strict

/*For manipulating the SpawnPoint's position.*/
var SpawnPoint : Transform;

/*When a game object collides or "enters", call it other.*/
function OnTriggerEnter(other : Collider)
{
	/* Check the collision, is the Player the 
	  GameObject that hit you? */
	if(other.tag == "Player")
	{
		/* Set the spawnpoint's position to the checkpoint's
		  This moves where the player will respawn when they
		  die. */
		SpawnPoint.position = 
			new Vector3(transform.position.x, 
			transform.position.y, SpawnPoint.position.z);
			
		/* Set the new spawn point and remove the check point
		   This is done so that the player doesn't return to an
		   old checkpoint. */
		Destroy(gameObject);
	}
}