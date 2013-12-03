/*
	Author: Cody Ferguson
	Script: TextureFlip.js
	Purpose:
		Flip the displayed sprite/image to save on tiling shifting in Animation.
*/

#pragma strict

/* Value representing the Sprite's X-axis position. */
var X: float;

/* Used for initialization. */
function Start () 
{	
	/* X is now the starting position of the Sprite. */
	X = transform.localScale.x;
}

/* Called once per frame, rememeber to set the number
  of frames specifically for the sprite sheet. This 
  would otherwise cause clipping or multiple sprites
  per frame. */
function Update () 
{
    /* If the player moves left, done by pressing the
      a key in standard WASD movement for games. */
	if(Input.GetKey("a"))
	{
		/* Flip the sprite's image, across the X-axis. */
		transform.localScale.x = -X;
	}
	
	/* If the player moves right, done by pressing the
	  d key in standard WASD movement for games. */
	else if(Input.GetKey("d"))
	{
		/* Return the sprite's image to normal. */
		transform.localScale.x = X;
	}
}