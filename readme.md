# Zen Protocol Mobile Wallet

## Preview


## Getting started

### npm install dependencies

````
npm install
````

### Transform files of Node.js modules after installation.

````
npm run postinstall
````

## Application

## IOS

````
react-native run-ios
````

## Android

````
react-native run-android
````

## Testing

````
npm run test
````

## Debug

### react-native-debugger
````
brew update && brew cask install react-native-debugger
````

````
open "rndebugger://set-debugger-loc?host=localhost&port=8081"
````

See what's stored in AsyncStorage?
Just call showAsyncStorageContentInDev() in the RND console and you'll be able to see a dump of your app's storage.
