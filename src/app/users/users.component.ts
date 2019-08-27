import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UsersService, PostsService]
})
export class UsersComponent implements OnInit {
  users: object = [];
  posts: object = [];
  userId: number = null;


  handleClick(user: any) {
    console.log('user ID ' + user.id);
    // this.userId = user.id;
    // console.log(this.userId)
    this.postsData.getPosts(user.id).subscribe(postsData => {
      this.posts = postsData;
      console.log(this.posts);
    });
  }


  constructor(
    private usersData: UsersService,
    private postsData: PostsService
  ) { }

  ngOnInit() {

    this.usersData.getUsers().subscribe(usersData => {
      this.users = usersData;
      console.log(this.users);
    });
  }
}
