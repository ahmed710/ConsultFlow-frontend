import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  private apiUrl =
  `${environment.apiUrl}/candidates`;

  constructor(private http: HttpClient) {}

  getCandidate(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getAllCandidates(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
