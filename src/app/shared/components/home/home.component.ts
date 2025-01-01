import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  posts: any[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe(
      (res) => {
        console.log(res);
        this.posts = res.map((post) => ({
          ...post,
          showComments: false, // Toggle visibility of comments
          newComment: '', // For new comment input
        }));
      },
      (err) => {
        console.error(err);
      }
    );
  }

  toggleComments(postId: string): void {
    const post = this.posts.find((p) => p._id === postId);
    if (post) {
      post.showComments = !post.showComments;
    }
  }


  toggleLike(postId: string): void {
    this.postService.likePost(postId).subscribe(
      (res) => {
        const post = this.posts.find((p) => p._id === postId);
        if (post) {
          // Update the likes array dynamically
          post.likes = res.likes;
        }
      },
      (err) => {
        console.error(err);
      }
    );
  }

  addComment(postId: string): void {
    const post = this.posts.find((p) => p._id === postId);
    if (post && post.newComment.trim()) {
      this.postService.addComment(postId, post.newComment).subscribe(
        (res) => {
          post.comments.push(res.comment); // Push the new comment to the post
          post.newComment = ''; // Clear the input field
        },
        (err) => {
          console.error(err);
        }
      );
    }
  }
}
