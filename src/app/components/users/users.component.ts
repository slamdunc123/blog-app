import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UsersService, PostsService]
})
export class UsersComponent implements OnInit {
  users: object = [];
  //passes down to child component - posts.component.ts
  posts: any = [];
  userId: number = null;
  userName: string = '';
  showPosts: boolean = false;
  showNoPosts: boolean = false;

  handleClick(user: any) {
    console.log('user ID ' + user.id);
    this.userName = user.name;
    console.log(this.userName);

    // this.userId = user.id;
    // console.log(this.userId)
    this.postsData.getPosts(user.id).subscribe(postsData => {
      this.posts = postsData;
      console.log(this.posts);

      if (this.posts.length > 0) {
        console.log(this.posts)
        this.showPosts = true;
        this.showNoPosts = false;

      } else {
        console.log(this.posts)
        this.showPosts = false;
        this.showNoPosts = true;

      }
    });
  }

  // get services
  constructor(
    private usersData: UsersService,
    private postsData: PostsService
  ) { }


  // get all users
  ngOnInit() {
    this.usersData.getUsers().subscribe(usersData => {
      this.users = usersData;
      console.log(this.users);
    });
  }
}
