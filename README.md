# Social React App

## Introduction
This is a project written entirely by me with the purpose of presenting the skills I have on the "React" library. For this purpose, I have used a minimal amount of additional libraries. Please do not abuse the code in this repositories!



The application is made with the purpose of a social network that supports the organization and implementation of group activities and trips.


## Contents
1. [Startup](#startup)
2. [Application structure](#application-structure)
3. [Components](#components)
4. [Contexts](#contexts)
5. [Hooks](#hooks)
6. [Services](#services)
7. [Utils](#utils)

## Startup
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Development server

After copying the repository you need to install the node packages with `npm install`.

Run `npm start` for a dev server. Navigate to `http://localhost:3000`. The application will automatically reload if you change any of the source files.


## Application structure

Тhe application start from `index.js` file in main directory where is render App component as main Component.

Accordingly, the file structure of the application is:

* src
    * [components](#components)
        * [commonComponents](#commoncomponents)
            * [Edit botton](#edit-botton) 
            * [Submit and reject buttons](#submit-and-reject-buttons)
            * Custom button 
            * Custom form 
                * Accessibility Select 
                * Custom Date Element 
                * Custom input element
                * Custom location element 
                * Custom number element 
                * Custom profile picture
                * Custom select element 
                * Custom textarea element 
            * Custom link 
            * Profile div 
            * Route guard 
        * Activities
        * Activity Card
        * Create actyvity
        * Create group
        * Details activity
            * Activity detail
            * Location details
        * Details group
            * Group activities 
            * Group comments 
            * Group details 
        * Error page
        * Footer
        * Group card
        * Group list
        * Header
        * Home
            * Home articles 
            * Home header
        * Login page
        * Logout
        * Members 
        * Profile 
            * Profile activities 
            * Profile details 
            * Profile groups 
        * Register page 
    * contexts.
    * hooks.
    * services 
    * utils.

## Components 

Each of the components has its own stylе module.

### commonComponents
     
This folder contains simple components that are used in all other components, but it is also a individual route.

#### Edit botton 

This is a dumb component. 

Accepts an `onClick` via props and returns a simple `jsx` using another shared component.

#### Submit and reject buttons 
    
This is a dumb component. 

Accepts `submit` and `reject` via props and returns a plain `jsx` using another shared component. By checking for `submit` in props.

[home](#contents)

Work in progress... 
