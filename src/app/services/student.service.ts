import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Student {
  nombre: string;
  apellido: string;
  matricula: string;
  correoElectronico: string;
  telefono: string;
  carrera: string;
  fechaCreacion: string
  estatus: boolean
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://localhost:5000/api/student';

  constructor(private http: HttpClient) { }


  createStudent(student: Student): Observable<any> {
    student.fechaCreacion = new Date().toISOString(); 
    student.estatus = true; 
    return this.http.post(this.apiUrl, student);
   
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }

 
}