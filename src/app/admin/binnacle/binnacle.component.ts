import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { DirectoryService } from '../../services/directory.service';
import { BinnacleDto } from '../../models/binnacle';
import { BinnacleService } from '../../services/binnacle.service';


@Component({
  selector: 'app-binnacle',
  templateUrl: './binnacle.component.html',
  styleUrl: './binnacle.component.css',
})
export class BinnacleComponent implements OnInit {
  searchQuery = new FormControl('');
  date: Date;
  isAdd = false;
  current = new Date();
  directories: BinnacleDto[] = [];
  constructor(
    private _directoryService: DirectoryService,
    private _binnacleService: BinnacleService,
  ) {}
  ngOnInit(): void {
    this._directoryService.getAll().subscribe((res) => {
      res.sort((a, b) => {
        if (a.table < b.table) {
          return -1;
        }
        if (a.table > b.table) {
          return 1;
        }
        return 0;
      });

      this.directories = res.map((item) => ({ ...item, isAttendance: false }));
    });
  }
  addBinnacle() {
    this.isAdd = true;
  }
  search() {
 
  }
  async save() {
    this.directories.forEach(async (item) => {
      item.date = this.date;
      await this._binnacleService.create(item);
    });
    this.isAdd=false;
  }
}
