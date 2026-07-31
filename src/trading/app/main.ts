import {
  TradingBootstrap,
} from "../system";


const bootstrap =
  new TradingBootstrap();


bootstrap.start();


process.on(
  "SIGINT",
  () => {


    bootstrap.stop();


    process.exit(0);

  }
);


process.on(
  "SIGTERM",
  () => {


    bootstrap.stop();


    process.exit(0);

  }
);
