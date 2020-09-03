# Apprenticeship Pre-work Assignment

Part of the application process for the Array Apprenticeship Program requires you to complete a series of on-line courses and exercises. 

This pre-work will shed some light on the concepts and knowledge required to be a software engineer. It will also help us assess your ability to absorb the material.

The goal of this project is not for you to get it 100% correct; instead, we are looking to see how well you can handle learning a new and very dense subject.

Relax and have fun!

## Step 1 - Basic Terminology and Understanding

To help you understand common industry jargon that you might encounter during this exercise please review the following link: [Web Development Jargon](https://www.pagecloud.com/blog/website-terminology)

## Step 2 - Download and Install VS Code

At Array you will be editing code using Visual Studio Code, VS Code for short. To complete this pre-work, you will need to download VS Code from [The VS Code Website](https://code.visualstudio.com/Download).

After installing VS Code take some time to familiarize yourself with the application by reading through these helpful links:

- [Getting Started](https://code.visualstudio.com/docs/introvideos/basics)
- [Code Editing](https://code.visualstudio.com/docs/introvideos/codeediting)
- [Extensions](https://code.visualstudio.com/docs/introvideos/extend)

## Step 3 - Download and Install NodeJS

NodeJS is a JavaScript Runtime that allows JavaScript to be run on a server. You won't need to know how to write JavaScript for this project; however, you will need it to execute some commands so that you will be able to view/edit the pre-work project.

Download NodeJS from the [NodeJS Website](https://nodejs.org/en/)

## Step 4 - Get Comfortable with The Command Line

Before you start editing the code in this pre-work project, you will need to get comfortable with navigating your machine and executing commands using a command line application.

Depending on your system, your shell will be called the Terminal (MacOS) or Command Prompt (Windows). (If you use Linux, you should already know.) For first-timers, see this [tutorial](https://learnpythonthehardway.org/book/appendixa.html) for some self-teaching on how to navigate through your computer using various commands.

## Step 5 - Start the Pre-Work Application

1. Unzip the application zip that was provided to you. 
2. Open VS Code and click File > Open then select the project directory created by the unzip process above.
3. Open the integrated terminal in VS Code by clicking View > Terminal.
4. In the terminal type the following command `npm install`. This will install all the dependencies needed for us to run the pre-work application.
5. In the terminal type the following command `npm run dev`. This will start the pre-work application using a development server that will automatically rebuild your project when you make edits to and save files.
6. In your browser, navigate to http://localhost:3000 to see the application running.

## Step 6 - Make Edits to the Pre-work Application

As you might have noticed, the application is pretty ugly. It's your job to make it prettier! 

Review the design files in the /design directory and make the application look as close to the design files as you can. You will only need to edit two files:

- /src/index.html
- /src/app.css

All the images that you need for the project are located in dist/assets and can be linked to in the HTML or CSS using a relative url. See the image tag in the /src/index.html on line 12 for an example of how to link images with HTML. To link images in CSS see the resources section below.

When you are ready to start editing make sure the development server is running (navigate to http://localhost:3000 to see if the application is displayed). If the server is not running, open the integrated terminal in VS Code and run `npm run dev`. Start editing! When you want to see an edit in the browser, save the file and refresh your browser.

## Resources You Might Need to Finish This Project

1. [HTML](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/)
2. [HTML Forms](https://www.freecodecamp.org/news/a-step-by-step-guide-to-getting-started-with-html-forms-7f77ae4522b5/)
3. [CSS](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/)
4. [CSS Flexbox](https://www.freecodecamp.org/learn/responsive-web-design/css-flexbox/)
5. [CSS Grid](https://www.freecodecamp.org/learn/responsive-web-design/css-grid/)

## Submitting Your Project

When you are done with the project, you will send us an email by placing your real email and name in the form built in the application and submitting the application by clicking the 'Submit' button. You can test your submission at any time by clicking the 'Test Submit' button.

Finally, we will do a code review with you to discuss how you did. To prepare for the code review:

1. Save all of your work in a location where it won't get deleted (Downloads folder is a bad place) 
2. Download and install the VS Code Live Share Extension in VS Code.
3. Review your work and all of the resources so that you can come to the code review prepared to discuss your code.