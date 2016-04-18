import {Page} from 'ionic-angular';
import {LancamentosPage} from '../lancamentos/lancamentos';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor() {
 //    this.nome ="Aply Sistemas";
    this.lancamentos = LancamentosPage;
  }
  getNome(){
    return("Serviços")
  }
}
