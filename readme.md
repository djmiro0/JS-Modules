# JavaScript Modules
In this assignment we will be practicing JavaScript modules.

We would like to write an application that allows us to format a string using a module. We want to be able to :
 - Uppercase a word from input field
 - Lowercase a word from input field
 - Capitalize first letter of the word from input field. 
 

Use the `stringhelper.js` file to write your module code in. 

Let's get started!

## 1. Familiarize yourself with the project:
Open `index.html` and take a look at the structure of the HTML markup. 
Run the `index.html` using Live Server. 
Notice the three buttons each allowing us to uppercase, lowercase and uppercasing first letter of a word. When we click one of the buttons we want whatever is typed in the input field to be displayed in `<p id="result"></p>` with the string operation applied to it. 


### 1.1 Linking our `index.js` to our HTML
Link the `index.js` script to `index.html` inside `<head></head>` of our html document.

**Note**: If we want to use support for modules we need `type="module"`


## 2. Creating our `stringhelper` module.
To build our functionality we would like to add **3 functions** inside the `stringhelper` module:
 - Uppercase word
 - Lowercase word
 - Capitalize first letter of the word.

### 2.1 Writing the full uppercase function:
Add a new function inside `stringhelper.js` called `upperCaseFullString`. The function takes in a string as parameter and returns a fully uppercased version of that string. 

> e.g fish becomes FISH.


### 2.2 Writing the full lowercase function   
Add a new function inside `stringhelper.js` called `lowerCaseFullString`. The function takes in a string as parameter and returns a fully lowercased version of that string. 
> e.g FISH becomes fish, tESt becomes test


### 2.3 Writing the captitalize first letter function.  
Add a new function inside `stringhelper.js` called `capitalizeFirstLetter`. The function takes in a string as parameter and returns a version of that string with the first letter uppercased. 
> e.g fish becomes Fish, tESt becomes TESt


## 3. Exporting functionality
Now that we have written the above functions we would like to be able to use them in the rest of our application. (import them). For us to be able to use the functionality, we have to export our functionality first.

### 3.1 export all functions using named exports
Export all the above functions using named exports.  

### 3.2 export all functions using default export
Export all the above functions using `export default`.


## 4. Wiring up functinality (Importing)
Now that we've created our module consisting of three functions. We would like to use these inside our `index.js`.


### 4.1 Import the functions from `stringhelper.js` module
Import the three functions needed to manipulate the input. 


### 4.2 Query for all elements needed from the DOM.
In order to read/set value of elements and to add eventlisteners we have to query for the DOM elements. Query for the buttons, inputfield and result.  


### 4.3 Add eventlistener to the buttons. 
Add an eventlistener that listens for `click` event on the buttons. And add the applicable functionality inside the eventlistener. Make sure  `<p id="result"></p>` contains the result string when the button is pressed. 

## 5. Testing the application 
- Test your application and see if it works.


## 6. BONUS: logging
As a bonus you can add a logging module (`logging.js`) to the assignment with a function that logs to the console what time a certain button was pressed.

Example:
```
20-1-2023 12:11:29 - uppercase first letter PRESSED. 
```
