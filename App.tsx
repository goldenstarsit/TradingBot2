import React, {
  useEffect,
} from "react";


import {
  appLifecycleManager,
} from "./src/background/appLifecycleManager";


import {
  tradingEngineBootstrap,
} from "./src/trading/bootstrap/tradingEngineBootstrap";


import {
  DashboardScreen,
} from "./src/features/dashboard";



export default function App() {


  useEffect(() => {


    appLifecycleManager.start();


    tradingEngineBootstrap.initialize();



    return () => {

      appLifecycleManager.stop();

    };


  }, []);



  return (

    <DashboardScreen />

  );

}
