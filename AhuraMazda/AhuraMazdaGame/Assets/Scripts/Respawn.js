#pragma strict

/* variable to hold what to respawn, variable to hold
  the position to spawn it at. */
var Player : GameObject;
var SpawnPoint : Transform;

/* When the player has made contact with the "Respawner" by
  colliding, destroy the player and spawn them again. */
function OnTriggerEnter(other : Collider)
{
	if(other.tag == "Player")
	{
		Destroy(other.gameObject);
		var P : GameObject = Instantiate(Player, SpawnPoint.position, Quaternion.identity);
		var cam = Camera.main.GetComponent(SmoothCamera);
		cam.target = P.transform;
		
		var _script = GameObject.Find("Death Counter");
		var variableToChange: DeathCount = _script.GetComponent(DeathCount);
		
		variableToChange.PlayerDeaths += 1;

	}
}