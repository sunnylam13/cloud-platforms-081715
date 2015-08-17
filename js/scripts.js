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

			this.load.image('trees','assets/trees-h.png');
			this.load.image('background','assets/clouds-h.png');
			this.load.image('platform','assets/platform.png');
			this.load.image('cloud-platform','assets/cloud-platform.png');

			this.load.spritesheet('dude','assets/dude.png', 32, 48);
		},

		/* 
		* here's where you start creating things
		* 
		*/

		create: function () {

			// ----------------------------------------
			// BACKGROUND  ------------------
			// ----------------------------------------
				this.background = this.add.tileSprite(0,0,640,480,'background');
				this.background.fixedToCamera = true;
			// ----------------------------------------
			// END BACKGROUND  ------------------
			// ----------------------------------------
			
			// ----------------------------------------
			// TREES  ------------------
			// ----------------------------------------
				this.trees = this.add.tileSprite(0,364,640,116,'trees');
				this.trees.fixedToCamera = true;
			// ----------------------------------------
			// END TREES  ------------------
			// ----------------------------------------

			// ----------------------------------------
			// PLATFORMS  ------------------
			// ----------------------------------------
				
				// DON'T MOVE  ------------------------------------------------
					this.stationary = this.add.physicsGroup();

					this.stationary.create(0,96,'platform');
					this.stationary.create(632,220,'platform');
					this.stationary.create(1100,300,'platform');

					/* 
					* set the gravity properties of the 'stationary' game objects
					* 
					*/

					this.stationary.setAll('body.allowGravity',false);
					this.stationary.setAll('body.immovable',true);
				// END DON'T MOVE ------------------------------------------------
				

				// MOVE  ------------------------------------------------
					
					// create a new object group known as 'clouds'
					this.clouds = this.add.physicsGroup();

					// ................... CLOUD 1...................
						
						var cloud1 = new CloudPlatform(this.game, 300, 450, 'cloud-platform', this.clouds);

						this.cloud1.addMotionPath([
							{ x:"+200", xSpeed: 2000, xEase: "Linear", y: "-200", ySpeed: 2000, yEase: "Sine.easeIn" },
							{ x:"-200", xSpeed: 2000, xEase: "Linear", y: "-200", ySpeed: 2000, yEase: "Sine.easeOut" },
							{ x: "-200", xSpeed: 2000, xEase: "Linear", y: "+200", ySpeed: 2000, yEase: "Sine.easeIn" },
							{ x: "+200", xSpeed: 2000, xEase: "Linear", y: "+200", ySpeed: 2000, yEase: "Sine.easeOut" }
							]);
					// ...................END CLOUD 1 ...................
					
					// ................... CLOUD 2...................
						var cloud2 = new CloudPlatform(this.game, 800, 96, 'cloud-platform', this.clouds);

						cloud2.addMotionPath([
							{ x: "+0", xSpeed: 2000, xEase: "Linear", y: "+300", ySpeed: 2000, yEase: "Sine.easeIn" },
							{ x: "-0", xSpeed: 2000, xEase: "Linear", y: "-300", ySpeed: 2000, yEase: "Sine.easeOut" }
						]);
					// ...................END CLOUD 2 ...................

					// ................... CLOUD 3...................
						var cloud3 = new CloudPlatform(this.game, 1300, 290, 'cloud-platform', this.clouds);

						cloud3.addMotionPath([
							{ x: "+500", xSpeed: 4000, xEase: "Expo.easeIn", y:"-200", ySpeed: 3000, yEase: "Linear" },
							{ x: "-500", xSpeed: 4000, xEase: "Expo.easeOut", y: "+200", ySpeed: 3000, yEase: "Linear" }
						]);
					// ...................END CLOUD 3 ...................

				// END MOVE ------------------------------------------------

			// ----------------------------------------
			// END PLATFORMS  ------------------
			// ----------------------------------------

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