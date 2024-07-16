import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';

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
  private collectionName = 'committees';

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

  updateCommittees(customId: number, news: Partial<Committee>): Observable<void> {
    return this.firestore.collection(this.collectionName, ref => ref.where("id", "==", customId)).snapshotChanges().pipe(
      take(1),
      switchMap(actions => {
        if (actions.length === 0) {
          throw new Error(`No committee found with id: ${customId}`);
        }
        const docId = actions[0].payload.doc.id;
        return this.firestore.collection(this.collectionName).doc(docId).update(news);
      })
    );
  }

  deleteCommittees(customId: number): Observable<void> {
    return this.firestore.collection(this.collectionName, ref => ref.where("id", "==", customId)).snapshotChanges().pipe(
      take(1),
      switchMap(actions => {
        if (actions.length === 0) {
          throw new Error(`No committee found with id: ${customId}`);
        }
        const docId = actions[0].payload.doc.id;
        return this.firestore.collection(this.collectionName).doc(docId).delete();
      })
    );
  }
}

