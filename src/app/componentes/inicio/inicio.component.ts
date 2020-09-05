import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
    active = 1;
    imagenes = ['assets/1.png', 'assets/2.png', 'assets/3.png'];
  constructor() { }

  ngOnInit(): void {
   
}
  }

