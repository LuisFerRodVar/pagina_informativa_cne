import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentReference,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { BinnacleDto } from '../models/binnacle';

@Injectable({
  providedIn: 'root',
})
export class BinnacleService {
  private dbPath = '/binnacle';
  ref: AngularFirestoreCollection<BinnacleDto>;
  constructor(private db: AngularFirestore) {
    this.ref = db.collection(this.dbPath);
  }

  getAll(): Observable<BinnacleDto[]> {
    return this.db
      .collection<BinnacleDto>(this.dbPath, (ref) =>
        ref.where('isActivate', '==', 1)
      )
      .valueChanges();
  }

  async create(data: BinnacleDto): Promise<DocumentReference<BinnacleDto>> {
    data.Id = this.db.createId();
    data.isActivate = 1;
    return this.ref.add({ ...data });
  }
}
