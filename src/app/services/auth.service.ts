import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  login(email: string, pw: string) {

    return new Promise((res, rej) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, pw)
        .then(user => {
          res(user);
        })
        .catch(err => rej('Error: ' + err));
    });
  }

  register(email: string, pw: string) {
   return new Promise((res, rej) => {
     this.afAuth.auth.createUserWithEmailAndPassword(email, pw)
       .then( user => {
         res(user);
       })
       .catch( err => rej('Error: ' + err));
   });
 } 
 
}
