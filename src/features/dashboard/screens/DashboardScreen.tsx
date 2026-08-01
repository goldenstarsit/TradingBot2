import React from "react";

import {
  ScrollView,
  StyleSheet,
} from "react-native";


import {
  BotStatusCard,
} from "../components/BotStatusCard";


import {
  PortfolioCard,
} from "../components/PortfolioCard";


import {
  MarketOverviewCard,
} from "../components/MarketOverviewCard";


import {
  PerformanceSummaryCard,
} from "../components/PerformanceSummaryCard";


import {
  theme,
} from "../../../theme";



export function DashboardScreen() {


  return (

    <ScrollView
      style={styles.container}
    >

      <BotStatusCard />

      <PortfolioCard />

      <MarketOverviewCard />

      <PerformanceSummaryCard />


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

});
