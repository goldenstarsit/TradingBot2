import React from "react";

import {
  ScrollView,
  Text,
  StyleSheet,
} from "react-native";


import {
  TradeCard,
} from "../components/TradeCard";


import {
  tradingDataService,
} from "../services/tradingDataService";


import {
  theme,
} from "../../../theme";



export function ActiveTradesScreen() {


  const trades =
    tradingDataService.getActiveTrades();



  return (

    <ScrollView style={styles.container}>


      <Text style={styles.title}>
        Active Trades
      </Text>



      {

        trades.length === 0 ? (

          <Text style={styles.subtitle}>
            No active trades
          </Text>

        ) : (

          trades.map(

            (trade, index) => (

              <TradeCard

                key={index}

                trade={trade}

              />

            )

          )

        )

      }


    </ScrollView>

  );

}



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor:
      theme.colors.background,

    padding:
      theme.spacing.lg,

  },


  title: {

    color:
      theme.colors.text,

    fontSize:
      theme.typography.title,

    fontWeight:
      "bold",

  },


  subtitle: {

    marginTop:
      theme.spacing.md,

    color:
      theme.colors.muted,

  },

});
