import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import {Blog} from '../blog';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent {
  blog!: Blog | null;

  constructor(private route: ActivatedRoute, private blogService: BlogService) {
    const blogId = this.route.snapshot.paramMap.get('id')?.toString() || '';
    this.blogService.getBlog(blogId).subscribe(blog => {
      if (blog) {
        this.blog = blog;
      } else {
        this.blog = null;
      }
    });
  }

  upvote(): void{
    if (this.blog) {
      this.blog.upvotes++;
    }
  }

  downvote(): void {
    if (this.blog) {
      this.blog.downvotes++;
    }
  }
}

