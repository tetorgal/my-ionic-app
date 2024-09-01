import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { AlertController } from '@ionic/angular';

interface Item {
  id?: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-crud-operations',
  templateUrl: './crud-operations.page.html',
  styleUrls: ['./crud-operations.page.scss'],
})
export class CrudOperationsPage implements OnInit {
  items: Item[] = [];
  newItem: Item = { name: '', description: '' };

  constructor(
    private crudService: CrudService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.loadItems();
  }

  loadItems(filter?: any) {
    this.crudService.getItems(filter).subscribe((data: any[]) => {
      this.items = data.map((e) => ({
        id: e.id,
        ...e
      }));
    });
  }

  addItem() {
    this.crudService.createItem(this.newItem).then(() => {
      this.newItem = { name: '', description: '' };
      this.loadItems();
    });
  }

  async updateItem(item: Item) {
    const alert = await this.alertController.create({
      header: 'Update Item',
      inputs: [
        {
          name: 'name',
          type: 'text',
          value: item.name,
          placeholder: 'Name'
        },
        {
          name: 'description',
          type: 'text',
          value: item.description,
          placeholder: 'Description'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Update',
          handler: (data) => {
            if (item.id) {
              this.crudService.updateItem(item.id, data).then(() => {
                this.loadItems();
              });
            }
          }
        }
      ]
    });

    await alert.present();
  }

  deleteItem(id: string) {
    this.crudService.deleteItem(id).then(() => {
      this.loadItems();
    });
  }
}