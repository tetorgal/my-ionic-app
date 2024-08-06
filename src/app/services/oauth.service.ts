import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class OauthService {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  async login(email: string, password: string) {
    try {
      const userCredential = await this.afAuth.signInWithEmailAndPassword(email, password);
      const user = userCredential.user;
      if (user) {
        console.log("Login exitoso:");
        console.log("Email:", user.email);
        console.log("UID:", user.uid);
      }
      // this.router.navigate(['/']);
    } catch (error) {
      console.error("Error en el login:", error);
      alert("Error en el login. Por favor, intenta de nuevo.");
    }
  }

  async logout() {
    await this.afAuth.signOut();
    this.router.navigate(['/']);
  }
}
