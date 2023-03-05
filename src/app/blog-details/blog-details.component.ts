import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent {
  blog = null;

  constructor(private route: ActivatedRoute, private blogService: 
BlogService) {
    const blogId = this.route.snapshot.paramMap.get('id');
    this.blogService.getBlog(blogId).subscribe(blog => this.blog = blog);
  }

  upvote() {
    this.blog.upvotes++;
  }

  downvote() {
    this.blog.downvotes++;
  }
}

