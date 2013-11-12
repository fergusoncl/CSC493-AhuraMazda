using UnityEngine;
using System.Collections;

public class GUIOverlay : MonoBehaviour {

	// Use this for initialization
	void OnGUI()
	{
		GUI.Label(new Rect(-606.7583f, -133.0827f, 200f, 200f), "Hello world!");
	}
}
