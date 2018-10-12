

# Get Started


open command prompt:

> react-native init ReactNativeApp

> cd ReactNativeApp


c:\ReactNativeApp> npm start --reset-cache 

open second command prompt


c:\ReactNativeApp> react-native run-android


# NPM Commands

open three command prompts

cd ReactNativeApp
  
first command prompt, start the bundler on port 8081

npm start

second command prompt, compile and build apk file, upload to device

npm run android


third command prompt, for android app logs

npm run log-android


# React libraries

> yarn add react-navigation redux react-redux redux-thunk 


# Icons

https://github.com/oblador/react-native-vector-icons

```
yarn add react-native-vector-icons
react-native link react-native-vector-icons


npm run android

```


# React Native FS

https://github.com/itinance/react-native-fs


```
yarn add  react-native-fs

react-native link react-native-fs

npm run android

or 

yarn android
```

# Clean Android build

android/gradlew clean

> android/gradlew clean


# Sqlite

https://github.com/andpor/react-native-sqlite-storage

```
yarn add  react-native-sqlite-storage

```

for ios

react-native link react-native-sqlite-storage

for android, manual patch needed, refer link 