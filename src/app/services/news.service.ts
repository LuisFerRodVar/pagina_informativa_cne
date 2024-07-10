import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface New {
  id?: string;
  title: string;
  date: string;
  description: string;
  link: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private collectionName = 'news';

  constructor(private firestore: AngularFirestore) {}

  getNews(): Observable<New[]> {
    return this.firestore.collection<New>(this.collectionName).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as New;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  addNews(news: New) {
    return this.firestore.collection(this.collectionName).add(news);
  }

  updateNews(id: string, news: Partial<New>) {
    return this.firestore.collection(this.collectionName).doc(id).update(news);
  }

  deleteNews(id: string) {
    return this.firestore.collection(this.collectionName).doc(id).delete();
  }
}
