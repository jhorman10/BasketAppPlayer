import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario = {
    email: '',
    pw: '',
    email2: '',
    pw2: '',
    nombre: '',
    cedula:''
  };

  constructor(private auth: AuthService,
    private router: Router) { }

  ngOnInit() {

  }

  userRegister(form: NgForm) {

    if (form.invalid) { return; }

  }
}
