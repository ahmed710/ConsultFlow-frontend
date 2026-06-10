import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signOut,
  User,
} from '@angular/fire/auth';
import { Firestore, doc, setDoc, deleteDoc } from '@angular/fire/firestore';

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authState: any = null;
  public showLoader: boolean = false;

  private auth = inject(Auth);
  private firestore = inject(Firestore);
  private router = inject(Router);

  get isUserAnonymousLoggedIn(): boolean {
    return this.authState !== null ? this.authState.isAnonymous : false;
  }

  get currentUserId(): string {
    return this.authState !== null ? this.authState.uid : '';
  }

  get currentUserName(): string {
    return this.authState?.email ?? '';
  }

  get currentUser(): any {
    return this.authState !== null ? this.authState : null;
  }

  get isUserEmailLoggedIn(): boolean {
    return this.authState !== null && !this.isUserAnonymousLoggedIn;
  }

  registerWithEmail(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCred) => {
        this.authState = userCred.user;
      })
      .catch((_error: any) => {
        console.log(_error);
        throw _error;
      });
  }

  loginWithEmail(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then((userCred) => {
        this.authState = userCred.user;
      })
      .catch((_error: any) => {
        console.log(_error);
        throw _error;
      });
  }

  singout(): void {
    signOut(this.auth);
    this.router.navigate(['/auth/login']);
  }

  SignUp(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then((result) => {
        this.SendVerificationMail();
        this.SetUserData(result.user);
      })
      .catch((error: any) => {
        window.alert(error.message);
      });
  }

  SendVerificationMail() {
    const user = this.auth.currentUser;
    if (!user) return Promise.reject('No user logged in');
    return sendEmailVerification(user).then(() => {
      this.router.navigate(['/dashboards/projects/dashboard']);
    });
  }

  SetUserData(user: User) {
    const userRef = doc(this.firestore, `users/${user.uid}`);
    const userData: UserProfile = {
      email: user.email ?? '',
      displayName: user.displayName ?? '',
      uid: user.uid,
      photoURL: user.photoURL || 'src/favicon.ico',
      emailVerified: user.emailVerified,
    };
    deleteDoc(userRef).catch(() => {});
    return setDoc(userRef, userData, { merge: true });
  }

  SignIn(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then((result) => {
        if (!result.user.emailVerified) {
          this.SetUserData(result.user);
          this.SendVerificationMail();
          this.showLoader = true;
        } else {
          this.showLoader = false;
          this.router.navigate(['/auth/login']);
        }
      })
      .catch((error: any) => {
        throw error;
      });
  }

  ForgotPassword(passwordResetEmail: string) {
    return sendPasswordResetEmail(this.auth, passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error: any) => {
        window.alert(error);
      });
  }
}
