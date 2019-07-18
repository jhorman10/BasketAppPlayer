import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario ={
    email:'',
    pw:''
  }

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() {

  }

  login(form: NgForm) {

    if (form.invalid) { return; }

    this.auth.login(this.usuario.email, this.usuario.pw)
      .then(res => {
        this.router.navigateByUrl('/home')
      })
      .catch(err => console.log('Los datos son incorrectos' + err));
  }

}
