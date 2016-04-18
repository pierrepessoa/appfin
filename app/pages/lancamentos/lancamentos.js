import {Page, NavController, Modal} from 'ionic-angular';
import {ModalLancamentoPage} from '../modal-lancamento/modal-lancamento'
/*
  Generated class for the LancamentosPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/lancamentos/lancamentos.html',
})
export class LancamentosPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }
  insert() {
    let modal = Modal.create(ModalLancamentoPage);
    this.nav.present(modal);
  }
}
