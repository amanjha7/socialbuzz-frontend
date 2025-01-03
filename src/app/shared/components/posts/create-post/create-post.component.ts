import { Component } from '@angular/core';
import { PostModal } from 'src/app/core/models/post.model';
import { PostService } from 'src/app/core/services/post.service'; // Import your PostService

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {
  post:Partial<PostModal> = {
    content: '',
    hashtags: '',
    imageUrl: ''
  };
  showImageInput = false;

  constructor(private postService: PostService) {}

  // Toggle the image input visibility
  toggleImageInput() {
    this.showImageInput = !this.showImageInput;
  }

  // Create a new post
  createPost() {
    if (!this.post.content || !this.post.hashtags) {
      return; // Ensure content and hashtags are filled
    }

    const formData = new FormData();
    formData.append('content', this.post.content);
    formData.append('hashtags', this.post.hashtags);
    formData.append('image_url', this.post.imageUrl || ''); // Add image URL

    this.postService.createPost({content: this.post.content, hashtags: this.post.hashtags, image_url: this.post.imageUrl}).subscribe(
      (response) => {
        // After successful post creation, clear the form
        this.post = { content: '', hashtags: '', imageUrl: '' };
        alert('Post created successfully!');
      },
      (error) => {
        console.error('Error creating post', error);
        alert('Error creating post.');
      }
    );
  }
}
