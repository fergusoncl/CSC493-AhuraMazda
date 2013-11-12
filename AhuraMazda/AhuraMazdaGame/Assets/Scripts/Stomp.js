#pragma strict

function OnTriggerEnter(other : Collider)
{
	if(other.tag == "Player")
	{
		transform.root.gameObject.GetComponent(Enemy).stomp = true;
	}
}