import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { observeNotification } from 'rxjs/internal/Notification';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'f-end';
  domanda1: any;
  domanda2: any;
  randomj = false;
  premuto = false; 
  avviato = false;
  contatore = 0;
  nuhuh = -1;

  domanda() {
    if (this.randomj == false) {
      fetch('http://127.0.0.1:3000/api/prova').then(response => response.json()).then(data=> {
        this.avviato = true;
        this.domanda1 = Object.keys(data)[0];
        this.domanda2 = data[this.domanda1];
        if (this.premuto == false){
          this.nuhuh = this.nuhuh + 1
        }
        this.premuto = false;
      })
    }
    else {
      fetch('http://127.0.0.1:3000/api/provarnd').then(response => response.json()).then(data=> {
        this.avviato = true;
        this.domanda1 = Object.keys(data)[0];
        this.domanda2 = data[this.domanda1];
        if (this.premuto == false){
          this.nuhuh = this.nuhuh + 1
        }
        this.premuto = false;
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

  premutotoggle(){
    if (this.premuto == false) {
      this.premuto = true;
      if (this.avviato == true) {
        this.contatore = this.contatore + 1;
      }
      
    }
    else {
      this.premuto = false;
    }
  }
}
