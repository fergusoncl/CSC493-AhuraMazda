#pragma strict

private var fall : boolean;
private var fallMax : float;

var isBoss : boolean = false;
var Player : GameObject;
var SpawnPoint : Transform;
var stomp : boolean;

function Start ()
{
	fallMax = transform.position.y - 25;
}

function Update () 
{
	if(stomp)
	{
		transform.position.z = 150.0;
		transform.localScale.y /= 2;
		transform.rotation.y  = 0;
		stomp = false;
		fall = true;
	}
	
	if(fall)
	{
		transform.position.y -= 0.5;
	}
	
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
}