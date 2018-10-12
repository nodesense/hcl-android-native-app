// ToastModule.java

package com.reactnativeapp;

import android.content.Intent;
import android.widget.Toast;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

import java.util.Map;
import java.util.HashMap;

public class ToastModule extends ReactContextBaseJavaModule {

    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";



    public ToastModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
        constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
        return constants;
    }


    // used while importing in JS

    // import Toast from 'ToastExample'
    // NativeModules.ToastExample
    @Override
    public String getName() {
        return "ToastExample";
    }

    // Custom Java Method that to be called from JS

    @ReactMethod
    public void show(String message, int duration) {
        Toast.makeText(getReactApplicationContext(), message, duration).show();
    }

    @ReactMethod
    public void addTwoString(String a, String b, Promise promise) {
        try {

            promise.resolve(a + " " + b);
        } catch (Exception ex) {

            promise.reject( "Wrong ", ex);
        }
    }

    // @ReactMethod
    // void openAndroidUIActivity() {
    //     ReactApplicationContext context = getReactApplicationContext();
    //     Intent intent = new Intent(context, AndroidUIActivity.class);
    //     context.startActivity(intent);
    // }

}