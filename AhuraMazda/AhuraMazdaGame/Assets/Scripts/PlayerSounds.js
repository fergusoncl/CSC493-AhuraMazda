#pragma strict

function Update () 
{
	if(Input.GetKeyDown("space"))
	{
		if(!audio.isPlaying)
		{
			audio.Play();
		}
	}
}