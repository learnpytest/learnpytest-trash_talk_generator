# Trash Talk Generator
A simple web application for generating trash talk for selected character

## Prerequisites
Make sure you have installed the following prerequisites:
- Node.js
- Dependencies - Make sure you've installed Node.js and npm first, then install depencies using npm:

$ npm install

## Initializing project
Make sure you've got all prerequisites, then initializing project by node using npm scripts:

$ npm run start

or initializing project by nodemon using:

$ npm run dev

## Features
### Main page
- Listing 3 characters and their posters to choose from.  The characters include:
	- Engineer
	- Designer
	- Entrepreneur

- You can choose only one of characters at one time

- Click "Generate Trash Talk" button to generate a random trash talk for selected character.  The trash talk will be shown in the textbox.  

### Specifications
- The trash talk has the following format:
	- target: engineer, designer or entrepreneur
	- task: the specific task based on different target
	- phrase: random trash talk phrase for different target and task

- Using Bootstrap

- User experience
	- Keep the option that is selected by user as default value so that user does not need to click the save option over again
	- Error/exception handling
		- You will see error message pops up if you click "Generate Trash Talk" button without selecting any target first

- The app has scalabilities to add more targets, task and phrase
