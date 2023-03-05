import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../blog.service';
import {Blog} from '../blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent {
  searchTerm = '';
  blogs: Blog[] = [];

  constructor(private router: Router, private blogService: BlogService) {
    this.blogService.getBlogs().subscribe(blogs => this.blogs = blogs);
  }

  filteredBlogs(): Blog[] {
    return this.blogs.filter((blog: Blog) =>
      blog.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      blog.content.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      blog.author.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }


  upvote(blog: Blog): void {
    blog.upvotes++;
  }

  downvote(blog: Blog): void{
    blog.downvotes++;
  }
}

