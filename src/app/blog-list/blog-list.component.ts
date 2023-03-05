import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { Blog } from '../blog';
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent {
  searchTerm = '';
  blogs:any;

  constructor(private router: Router, private blogService: BlogService) {
  }

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe({
      next : (res)=>{
        console.log(res);
        this.blogs = res;  
        //redirection to list
   
      },error:(err)=>{
        console.log(err)
      }
    })
  }
  filteredBlogs() {
    return this.blogs.filter((blog:Blog) =>
      blog.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      blog.content.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      blog.author.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }

  upvote(blog:any) {
    blog.upvotes++;
    console.log(blog)
  }

  downvote(blog:any) {
    blog.downvotes--;
    console.log(blog)
  }
}

