#pragma strict

var _script : GameObject;

function OnTriggerEnter(other : Collider)
{
	if(other.tag == "Player")
	{
		transform.root.gameObject.GetComponent(Enemy).stomp = true;
		var _script = GameObject.Find("ScoreFloater");
		var variableToChange: ScoreScript = _script.GetComponent(ScoreScript);
		
		variableToChange.scoreValue += 1000;
		
		if(transform.root.gameObject.GetComponent(Enemy).isBoss)
		{
			variableToChange.scoreValue += 10000;
		}	
		
	}
}