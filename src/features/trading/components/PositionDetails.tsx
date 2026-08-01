import React from "react";

import {
  View,
  Text,
  StyleSheet,
} from "react-native";


import {
  theme,
} from "../../../theme";



export interface PositionDetailsData {

  symbol: string;

  quantity: number;

  entryPrice: number;

  currentPrice: number;

  duration: string;

  profitLoss: number;

}



interface Props {

  position: PositionDetailsData;

}



export function PositionDetails({

  position,

}: Props) {


  return (

    <View style={styles.card}>


      <Text style={styles.title}>
        {position.symbol}
      </Text>


      <Text style={styles.item}>

        Quantity:
        {" "}
        {position.quantity}

      </Text>


      <Text style={styles.item}>

        Entry Price:
        {" "}
        {position.entryPrice}

      </Text>


      <Text style={styles.item}>

        Current Price:
        {" "}
        {position.currentPrice}

      </Text>


      <Text style={styles.item}>

        Duration:
        {" "}
        {position.duration}

      </Text>


      <Text style={styles.item}>

        Profit/Loss:
        {" "}
        {position.profitLoss}

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
