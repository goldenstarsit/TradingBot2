import React, {
  useEffect,
} from "react";


import {
  View,
  Text,
  StyleSheet,
} from "react-native";


import {
  tradingEngineBootstrap,
} from "../src/trading/bootstrap/tradingEngineBootstrap";


import {
  appLifecycleManager,
} from "../src/background/appLifecycleManager";



export default function Index() {


  useEffect(() => {


    appLifecycleManager.start();


    tradingEngineBootstrap.initialize();



    return () => {

      appLifecycleManager.stop();

    };


  }, []);



  return (

    <View style={styles.container}>


      <Text style={styles.title}>
        TradingBot
      </Text>


      <Text style={styles.status}>
        Trading Engine Ready
      </Text>


    </View>

  );

}



const styles = StyleSheet.create({

  container: {

    flex: 1,

    justifyContent: "center",

    alignItems: "center",

  },


  title: {

    fontSize: 28,

    fontWeight: "bold",

  },


  status: {

    marginTop: 10,

    fontSize: 16,

  },

});
