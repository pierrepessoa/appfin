import {Page, Modal, NavController,Alert} from 'ionic-angular';
import {DAOcontas} from '../../dao/dao-contas';
import {ModalContasPage} from '../modal-contas/modal-contas'
import {Toast} from 'ionic-native';
@Page ({
  templateUrl: "build/pages/contas/contas.html"
})

export class ContasPage {
  static get parameters(){
    return [[NavController]]
  }

  constructor(nav){
    this.dao = new DAOcontas();
    this.dao.getList((lista) =>  {
      this.listContas = lista;
    });
    this.nav = nav;
  }

  insert(){
    let modal = Modal.create(ModalContasPage);
    //criação de uma varíavel
    //let tem um escopo menor que o var
    //variavel var pode ser acessível dentro do método, mesmo que criada dentro de um bloco IF por exemplo.
    //a variavel let só é acessível dentro do bloco onde ela foi criado

    //modal.onDismiss(function(data));//quando tela for fechada executa este evento (call back)
    //alert(data.descricao);

    //modal.onDismiss(function(data));//quando tela for fechada executa este evento (call back)
    //nova forma de fazer arrow functions
    modal.onDismiss((data) => {
      //alert(data.descricao);
      if (data){
        this.dao.insert(data,(conta) => {
          this.listContas.push(conta);
          Toast.showShortBottom("Conta inserida com sucesso.").subscribe((toast) => {
            console.log(toast);
          });
        });
      }
    });
    this.nav.present(modal);
  }
  edit (conta){
    let modal = Modal.create(ModalContasPage, {parametro: conta});

    modal.onDismiss((data) =>{
      //alert(data.descricao);
      if (data){
        this.dao.edit(data,(conta) => {
          //faz nada pois o obj já é atualizado.
          Toast.showShortBottom("Conta alterada com sucesso.").subscribe((toast) => {
            console.log(toast);
          });
        });
      }
    });
    this.nav.present(modal);

  };
  delete(conta){
    let confirmDel = Alert.create
    ({
      title: "Excluir",
      body: "Deseja realmente excluir a conta "+conta.descricao+"?",
      buttons:
      [
          {text: 'Sim', handler: () =>
            {
              this.dao.delete(conta, (conta) =>
              {
                let pos = this.listContas.indexOf(conta);//retorna indice do item do parametro
                this.listContas.splice(pos,1);//exclui o registro do indice e contando 1
                Toast.showShortBottom("Conta excluída com sucesso.").subscribe((toast) =>
                {
                  console.log(toast);
                });
              });
            }
          },
          {text: 'Não'}
      ]
    });
    this.nav.present(confirmDel);

  };
}
