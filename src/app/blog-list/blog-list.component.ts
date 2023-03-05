import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent {
  searchTerm = '';
  blogs = [];

  constructor(private router: Router, private blogService: BlogService) {
    this.blogService.getBlogs().subscribe(blogs => this.blogs = blogs);
  }

  filteredBlogs() {
    return this.blogs.filter(blog =>
      blog.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      blog.content.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      blog.author.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }

  upvote(blog) {
    blog.upvotes++;
  }

  downvote(blog) {
    blog.downvotes++;
  }
}

