import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home-new',
  standalone: true,
  imports: [],
  templateUrl: './home-new.component.html',
  styleUrl: './home-new.component.css'
})
export class HomeNewComponent {
  constructor(private sanitizer: DomSanitizer) {}
  carousel = 0;
  currentPlace = 0;

  news = [
    {
      "tituloCorto": "Descubrimiento Científico Revolucionario",
      "fecha": "2024-05-30",
      "descripcionCorta": "Científicos han realizado un descubrimiento que podría cambiar el futuro de la medicina.",
      "cuerpoNoticia": {
        "introduccion": "En un avance sin precedentes, un grupo de científicos ha descubierto una nueva terapia que promete revolucionar el tratamiento de enfermedades crónicas.",
        "detalles": {
          "descubrimiento": "El equipo, liderado por la Dra. María González, ha desarrollado una técnica innovadora que utiliza la edición genética para corregir mutaciones responsables de varias enfermedades hereditarias.",
          "impacto": "Este descubrimiento tiene el potencial de mejorar la calidad de vida de millones de personas y reducir significativamente los costos de atención médica.",
          "reacciones": "La comunidad científica ha recibido con entusiasmo esta noticia, destacando su importancia y las posibilidades que abre para futuros tratamientos.",
          "proximosPasos": "Los investigadores planean comenzar ensayos clínicos en humanos en los próximos meses, con la esperanza de obtener resultados preliminares a finales de año."
        },
        "conclusion": "Este descubrimiento marca un hito en la biomedicina y abre nuevas perspectivas para el tratamiento de enfermedades que hasta ahora eran incurables."
      }
    },
    {
      "tituloCorto": "Innovación en Energía Solar",
      "fecha": "2024-04-15",
      "descripcionCorta": "Una nueva tecnología de paneles solares promete aumentar la eficiencia energética en un 50%.",
      "cuerpoNoticia": {
        "introduccion": "Ingenieros han desarrollado una nueva tecnología para paneles solares que podría revolucionar la producción de energía renovable.",
        "detalles": {
          "descubrimiento": "El equipo de la Universidad de Stanford ha creado un panel solar híbrido que combina celdas fotovoltaicas tradicionales con una capa adicional que captura energía térmica.",
          "impacto": "Este avance podría llevar a una reducción significativa en el costo de la energía solar, haciéndola más accesible y eficiente.",
          "reacciones": "Expertos en energía renovable han elogiado el descubrimiento, indicando que podría ser un cambio de juego para la industria.",
          "proximosPasos": "Los desarrolladores planean lanzar un programa piloto en varias ciudades el próximo año para probar la tecnología en condiciones reales."
        },
        "conclusion": "La innovación en paneles solares podría ser un paso crucial hacia un futuro más sostenible y menos dependiente de combustibles fósiles."
      }
    },
    {
      "tituloCorto": "Avance en Inteligencia Artificial",
      "fecha": "2024-03-22",
      "descripcionCorta": "Una nueva IA es capaz de diagnosticar enfermedades con una precisión sin precedentes.",
      "cuerpoNoticia": {
        "introduccion": "Investigadores han desarrollado una inteligencia artificial que puede diagnosticar una amplia variedad de enfermedades con una precisión asombrosa.",
        "detalles": {
          "descubrimiento": "El sistema de IA, desarrollado por el MIT, utiliza algoritmos avanzados de aprendizaje profundo para analizar imágenes médicas y datos de pacientes.",
          "impacto": "Esta tecnología tiene el potencial de revolucionar la medicina, proporcionando diagnósticos rápidos y precisos que pueden salvar vidas.",
          "reacciones": "Médicos y especialistas han expresado su entusiasmo, señalando que esta IA podría mejorar significativamente la atención médica.",
          "proximosPasos": "Los desarrolladores están colaborando con hospitales para implementar la IA en entornos clínicos y realizar pruebas extensivas."
        },
        "conclusion": "El avance en inteligencia artificial podría transformar la manera en que se diagnostican y tratan las enfermedades, mejorando la eficiencia y precisión del cuidado médico."
      }
    },
    {
      "tituloCorto": "Descubrimiento Arqueológico en Egipto",
      "fecha": "2024-02-10",
      "descripcionCorta": "Arqueólogos han descubierto una tumba intacta de más de 3,000 años de antigüedad.",
      "cuerpoNoticia": {
        "introduccion": "En un descubrimiento asombroso, arqueólogos han encontrado una tumba intacta que data de hace más de 3,000 años en Egipto.",
        "detalles": {
          "descubrimiento": "La tumba, ubicada en el Valle de los Reyes, contiene una colección de artefactos y momias en perfecto estado de conservación.",
          "impacto": "Este hallazgo proporciona una nueva perspectiva sobre las prácticas funerarias y la vida cotidiana en el antiguo Egipto.",
          "reacciones": "Historiadores y arqueólogos de todo el mundo han mostrado gran interés en el descubrimiento, destacando su importancia histórica.",
          "proximosPasos": "El equipo planea continuar las excavaciones y realizar estudios detallados de los artefactos encontrados."
        },
        "conclusion": "El descubrimiento de la tumba intacta ofrece una oportunidad única para profundizar en la historia y cultura del antiguo Egipto."
      }
    },
    {
      "tituloCorto": "Innovación en Transporte Urbano",
      "fecha": "2024-01-05",
      "descripcionCorta": "Una nueva red de vehículos autónomos promete transformar el transporte urbano.",
      "cuerpoNoticia": {
        "introduccion": "Una empresa de tecnología ha lanzado una red de vehículos autónomos que promete cambiar la forma en que las personas se desplazan en las ciudades.",
        "detalles": {
          "descubrimiento": "La red, desarrollada por la empresa AutoMove, utiliza vehículos eléctricos autónomos para proporcionar un servicio de transporte eficiente y sostenible.",
          "impacto": "Este sistema podría reducir significativamente la congestión del tráfico y las emisiones de carbono en las áreas urbanas.",
          "reacciones": "Las autoridades locales y expertos en transporte han recibido con entusiasmo la noticia, destacando su potencial para mejorar la movilidad urbana.",
          "proximosPasos": "AutoMove planea expandir la red a otras ciudades importantes en los próximos años, comenzando con pruebas en San Francisco y Nueva York."
        },
        "conclusion": "La innovación en vehículos autónomos representa un avance significativo hacia un futuro más eficiente y ecológico en el transporte urbano."
      }
    }
  ]

  setCurrentPlace(newPlace:number){
    this.currentPlace = newPlace;
  }
  navigateCarousel(nav:number){
    this.carousel += nav;
  }
}
