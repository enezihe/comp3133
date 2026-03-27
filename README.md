# COMP3133 – Full Stack Development II  
---

## 🔎 Table of Contents

- [Course Description](#-course-description)
- [Course Learning Outcomes](#-course-learning-outcomes)
- [Weekly Topical Outline](#-weekly-topical-outline)
  - [Week 1](#week-1)
  - [Week 2](#week-2)
  - [Week 3](#week-3)
  - [Week 4](#week-4)
  - [Week 5](#week-5)
  - [Week 6](#week-6)
  - [Week 7](#week-7)
  - [Week 8](#week-8)
  - [Week 9](#week-9)
  - [Week 10](#week-10)
  - [Week 11](#week-11)
  - [Week 12](#week-12)
  - [Week 13](#week-13)
  - [Week 14](#week-14)

---

## 📌 Course Description

This course builds on the fundamental knowledge and skills required for full stack development using the **MEAN stack**. 

Core technologies covered:

- Node.js environment  
- Express framework  
- MongoDB (NoSQL database)  
- Mongoose ODM  
- Angular front-end framework  

Students are expected to have prior working knowledge of:

- HTML & CSS  
- JavaScript (ES6)  
- Node.js & Express (COMP3123)  

---

## 🎯 Course Learning Outcomes

By the end of this course, students will be able to:

1. Design and implement a simple front-end solution using Angular.
2. Utilize native features of Node.js using built-in modules.
3. Implement a data storage solution using MongoDB.
4. Store and retrieve data using MongoDB and Mongoose ODM.
5. Implement and consume REST APIs using Node.js and Express.

---

# 📅 Weekly Topical Outline

---

## Week 1
- Administrative overview  
- Introduction to MEAN Stack  
- ES6 Review  
- Node.js Core Concepts  

---

## Week 2
- Node.js File System  
- CRUD operations on files  
- Streams (Readable/Writable)  
- Buffer Object  

---

## Week 3
- Socket.IO  
- Working with Multiple Sockets  
- Introduction to Testing  
- Mocha Framework  

---

## Week 4
- MongoDB Introduction  
- Mongoose Schema & Models  
- Queries & Sorting  
- Middleware  

---

## Week 5
- Mongoose Validation  
  - Built-in validators  
  - Custom validators  
  - Handling validation errors  

---

## Week 6
- Introduction to GraphQL  
- REST vs GraphQL  
- Schemas, Types, Queries  
- Express integration  

---

## Week 7
**Midterm Exam**

---

## Week 8
Intersession Week  

---

## Week 9

This week focuses on **TypeScript fundamentals and the preparation required for Angular development**.

TypeScript extends JavaScript by introducing **static typing, modern ES6 syntax, and a modular architecture**, helping improve code reliability and maintainability in large applications.

### Topics Covered

- Introduction to TypeScript
- Installing and using the TypeScript compiler (`tsc`)
- TypeScript vs JavaScript
- ES6 features in TypeScript
  - `let` and `const`
  - Arrow functions
  - Template literals
- TypeScript Classes
  - Properties
  - Methods
  - Object instantiation
- Access Modifiers
  - `public`
  - `private`
- Constructors and Encapsulation
- TypeScript Modules
  - `export`
  - `import`
  - Module-based project structure
- Environment setup for Angular development

### Lab 06 – TypeScript Fundamentals

Hands-on exercises demonstrating core TypeScript concepts.

#### Exercise 1 – TypeScript First Start
- Installation of the TypeScript compiler using NPM
- Compilation of `.ts` files into JavaScript using `tsc`
- Implementation of ES6 syntax:
  - Arrow functions
  - Template literals
  - `let` variables

#### Exercise 2 – Types, Classes and Objects
- Creation of a `Customer` class
- Definition of class properties and methods
- Object instantiation and execution using Node.js

#### Exercise 3 – Access Modifiers and Constructors
- Use of the `private` access modifier
- Implementation of constructors
- Application of encapsulation in TypeScript classes

#### Exercise 4 – Modules
- Implementation of the TypeScript module system
- Exporting the `Customer` class
- Importing modules into `main.ts`
- Execution of a modular TypeScript application

### Key Outcome

Understanding how **TypeScript enhances JavaScript by introducing static typing, modular design, and improved maintainability**, forming the foundation for Angular development.

---

## Week 10
- Angular Architecture  
- Angular CLI  
- Components  

### Lab 07 – Angular & Express Generator

This lab introduces Express Generator for rapid backend scaffolding and the Angular CLI for building the first Angular application.

#### Exercise 1 – Express Generator
- Installed the Express application generator globally using NPM
- Generated a new Express application named `myapp` with the Pug view engine
- Reviewed the generated file structure including routes, views, and public folders
- Installed application dependencies using `npm install`
- Reviewed the `package.json` scripts section and the `bin/www` entry point
- Started the web server on port 3000 using `npm start`
- Verified the running application at `http://localhost:3000`

#### Exercise 2 – Routes & Body Parser
- Installed the `body-parser` middleware using NPM
- Configured `body-parser` with `urlencoded` parser in `routes/users.js`
- Implemented a GET route returning a resource response
- Implemented a POST route that reads request body parameters and logs them to the console
- Tested GET and POST routes using Postman
- Verified `POST received!` response from the `/users` endpoint

#### Exercise 3 – Angular CLI & First Application
- Installed Angular CLI globally using NPM
- Created a new Angular project named `my-app` using `ng new`
- Launched the Angular development server using `ng serve`
- Edited `app.component.ts` to update the application title
- Verified live reload in the browser

### Key Outcome

Understanding how **Express Generator** accelerates backend project setup and how **Angular CLI** provides a structured foundation for building modern single-page applications using TypeScript.

---

## Week 11
- Data Binding  
- Event Binding  
- Directives  

### Lab 08 – Angular Data Binding & Directives

#### Exercise 1 – Structural Directives & Data Binding
- Built Tour of Heroes application using Angular CLI
- Defined `Hero` interface with `id` and `name` properties
- Created static mock data array in `mock-heroes.ts`
- Generated `HeroesComponent` using `ng generate component`
- Used `*ngFor` to render hero list
- Used `*ngIf` for conditional rendering of hero detail section
- Implemented `[(ngModel)]` for two-way data binding on hero name input
- Used `[class.selected]` and `(click)` for hero selection

#### Exercise 2 – Custom Pipe
- Generated `RemoveSpacesPipe` using `ng generate pipe remove-spaces`
- Implemented `PipeTransform` interface
- Used `String.replace(/-/g, ' ')` to replace all dashes with spaces
- Applied pipe in template: `{{ hero.name | removeSpaces }}`

#### Exercise 3 – Custom Directive
- Generated `InputFormat` directive using `ng generate directive input-format`
- Injected `ElementRef` to access the host DOM element
- Used `@HostListener('blur')` to listen for the blur event
- Converted input value to uppercase on blur: `value.toUpperCase()`
- Applied directive as attribute: `<input type="text" inputFormat />`

### Key Outcome

Understanding how Angular **directives** control DOM rendering and behavior, how **custom pipes** transform template data, and how **custom directives** extend native HTML element functionality.

---

## Week 12
- Building Reusable Components  
- Routing & Navigation  
- View Encapsulation / Shadow DOM  

---

## Week 13
- Consuming HTTP Services  
- Observables & RxJS  
- Template Driven Forms  
- Angular Material  

---

## Week 14
- Authentication  
- Authorization  

---