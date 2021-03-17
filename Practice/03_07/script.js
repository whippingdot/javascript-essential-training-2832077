/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
const laptop = {
	outlook: "Email App",
	edgeTabs: 14,
	toggleTrack: true,
	todoistTasks: 44,
	teamsMessages: false,
	notionNotif: function (app) {
		console.log("You have", app.getNotifCount);
	},
	vsCode: {
		unsavedChanges: true,
		files: "Installed",
		githubActivated: true,
		gitChangedFiles: 5,
		gitCommits: 0,
		errors: true,
		problems: 2,
		extensions: "I have downloaded some",
	},
};
const desk = {
	books: 4,
	calendar: true,
	waterBottle: 2,
	keyboardDrawer: {
		keyboard: "big",
		mouse: "dirty",
	},
	bobbleHeads: true,
	pencilBox: {
		inkPen: "dry",
		blackPen: "new",
		bluePen: "new",
	},
	trashCan: "medium-full",
};
