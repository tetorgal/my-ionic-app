import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';



@Component({
  selector: 'app-galarza-carreno-form',
  templateUrl: './galarza-carreno-form.page.html',
  styleUrls: ['./galarza-carreno-form.page.scss'],
})
export class GalarzaCarrenoFormPage implements OnInit {
  studentForm!: FormGroup
  constructor(private studentService: StudentService, private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(): void {
    this.studentForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      matricula: ['', Validators.required],
      correoElectronico: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      carrera: ['', Validators.required]
      
    });
  }

  onSubmit(): void {
    if (this.studentForm.valid) {
      this.studentService.createStudent(this.studentForm.value).subscribe(
        response => {
          console.log('Estudiante creado!!!!', response)
          this.studentForm.reset()
        },
        error => {
          console.error('Error creando el estudiante, mira: ', error)
        }
      )
    }
  }
}
