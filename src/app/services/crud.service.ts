import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private firestore: AngularFirestore) { }

  createItem(item: any): Promise<any> {
    return this.firestore.collection('items').add(item)
  }
  getItems(item: any): Observable<any> {
    return this.firestore.collection('items').snapshotChanges()
  }

  updateItem(id: string, item: any): Promise<void> {
    return this.firestore.doc('items/' + id).update(item)
  }
  deleteItem(id: string): Promise<void> {
    return this.firestore.doc('items/' + id).delete()
  }

}
