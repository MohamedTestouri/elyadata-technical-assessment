import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Blog } from './blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  public blogs: Blog[] = [
    { id: 1, title: 'Blog 1', author: 'John Doe', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', upvotes: 3, downvotes: 2 },
    { id: 2, title: 'Blog 2', author: 'Jane Smith', content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.', upvotes: 5, downvotes: 1 },
    { id: 3, title: 'Blog 3', author: 'Bob Johnson', content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.', upvotes: 2, downvotes: 0 },
  ];

  constructor() { }

  getBlogs(): Observable<Blog[]> {
    return of(this.blogs);
  }

  getBlog(id: Number): Observable<Blog  | null | undefined> {
    const blog =     this.blogs.find(item => item.id == id);;


    return of(blog);
  }

  addBlog(blog: Blog): Observable<Blog | null | undefined> {
    blog.id = (this.blogs.length + 1);
    blog.upvotes = 0;
    blog.downvotes = 0;
    this.blogs.push(blog);
    return of(blog);
  }

  searchBlogs(query: string): Observable<Blog[]> {
    const blogs = this.blogs.filter(b => {
      const titleMatch = b.title.toLowerCase().includes(query.toLowerCase());
      const authorMatch = b.author.toLowerCase().includes(query.toLowerCase());
      const contentMatch = b.content.toLowerCase().includes(query.toLowerCase());
      return titleMatch || authorMatch || contentMatch;
    });
    return of(blogs);
  }

  upvoteBlog(id: Number): Observable<Blog  | null | undefined> {
    const blog = this.blogs.find(b => b.id === id);
    if (blog) {

      blog.upvotes= +  blog.upvotes+ 1
    }
    return of(blog);
  }

  downvoteBlog(id: Number): Observable<Blog  | null | undefined> {
    const blog = this.blogs.find(b => b.id === id);
    if (blog) {

      blog.downvotes= + blog.downvotes + 1


    }
    return of(blog);
  }
}
/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
providedIn: 'root'
})
export class BlogService {
private apiUrl = 'http://localhost:8000'; // replace with your API URL

constructor(private http: HttpClient) {}

getBlogs(): Observable<any[]> {
return this.http.get<any[]>(${this.apiUrl}/blogs);
}

getBlog(id: string): Observable<any> {
return this.http.get<any>(${this.apiUrl}/blogs/${id});
}

addBlog(blog: any): Observable<any> {
return this.http.post<any>(${this.apiUrl}/blogs, blog);
}

}*/
