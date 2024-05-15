import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-cce-map',
  standalone: true,
  imports: [],
  templateUrl: './cce-map.component.html',
  styleUrl: './cce-map.component.css'
})
export class CceMapComponent {
  constructor(private sanitizer: DomSanitizer) {}
  carousel = 0;
  currentPlace = 0;
  places = [{
    id: 0,
    name: "Bambel 2",
    committee: [{
        job: "Coordinación",
        name: "Gilbeth González Ortiz",
        email: "gilberth50g@gmail.com"
    },
    {
        "job": "Sub-coordinación",
        "name": "Bolivar Antonio Bolaños Soto",
        "email": "bolivarbolanos@gmail.com"
    },
    {
        "job": "SecretarÍa",
        "name": "Emilia Ferreto Alvarez",
        "email": "emiliaferreto55@gmail.com"
    },
    {
        "job": "Vocalía",
        "name": "Ronald Carranza calderón",
        "email": "ronald-765@hotmail.com"
    },
    {
        "job": "Fiscalía",
        "name": "Olidiar Martínez Angulo",
        "email": "olidiermartinez966@gmail.com"
    }],
    workTeam: [{
        "job": "Educación y Divulgación",
        "name": "Maritza Fallas Granados",
        "email": "maritzafallas35@gmail.com"
    },
    {
        "job": "Gestión de Información",
        "name": "Marina Barrantes Chacón",
        "email": "maribarrantes57@gmail.com"
    },
    {
        "job": "Salud",
        "name": "Victoria García Ortiz",
        "email": "victoriagar@gmail.com"
    },
    {
        "job": "Seguridad",
        "name": "Flor María Flores Prado",
        "email": "florfloresprado@hotmail.com florfloresprado@mep.go.cr"
    },
    {
        "job": "Albergues",
        "name": "Zeidy Maria Cruz Cascante",
        "email": "zeidymari27@gmail.com"
    },
    {
        "job": "Telecomunicaciones",
        "name": "Roberto Gerardo Vargas Cartín",
        "email": ""
    },
    {
        "job": "Telecomunicaciones",
        "name": "Luz Miriam Quirós Loría",
        "email": ""
    },
    {
        "job": "Evaluación del Riesgo y Análisis de Necesidades.",
        "name": "Kaattia Villalobos Valdez",
        "email": "kattia.villalobos.valdez@mep.go.cr"
    },
    {
        "job": "Bodegas",
        "name": "Karolay Rivas Fallas",
        "email": "faviannyrivas2198rf@gmail.com"
    },
    {
        "job": "Manejo de Suministros.",
        "name": "Tannia Gonzalez Mora",
        "email": "tanniagonzalez009@gmail.com"
    }],
    ubication: this.sanitizer.bypassSecurityTrustHtml('<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d26928.742697847516!2d-83.06891601747567!3d8.642365959841923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbambel%20golfito!5e0!3m2!1ses-419!2scr!4v1715013992189!5m2!1ses-419!2scr" style="height:100%;width:100%;border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>')
  },
  {
    id: 1,
    name: "Conte",
    ubication: this.sanitizer.bypassSecurityTrustHtml('<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d26928.742697847516!2d-83.06891601747567!3d8.642365959841923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbambel%20golfito!5e0!3m2!1ses-419!2scr!4v1715012929233!5m2!1ses-419!2scr" style= "height:100%;width:100%;border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>')
  },
  {
    id: 2,
    name: "La Mona",
    ubication: this.sanitizer.bypassSecurityTrustHtml('<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d26928.742697847516!2d-83.06891601747567!3d8.642365959841923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbambel%20golfito!5e0!3m2!1ses-419!2scr!4v1715012929233!5m2!1ses-419!2scr" style= "height:100%;width:100%;border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>')
  },
  {
    id: 3,
    name: "Golfito",
    ubication: this.sanitizer.bypassSecurityTrustHtml('<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d26928.742697847516!2d-83.06891601747567!3d8.642365959841923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbambel%20golfito!5e0!3m2!1ses-419!2scr!4v1715012929233!5m2!1ses-419!2scr" style= "height:100%;width:100%;border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>')
  },
  {
    id: 4,
    name: "Guadalupe",
    ubication: this.sanitizer.bypassSecurityTrustHtml('<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d26928.742697847516!2d-83.06891601747567!3d8.642365959841923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbambel%20golfito!5e0!3m2!1ses-419!2scr!4v1715012929233!5m2!1ses-419!2scr" style= "height:100%;width:100%;border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>')
  }]
  setCurrentPlace(newPlace:number){
    this.currentPlace = newPlace;
  }
  navigateCarousel(nav:number){
    this.carousel += nav;
  }
}
