import {Storage, SqlStorage} from 'ionic-angular';
//classe Storage responsável por acessar o plugin do sqlite (cordova) permite gravar tanto no B.D tanto no logal
//SqlStorage permite utilizar o B.D

export class DAOcontas{
  constructor(){
    let storage = new Storage(SqlStorage);
//      this.list = [];
  //metodo utilizado para interagir com o BD, CRUD
    storage.query("CREATE TABLE IF NOT EXISTS contas(id INTEGER PRIMARY KEY AUTOINCREMENT, descricao TEXT)").then((data) => {
      console.log("tabela criada");
    },(error) => {
      console.log("Erro na criação da tabela "+JSON.stringify(error.err));
    });
  }
  getList(sucessCallBack){
    /*this.list =
    [
      {descricao:"Alimentação"},
      {descricao:"Lazer"},
      {descricao:"Transporte"}
    ];
    return this.list;
    */
      console.log("Passou get antes SELECT");
      let storage = new Storage(SqlStorage);
      storage.query("SELECT * FROM contas").then((data) => {
        let lista = [];

        for (var i = 0; i < data.res.rows.length; i++)
        {
          let item = {}; //objeto da lista que iremos retornar
          item.id = data.res.rows.item(i).id;
          item.descricao = data.res.rows.item(i).descricao;
          lista.push(item);//adiciona o obj item ao array de objetos lista
        }
        sucessCallBack(lista);//retorna a lista caso haja sucesso na execução da query
        console.log("Buscou");
      }, (error) => {
        console.log("Erro na busca do registro "+JSON.stringify(error.err));
      });
  }
  insert(conta, sucessCallBack){
//    this.list.push(conta);
    let storage = new Storage(SqlStorage);

    storage.query("INSERT INTO contas(descricao) VALUES (?)",[conta.descricao]).then((data) => {
      conta.id = data.res.insertId;
      sucessCallBack(conta);
      /*acesso ao BD é sempre assincrono então sempre é ncessario a utilização do callback*/
      console.log("Gravou");
      /*data = objeto de retorno em caso de sucesso
      res = resposta
      insertid = retorna o id criado autoincrement da tabela contas*/
    }, (error) => {
      /*error = objeto retornado em caso de erro na query executada*/
      console.log("Erro na inclusão do registro "+JSON.stringify(error.err));
    });
  }
  edit(conta, sucessCallBack){
    let storage = new Storage(SqlStorage);
    storage.query("UPDATE contas SET descricao = ? WHERE ID = ?",[conta.descricao,conta.id]).then((data) => {
      console.log("Alterou");
      sucessCallBack(conta);
    },(error) => {
      console.log("Erro na alteração do registro "+JSON.stringify(error.err));
    });
  }
  delete(conta, sucessCallBack){
    let storage = new Storage(SqlStorage);
    storage.query("DELETE FROM contas WHERE ID = ?",[conta.id]).then((data) =>{
      console.log("Exclusão!");
      sucessCallBack(conta);
    },(error) =>{
      console.log("Erro na exclusão do registro "+JSON.stringify(error.err));
    });
//    let pos = this.list.indexOf(conta);//retorna indice do item do parametro
//    this.list.splice(pos,1);//exclui o registro do indice e contando 1
  }
}
