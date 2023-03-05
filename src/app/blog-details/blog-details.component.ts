import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  blog :any;
  id:any;
  
  constructor(private route: ActivatedRoute, private blogService: 
BlogService) {
  const blogId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
    this.blogService.getBlog(this.id).subscribe({
      next : (res)=>{
        console.log(res);
        this.blog = res;  
        //redirection to list
   
      },error:(err)=>{
        console.log(err)
      }
    })
  }
  upvote() {
    this.blog.upvotes++;
  }

  downvote() {
    this.blog.downvotes++;
  }
}

