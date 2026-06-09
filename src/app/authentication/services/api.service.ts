import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';


@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  verifyToken(idToken: string) {
    return this.http.post(
      `${environment.apiUrl}/auth/verify-token`,
      { idToken }
    );
  }
}
