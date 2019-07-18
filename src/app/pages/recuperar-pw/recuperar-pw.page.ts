import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-recuperar-pw',
  templateUrl: './recuperar-pw.page.html',
  styleUrls: ['./recuperar-pw.page.scss'],
})
export class RecuperarPwPage implements OnInit {

  usuario = {
    email: '',
    email2: '',
    nombre: '',
    cedula: ''
  };

  constructor(private router: Router, 
              private alCtrl: AlertController, 
              private auth: AuthService) { }

  ngOnInit() {
  }

  userForgot(form: NgForm) {

    if (form.invalid) {
      return;
    }

    this.router.navigateByUrl('/login');
  }
}
