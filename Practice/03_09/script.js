/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
	name: "Everyday Backpack",
	volume: 30,
	color: "grey",
	pocketNum: 15,
	strapLength: {
		left: 26,
		right: 26,
	},
	lidOpen: false,
	toggleLid: function (lidStatus) {
		this.lidOpen = lidStatus;
	},
	newStrapLength: function (lengthLeft, lengthRight) {
		this.strapLength.left = lengthLeft;
		this.strapLength.right = lengthRight;
	},
	nameChange: function (newName) {
		this.name = newName;
	},
	biggerBag: function (increaseBy) {
		this.volume += increaseBy;
		this.volume += increaseBy;
		this.volume += increaseBy;
		this.volume += increaseBy;
	},
	colorPicker: function (wantedColor) {
		this.color = wantedColor;
	},
	morePockets: function (morePocketAmount) {
		this.pocketNum += morePocketAmount;
	},
};

console.log(
	"Backpack Name:",
	backpack.name,
	"\nBackpack Color:",
	backpack.color,
	"\nAmount of Pockets in Backpack:",
	backpack.pocketNum,
	"\nVolume of Backpack:",
	backpack.volume,
	"\nLid Status:",
	backpack.lidOpen,
	"\nStrap Length Right & Left:",
	backpack.strapLength.left,
	"&",
	backpack.strapLength.right
);

backpack.toggleLid(true);
backpack.newStrapLength(21, 21);
backpack.nameChange("Oldies Backpack");
backpack.biggerBag(4);
backpack.colorPicker("red");
backpack.morePockets(7);

console.log(
	"Backpack Name:",
	backpack.name,
	"\nBackpack Color:",
	backpack.color,
	"\nAmount of Pockets in Backpack:",
	backpack.pocketNum,
	"\nVolume of Backpack:",
	backpack.volume,
	"\nLid Status:",
	backpack.lidOpen,
	"\nStrap Length Right & Left:",
	backpack.strapLength.left,
	"&",
	backpack.strapLength.right
);
