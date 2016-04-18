import {Page} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/avalia/avalia.html'
})
export class AvaliaPage {
  constructor() {
    this.nome ="Serviços";
  }
  getNome(){
    return("Serviços")
  }
}
