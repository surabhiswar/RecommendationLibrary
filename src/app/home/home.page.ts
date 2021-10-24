import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  text="This library is mood based recommendation Library";
  onChangeText(){
      this.text="Changed";
   }
}
