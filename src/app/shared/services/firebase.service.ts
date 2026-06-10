import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { inject } from '@angular/core';

/**
 * Firebase is now initialised via provideFirebaseApp() and provideAuth()
 * in app.config.ts. This service is kept as a convenience wrapper
 * if you need direct access to Auth or Firestore instances.
 */
@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  readonly auth = inject(Auth);
  readonly firestore = inject(Firestore);
}
