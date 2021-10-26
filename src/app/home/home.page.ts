import { Component } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Plugins } from '@capacitor/core';
import 'contacts-plugin';
const {ContactsPlugin} = Plugins 
const {message} = Plugins
import 'message'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  contacts = [];

  constructor(private sqlite: SQLite) {}

  async btnclick(){

    // this.contacts = (await message.getMessage('hi')).results;
    // alert('data.. '+ JSON.stringify(this.contacts));


    this.contacts = (await ContactsPlugin.getContacts('hi')).results;
    alert('my contacts .. '+ JSON.stringify(this.contacts));
    //alert('welcome..')

  //   this.sqlite.create({
  //     name: 'data.db',
  //     location: 'default'
  //   })
  //     .then((db: SQLiteObject) => {
    
    
  //       db.executeSql('create table danceMoves(name VARCHAR(32))', [])
  //         .then(() => alert('Executed SQL'))
  //         .catch(e => console.log(e));
    
    
  //     })
  //     .catch(e => console.log(e));
   }


   btnHotCodePush(){
      alert();
   }
}
