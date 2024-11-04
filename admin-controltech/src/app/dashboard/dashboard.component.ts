import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Software } from '../ativos/ativos/model/software';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  dashboardData!: {
    totalAtivos: number;
    totalValor: number;
    totalLicencas: number;
    licencasExpirando: Software[];
  }; 

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    this.dashboardService.getDashboardData().subscribe(
      (data) => this.dashboardData = data,
      (error) => console.error('Erro ao carregar dados do dashboard', error)
    );
  }
}
