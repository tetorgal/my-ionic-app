import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';

interface Student {
  nombre: string;
  apellido: string;
  matricula: string;
  correoElectronico: string;
  telefono: string;
  carrera: string;
  fechaCreacion: string; 
  estatus: boolean;
}
@Component({
  selector: 'app-galarza-carreno-tabla',
  templateUrl: './galarza-carreno-tabla.page.html',
  styleUrls: ['./galarza-carreno-tabla.page.scss'],
})
export class GalarzaCarrenoTablaPage implements OnInit {
  students: Student[] = []

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.loadStudents()
  }


  loadStudents(): void {
    this.studentService.getStudents().subscribe(
      (data: Student[]) => {
        console.log('Fetched students:', data); 
        this.students = data;
      },
      (error: any) => {
        console.error('Error fetching students', error);
      }
    );
  }
}