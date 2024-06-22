import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-cce-map',
  standalone: true,
  imports: [],
  templateUrl: './cce-map.component.html',
  styleUrl: './cce-map.component.css',
})
export class CceMapComponent {
  constructor(private sanitizer: DomSanitizer) {}
  carousel = 0;
  currentPlace = 0;
  places = [
    {
      id: 0,
      name: 'Bambel 2',
      committee: [
        {
          job: 'Coordinación',
          name: 'Gilbeth González Ortiz',
          email: 'gilberth50g@gmail.com',
        },
        {
          job: 'Sub-coordinación',
          name: 'Bolivar Antonio Bolaños Soto',
          email: 'bolivarbolanos@gmail.com',
        },
        {
          job: 'SecretarÍa',
          name: 'Emilia Ferreto Alvarez',
          email: 'emiliaferreto55@gmail.com',
        },
        {
          job: 'Logística',
          name: '',
          email: '',
        },
        {
          job: 'Albergues',
          name: '',
          email: '',
        },
        {
          job: 'Ecavuacion',
          name: '',
          email: '',
        },
      ],
      workTeam: [
        {
          job: 'Educación y Divulgación',
          name: 'Maritza Fallas Granados',
          email: 'maritzafallas35@gmail.com',
        },
        {
          job: 'Gestión de Información',
          name: 'Marina Barrantes Chacón',
          email: 'maribarrantes57@gmail.com',
        },
        {
          job: 'Salud',
          name: 'Victoria García Ortiz',
          email: 'victoriagar@gmail.com',
        },
        {
          job: 'Seguridad',
          name: 'Flor María Flores Prado',
          email: 'florfloresprado@hotmail.com florfloresprado@mep.go.cr',
        },
        {
          job: 'Albergues',
          name: 'Zeidy Maria Cruz Cascante',
          email: 'zeidymari27@gmail.com',
        },
        {
          job: 'Telecomunicaciones',
          name: 'Roberto Gerardo Vargas Cartín',
          email: '',
        },
        {
          job: 'Telecomunicaciones',
          name: 'Luz Miriam Quirós Loría',
          email: '',
        },
        {
          job: 'Evaluación del Riesgo y Análisis de Necesidades.',
          name: 'Kaattia Villalobos Valdez',
          email: 'kattia.villalobos.valdez@mep.go.cr',
        },
        {
          job: 'Bodegas',
          name: 'Karolay Rivas Fallas',
          email: 'faviannyrivas2198rf@gmail.com',
        },
        {
          job: 'Manejo de Suministros.',
          name: 'Tannia Gonzalez Mora',
          email: 'tanniagonzalez009@gmail.com',
        },
      ],
      ubication: this.sanitizer.bypassSecurityTrustHtml(
        '<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d26928.742697847516!2d-83.06891601747567!3d8.642365959841923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbambel%20golfito!5e0!3m2!1ses-419!2scr!4v1715013992189!5m2!1ses-419!2scr" style="height:100%;width:100%;border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
      ),
    },
    {
      id: 1,
      name: 'Bambel 3',
      committee: [
        {
          job: 'Coordinación',
          name: 'Blanca Moreno Álvarez',
          email: 'blancamore0420@gmail.com',
        },
        {
          job: 'Sub-coordinación',
          name: 'Sofía Cascante Molina',
          email: 'sofiacascantemolina@gmail.com',
        },
        {
          job: 'SecretarÍa',
          name: 'Stephanie Hidalgo Ruiz',
          email: 'hidalgos1709@gmail.com',
        },
        {
          job: 'Logística',
          name: '',
          email: '',
        },
        {
          job: 'Albergues',
          name: '',
          email: '',
        },
        {
          job: 'Ecavuacion',
          name: '',
          email: '',
        },
      ],
      workTeam: [
        {
          job: 'Voluntariado',
          name: 'Esteban Valencia Muñoz',
          email: 'estebanvalencia740@gmail.com',
        },
        {
          job: 'Educación y Divulgación',
          name: '',
          email: '',
        },
        {
          job: 'Gestión de Información',
          name: '',
          email: '',
        },
        {
          job: 'Evacuación y Rescate',
          name: '',
          email: '',
        },
        {
          job: 'Salud',
          name: '',
          email: '',
        },
        {
          job: 'Seguridad',
          name: 'Antonio Zúñiga Rojas',
          email: '',
        },
        {
          job: 'Albergues',
          name: 'María Prado Piedra',
          email: '',
        },
        {
          job: 'Telecomunicaciones',
          name: '',
          email: '',
        },
        {
          job: 'Evaluación del Riesgo y Análisis de Necesidades.',
          name: '',
          email: '',
        },
        {
          job: 'Bodegas',
          name: '',
          email: '',
        },
        {
          job: 'Manejo de Suministros.',
          name: '',
          email: '',
        },
      ],
      ubication: this.sanitizer.bypassSecurityTrustHtml(
        '<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d26928.742697847516!2d-83.06891601747567!3d8.642365959841923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbambel%20golfito!5e0!3m2!1ses-419!2scr!4v1715012929233!5m2!1ses-419!2scr" style= "height:100%;width:100%;border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
      ),
    },
    {
      id: 2,
      name: 'Conte Burica',
      committee: [
        {
          job: 'Coordinación',
          name: 'Laura Espiza Bejarano',
          email: 'lauespinozabejarano@gmail.com',
        },
        {
          job: 'Sub-coordinación',
          name: 'Videlito Beajarano Bejarano',
          email: 'bejaranovidelito@gmail.com',
        },
        {
          job: 'SecretarÍa',
          name: 'Johnny Sanchez Bejarano',
          email: 'johnny.sancez.bejarano@mep.go.cr',
        },
        {
          job: 'Logística',
          name: '',
          email: '',
        },
        {
          job: 'Albergues',
          name: '',
          email: '',
        },
        {
          job: 'Ecavuacion',
          name: '',
          email: '',
        },
      ],
      workTeam: [
        {
          job: 'Voluntariado',
          name: '',
          email: '',
        },
        {
          job: 'Educación y Divulgación',
          name: '',
          email: '',
        },
        {
          job: 'Gestión de Información',
          name: '',
          email: '',
        },
        {
          job: 'Evacuación y Rescate',
          name: '',
          email: '',
        },
        {
          job: 'Salud',
          name: '',
          email: '',
        },
        {
          job: 'Seguridad',
          name: '',
          email: '',
        },
        {
          job: 'Albergues',
          name: 'Otilia Bejarano Garcia',
          email: '',
        },
        {
          job: 'Telecomunicaciones',
          name: '',
          email: '',
        },
        {
          job: 'Evaluación del Riesgo y Análisis de Necesidades.',
          name: '',
          email: '',
        },
        {
          job: 'Bodegas',
          name: 'Miguel Andreade Atencio',
          email: '',
        },
        {
          job: 'Manejo de Suministros.',
          name: 'Santa Jimenez Montezuma',
          email: 'jimenezsanta449@gmail.com',
        },
      ],
      ubication: this.sanitizer.bypassSecurityTrustHtml(
        '<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d26928.742697847516!2d-83.06891601747567!3d8.642365959841923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbambel%20golfito!5e0!3m2!1ses-419!2scr!4v1715012929233!5m2!1ses-419!2scr" style= "height:100%;width:100%;border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
      ),
    },
    {
      id: 3,
      name: 'Golfito',
      committee: [
        {
          job: 'Coordinación',
          name: 'Marco Antonio Jimenez Benavides',
          email: '',
        },
        {
          job: 'Sub-coordinación',
          name: 'Johan Steve Rojas Montero',
          email: '',
        },
        {
          job: 'SecretarÍa',
          name: 'Carmen Corrales Madrigal',
          email: '',
        },
        {
          job: 'Logística',
          name: '',
          email: '',
        },
        {
          job: 'Albergues',
          name: '',
          email: '',
        },
        {
          job: 'Ecavuacion',
          name: '',
          email: '',
        },
      ],
      workTeam: [
        {
          job: 'Voluntariado',
          name: 'Victoria Hernadez Zuñiga',
          email: '',
        },
        {
          job: 'Voluntariado',
          name: 'Rosibel Barboza Gamboa',
          email: '',
        },
        {
          job: 'Voluntariado',
          name: 'Amable Herrera Gomez',
          email: '',
        },
        {
          job: 'Voluntariado',
          name: '',
          email: '',
        },
        {
          job: 'Educación y Divulgación',
          name: 'Wendy Orozco Delgado',
          email: '',
        },
        {
          job: 'Gestión de Información',
          name: 'Derian Guevara Hernandez',
          email: '',
        },
        {
          job: 'Evacuación y Rescate',
          name: 'Oscar Rivas Gutierrez',
          email: '',
        },
        {
          job: 'Evacuación y Rescate',
          name: 'Xinia María Castro Zamora',
          email: '',
        },
        {
          job: 'Salud',
          name: '',
          email: '',
        },
        {
          job: 'Seguridad',
          name: 'Luis David Vargas Henriquez',
          email: '',
        },
        {
          job: 'Albergues',
          name: 'Virginia María Miranda Cabezas',
          email: '',
        },
        {
          job: 'Albergues',
          name: '',
          email: '',
        },
        {
          job: 'Telecomunicaciones',
          name: '',
          email: '',
        },
        {
          job: 'Evaluación del Riesgo y Análisis de Necesidades.',
          name: 'Carlos Barrantes Leiva',
          email: '',
        },
        {
          job: 'Bodegas',
          name: 'Nilsson Granados Barrantes',
          email: '',
        },
        {
          job: 'Manejo de Suministros.',
          name: 'Cornelio Caballero Araya',
          email: '',
        },
      ],
      ubication: this.sanitizer.bypassSecurityTrustHtml(
        '<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d26928.742697847516!2d-83.06891601747567!3d8.642365959841923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbambel%20golfito!5e0!3m2!1ses-419!2scr!4v1715012929233!5m2!1ses-419!2scr" style= "height:100%;width:100%;border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
      ),
    },
    {
      id: 4,
      name: 'Guadalupe',
      committee: [
        {
          job: 'Coordinación',
          name: 'Elizabeth Guevara Gomez',
          email: 'elizaguevara201970@gmail.com',
        },
        {
          job: 'Sub-coordinación',
          name: 'Rudy Manuel Vega Chavaria',
          email: 'rudyv316@gmail.com',
        },
        {
          job: 'SecretarÍa',
          name: 'Sonia Guzman Jimenez',
          email: 'soniaguzmanjimnez1984@gmail.com',
        },
        {
          job: 'Logística',
          name: '',
          email: '',
        },
        {
          job: 'Albergues',
          name: '',
          email: '',
        },
        {
          job: 'Ecavuacion',
          name: '',
          email: '',
        },
      ],
      workTeam: [
        {
          job: 'Voluntariado',
          name: 'Maria Auxiliadora Valverde Avales',
          email: 'mv5991122@gmail.com',
        },
        {
          job: 'Educación y Divulgación',
          name: '',
          email: '',
        },
        {
          job: 'Gestión de Información',
          name: 'Marjorie Gamboa Vrags',
          email: 'mgamboav2018@hotmail.com',
        },
        {
          job: 'Evacuación y Rescate',
          name: 'Juan Luis Mejia Badilla',
          email: 'mejiasjuan137@gmail.com',
        },
        {
          job: 'Salud',
          name: 'Carlos Eduardo Castro Rojas',
          email: '',
        },
        {
          job: 'Seguridad',
          name: 'Mario Alberto Torres Alvares',
          email: 'comite.emergencias.guadalupe@gmail.com',
        },
        {
          job: 'Albergues',
          name: 'Maria Cespedes Mesen',
          email: 'mariacespedes1723@gmail.com',
        },
        {
          job: 'Telecomunicaciones',
          name: '',
          email: '',
        },
        {
          job: 'Evaluación del Riesgo y Análisis de Necesidades.',
          name: 'Teresa Jimenez Salinas',
          email: 'terejisa1992@gmail.com',
        },
        {
          job: 'Bodegas',
          name: 'Wilberth Vergara Fallas',
          email: 'wilberthfallas79@gmail.com',
        },
        {
          job: 'Manejo de Suministros.',
          name: 'Xinia Guzman Jimenez',
          email: 'guzmanjimmezxinia@gmail.com',
        },
      ],
      ubication: this.sanitizer.bypassSecurityTrustHtml(
        '<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d26928.742697847516!2d-83.06891601747567!3d8.642365959841923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbambel%20golfito!5e0!3m2!1ses-419!2scr!4v1715012929233!5m2!1ses-419!2scr" style= "height:100%;width:100%;border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
      ),
    },
    {
      id: 5,
      name: 'Kilómetro 20',
      committee: [
        {
          job: 'Coordinación',
          name: 'Yanny Mora Monge',
          email: 'yannymor@gmail.com',
        },
        {
          job: 'Sub-coordinación',
          name: 'Esteban Rodríguez Lara',
          email: 'estebanrodriguezlara6@gmail.com',
        },
        {
          job: 'SecretarÍa',
          name: 'Carlos Luis Sibaja Chavarri',
          email: 'clssibajachaverri.90@gmail.com',
        },
        {
          job: 'Logística',
          name: '',
          email: '',
        },
        {
          job: 'Albergues',
          name: '',
          email: '',
        },
        {
          job: 'Ecavuacion',
          name: '',
          email: '',
        },
      ],
      workTeam: [
        {
          job: 'Voluntariado',
          name: '',
          email: '',
        },
        {
          job: 'Educación y Divulgación',
          name: '',
          email: '',
        },
        {
          job: 'Gestión de Información',
          name: '',
          email: '',
        },
        {
          job: 'Evacuación y Rescate',
          name: '',
          email: '',
        },
        {
          job: 'Salud',
          name: '',
          email: '',
        },
        {
          job: 'Seguridad',
          name: '',
          email: '',
        },
        {
          job: 'Albergues',
          name: '',
          email: '',
        },
        {
          job: 'Telecomunicaciones',
          name: '',
          email: '',
        },
        {
          job: 'Evaluación del Riesgo y Análisis de Necesidades.',
          name: 'Arnoldo Gonzalez Rodríguez',
          email: '',
        },
        {
          job: 'Bodegas',
          name: '',
          email: '',
        },
        {
          job: 'Manejo de Suministros.',
          name: '',
          email: '',
        },
      ],
      ubication: this.sanitizer.bypassSecurityTrustHtml(
        '<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d26928.742697847516!2d-83.06891601747567!3d8.642365959841923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbambel%20golfito!5e0!3m2!1ses-419!2scr!4v1715012929233!5m2!1ses-419!2scr" style= "height:100%;width:100%;border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
      ),
    },
    {
      id: 6,
      name: 'La Esperanza',
      committee: [
        {
          job: 'Coordinación',
          name: 'Fiorella Diaz Murillo',
          email: 'fiorelladiazmurillo@gmail.com',
        },
        {
          job: 'Sub-coordinación',
          name: 'Franchesca Solis Gutierrez',
          email: 'franchesca261990@gmail.com',
        },
        {
          job: 'SecretarÍa',
          name: 'Lorlli Alvarez Parra',
          email: 'lorlli_alvarez_parra@hotmail.com',
        },
        {
          job: 'Logística',
          name: '',
          email: '',
        },
        {
          job: 'Albergues',
          name: '',
          email: '',
        },
        {
          job: 'Ecavuacion',
          name: '',
          email: '',
        },
      ],
      workTeam: [
        {
          job: 'Voluntariado',
          name: '',
          email: '',
        },
        {
          job: 'Educación y Divulgación',
          name: 'Hilda Beatriz Mora Bonilla',
          email: '-',
        },
        {
          job: 'Gestión de Información',
          name: 'Marielos Venegas Caespedes',
          email: '',
        },
        {
          job: 'Evacuación y Rescate',
          name: 'Hanzel Alpizar Gonzales',
          email: '',
        },
        {
          job: 'Salud',
          name: '',
          email: '',
        },
        {
          job: 'Seguridad',
          name: 'Miguel Gerardo Badilla Mora',
          email: '-',
        },
        {
          job: 'Albergues',
          name: 'Ana Yancy Alvarez Parra',
          email: '-',
        },
        {
          job: 'Telecomunicaciones',
          name: '',
          email: '',
        },
        {
          job: 'Evaluación del Riesgo y Análisis de Necesidades.',
          name: '',
          email: '',
        },
        {
          job: 'Bodegas',
          name: '',
          email: '',
        },
        {
          job: 'Manejo de Suministros.',
          name: '',
          email: '',
        },
      ],
      ubication: this.sanitizer.bypassSecurityTrustHtml(
        '<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d26928.742697847516!2d-83.06891601747567!3d8.642365959841923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbambel%20golfito!5e0!3m2!1ses-419!2scr!4v1715012929233!5m2!1ses-419!2scr" style= "height:100%;width:100%;border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
      ),
    },
    {
      id: 7,
      name: 'La Gamba',
      committee: [
        {
          job: 'Coordinación',
          name: 'OSCAR LOPEZ CRUZ',
          email: 'cce.gamba.bonito.bolsa@gmail.com',
        },
        {
          job: 'Sub-coordinación',
          name: 'RONALD MOYA DIAZ',
          email: 'ronaldmoyadiaz@gmail.com',
        },
        {
          job: 'SecretarÍa',
          name: 'MARIA ELENA CHAVES CERDAD',
          email: 'mariaelenachc@gmail.com',
        },
        {
          job: 'Logística',
          name: '',
          email: '',
        },
        {
          job: 'Albergues',
          name: '',
          email: '',
        },
        {
          job: 'Ecavuacion',
          name: '',
          email: '',
        },
      ],
      workTeam: [
        {
          job: 'Voluntariado',
          name: 'ALEJANDRINA CASTRO MOYA',
          email: 'cce.gamba.bonito.bolsa@gmail.com',
        },
        {
          job: 'Educación y Divulgación',
          name: 'JOSEPH GABRIEL GUTIERREZ MORERA',
          email: 'josehpg102@gmail.com',
        },
        {
          job: 'Gestión de Información',
          name: 'NANCY DURAN PIEDRA',
          email: 'nancyduran590@gmail.com',
        },
        {
          job: 'Evacuación y Rescate',
          name: 'JOSE MURILLO ROJAS',
          email: 'cce.gamba.bonito.bolsa@gmail.com',
        },
        {
          job: 'Salud',
          name: 'ERIKA MOYA CASTILLO',
          email: 'erickavmoyac14@gmail.com',
        },
        {
          job: 'Seguridad',
          name: 'FRANCISCO MURILLO OBANDO',
          email: 'franciscomurillo191@gmail.com',
        },
        {
          job: 'Albergues',
          name: 'ISABEL CASTILLO COREA',
          email: 'castilloisabel62@gmail.com',
        },
        {
          job: 'Albergues',
          name: 'ALFONSO LOPEZ CASTRO',
          email: 'cce.gamba.bonito.bolsa@gmail.com',
        },
        {
          job: 'Telecomunicaciones',
          name: 'MARIA LUISA SANCHEZ PORRAS-',
          email: 'mari.sanchez.porras@gmail.com',
        },
        {
          job: 'Telecomunicaciones',
          name: 'DANYLOPEZ BRENES',
          email: 'cce.gamba.bonito.bolsa@gmail.com',
        },
        {
          job: 'Evaluación del Riesgo y Análisis de Necesidades.',
          name: 'JUAN JOSE JARA MATAMOROS',
          email: 'jjjara04@gmail.com',
        },
        {
          job: 'Bodegas',
          name: 'KEMBLY QUIROS CASTRO',
          email: 'mamapemby86@gmail.com',
        },
        {
          job: 'Manejo de Suministros.',
          name: 'JEIMY VALLEJOS JAEN',
          email: 'yeimyvallejos@hotmail.com',
        },
      ],
      ubication: this.sanitizer.bypassSecurityTrustHtml(
        '<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d26928.742697847516!2d-83.06891601747567!3d8.642365959841923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbambel%20golfito!5e0!3m2!1ses-419!2scr!4v1715012929233!5m2!1ses-419!2scr" style= "height:100%;width:100%;border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
      ),
    },
  ];
  setCurrentPlace(newPlace: number) {
    this.currentPlace = newPlace;
  }
  navigateCarousel(nav: number) {
    this.carousel += nav;
  }
}
