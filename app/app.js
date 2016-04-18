//import 'es6-shim';
import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {ContasPage} from './pages/contas/contas';
import {AvaliaPage} from './pages/avalia/avalia';
//import {LancamentosPage} from '../pages/lancamentos/lancamentos';

@App({
  templateUrl: 'build/app.html',  //chama arquivo com menu e homepage
//template: '<ion-nav [root]="rootPage"></ion-nav>',//chama arquivo com menu e homepage
  config: {mode: "md"} // http://ionicframework.com/docs/v2/api/config/Config/

})
export class MyApp {
  static get parameters() {
    return [[Platform]];
  }

  constructor(platform) {
    this.home = HomePage;
    this.contas = ContasPage;
    this.avalia = AvaliaPage;
    //this.lancamentos = LancamentosPage;

    this.rootPage = this.home;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.backgroundColorByHexString("#016361");
      //StatusBar.backgroundColorByName(valedarkgreen);
      //StatusBar.styleDefault();
    });
  };
  openPage(opcao){
    this.rootPage = opcao;
  };
}
