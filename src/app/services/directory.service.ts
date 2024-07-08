import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentReference,
} from '@angular/fire/compat/firestore';
import { DirectoryDto } from '../models/directory';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DirectoryService {
  private dbPath = '/directory';
  ref: AngularFirestoreCollection<DirectoryDto>;
  constructor(private db: AngularFirestore) {
    this.ref = db.collection(this.dbPath);
  }

  getAll(): Observable<DirectoryDto[]> {
    return this.ref.valueChanges();
  }

  async create(data: DirectoryDto): Promise<DocumentReference<DirectoryDto>> {
    data.Id = this.db.createId();
    data.isActivate=1;
    return this.ref.add({ ...data });
  }

  update(id: string, data: any): Promise<void> {
    return this.ref.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.ref.doc(id).delete();
  }
}
