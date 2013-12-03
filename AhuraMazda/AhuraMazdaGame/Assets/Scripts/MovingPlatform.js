/*
	Author: Cody Ferguson
	Script: MovingPlatform.js
	Purpose:
		Allow platforms in the game to appear as sliding objects in either vertical or horizontal 
		movement patterns.
*/

#pragma strict

/*Variables for managing the location of the platform.*/
private var Xpos : float;
private var Ypos : float;

/*Variable for selecting the direction to go, based on a maximum range.*/
private var max : boolean;

/*Distinguish between vertical and horizontal platforms.*/
var Vert : boolean;

/*Represents how far the platform can travel, before arriving at max.*/
var maxAmount : int;

/*Represents how far the platform travels per frame.*/
var step : float;

/*Used for flipping the texture (Enemy Patrolling).*/
var X : float;

function Start () 
{
	/*Get the starting position of the platform.*/
	Xpos = transform.position.x;
	Ypos = transform.position.y;
	
	/*Used for flipping the texture.*/
	X = transform.localScale.x;
}

function Update () 
{
	/*Set the Max.*/
	if(Vert) // Vertical Max.
	{
		if(transform.position.y >= Ypos + maxAmount)
		{
			max = true;
		}
		
		else if(transform.position.y <= Ypos)
		{
			max = false;
		}
	}

	else // Horizontal Max.
	{
		if(transform.position.x >= Xpos + maxAmount)
		{
			max = true;
		}
		
		else if(transform.position.x <= Xpos)
		{
			max = false;
		}
	}
	
	/*Moving the Platform.*/
	if(Vert) // Vertical Movement.
	{	
		/*Are we at the max height?*/
		if(!max)
		{
			/*Go up.*/
			transform.position.y += step;
		}
		
		else
		{
			/*Go down.*/
			transform.position.y -= step;
		}
	}
	
	else // Horizontal Movement.
	{
		if(!max)
		{
			/*Go left.*/
			transform.position.x += step;
			if(transform.tag == "Enemy")
			{
				/*Flip the texture across the X.*/
				transform.localScale.x = -X;
			}
		}
		
		else
		{
			/*Go right.*/
			transform.position.x -= step;
			if(transform.tag == "Enemy")
			{
				/*Set the texture back to normal.*/
				transform.localScale.x = X;
			}
		}
	}
}