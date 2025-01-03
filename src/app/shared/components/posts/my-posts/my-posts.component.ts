import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.scss'],
})
export class MyPostsComponent implements OnInit {
  post: any[] = [];
  expandedPost: string | null = null; // Tracks the ID of the expanded post (for comments toggle)

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getMyPosts().subscribe(
      (res) => {
        console.log(res);
        this.post = res;
      },
      (err) => {
        console.error(err);
      }
    );
  }

  toggleComments(postId: string): void {
    this.expandedPost = this.expandedPost === postId ? null : postId;
  }

  formatHashtags(hashtags: string | string[] | undefined): string[] {
    if (!hashtags || (Array.isArray(hashtags) && hashtags.length === 0)) {
      return [];
    }
    if (Array.isArray(hashtags)) {
      return hashtags;
    }
    return hashtags.split(',').map((tag) => tag.trim()).filter(Boolean);
  }

  getComments(comments: any[] | undefined): any[] {
    return Array.isArray(comments) && comments.length > 0 ? comments : [];
  }
}
