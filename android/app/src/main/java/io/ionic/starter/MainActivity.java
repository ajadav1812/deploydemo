package io.ionic.starter;

import com.aakashinformatics.contacts.ContactsPlugin;
import android.os.Bundle;

import com.aakashinformatics.contacts.ContactsPluginPlugin;
import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;

import java.util.ArrayList;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);


    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      add(ContactsPluginPlugin.class);
    }});
  }
}
