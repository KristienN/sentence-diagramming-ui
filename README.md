# Sentence Diagramming Tool User Manual

# Table of Contents

- [Sentence Diagramming Tool User Manual](#sentence-diagramming-tool-user-manual)
- [Table of Contents](#table-of-contents)
  - [1 Introduction](#1-introduction)
  - [2 Using the Product](#2-using-the-product)
    - [2.1 Requirements](#21-requirements)
      - [2.1.0 Browser Requirements](#210-browser-requirements)
      - [2.1.1 Operating System Requirements](#211-operating-system-requirements)
    - [2.2 Website](#22-website)
    - [2.3 Navigation](#23-navigation)
    - [2.4 Home Page](#24-home-page)
    - [2.5 Learn Page](#25-learn-page)
      - [2.5.0 RoboGram](#250-robogram)
        - [2.5.1 Examples](#251-examples)
    - [2.6 Canvas](#26-canvas)
      - [2.6.0 Basics](#260-basics)
      - [2.6.1 Tool Box](#261-tool-box)
      - [2.6.2 Adding Words](#262-adding-words)
      - [2.6.3 Drawing Canvas](#263-drawing-canvas)
      - [2.6.4 Quiz Canvas](#264-quiz-canvas)
      - [2.6.5 Error Resolving](#265-error-resolving)
    - [2.7 Drawing a Sentence Diagram](#27-drawing-a-sentence-diagram)
      - [2.7.0 Step One: Navigate to the Draw Page](#270-step-one-navigate-to-the-draw-page)
      - [2.7.1 Step Two: Set the Sentence](#271-step-two-set-the-sentence)
      - [2.7.1 Step Three: Use the Canvas](#271-step-three-use-the-canvas)
      - [2.7.1 Optional Step](#271-optional-step)
    - [2.8 Completing the Quiz](#28-completing-the-quiz)
      - [2.8.0 Step One: Navigate to the Quiz Page](#280-step-one-navigate-to-the-quiz-page)
      - [2.8.1 Step Two: Draw The Sentence Diagram](#281-step-two-draw-the-sentence-diagram)
      - [2.8.2 Step Three: Finish the quiz](#282-step-three-finish-the-quiz)
    - [2.9 Admin Portal](#29-admin-portal)
      - [2.9.0 Website](#290-website)
      - [2.9.1 Navigation](#291-navigation)
      - [2.9.2 Quiz Page](#292-quiz-page)
      - [2.9.3 Sentence Page](#293-sentence-page)
      - [2.9.4 Grades Page](#294-grades-page)
      - [2.9.5 Adding, Updating or Deleting \& Sentence](#295-adding-updating-or-deleting--sentence)
  - [3 Installation Guide](#3-installation-guide)
    - [3.1 Requirements](#31-requirements)
      - [3.1.0 Software Requirements](#310-software-requirements)
      - [3.1.1 Browser Requirements](#311-browser-requirements)
      - [3.1.2 Operating System Requirements](#312-operating-system-requirements)
    - [3.2 Local Installation](#32-local-installation)
  - [4 Developers Guide](#4-developers-guide)
    - [4.1 Technical Information](#41-technical-information)
      - [4.1.1 Frontend](#411-frontend)
      - [4.1.2 Backend](#412-backend)
      - [4.1.3 Database](#413-database)
    - [4.2 API Documentation](#42-api-documentation)

## 1 Introduction

**Sentence Diagramming Tool** is an only web application that allows you to learn, draw sentence diagram, and complete quizzes to test your knowldge in how to draw sentence diagrams.

## 2 Using the Product

### 2.1 Requirements

#### 2.1.0 Browser Requirements

The use of this web apllication and its respective portal would require a web browser. The prefered choice would be the latest version of [Google Chrome](https://www.google.com/chrome/?brand=YTUH&gclid=CjwKCAjwzuqgBhAcEiwAdj5dRuHQ8otTxQEsVLnflR8SN9Y0pAZ9hp_5gyehvBkHrESpF-9yfJPWzRoCNOQQAvD_BwE&gclsrc=aw.ds) (111.0) or [Mozilla FireFox](https://www.mozilla.org/en-US/firefox/new/) (111.0).

The application has not been tested using any version of [Internet Explorer]() or [Microsoft Edge]() or any other browser apart from the two previously mentioned, therefore full functionality of the product is not gaurunteeed when using any alternative browser.

#### 2.1.1 Operating System Requirements

The web application is know to run on all versions of mainstream operating system (i.e MacOS X, Windows & Linux) that are able to fulfil the browser requirements

### 2.2 Website

The online sentence diagramming tool can be found at https://vercel.com/kristienn/fyp-frontend-7am8ß
Alternatively, you may install the website and host it locally using the installation guide (see [Installation](#3-installation-guide))

### 2.3 Navigation

To move across the various pages of the website, you can use the **_navigation bar_** which is located at the top of the website, as shown in the image below.

![navigation-1](../img/guide/navigation-1.png)
_Figure 1.0 - buttons and links are circled in red_

Click the words (as shown in Fig. 1.1) to go their respective pages.

This panel is visible on every single page of the website and serves to help you access everything the webstie has to offer.

| Button Link               | Destination |
| ------------------------- | ----------- |
| Sentence Diagramming Tool | Home Page   |
| Learn                     | Learn Page  |
| Draw                      | Draw Page   |
| Test                      | Quiz Page   |
| Quizzes                   | N/A         |

_Tabel 1.1 - table showing destination of buttons_

### 2.4 Home Page

The homepage consists of 4 buttons which serve as links to the different pages that the application has to offer. This is also a way of navigating

![home-1](../img/guide/home-1.png)
_Figure 1.1 - home page with navigation buttons circled in red_

### 2.5 Learn Page

The Learn page consists of a chatbot called RoboGram that you can use to get up to speed with how to draw a sentence diagram and the various components that the structure of a sentence entails.

![learn-1](../img/guide/learn-1.png)

#### 2.5.0 RoboGram

Click a prompt button on in the chat box to use RoboGram and information about what you clicked will show up in the chat box.

![learn-4](../img/guide/learn-4.png)
_Figure 2.0 - prompt buttons circled in red_

![learn-2](../img/guide/learn-2.png)
_Figure 2.1 - button clicked and response circled in red_

![learn-3](../img/guide/learn-3.png)
_Figure 2.2 - button clicked and response circled in red_

##### 2.5.1 Examples

There are various examples that are shown in the learn page. Each example is the sentence followed by its respect sentence diagram image which contain indicators of the different parts of the sentence to help you know how where to place the different sentences in the sentence diagram.

![learn-5](../img/guide/learn-5.png)
_Figure 2.1 - button clicked and response circled in red_

### 2.6 Canvas

#### 2.6.0 Basics

The canvas offers a wide range of functionality for a user to draw a sentence diagram.

The canvas consists of a top panel of buttons and interactive elements, the main canvas screen, and a bottom panel of interactive elements.
![top-canvas](../img/guide/top-canvas.png)
_Figure 2.2.1 - top panel of canvas_

![main-canvas](../img/guide/main-canvas.png)
_Figure 2.2.2- main canvas_

![bottom-canvas](../img/guide/bottom-canvas.png)
_Figure 2.2.3 - bottom panel of canvas_

The bottom panel consists of three buttons that also make edits to the canvas. These are the 'Clear' 'Undo', 'Redo' buttons.

The 'Clear' button, removes all lines and words from the canvas.

![canvas-2](../img/guide/canvas-2.png)
_Figure 2.2.4 - bottom panel of canvas_

The 'Undo' button removes the line that was previously drawn onto the canvas and if there is a word or are words on the line, the word(s) will also be removed with it.

The 'Redo' button redraws the line that was removed by way of 'Undo', and puts back the word(s) that were associated with this line.

![undo-redo](../img/guide/quiz-canvas-4.png)
_Figure 2.2.5 - bottom panel of canvas_

These elements vary between the drawing page and the quiz page. For details for the repspective canvases (see [Canvas](#26-canvas))

#### 2.6.1 Tool Box

The tool box contains buttons that you are supposed to use when drawing the line structures for the sentence diagram.

![toolbox](../img/guide/toolbox.png)

It is located in the top right corner outside of the canvas, as shown in the images below.

![toolbox](../img/guide/toolbox.png)

| Button             | Image                                          | Fucntionality                             |
| ------------------ | ---------------------------------------------- | ----------------------------------------- |
| Subject            | ![subject](../img/guide/subject.png)           | Draws a subject line                      |
| Predicate          | ![predicate](../img/guide/predicate.png)       | Draws a predicate line structure          |
| Modifier           | ![modifier](../img/guide/modifier.png)         | Draws a modifer line                      |
| Object             | ![object](../img/guide/object.png)             | Draws a object line structure             |
| Subject Compliment | ![subject-comp](../img/guide/subject-comp.png) | Draws a subject compliment line structure |
| Preposition        | ![preposition](../img/guide/preposition.png)   | Draws a preposition line strucuture       |

Please Note that to add a Modifier or a Predicate, one of the horizontal lines must be selected to indicate which line will be attached to it.

#### 2.6.2 Adding Words

Once a line is drawn, a word in the sentence can be dragged and dropped into an allocated spot on any of the lines of the sentence. See images below to see how this works
![canvas-7](../img/guide/canvas-7.png)

- when a word is dragged, rectangluar boxes pop up to show all possible placements of this word.

![canvas-6](../img/guide/canvas-6.png)

- shows a word that has been placed into an allocated box

alternatively, if you would like to replace the word that is in a particular slot, you can drag and drop a new word in their and this should replace the word that is in that slot.

![draw-canvas-4](../img/guide/draw-canvas-4.png)

#### 2.6.3 Drawing Canvas

![draw-canvas-0](../img/guide/draw-canvas-0.png)

The drawing canvas contains an input box for a users sentence. To set this as the sentence that you would like to use, press the tick and the element will make the words draggable so that you can drag them into the positions that wish to drag them into on the canvas.
![draw-canvas-1](../img/guide/draw-canvas-1.png)

The drawing canvas also has additional buttons to download the sentence diagram either as an image file or a JSON Object.
![draw-canvas-1](../img/guide/draw-canvas-6.png)

#### 2.6.4 Quiz Canvas

The quiz canvas contains different elements to help the user navigate through different sentences consecutively.

The quiz canvas has a circle which indicates the number of your current sence and also indicates how many sentences there are in the quiz overall.

![quiz-canvas-1](../img/guide/quiz-canvas-1.png)

This helps you keep track of your progress. This is located in the top left of the page above the canvas and beside the sentence as shwon in the image below.

![quiz-canvas-6](../img/guide/quiz-canvas-6.png)

The quiz canvas also has a score element which shows how accurate the sentence diagramming that a user is drawing in real time. Alternatively, the user may refresh the score by pressing the refesh button which is located beside the score number.

![quiz-canvas-3](../img/guide/quiz-canvas-3.png)

The quiz features a 'Next' and 'Prev' button which navigate to the next sentence in the quiz, and previous sentence respectively.
![canvas-6](../img/guide/canvas-8.png)

#### 2.6.5 Error Resolving

### 2.7 Drawing a Sentence Diagram

#### 2.7.0 Step One: Navigate to the Draw Page

Use the either the navigation panel or the button on the landing page to to navigate to the draw page. See [Navigation](#23-navigation) if you do not know how to do this.

![step-1](../img/guide/draw-canvas-0.png)

#### 2.7.1 Step Two: Set the Sentence

Type a sentence into the the box provided

![step-2-1](../img/guide/draw-canvas-1.png)

![step-2-2](../img/guide/draw-canvas-2.png)

And then press the tick button the set the sentence to be drawn

If you make a mistake or would like to change the sentence, you are able to do so by pressing the red button to remove the sentence and an fresh sentence may be drawn into the empty text box.

![step-2-3](../img/guide/draw-canvas-3.png)

#### 2.7.1 Step Three: Use the Canvas

The canvas gives you functionality in order to draw a sentence diagram for the sentence you have enetered.

![draw](../img/guide/draw-canvas-5.png)

See [Canvas](#26-canvas) for a detailed guide on how to use the canvas to draw a diagram.

#### 2.7.1 Optional Step

Once you are done drawing the canvas, you are able to download your drawing as an image using the 'Download SVG' button, or if you are a developer you are able to download the sentence diagram structure in the form of a JSON OBject using the 'Download JSON' button.

![draw-4](../img/guide/draw-canvas-7.png)

Alternatively, you are able to copy the JSON Structure from the JSON Field below the canvas.

### 2.8 Completing the Quiz

#### 2.8.0 Step One: Navigate to the Quiz Page

Use The navigation bar or the buttons on the home page to navigate to the quiz page by pressing the Test link.

See [Navigation](#23-navigation) for more details

#### 2.8.1 Step Two: Draw The Sentence Diagram

Use the canvas and all interactive elemts surrounding the canvas to draw a sentence diagram.

See [Canvas](#26-canvas) for more detailed explanation of drawing a diagram.

Once completed drawing the setence diagram, press next and repeat this step until you finsih diagramming the last question.

#### 2.8.2 Step Three: Finish the quiz

To finish the quiz, press the 'Finish' Button. This will calculate your total grade and send you to an intermediary page where you will view your grade and have an option to go home by clicking a button as shown in the image below.

![draw-4](../img/guide/quiz-canvas-8.png)

### 2.9 Admin Portal

#### 2.9.0 Website

The admin portal can be accessed [here]() or by using the this link:

#### 2.9.1 Navigation

Similar to the main web application, the portal application includes a navigation panel which appears at the top of each page.

![draw-4](../img/guide/portal-nav.png)

#### 2.9.2 Quiz Page

The quiz page ,which is also the homepage of the application, contains a table of information about the quizes that are in the database.

| Field          | Information Displayed                                                                        |
| -------------- | -------------------------------------------------------------------------------------------- |
| Name           | Name of quiz                                                                                 |
| Length         | Number of sentences in the quiz                                                              |
| Difficulty     | The difficulty of the quiz                                                                   |
| Sentence types | The type of sentences present in the quiz (simple, complex, cojunctions, complex-conjuction) |
| Actions        | Links to actions that you can perform on that quiz object (add, remove, edit)                |

#### 2.9.3 Sentence Page

The sentence page contains a table of information about the sentences that are in the database.

| Field    | Information Displayed                                                              |
| -------- | ---------------------------------------------------------------------------------- |
| Quiz     | Name of quiz                                                                       |
| Type     | The type of sentence that it is (simple, complex, cojunctions, complex-conjuction) |
| Sentence | The sentence that is stored                                                        |
| Actions  | Links to actions that you can perform on that sentence object (add, remove, edit   |

#### 2.9.4 Grades Page

The Grades page contains a table displaying information that

| Field      | Information Displayed                       |
| ---------- | ------------------------------------------- |
| Name       | Name of quiz                                |
| Length     | Number of sentences in the quiz             |
| Score      | The grade that was acheived on this quiz    |
| Date Taken | THe Date and time of submission of the quiz |

#### 2.9.5 Adding, Updating or Deleting & Sentence

To add a sentence to the Test Quiz, click on the 'add' link that is located in the add field next to the field that holds information for the desired quiz.

![add-action](../img/guide/quiz-actions.png)

Once pressed, a user will be navigated to a page which contains a form and an example JSON structure that a user can copy by pressing 'copy structure' and paste into the JSON Structure Field.

![add-action](../img/guide/form.png)

Alternatively, a user can use the draw page on the main web application for a sentence that want to add by drawing the sentence on the canvas and then copying the JSON structure that is shown at the bottom of the canvas.
Once the form is completed they can use the submit button to save the new sentence to the database.

(See [Drawing Canvas](#263-drawing-canvas) for more information)

To update or delete a sentence, a user must navigate to the sentence page of the portal. Here they can press the 'Edit' or 'Delete' Link under the actions field of the sentence that they wish to complete an action on.
![add-action](../img/guide/sentence-actions.png)

They will be directed to a similar form page where they must alter the details and then press the submit button to save the changes.

## 3 Installation Guide

### 3.1 Requirements

#### 3.1.0 Software Requirements

The latest version of node must be installed on your computer to have run both the website and its respective portal.

#### 3.1.1 Browser Requirements

The use of this web apllication and its respective portal would require a web browser. The prefered choice would be the latest version of [Google Chrome](https://www.google.com/chrome/?brand=YTUH&gclid=CjwKCAjwzuqgBhAcEiwAdj5dRuHQ8otTxQEsVLnflR8SN9Y0pAZ9hp_5gyehvBkHrESpF-9yfJPWzRoCNOQQAvD_BwE&gclsrc=aw.ds) (111.0) or [Mozilla FireFox](https://www.mozilla.org/en-US/firefox/new/) (111.0).

The application has not been tested using any version of [Internet Explorer]() or [Microsoft Edge]() or any other browser apart from the two previously mentioned, therefore full functionality of the product is not gaurunteeed when using any alternative browser.

#### 3.1.2 Operating System Requirements

The web application is know to run on all versions of mainstream operating system (i.e MacOS X, Windows & Linux) that are able to fulfil the software and browser requirements

### 3.2 Local Installation

Download the files for the backend services at this link.

Open a terminal and navigate to the folder using the terminal

Eg.

```
cd /Path/To/Folder/fyp-frontend
```

Or use the 'Open folder using terminal option' that is available when you right click a folder in your folder navigation.

Download all the dependenceies using the command

```
npm install
```

Once the dependencies have been downloaded you may run the application using the command

```
npm start
```

To run the program.

## 4 Developers Guide

### 4.1 Technical Information

#### 4.1.1 Frontend

**Language**
The frontend end web application is built using React with TypeScript.

**Modules Used**

- d3
- axios
- uuid
- heroicons/react
- react-tool-tip
- tailwind

#### 4.1.2 Backend

**Language**
The backend is built using NodeJS with TypeScript.

**Modules Used**

- jest
- cors
- swagger-jsdoc
- swagger-ui
- dayjs
- pino
- mongoose
- express
- dotenv
- axios
- supertest
- pug
- openai
- zod
- ts-jest
- ts-node
- ts-node-dev
- postcss
- postcss-cli
- autoprefixer
- typegoose

#### 4.1.3 Database

The database used is a NoSQL Database that is hosted on MongoDB Atlas.

### 4.2 API Documentation

API Documentation is available at the site:
