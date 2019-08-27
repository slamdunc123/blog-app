import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {


  @Input() userId: number;
  @Input() posts: object;




  constructor() { }

  ngOnInit() {

  }
}
