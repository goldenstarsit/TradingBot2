export interface AppState {

  botRunning: boolean;

  connected: boolean;

  lastUpdate:
    string | null;

}


let state: AppState = {

  botRunning: false,

  connected: false,

  lastUpdate: null,

};



export function getAppState():

  AppState {

  return {

    ...state,

  };

}



export function updateAppState(

  update:

    Partial<AppState>

):

  AppState {


  state = {

    ...state,

    ...update,

    lastUpdate:
      new Date().toISOString(),

  };


  return getAppState();

}
