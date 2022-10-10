<!---
Hi! We're happy you opened this file, not everyone does!
To let us know you did, paste a capybara picture 
in the How to Run section 😊 
-->

# Web & Mobile Interview Assignment

## Introduction

This is the interview exercise for the Web & Mobile team of [xtream](https://www.linkedin.com/company/xtream-srl). In the following sections, you will find a number of challenges that we ask you to implement. You **DO NOT NECESSARILY need to complete 100% of them**, but rather only the ones you feel comfortable about or that interest you.    

:watch: We estimate it should take around 8 hours to solve the challenges, and we give you **1 week** to submit a solution, so that you can do it at your own pace.    

### Deliverables
Simply fork this repository and work on it as if you were working on a real-world project assigned to you. A week from now, we will checkout your work and evaluate it. 

:heavy_exclamation_mark:**Important**: At the end of this README, you will find a "How to run" section that is not written out. Please, write there instructions on how to run your code. 

### Evaluation
Your work will be assessed according to several criteria. As an example, these include:
* Code quality
* Design Patterns
* Project Structure
* Work quality (commits, branches, workflow, tests, ...)
* Provided Documentation

### Let's get started
We designed **three sections**: 
1. Frontend
2. Backend
3. Mobile

For each of these sections, we will identify a number of challenges and order them based on complexity. Each section will provide information regarding which challenges **can** be skipped.

Of course, it'd be great if you could complete all sections! However, we do understand that some topics might be  unfamiliar for you (such as developing a mobile app, for example). Therefore, pick any number of sections and try to complete their challenges.

:heavy_exclamation_mark:**Important**: you might feel like the tasks are somehow too broad or the requirements are not fully elicited. **This is done on purpose**: we want to give you freedom to take your own choices and to put as fewer constraints as possible on your work. As an example, we do not ask any requirements with respect to the UI, so feel free to choose any style you enjoy.


## Problem Domain
[JSONPlaceholder](https://jsonplaceholder.typicode.com/) is a website that provides you with REST API endpoints for testing and developing your applications. We will be working with the */posts* resource provided by JSONPlaceholder. 


---   

### Section 1) Frontend 

:heavy_exclamation_mark: The requirements below are technologically agnostic, and you can choose to work with what you feel more comfortable with. For example, you may choose [React](https://it.reactjs.org/), [Angular](https://angular.io/) or plain JavaScript as well.

#### Challenge #1.1
Build a web page that renders the posts on the screen

#### Challenge #1.2
Allow the user to perform CRUD operations

#### Challenge #1.3
Redesign, if necessary, the rendering and retrieval of the list considering to support a hugely larger number of posts (~thousands of rows).

#### Challenge #1.4
Support mobile portrait layout

#### Challenge #1.5
Use the /comments resources provided by JSONPlaceholder to render the comments of a post below it on click with some kind of animation

--- 
### Section 2) Backend

##### Introduction
In the previous section (**Frontend**) you reached out to the JSONPlaceholder API to perform CRUD operations on the posts. Now, we ask you to **replace JSONPlaceholder with your custom backend**.

:heavy_exclamation_mark: In this section, the two challenges are **not** mutually exclusive. That is, you can complete both of them, or just choose to implement one of them.

#### Challenge #2.1
Implement your own backed using a language and libraries of your choice. The only requirement is that the backend needs to support CRUD operations and can seamlessy replace the JSONPlaceholder API in the challenges of Section 1).

#### Challenge #2.2
The requirements for this challenge are the exact same requirements of the previous challenge (#2.1), but we ask you to fullfil these requirements using the [Firebase](https://firebase.google.com/) services provided by Google.

--- 
### Section 3) Mobile

#### Challenge #3
The requirements for this challenge are the exact same requirements of the Frontend challenges, but we ask you to fullfil these requirements through a mobile application. For example, you may choose [React Native](https://reactnative.dev/), [Flutter](https://flutter.dev/) or any other technology you feel comfortable developing mobile apps with.

--- 
# How to run

This is a React application made with Visual Studio Code, to run is necessary:
<ul>
  <li>An IDE (Integrated Development Environment.</li>
  <li>Clone this repository.</li>
  <li>Install the libraries i used to create, run folowing the lines of command:</li>
    <ul>
        <li>npm install react-router-dom@6.</li>
        <li>npm install react-redux.</li>
        <li>npm install @mui/material @emotion/react @emotion/styled</li>
        <li>npm install @mui/icons-material.</li>
        <li>npm install @reduxjs/toolkit</li>
    </ul>
        <li>With the repo in your IDE, run: npm start</li>    
</ul>









