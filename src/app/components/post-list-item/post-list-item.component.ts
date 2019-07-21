import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  //Import des variables contenues dans le tableau (voir app.component.ts et .html)
  @Input()title : string;
  @Input()content : string;
  @Input()loveIts : number;
  @Input()created_at : Date; 

  constructor() { 
  }

  // Méthode qui renvoie la couleur du fond du postItem//
  getColor() {
    if (this.loveIts < 0) {
      return "red";
    } else if (this.loveIts > 0) {
      return "green";
    } else {
      return "blanc";
    }
}

  // Méthode qd on love//
  loveIt() {
    this.loveIts +=  1;
    console.log(this.loveIts);
    return this.loveIts;
    }

  // Méthode qd on love pas//
  dontLove() {
    this.loveIts -= 1;
    console.log(this.loveIts);
    return this.loveIts;
  }

  ngOnInit() {
  }

}


