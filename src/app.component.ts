import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `<h1>Hello {{name}}</h1><button md-raised-button>RAISED</button>`,
})
export class AppComponent  {
    name = 'World!';
}
