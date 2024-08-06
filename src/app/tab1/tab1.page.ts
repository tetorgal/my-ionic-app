import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductosService } from '../services/productos.service';
import { ModalEditComponent } from '../tabs/modal-edit/modal-edit.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  productList: any[] = [];
  isLoading: boolean = false;
  error: string | null = null;

  constructor(
    private productService: ProductosService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit(): void {
    console.log("ngOnInit");
  }

  ionViewWillEnter() {
    this.getProducts();
  }

  async getProducts() {
    this.isLoading = true;
    this.error = null;
    try {
      this.productService.getProducts().subscribe(
        items => {
          this.productList = items;
          console.log(this.productList);
          this.isLoading = false;
        },
        error => {
          console.error('Error fetching products:', error);
          this.error = 'No se pudieron cargar los productos. Por favor, inténtelo de nuevo.';
          this.isLoading = false;
        }
      );
    } catch (error) {
      console.error('Unexpected error:', error);
      this.error = 'Ocurrió un error inesperado. Por favor, inténtelo de nuevo.';
      this.isLoading = false;
    }
  }

  async edit(item: any) {
    const modal = await this.modalCtrl.create({
      component: ModalEditComponent,
      componentProps: {
        item
      }
    });
    await modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm' && data) {
      console.log('Editing:', data);
      this.productService.editProduct(data).subscribe(
        (updatedProduct) => {
          console.log('Product updated:', updatedProduct);
          // Aquí puedes actualizar la lista de productos si es necesario
          this.getProducts(); // Opcional, recargar productos
        },
        (error) => {
          console.error('Error updating product:', error);
        }
      );
    }
  }

  delete(item: any) {
    console.log(item);
  }
}
