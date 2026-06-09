import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, User } from '@angular/fire/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  showLoader = false;

  constructor(private auth: Auth) {}

  async loginWithEmail(email: string, password: string): Promise<User> {
    this.showLoader = true;
    try {
      const cred = await signInWithEmailAndPassword(this.auth, email, password);
      return cred.user;
    } finally {
      this.showLoader = false;
    }
  }

  async getIdToken(): Promise<string> {
    const user = this.auth.currentUser;
    if (!user) throw new Error('User not logged in');
    return await user.getIdToken();
  }

  logout() {
    return this.auth.signOut();
  }
}
