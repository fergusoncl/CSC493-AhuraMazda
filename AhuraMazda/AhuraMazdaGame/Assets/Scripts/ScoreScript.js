#pragma strict

var scoreValue : int = 1500;
var level_end : boolean = false;
var printer : GUIText;
var subtractIfLevelNotOver : boolean = false;

function Update()
{
	subtractFromScore();
}

function subtractFromScore () 
{
	var object = GameObject.Find("ScoreFloater");
	printer = object.GetComponent(GUIText);
	printer.text = "Score: " + scoreValue;

	if(!level_end && subtractIfLevelNotOver)
	{
		scoreValue -= 1;
		
		/* While the value is above 0, do this!*/
		if(scoreValue > 0)
		{
			printer = object.GetComponent(GUIText);
			printer.text = "Score: " + scoreValue;
		}
		
		else
		{
			printer = object.GetComponent(GUIText);
			printer.text = "Score: " + 0;
		}
		subtractIfLevelNotOver = false;
	}
	else
	{
		subtractIfLevelNotOver = true;
		yield WaitForSeconds(10);
	}

}