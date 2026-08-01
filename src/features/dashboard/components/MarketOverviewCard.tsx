import React from "react";

import {
  View,
  Text,
  StyleSheet,
} from "react-native";


import {
  theme,
} from "../../../theme";



export function MarketOverviewCard() {


  const markets = [

    {

      symbol:
        "BTCUSDT",

      price:
        0,

      status:
        "Waiting",

    },

    {

      symbol:
        "ETHUSDT",

      price:
        0,

      status:
        "Waiting",

    },

  ];



  return (

    <View style={styles.card}>


      <Text style={styles.title}>
        Market Overview
      </Text>



      {
        markets.map(

          (market) => (

            <View
              key={market.symbol}
              style={styles.row}
            >

              <Text style={styles.item}>
                {market.symbol}
              </Text>


              <Text style={styles.item}>
                {market.price}
              </Text>


              <Text style={styles.item}>
                {market.status}
              </Text>


            </View>

          )

        )
      }


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


  row: {

    marginTop:
      theme.spacing.sm,

  },


  item: {

    color:
      theme.colors.muted,

    fontSize:
      theme.typography.body,

  },

});
