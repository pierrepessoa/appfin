import {Page, ViewController, NavParams} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/modal-contas/modal-contas.html',
})
export class ModalContasPage {
  static get parameters(){
    return [[ViewController],[NavParams]];
  }
  constructor(view, params) {
    this.view = view;
    this.conta = params.get("parametro")||{descricao: ""}; //pega retorno da tela modal ou cria com variavel em branco
  }
  cancel(){
    this.view.dismiss();
  }
  salvar(){
    this.view.dismiss(this.conta);
  }
}
