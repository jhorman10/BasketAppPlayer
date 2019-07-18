import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface EquipoModel {
  NombreEquipo: string;
  Ciudad: string;
  Genero: string;
  CantidadJugadores: string;
  Grupo: string;
  Torneo: string;
  id: string;
}

export interface TorneosModel {
  NombreTorneo: string;
  Ciudad: string;
  genero: string;
  fixture: string;
  puntosXperder: string;
  puntosXganar: string;
  puntosXw: string;
  id: string;
}

export interface PartidosModel {
  NombreTorneo: string;
  Grupo: string;
  Fecha: string;
  Ganador: string;
  Locacion: string;
  Max2Loser: string;
  Max2Winner: string;
  Max3Loser: string;
  Max3Winner: string;
  Observaciones: string;
  Perdedor: string;
  PuntosGanador: string;
  PuntosPerdedor: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  private torneosCollection: AngularFirestoreCollection<TorneosModel>;
  torneos: Observable<TorneosModel[]>;
  private TorneoDoc: AngularFirestoreDocument<TorneosModel>;
  

  private equiposCollection: AngularFirestoreCollection<EquipoModel>;
  equipos: Observable<EquipoModel[]>;
  private EquipoDoc: AngularFirestoreDocument<EquipoModel>;

  private partidosCollection: AngularFirestoreCollection<PartidosModel>;
  partidos: Observable<PartidosModel[]>;
  private PartidosDoc: AngularFirestoreDocument<PartidosModel>;

  constructor(private afs: AngularFirestore) {

  }

  listarTorneos() {
    this.torneosCollection = this.afs.collection<TorneosModel>('Torneo');
    this.torneos = this.torneosCollection.snapshotChanges()
      .pipe(map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as TorneosModel;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
      );
    console.log('lista torneos');
    return this.torneos;
  }

  listarEquipos() {
    this.equiposCollection = this.afs.collection<EquipoModel>('Equipo');
    this.equipos = this.equiposCollection.snapshotChanges()
      .pipe(map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as EquipoModel;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
      );
    console.log('lista Equipos');
    return this.equipos;
  }

  listarPartidos() {
    this.partidosCollection = this.afs.collection<PartidosModel>('Partidos');
    this.partidos = this.partidosCollection.snapshotChanges()
      .pipe(map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as PartidosModel;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
      );
    return this.partidos;
  }
}
