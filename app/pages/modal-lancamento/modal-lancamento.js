import {Page, NavController, ViewController, NavParams} from 'ionic-angular';
import {DAOcontas} from '../../dao/dao-contas';
/*
  Generated class for the ModalLancamentoPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/modal-lancamento/modal-lancamento.html',
})
export class ModalLancamentoPage {
  static get parameters() {
    return [[NavController],[ViewController]];
  }

  constructor(nav, view) {
    this.nav = nav;
    this.view = view;
    this.lancamento = {};
//    this.listContas = [];

    this.dao = new DAOcontas();
    //console.log("passou");
    this.dao.getList((lista) => {
      this.listContas = lista;
      //console.log("passou"+lista);
    });

  }

  cancel(){
    this.view.dismiss();
  }
}
