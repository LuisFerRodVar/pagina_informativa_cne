import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus, faMinus, IconDefinition  } from '@fortawesome/free-solid-svg-icons';

interface Schedule {
  id: number;
  Lugar: string;
  Apertura: string;
  Salida: string;
}
@Component({
  selector: 'app-home-schedule',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './home-schedule.component.html',
  styleUrl: './home-schedule.component.css'
})
export class HomeScheduleComponent {
  faPlus = faPlus;
  faMinus = faMinus;

  openScheId: number | null = null;

  toggleFaq(id: number) {
    this.openScheId = this.openScheId === id ? null : id;
  }

  schedules: Schedule[] = [
    { id: 1, Lugar: "Oficina Central", Apertura: "08:00", Salida: "17:00" },
    { id: 2, Lugar: "Planta de Producción", Apertura: "06:00", Salida: "15:00" },
    { id: 3, Lugar: "Centro de Distribución", Apertura: "07:00", Salida: "16:00" },
    { id: 4, Lugar: "Oficina Regional Norte", Apertura: "09:00", Salida: "18:00" },
    { id: 5, Lugar: "Sucursal Sur", Apertura: "10:00", Salida: "19:00" }
  ]
}