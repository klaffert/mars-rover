![image](https://user-images.githubusercontent.com/49892991/137564205-88d28545-d202-44e4-ad49-edcab63ac6eb.png)

# Project Title

Mars Rover Capture Library

## Description

The Mars Rover Capture Library uses the NASA Mars API to fetch data and based on user's input, displays the photos taken from that Rover, specific date and camera.

I spent about 1.5 hours building out the functionality within the form and then spent another 2 hours building out the styling in React-Bootstrap. I really enjoy styling and was having fun with React Bootstrap. 

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Here are steps to take to run this app:

1. Clone the repo git clone git@github.com:klaffert/mars-rover.git
2. Run npm install to install NPM packages
3. Run npm start
    * This will start the local development server and show you the app in your browser

I created a personal API key for my own purposes. However, for the sake of ease of testing, I've added the DEMO_KEY into the API URL, so users can try out the app

### Technologies Used

* React
* React-Bootstrap
* React Hooks
* NASA API

### Issues Faced

#### API Security Key
While the NASA API key has a demo key available, I wanted to create my own so I had more freedom in the number of calls I could make to the API. For example, with the DEMO API key, you can make 30 requests per hour vs. 1000 requests per hour with personal API key. 

Hardcoded API keys are a big no-no because they expose the API key to the public. This allows malicious users to use your API key, if desired. 

I resolved this by placing my API key in a variable in an .env file and that placing that file in .gitignore and then called that variable as needed (as shown in App.js). When I pushed my code to GitHub, this .env file was ignored and not shown in my git repository. 

#### Customizing Photo Carousel

React Bootstrap components come with built-in styling, which means that any component customization needs to override the default styling. 

By default, the carousel caption is centered in the bottom center of the image. To override this and show the caption at the top and on the sides, I needed to read the documentation on how to do this. What I ended up doing was create a custom class for the elements I wanted to customize and handling them in CSS. 

#### Handling multiple form inputs
The form has multiple inputs, which mean there multiple states to keep track of. I needed to ensure the state of the app updated with each user input as well as the API URL so when the user clicked 'Search', the data returned matched their input. 

To resolve this, I bought out functionality that handled the user's input individually and assigned the value to the state with each change of input. When the user clicked sumibt, it would only search the API for the inputs that were last selected. 

### Potential Improvements

#### Improved error handling
If I had more time, I would have liked to implement better error handling to include handling bad API calls, handling different data types within the "Sol" input and handling the case of when no data is available for the selected input. 

Currently, there is no logic set up for error handling unsuccessful API calls. When a user inputs a selection that has no data, a blank carousel is shown. I would like to use conditional rendering that would show some sort of message or alert to the user that would tell them there are no photos available for that selection and to retry a different input. 
#### Extend filtering logic
There are multiple data points to filter on and if I had more time, I would have liked to build out additional filters, such as Earth Date. 

#### UI changes to show which cameras are available for specified rover
Currently, you are able to select every camera for every rover, regardless of whether that camera is available on that specific rover. How I would improve this would be to mute or dull the cameras that are not available for the selected rover. I would go about doing this by creating a function that searchs the rover object for that specific camera and if it is not available, then mute the camera selection.

### Reasoning behind decisions

#### React Hooks
My goal for this project was to only use functional components and use React Hooks. React Hooks are a relatively newer feature of React that allows the developer to 'hook' into the state of the app from within functional components rather than build the state out in the constructor of a class component. This makes for less code and easier readability. 

#### React-Bootstrap
I've worked with Material-UI before and wanted to try React-Bootstrap for my UI library. I liked React Bootstrap's reusability and ease of customization (after some research). Also, React Bootstrap offers total responsiveness, meaning I didn't need to worry about media queries. 

#### Carousel
The carousel was build out using React-Bootstrap. I decided to use a carousel because I thought it made for a cleaner UI and was an interesting way to display the images rather than out in cards. 
