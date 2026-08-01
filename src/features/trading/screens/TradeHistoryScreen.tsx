import React from "react";

import {
  ScrollView,
  Text,
  StyleSheet,
} from "react-native";


import {
  theme,
} from "../../../theme";



export function TradeHistoryScreen() {


  return (

    <ScrollView style={styles.container}>


      <Text style={styles.title}>
        Trade History
      </Text>


      <Text style={styles.subtitle}>
        History data connection ready
      </Text>


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
