import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'buscar-equipo', loadChildren: './pages/buscar-equipo/buscar-equipo.module#BuscarEquipoPageModule' },
  { path: 'buscar-torneo', loadChildren: './pages/buscar-torneo/buscar-torneo.module#BuscarTorneoPageModule' },
  { path: 'ver-fixture', loadChildren: './pages/ver-fixture/ver-fixture.module#VerFixturePageModule' },
  { path: 'perfil', loadChildren: './pages/perfil/perfil.module#PerfilPageModule' },
  { path: 'editar-perfil', loadChildren: './pages/editar-perfil/editar-perfil.module#EditarPerfilPageModule' },
  { path: 'registro', loadChildren: './pages/registro/registro.module#RegistroPageModule' },
  { path: 'recuperar-pw', loadChildren: './pages/recuperar-pw/recuperar-pw.module#RecuperarPwPageModule' },
  { path: 'patrocinadores', loadChildren: './pages/patrocinadores/patrocinadores.module#PatrocinadoresPageModule' },
  { path: 'resultados', loadChildren: './pages/resultados/resultados.module#ResultadosPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
