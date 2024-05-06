import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-cce-map',
  standalone: true,
  imports: [],
  templateUrl: './cce-map.component.html',
  styleUrl: './cce-map.component.css'
})
export class CceMapComponent {
  constructor(private sanitizer: DomSanitizer) {}

  currentPlace = 0;
  places = [{
    id: 0,
    name: "Bambel",
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
}
