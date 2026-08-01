import {
  AppState,
} from "react-native";

import {
  updateAppState,
} from "../state/appState";



export class AppLifecycleManager {


  private subscription:
    any = null;



  public start():

    void {


    if (this.subscription) {

      return;

    }



    this.subscription =
      AppState.addEventListener(

        "change",

        (nextState) => {


          updateAppState({

            connected:
              nextState === "active",

          });


        }

      );


  }



  public stop():

    void {


    if (this.subscription) {

      this.subscription.remove();

      this.subscription = null;

    }


  }


}



export const appLifecycleManager =
  new AppLifecycleManager();
