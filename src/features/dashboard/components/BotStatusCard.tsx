import React, {
  useEffect,
  useState,
} from "react";


import {
  View,
  Text,
  StyleSheet,
} from "react-native";


import {
  getTradingFrontendState,
  subscribeTradingState,
  TradingFrontendState,
} from "../../../trading/frontend/tradingStateAdapter";


import {
  theme,
} from "../../../theme";



export function BotStatusCard() {


  const [state, setState] = useState<TradingFrontendState>(

    getTradingFrontendState()

  );



  useEffect(() => {


    const unsubscribe =

      subscribeTradingState(

        updatedState => {

          setState(updatedState);

        }

      );



    return unsubscribe;


  }, []);



  return (

    <View style={styles.card}>


      <Text style={styles.title}>
        Bot Status
      </Text>


      <Text style={styles.item}>
        Running:
        {" "}
        {state.botRunning ? "YES" : "NO"}
      </Text>


      <Text style={styles.item}>
        Market:
        {" "}
        {state.marketConnected ? "CONNECTED" : "DISCONNECTED"}
      </Text>


    </View>

  );

}



const styles = StyleSheet.create({

  card: {

    marginTop:
      theme.spacing.lg,

    padding:
      theme.spacing.md,

    backgroundColor:
      theme.colors.surface,

    borderRadius:
      12,

  },


  title: {

    color:
      theme.colors.text,

    fontSize:
      theme.typography.heading,

    fontWeight:
      "bold",

  },


  item: {

    marginTop:
      theme.spacing.sm,

    color:
      theme.colors.muted,

    fontSize:
      theme.typography.body,

  },

});
