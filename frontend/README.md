# React Project Setup Guide

## Steps for running code on local terminal:

## 1. Unzip the Project
- Locate the downloaded `.zip` file from Box.
- Extract (unzip) it to your desired folder.

## 2. Open in Code Editor
- Open the extracted folder in your preferred code editor.

## 3. Install Dependencies
- Make sure you have **Node.js** and **npm** installed.

- You can check by running in your terminal:
  node -v
  npm -v

- If you don’t have them installed, download both from: https://nodejs.org

## 4. Install Project Dependencies
- Open a terminal in the root folder of the project.
- In your terminal run:
  npm install
- This will recreate the node_modules folder by installing all necessary packages from package.json.

## 3. Start Development Server
- In the same terminal run:
  npm run dev
- Ctrl + Click on the link in the terminal. This will take you to the React app in your browser.

### Note:
- If you receive any errors after running npm start, try:
  rm -rf node_modules
  npm install
