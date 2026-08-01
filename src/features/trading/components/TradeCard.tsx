import React from "react";

import {
  View,
  Text,
  StyleSheet,
} from "react-native";


import {
  theme,
} from "../../../theme";



export interface TradeCardData {

  symbol: string;

  entryPrice: number;

  currentPrice: number;

  profitLoss: number;

  status: string;

}



interface Props {

  trade: TradeCardData;

}



export function TradeCard({

  trade,

}: Props) {


  return (

    <View style={styles.card}>


      <Text style={styles.symbol}>
        {trade.symbol}
      </Text>


      <Text style={styles.item}>

        Entry:
        {" "}
        {trade.entryPrice}

      </Text>


      <Text style={styles.item}>

        Current:
        {" "}
        {trade.currentPrice}

      </Text>


      <Text style={styles.item}>

        P/L:
        {" "}
        {trade.profitLoss}

      </Text>


      <Text style={styles.item}>

        Status:
        {" "}
        {trade.status}

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


  symbol: {

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
