
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';

interface Hostel {
  id: number;
  nombre: string;
  canton: string;
  distrito: string;
  comunidad: string;
  responsable: string;
  capacidad: number;
  contacto: string;
}

@Injectable({
  providedIn: 'root'
})
export class HostelsService {
  private collectionName = 'hostels';

  constructor(private firestore: AngularFirestore) { }

  getHostels(): Observable<Hostel[]> {
    return this.firestore.collection<Hostel>(this.collectionName).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Hostel;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  addHostels(news: Hostel) {
    return this.firestore.collection(this.collectionName).add(news);
  }

  updateHostels(customId: number, news: Partial<Hostel>): Observable<void> {
    return this.firestore.collection(this.collectionName, ref => ref.where("id", "==", customId)).snapshotChanges().pipe(
      take(1),
      switchMap(actions => {
        if (actions.length === 0) {
          throw new Error(`No hostel found with id: ${customId}`);
        }
        const docId = actions[0].payload.doc.id;
        return this.firestore.collection(this.collectionName).doc(docId).update(news);
      })
    );
  }

  deleteHostels(customId: number): Observable<void> {
    return this.firestore.collection(this.collectionName, ref => ref.where("id", "==", customId)).snapshotChanges().pipe(
      take(1),
      switchMap(actions => {
        if (actions.length === 0) {
          throw new Error(`No hostel found with id: ${customId}`);
        }
        const docId = actions[0].payload.doc.id;
        return this.firestore.collection(this.collectionName).doc(docId).delete();
      })
    );
  }
}

