/*
	Author: Cody Ferguson
	Script: PlayerSounds.js
	Purpose:
		When the player presses spacebar to jump, play a sound if the audio is not already.
*/

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