import { Component, OnInit, Input } from '@angular/core';
import { typePost } from '../../models/posts-model';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})


export class PostListComponent implements OnInit {

  @Input() inputPosts: typePost[]  ;

  constructor() { }

  ngOnInit() {
  }




}
