import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface User {
  id?: string;
  name: string;
  email: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private collectionName = 'users';

  constructor(private firestore: AngularFirestore) {}

  getUsers(): Observable<User[]> {
    return this.firestore.collection<User>(this.collectionName).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  addUser(user: User) {
    return this.firestore.collection(this.collectionName).add(user);
  }

  updateUser(id: string, user: Partial<User>) {
    return this.firestore.collection(this.collectionName).doc(id).update(user);
  }

  deleteUser(id: string) {
    return this.firestore.collection(this.collectionName).doc(id).delete();
  }
}
