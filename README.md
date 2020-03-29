<div align="center">
    <img alt="BeTheHero" title="#bethehero" src=".github/logo.svg" width="200px" />
</div>

## Sumary
  - [1. Introduction](#1-introduction)
  - [2. Technologies](#2-technologies)
  - [3. Installing and Running](#3-installing-and-running)
    - [3.1. Introduction](#31-introduction)
    - [3.2. Server (Backend)](#32-server-backend)
    - [3.3. ONGs Admin (Frontend)](#33-ongs-admin-frontend)
    - [3.4. Heroes (Mobile)](#34-heroes-mobile)
  - [4. References](#4-references)



## 1. Introduction
Omni Stack 11 is an event promoved by [Rockeseat](https://rocketseat.com.br/) _[1]_. This application list problems created by a non-governmental organizations (ONGs) and big heroes can help them _(Figure 1.1)_.

<div align="center">

| ![Web](/.github/web.png) | ![Mobile](/.github/mobile.png) |
|--|--|

_Figure 1.1 - Web and Mobile screenshots._
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
git clone git@github.com:90lucasgabriel/omnistack11.git
```

### 3.2. Server (Backend)
- Access directory:
```
cd backend
```
- Install dependencies: 
```
npm install
```
- Create database and run migrations
```
npx knex migrate:latest
```
- Run
```
npm start
```
- Access (Postman or Insomnia)
```
localhost:3333
```

### 3.3. ONGs Admin (Frontend)
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

### 3.4. Heroes (Mobile)
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
- Or select an option to option to run on emulator;


## 4. References
[1] Rockeseat - Avaiable on https://rocketseat.com.br/;

[2] Node.js - Avaiable on https://nodejs.org/;

[3] React - Avaiable on https://reactjs.org/;

[4] React Native - Avaiable on https://facebook.github.io/react-native/;

[5] Expo - Avaiable on https://expo.io/;
