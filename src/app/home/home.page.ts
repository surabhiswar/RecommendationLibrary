import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private  router:  Router) {}
  text="This library is mood based recommendation Library";
  onChangeText(){
    this.text="Changed";
  }
   redirectList(){
      this.router.navigate(['list'])
   }
}
