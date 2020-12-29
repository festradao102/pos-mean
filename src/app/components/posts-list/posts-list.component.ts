import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import Post from '../../../models/post.model';
import { PageTitleService } from 'src/app/services/page-title.service';


@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html'
})

export class PostsListComponent {
  postsList: Post[];
  constructor(
    private postService: PostService, private pageTitleService: PageTitleService

  ) {
    postService.getPosts()
      .subscribe((posts: Post[]) => {
        this.postsList = posts;
        console.log(this.postsList);
      });
      
    }
}