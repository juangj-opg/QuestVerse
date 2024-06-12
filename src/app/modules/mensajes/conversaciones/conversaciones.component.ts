import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conversaciones',
  templateUrl: './conversaciones.component.html',
  styleUrl: './conversaciones.component.css',
})
export class ConversacionesComponent {
  constructor(private router: Router) {}

  chatGrupal() {
    console.log('test');
    this.router.navigateByUrl('mensajes/grupal')
  }
}
