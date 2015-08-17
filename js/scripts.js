////////////////////////////////////////////
// 		VARIABLES
////////////////////////////////////////////
	// create an empty object... which is the start of the application
	// you don't have to start it empty though... it is cleaner however
	// the word app is too generic...
	// you might use the initials of the website you're designing

	var cloudPl1 = {};

	// then below there you can add things
	cloudPl1.game = new Phaser.Game(640,480,Phaser.CANVAS,'game');

	/* 
	* setup the variables
	* 
	*/

	cloudPl1.PhaserGame = function () {
		this.bg = null;
		this.trees = null;

		this.stationary = null;
		this.clouds = null;

		this.facing = 'left';
		this.jumpTimer = 0;
		this.cursors;
		this.locked = false;
		this.lockedTo = null;
		this.wasLocked = false;
		this.willJump = false;
	}	

////////////////////////////////////////////
// 		END VARIABLES
////////////////////////////////////////////


////////////////////////////////////////////
// 		FUNCTIONS
////////////////////////////////////////////
	// don't forget to call the function in EXECUTION CODE area before running

	// NOTE:  in terms of organization, Ryan prefers to put all other functions and variables above the object.init() method however in reality it doesn't matter

	cloudPl1.PhaserGame.prototype = {

		/* 
		* startup the game functions
		* setup the rendering
		* resize the world
		* startup the physics engine
		* set the gravity level on the y axis
		*/

		init: function () {
			this.game.renderer.renderSession.roundPixels = true;
			this.world.resize(640*3,480);
			this.physics.startSystem(Phaser.Physics.ARCADE);
			this.physics.arcade.gravity.y = 600;
		},

		/* 
		* where you load the game assets
		* 
		*/

		preload: function () {
			//  We need this because the assets are on Amazon S3
			//  Remove the next 2 lines if running locally
			// this.load.baseURL = 'http://files.phaser.io.s3.amazonaws.com/codingtips/issue004/';
			this.load.crossOrigin = 'anonymous';

			
		}
	}


////////////////////////////////////////////
// 		END FUNCTIONS
////////////////////////////////////////////


////////////////////////////////////////////
// 		EVENTS
////////////////////////////////////////////
	// for storing various event listeners
	// this method will be used to listen for the open and close events and trigger those methods
	// Ryan C often uses this though Drew doesn't always
	cloudPl1.events = function () {
		//
	}
////////////////////////////////////////////
// 		END EVENTS
////////////////////////////////////////////



////////////////////////////////////////////
// 		INIT
////////////////////////////////////////////
	// method to initialize our application
	// all our code will be put inside here
	// you should not be defining things in here
	cloudPl1.init = function () {
		this.events();
	}
////////////////////////////////////////////
// 		END INIT
////////////////////////////////////////////

////////////////////////////////////////////
// 		EXECUTION CODE
////////////////////////////////////////////
	jQuery(document).ready(function($) {
		cloudPl1.init();
	});  //end doc.onready function
////////////////////////////////////////////
// 		END EXECUTION CODE
////////////////////////////////////////////