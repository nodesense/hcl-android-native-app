package com.reactnativeapp;

import javax.annotation.Nullable;

import android.app.ActionBar;
import android.app.Activity;
import android.util.Log;
import android.view.View;
import android.widget.Button;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.ViewManager;
import com.facebook.react.views.text.ReactTextShadowNode;

import java.util.Map;


public class ButtonViewManager extends SimpleViewManager<Button> {
    public static final String REACT_CLASS = "ButtonView";

    private Activity mActivity = null;

    private ThemedReactContext mContext = null;

    public ButtonViewManager(Activity activity) {
        mActivity = activity;

        System.out.println("ButtonViewManager created");
    }

    // Componenent name <ButtonView  textTitle="hello" />
    @Override
    public String getName() {
        return REACT_CLASS;
    }


    // REAL NATIVE UI /DOM

    @Override
    public Button createViewInstance(ThemedReactContext context) {
        mContext = context;

        Button btnTag = new Button(context);
        btnTag.setLayoutParams(new ActionBar.LayoutParams(ActionBar.LayoutParams.WRAP_CONTENT, ActionBar.LayoutParams.WRAP_CONTENT));
        btnTag.setText("Android Button");
        btnTag.setWidth(300);
        btnTag.setHeight(60);
        btnTag.setId(123456);

        final ButtonViewManager that = this;

        btnTag.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v)   {
                //WriteableMap params = Arguments.createMap();
                Log.e("Notification","Notify App");

                mContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit("clicked", "Hello");

            }});

        System.out.println("Create Instance called");

        return btnTag;
    }

    @ReactProp(name = "textTitle")
    public void setTextTitle(Button view, @Nullable String textTitle) {

        view.setText(textTitle);

        sendTimerEvent(10);
    }

    private DeviceEventManagerModule.RCTDeviceEventEmitter emitter() {
        return mContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class);
    }

    private void pushPayload(String event, WritableMap payload) {
        emitter().emit(event, payload);
    }

    public void sendTimerEvent(long remaining) {
        WritableMap data = Arguments.createMap();
        data.putInt("remaining", (int) remaining);
        pushPayload("timeoutEvent", data);
    }


    public Map getExportedCustomBubblingEventTypeConstants() {
//        return MapBuilder.builder()
//                .put(
//                        "clicked",
//                        MapBuilder.of(
//                                "phasedRegistrationNames",
//                                MapBuilder.of("bubbled", "clicked")))
//                .put(
//                        "timeoutEvent",
//                        MapBuilder.of(
//                                "phasedRegistrationNames",
//                                MapBuilder.of("bubbled", "timeoutEvent")))
//                .build();

        return MapBuilder.of(
                "timeoutEvent",
                MapBuilder.of("bubbled", "timeoutEvent")
        );
    }

}