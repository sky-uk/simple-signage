# Simple Signage

**An easy way to show multiple webpages in one application.**
This application aims to be a simple way to rotate, divide and schedule monitoring websites.

The app uses two main frameworks: Electron to create native desktop applications and Mozilla-NEO as a simple boilerplate for React, Redux, React Router, Webpack ...

So, why a native application? Electron gives us the ability to embded webviews instead of iFrames. Many websites now block the use of an iframe embedding their site, a webview gives us much more control. We can also do neet things like inject JavaScript / CSS and change user-agent-strings to force mobile or desktop views.

## Features
+ Webview - Display a webview in fullscreen.
+ Webview Carousel - Transition between multiple webviews by a specified timer.
+ Webview Grid - Split the page like a table to display many webviews or carousels.

## Upcoming Features
+ Configuration Page - currently hard coded into the app, the default page is created from a json file in displayConfig.json. The configuration page will allow
+ Remote configuration.
+ Scheduling - Schedule build monitors inline with your teams release plans.
+ Add an app icon.
...

## Installing the client
Currently only the osx version is built but the application will build for windows and Linux.

#### Install OSX
To install drag the distribution file from **dist/osx/SimpleSignage.app** into your applications folder.


## To Run in dev mode
First run the development server:
```bash
# Install dependencies and run the app
npm install

# Run the app in dev mode
npm run neo-start
```

Then in a separate console launch the native application:
```bash
npm run start-dev
```

## Build and run production
First run the development server
```bash
# Build and run the app
npm run neo-build && npm start
```
