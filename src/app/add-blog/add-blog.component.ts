import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../blog';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent {
  blog :Blog = {  id : 0, title: '', content: '', author: '', upvotes: 0, downvotes: 0 };

  constructor(private router: Router, private blogService: BlogService) {}

  onSubmit() {
    this.blogService.addBlog(this.blog).subscribe(() => {
      this.router.navigate(['/blogs']);
    });
  }
}

