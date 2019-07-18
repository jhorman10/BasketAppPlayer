import { Component, OnInit } from '@angular/core';
import { ConsultasService } from 'src/app/services/consultas.service';

@Component({
  selector: 'app-buscar-equipo',
  templateUrl: './buscar-equipo.page.html',
  styleUrls: ['./buscar-equipo.page.scss'],
})
export class BuscarEquipoPage implements OnInit {

  constructor(private EquipoSer: ConsultasService) { }

  equipos: any;

  ngOnInit() {
    this.EquipoSer.listarEquipos()
      .subscribe(item => {
        this.equipos = item;
      });
  }

}
