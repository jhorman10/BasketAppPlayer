import { Component, OnInit } from '@angular/core';
import { ConsultasService } from 'src/app/services/consultas.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.page.html',
  styleUrls: ['./resultados.page.scss'],
})
export class ResultadosPage implements OnInit {

  constructor(private PartidosSer: ConsultasService) { }

  partidos: any;

  ngOnInit() {

    this.PartidosSer.listarPartidos()
      .subscribe(item => {
        this.partidos = item;
      });

  }

}
