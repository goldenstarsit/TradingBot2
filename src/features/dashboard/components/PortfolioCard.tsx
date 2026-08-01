import React from "react";

import {
  View,
  Text,
  StyleSheet,
} from "react-native";


import {
  theme,
} from "../../../theme";



export function PortfolioCard() {


  const portfolio = {

    balance:
      0,

    equity:
      0,

    openPositions:
      0,

  };



  return (

    <View style={styles.card}>


      <Text style={styles.title}>
        Portfolio
      </Text>


      <Text style={styles.item}>

        Balance:
        {" "}
        {portfolio.balance}

      </Text>


      <Text style={styles.item}>

        Equity:
        {" "}
        {portfolio.equity}

      </Text>


      <Text style={styles.item}>

        Open Positions:
        {" "}
        {portfolio.openPositions}

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
