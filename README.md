<div align="center">
    <img alt="BeTheHero" title="#bethehero" src=".github/logo.svg" width="150px" />

![Web](/.github/mockup.png)
</div>

## Summary
  - [1. Introduction](#1-introduction)
  - [2. Technologies](#2-technologies)
  - [3. Installing and Running](#3-installing-and-running)
    - [3.1. Introduction](#31-introduction)
    - [3.2. API (Backend)](#32-api-backend-cloud)
    - [3.3. ONGs Admin (Frontend)](#33-ongs-admin-frontend-computer)
    - [3.4. Heroes (Mobile)](#34-heroes-mobile-iphone)
  - [4. References](#4-references)



## 1. Introduction
This application lists problems created by a non-governmental organizations and heroes can help them. It was developed at Omni Stack 11, an event promoted by [Rockeseat](https://rocketseat.com.br/) _[1]_. 

<div align="center">

https://youtu.be/aN1hqTngqWc

[![](http://img.youtube.com/vi/aN1hqTngqWc/0.jpg)](http://www.youtube.com/watch?v=aN1hqTngqWc "Installing and Running video demo.")

_Installing and Running video demo._
</div>




## 2. Technologies
- [Node.js](https://nodejs.org/en/) _[2]_
- [React](https://reactjs.org/) _[3]_
- [React Native](https://facebook.github.io/react-native/) _[4]_
- [Expo](https://expo.io/) _[5]_





## 3. Installing and Running
### 3.1. Introduction
- Clone this repo:
```
git clone git@github.com:90lucasgabriel/be-the-hero.git
```

### 3.2. API (Backend) :cloud:
- Access directory:
```
cd backend
```
- Install dependencies: 
```
npm install
```
- Run
```
npm start
```
- Access (Postman or Insomnia)
```
localhost:3333
```
- Reset database content (optional)
```
npx knex migrate:rollback
npx knex migrate:latest
```

### 3.3. ONGs Admin (Frontend) :computer:
- Make sure the [API (Backend)](#32-api-backend-cloud) is running;
- Access directory:
```
cd frontend
```
- Install dependencies: 
```
npm install
```
- Run
```
npm start
```
- Access (Browser)
```
localhost:3000
```

### 3.4. Heroes (Mobile) :iphone:
- Make sure the [API (Backend)](#32-api-backend-cloud) is running;
- Access directory:
```
cd mobile
```
- Install dependencies: 
```
npm install
```
- Run
```
npm start
```
- Expo server will open in browser
```
http://localhost:19002
```
- Scan QR Code to run on device;
- Or select an option to run on emulator;


## 4. References
[1] Rockeseat - Avaiable on https://rocketseat.com.br/;

[2] Node.js - Avaiable on https://nodejs.org/;

[3] React - Avaiable on https://reactjs.org/;

[4] React Native - Avaiable on https://facebook.github.io/react-native/;

[5] Expo - Avaiable on https://expo.io/;
