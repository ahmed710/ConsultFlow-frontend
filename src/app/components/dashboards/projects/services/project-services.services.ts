import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';

export interface CreateProjectRequest {
  id?: string;
  name: string;
  clientId: string;
  idManager: string;
  description: string;
  startDate: string;
  endDate: string;
  status: string;
  priority: number;
  riskLevel: number;
  budget: number;
  assignedTo: string[];
  tags: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {


  constructor(private http: HttpClient) {}

  createProject(payload: CreateProjectRequest): Observable<any> {
    return this.http.post(`${environment.apiUrl}/projects`, payload);
  }

  getProjects(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiUrl}/projects`);
  }

  getProjectById(id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/projects/${id}`);
  }
}
