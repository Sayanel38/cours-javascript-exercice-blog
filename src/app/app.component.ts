import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'exercice-blog';

  // Tableau qui contient les différents posts
  appPosts = [
    {
      titlePost: 'Les singes',
      contentPost: `Les singes sont des mammifères de l'ordre des primates, généralement arboricoles, à la face souvent glabre et caractérisés par un encéphale développé et de longs membres terminés par des doigts. Bien que leur ressemblance avec l'Homme ait toujours frappé les esprits, la science a mis de nombreux siècles à prouver le lien étroit qui existe entre ceux-ci et l'espèce humaine. `,
      loveIts: 0,
      created_at: new Date()
    },
    {
      titlePost: 'Le rat-taupe glabre',
      contentPost: `L'Hétérocéphale (Heterocephalus glaber), aussi appelé Rat-taupe nu ou Rat-taupe glabre est la seule espèce du genre Heterocephalus et de la sous-famille des Heterocephalinae. C'est un petit rongeur présent en Afrique de l'est (Somalie, Kenya, Éthiopie) et remarquable sur plusieurs points dont son organisation sociale, sa régulation de température limitée, sa capacité de reproduction, sa résistance aux maladies (cancers...) ou encore sa longévité qui peut dépasser 30 ans en captivité. `,
      loveIts: 0,
      created_at: new Date()
    },
    {
      titlePost: 'Le tamanoir',
      contentPost: `Le tamanoir, également nommé fourmilier géant ou grand fourmilier (Myrmecophaga tridactyla), est une espèce de mammifères de la famille des Myrmecophagidae. C'est la seule espèce du genre Myrmecophaga. C'est un grand mammifère insectivore natif de l'Amérique centrale et du Sud. Il est l'une des quatre espèces vivantes de fourmiliers et classé parmi les paresseux dans l'ordre Pilosa. Le tamanoir est surtout terrestre, contrairement à d'autres fourmiliers ou paresseux, qui sont arboricoles ou semi-arboricoles`,
      loveIts: 0,
      created_at: new Date()
    },
    {
      titlePost: 'La Pieuvre géante du Pacifique',
      contentPost: `La pieuvre géante, d'une couleur rougeâtre, comporte quatre paires de bras qui mesurent environ 3 m de longueur chacun. Elle vit en moyenne de 3 à 5 ans. Les adultes pèsent de 25 à 43 kg (la plus lourde observée pesait 180 kg). Ses bras peuvent atteindre la taille exceptionnelle de 4,3 mètres. Quelques rares pieuvres de 9 mètres de long (corps + bras) ont déjà été observées dans le Pacifique-Nord. Sa taille bien qu'impressionnante a souvent été exagérée : le Kraken (pieuvre géante de la mythologie scandinave) correspond en fait sans doute aux calmars géants, bien plus gros. Rares sont les pieuvres qui atteignent l'âge adulte. `,
      loveIts: 0,
      created_at: new Date()
    }
  ];


}
