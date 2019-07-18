import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})
export class EditarPerfilPage implements OnInit {

  UserEditInfo: FormGroup;

  constructor() {

    this.UserEditInfo = new FormGroup({
      'nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'correo': new FormControl('', [Validators.required, Validators.email]),
      'correo2': new FormControl('', [Validators.required, Validators.email]),
      'pw': new FormControl('', [Validators.required, Validators.minLength(8)]),
      'pw2': new FormControl('', [Validators.required, Validators.minLength(8)])
    });

    this.UserEditInfo.controls['correo2'].setValidators([
      Validators.required,
      this.EmailNotEquals.bind(this.UserEditInfo)
    ])

    this.UserEditInfo.controls['pw2'].setValidators([
      Validators.required,
      this.PwNotEquals.bind(this.UserEditInfo)
    ])

  }

  PwNotEquals(control: FormControl): { [s: string]: boolean } {

    let UserEditInfo: any = this;

    if (control.value !== UserEditInfo.controls['pw'].value) {
      return {
        PwNotEquals: true
      }
    }
    return null;
  }

  EmailNotEquals(control: FormControl): { [s: string]: boolean } {

    let UserEditInfo: any = this;

    if (control.value !== UserEditInfo.controls['correo'].value) {
      return {
        PwNotEquals: true
      }
    }
    return null;
  }

  UserEditInformation() {
    console.log(this.UserEditInfo.value);
    this.UserEditInfo.reset({
      nombre: "",
      correo: "",
      correo2: "",
      pw: "",
      pw2: ""
    });
  }

  ngOnInit() {
  }

  CambiarFoto() {

  }

}
