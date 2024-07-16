import { Component, OnInit } from '@angular/core';
import { BinnacleDto } from '../../models/binnacle';
import { BinnacleService } from '../../services/binnacle.service';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
const EXCEL_TYPE =
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
@Component({
  selector: 'app-binnacles',
  templateUrl: './binnacles.component.html',
  styleUrl: './binnacles.component.css',
})
export class BinnaclesComponent implements OnInit {
  binnacles: BinnacleDto[] = [];
  constructor(private _binnacleService: BinnacleService) {}
  ngOnInit(): void {
    this._binnacleService.getAll().subscribe((res) => {
      res.sort((a, b) => {
        if (new Date(a.date).getTime() < new Date(b.date).getTime()) {
          return -1;
        }
        if (new Date(a.date).getTime() > new Date(b.date).getTime()) {
          return 1;
        }
        return 0;
      });

      this.binnacles = res;
    });
  }
  exportAsExcelFile(excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(
      this.binnacles.map((item) => ({
        nombre: item.name,
        Puesto: item.job,
        Institucion: item.institution,
        Email: item.mail,
        fecha: item.date,
        Asistio: Number(item.isAttendance),
      }))
    );
    const workbook: XLSX.WorkBook = {
      Sheets: { data: worksheet },
      SheetNames: ['data'],
    };
    const excelBuffer: any = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    FileSaver.saveAs(data, fileName + new Date().getTime() + EXCEL_EXTENSION);
  }
}
