export interface Position {


  symbol:
    string;


  quantity:
    number;


  averagePrice:
    number;


}


export interface Portfolio {


  balance:
    number;


  positions:
    Position[];


}
