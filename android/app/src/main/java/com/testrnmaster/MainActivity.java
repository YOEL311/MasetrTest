package com.testrnmaster;

// import com.facebook.react.ReactActivity;
//import com.reactnativenavigation.NavigationActivity;

// public class MainActivity extends ReactActivity {

//   /**
//    * Returns the name of the main component registered from JavaScript. This is used to schedule
//    * rendering of the component.
//    */
//   @Override
//   protected String getMainComponentName() {
//     return "TestRNMaster";
//   }
// }
//
//public class MainActivity extends NavigationActivity {
//}
import androidx.annotation.Nullable;

import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationReactNativeHost;
import com.reactnativenavigation.react.ReactGateway;


//import com.reactnativenavigation.NavigationActivity;

public class MainApplication extends NavigationApplication {
  @Override
  protected ReactGateway createReactGateway() {
    ReactNativeHost host = new NavigationReactNativeHost(this, isDebug(), createAdditionalReactPackages()) {
      @Override
      protected String getJSMainModuleName() {
        return "index";
      }
    };
    return new ReactGateway(this, isDebug(), host);
  }
}