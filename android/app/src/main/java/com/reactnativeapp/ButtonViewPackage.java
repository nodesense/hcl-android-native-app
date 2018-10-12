package com.reactnativeapp;



import android.app.Activity;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class ButtonViewPackage implements ReactPackage {

    private Activity mActivity = null;

    public ButtonViewPackage(Activity activity) {
        mActivity = activity;
        System.out.println("ButtonViewPackage created");
    }

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }

    // Component/UI
    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Arrays.<ViewManager>asList(
                new ButtonViewManager(mActivity)
        );
    }
}