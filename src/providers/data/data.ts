import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  mydata = { "ListItems": [
    {listName: "The Snake Hunter"},
    {listName: "Killer"},
    {listName: "Let Me Live"},
    {listName: "21 Guns"}],

    "ListItemsTwo": [
      {listNameTwo: "Love Me Tender"},
      {listNameTwo: "The Pretender"},
      {listNameTwo: "Kissing"},
      {listNameTwo: "In the Moonlight"}]


  };





  constructor() {
    console.log('Hello DataProvider Provider');
  }

  getData(): Object {
    return this.mydata.ListItems;



  };

  getDatatwo(): Object {
    return this.mydata.ListItemsTwo;



  };

}
