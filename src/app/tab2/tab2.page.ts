import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  photos: string[] = [];

  constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.loadStoredPhotos();
  }

  loadStoredPhotos() {
    this.photoService.getStoredPhotos().subscribe(
      (urls) => {
        this.photos = urls;
      },
      (error) => {
        console.error('Error fetching stored photos:', error);
      }
    );
  }

  async takePhoto() {
    try {
      const photoDataUrl = await this.photoService.addPhoto();
      if (photoDataUrl) {
        this.photoService.uploadPhoto(photoDataUrl).subscribe(
          downloadURL => {
            console.log('Foto cargada exitosamente. Download URL:', downloadURL);
            this.loadStoredPhotos(); // Reload photos after successful upload
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