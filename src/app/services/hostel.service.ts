import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Hostel {
  id?: string;
  name: string;
  ubication: string;
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

  updateHostels(id: string, news: Partial<Hostel>) {
    return this.firestore.collection(this.collectionName).doc(id).update(news);
  }

  deleteHostels(id: string) {
    return this.firestore.collection(this.collectionName).doc(id).delete();
  }
}

