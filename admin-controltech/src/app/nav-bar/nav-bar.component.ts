import { Component } from '@angular/core';
import { NavBarServiceService } from './nav-bar-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  isNavOpen: boolean = false; // Definindo a propriedade isNavOpen

  constructor(private navBarService: NavBarServiceService) {}
  toggleNav() {
    this.isNavOpen = !this.isNavOpen; // Alterando o valor da propriedade ao clicar no botão
    this.navBarService.toggleNav(); // Chamando o método toggleNav do serviço
  }
}
