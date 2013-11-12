#pragma strict

function OnTriggerEnter(other : Collider)
{
		/* LoadLevel can be the name of the scene, 
		   Or the index of the scene in the build
		   sequence. */
		if(other.tag == "Player")
		{
			Application.LoadLevel(1);
		}
}