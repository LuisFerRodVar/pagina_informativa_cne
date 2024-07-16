import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Committee {
  id: number;
  nombre: string;
  canton: string;
  distrito: string;
  comunidad: string;
  responsable: string;
  contacto: string;
}

@Injectable({
  providedIn: 'root'
})
export class CommitteesService {
  private collectionName = 'comitees';

  constructor(private firestore: AngularFirestore) { }

  getCommittees(): Observable<Committee[]> {
    return this.firestore.collection<Committee>(this.collectionName).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Committee;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  addCommittees(news: Committee) {
    return this.firestore.collection(this.collectionName).add(news);
  }

  updateCommittees(id: string, news: Partial<Committee>) {
    return this.firestore.collection(this.collectionName).doc(id).update(news);
  }

  deleteCommittees(id: string) {
    return this.firestore.collection(this.collectionName).doc(id).delete();
  }
}
