import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  photos: any[] = []

  constructor(private photoService: PhotoService) {
    this.photos = this.photoService.photos
  }

  async takePhoto() {
    try {
      const photoDataUrl = await this.photoService.addPhoto();
      if (photoDataUrl) {
        this.photoService.uploadPhoto(photoDataUrl).subscribe(
          downloadURL => {
            console.log('Foto cargada exitosamente. Download URL:', downloadURL);
          },
          error => {
            console.error('Error al cargar la foto:', error);
          }
        );
      }
    } catch (error) {
      console.error('Error al tomar la foto:', error);
    }
  }
}