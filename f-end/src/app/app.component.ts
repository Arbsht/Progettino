import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { observeNotification } from 'rxjs/internal/Notification';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'f-end';
  domanda1: any;
  domanda2: any;
  randomj = false;

  domanda() {
    if (this.randomj == false) {
      fetch('http://127.0.0.1:3000/api/prova').then(response => response.json()).then(data=> {
        this.domanda1 = Object.keys(data)[0];
        this.domanda2 = data[this.domanda1];
      })
    }
    else {
      fetch('http://127.0.0.1:3000/api/provarnd').then(response => response.json()).then(data=> {
        this.domanda1 = Object.keys(data)[0];
        this.domanda2 = data[this.domanda1];
      })
    }
    
  }

  randomtoggle(){
    if (this.randomj == false) {
      this.randomj = true;
    }
    else {
      this.randomj = false;
    }
  }
}
