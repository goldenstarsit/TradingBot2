import React from "react";

import {
  View,
  Text,
  StyleSheet,
} from "react-native";


import {
  theme,
} from "../../../theme";



export function PerformanceSummaryCard() {


  const performance = {

    profitLoss:
      0,

    totalTrades:
      0,

    winRate:
      0,

  };



  return (

    <View style={styles.card}>


      <Text style={styles.title}>
        Performance
      </Text>


      <Text style={styles.item}>

        Profit / Loss:
        {" "}
        {performance.profitLoss}

      </Text>


      <Text style={styles.item}>

        Total Trades:
        {" "}
        {performance.totalTrades}

      </Text>


      <Text style={styles.item}>

        Win Rate:
        {" "}
        {performance.winRate}%

      </Text>


    </View>

  );

}



const styles = StyleSheet.create({

  card: {

    marginTop:
      theme.spacing.md,

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
