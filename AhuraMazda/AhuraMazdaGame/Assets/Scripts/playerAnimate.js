#pragma strict

/* Script used to display the proper animation when the player moves. */
function Update () 
{
	/* Create a variable and set it equal to the AnimateTexture script.
	   For this to work, this script must be attached to a gameObject
	   with the AnimateTexture script attached to it. Otherwise, it will
	   do nothing. */
	var AT = gameObject.GetComponent(AnimateTexture);
	
	/* If the player wants to move to the left, set the row
	   in the sprite sheet through AnimateTexture, to the
	   row that represents the correct motion. */
	if(Input.GetKey("a"))
	{
		AT.rowNumber = 1;
	}
	
	/* Same setup for going to the right, however these are the
	   same row, utilizing the TextureFlip script to remove the
	   need for another row dedicated to going to the right. */
	else if(Input.GetKey("d"))
	{
		AT.rowNumber = 1;
	}
	
	/* If the player is not pressing any key to move, then display
	   the sprites idle animation, at row "0". */
	else
	{
		AT.rowNumber = 0;
	}
}