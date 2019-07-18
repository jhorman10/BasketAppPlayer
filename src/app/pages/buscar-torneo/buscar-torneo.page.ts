import { Component, OnInit } from '@angular/core';
import { ConsultasService } from 'src/app/services/consultas.service';


@Component({
  selector: 'app-buscar-torneo',
  templateUrl: './buscar-torneo.page.html',
  styleUrls: ['./buscar-torneo.page.scss'],
})
export class BuscarTorneoPage implements OnInit {

  constructor(private TorneoSer: ConsultasService) { }

  torneos: any 

  ngOnInit() {
     this.TorneoSer.listarTorneos()
      .subscribe(item => {
        this.torneos = item;
      });
  }

}
