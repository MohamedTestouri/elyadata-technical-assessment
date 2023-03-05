import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Blog } from './blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  public blogs: Blog[] = [
    { id: 1, title: 'Test Title', author: 'Testouri',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rutrum enim vitae neque consequat, tempor sodales magna commodo. Aliquam non aliquet arcu. Integer at elit non felis dictum consectetur nec quis ipsum. Sed ullamcorper mi egestas velit feugiat viverra. Sed id magna sed magna convallis tincidunt vel eu urna. Pellentesque vel orci feugiat, vulputate enim nec, euismod urna. Curabitur cursus tempus ligula quis consequat. Maecenas ipsum diam, commodo eget turpis nec, aliquam sollicitudin neque. Vestibulum tempus pulvinar leo sed pharetra. Phasellus tincidunt porttitor est, id tempus urna pellentesque at. Vestibulum ultricies bibendum tortor, vulputate elementum lacus. Praesent a odio rhoncus, lobortis urna ut, fermentum ligula. Aliquam eget finibus mauris. Sed nec diam lectus.\n' +
        '\n' +
        'Curabitur vel condimentum dolor. Nulla pretium nulla quis venenatis pretium. Sed sed leo neque. Mauris pellentesque nisl sed condimentum porta. Cras pretium ullamcorper imperdiet. Integer ac sem sed ante finibus efficitur sed vitae eros. Cras dignissim convallis ullamcorper. Proin tincidunt sem lorem, aliquet fringilla sem pretium sed. Mauris vitae laoreet turpis.\n' +
        '\n' +
        'Mauris a libero eu sem luctus consectetur in nec nunc. Maecenas in sapien et erat consequat laoreet nec eget quam. In scelerisque, risus in varius blandit, lacus est auctor mauris, vitae pharetra enim augue nec lectus. Ut non molestie nisl. Sed aliquet tellus a iaculis lacinia. Donec volutpat ex nec lobortis eleifend. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam vitae leo id enim laoreet posuere.\n' +
        '\n' +
        'Sed quis ante sapien. Ut pretium malesuada sagittis. Donec consectetur sit amet sapien et luctus. Ut venenatis nulla vel ipsum convallis, sed porta justo dictum. Suspendisse nibh enim, tincidunt at ante vitae, facilisis vulputate turpis. Nunc eleifend eleifend velit sed malesuada. Curabitur ut ligula vel ipsum porta tristique. Quisque mollis nisl turpis. Proin at est dolor.\n' +
        '\n' +
        'Phasellus placerat ultricies metus id dapibus. Vivamus at sagittis purus. Ut nec dui at erat blandit volutpat. Sed cursus augue sed nunc scelerisque ornare. Curabitur eleifend dapibus diam, sed condimentum tortor sagittis at. Nam laoreet eleifend lacus et efficitur. Duis aliquet tincidunt varius. Pellentesque molestie tempus tortor, eget varius lorem ultricies ut. Phasellus id velit sit amet nunc tempus volutpat eu ac purus. Suspendisse consequat maximus felis nec tempus. Duis posuere nec arcu eu pretium. Proin imperdiet justo lorem, nec viverra leo sagittis sed. Integer feugiat augue nec ex fermentum, non ultricies enim ultricies.\n' +
        '\n',
      upvotes: 3, downvotes: 2 },
    { id: 2, title: 'Hello World', author: 'Mohamed', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rutrum enim vitae neque consequat, tempor sodales magna commodo. Aliquam non aliquet arcu. Integer at elit non felis dictum consectetur nec quis ipsum. Sed ullamcorper mi egestas velit feugiat viverra. Sed id magna sed magna convallis tincidunt vel eu urna. Pellentesque vel orci feugiat, vulputate enim nec, euismod urna. Curabitur cursus tempus ligula quis consequat. Maecenas ipsum diam, commodo eget turpis nec, aliquam sollicitudin neque. Vestibulum tempus pulvinar leo sed pharetra. Phasellus tincidunt porttitor est, id tempus urna pellentesque at. Vestibulum ultricies bibendum tortor, vulputate elementum lacus. Praesent a odio rhoncus, lobortis urna ut, fermentum ligula. Aliquam eget finibus mauris. Sed nec diam lectus.\n' +
        '\n' +
        'Curabitur vel condimentum dolor. Nulla pretium nulla quis venenatis pretium. Sed sed leo neque. Mauris pellentesque nisl sed condimentum porta. Cras pretium ullamcorper imperdiet. Integer ac sem sed ante finibus efficitur sed vitae eros. Cras dignissim convallis ullamcorper. Proin tincidunt sem lorem, aliquet fringilla sem pretium sed. Mauris vitae laoreet turpis.\n' +
        '\n' +
        'Mauris a libero eu sem luctus consectetur in nec nunc. Maecenas in sapien et erat consequat laoreet nec eget quam. In scelerisque, risus in varius blandit, lacus est auctor mauris, vitae pharetra enim augue nec lectus. Ut non molestie nisl. Sed aliquet tellus a iaculis lacinia. Donec volutpat ex nec lobortis eleifend. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam vitae leo id enim laoreet posuere.\n' +
        '\n' +
        'Sed quis ante sapien. Ut pretium malesuada sagittis. Donec consectetur sit amet sapien et luctus. Ut venenatis nulla vel ipsum convallis, sed porta justo dictum. Suspendisse nibh enim, tincidunt at ante vitae, facilisis vulputate turpis. Nunc eleifend eleifend velit sed malesuada. Curabitur ut ligula vel ipsum porta tristique. Quisque mollis nisl turpis. Proin at est dolor.\n' +
        '\n' +
        'Phasellus placerat ultricies metus id dapibus. Vivamus at sagittis purus. Ut nec dui at erat blandit volutpat. Sed cursus augue sed nunc scelerisque ornare. Curabitur eleifend dapibus diam, sed condimentum tortor sagittis at. Nam laoreet eleifend lacus et efficitur. Duis aliquet tincidunt varius. Pellentesque molestie tempus tortor, eget varius lorem ultricies ut. Phasellus id velit sit amet nunc tempus volutpat eu ac purus. Suspendisse consequat maximus felis nec tempus. Duis posuere nec arcu eu pretium. Proin imperdiet justo lorem, nec viverra leo sagittis sed. Integer feugiat augue nec ex fermentum, non ultricies enim ultricies.\n' +
        '\n', upvotes: 5, downvotes: 1 },
    { id: 3, title: 'Lorem Ipsum', author: 'Med Test', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rutrum enim vitae neque consequat, tempor sodales magna commodo. Aliquam non aliquet arcu. Integer at elit non felis dictum consectetur nec quis ipsum. Sed ullamcorper mi egestas velit feugiat viverra. Sed id magna sed magna convallis tincidunt vel eu urna. Pellentesque vel orci feugiat, vulputate enim nec, euismod urna. Curabitur cursus tempus ligula quis consequat. Maecenas ipsum diam, commodo eget turpis nec, aliquam sollicitudin neque. Vestibulum tempus pulvinar leo sed pharetra. Phasellus tincidunt porttitor est, id tempus urna pellentesque at. Vestibulum ultricies bibendum tortor, vulputate elementum lacus. Praesent a odio rhoncus, lobortis urna ut, fermentum ligula. Aliquam eget finibus mauris. Sed nec diam lectus.\n' +
        '\n' +
        'Curabitur vel condimentum dolor. Nulla pretium nulla quis venenatis pretium. Sed sed leo neque. Mauris pellentesque nisl sed condimentum porta. Cras pretium ullamcorper imperdiet. Integer ac sem sed ante finibus efficitur sed vitae eros. Cras dignissim convallis ullamcorper. Proin tincidunt sem lorem, aliquet fringilla sem pretium sed. Mauris vitae laoreet turpis.\n' +
        '\n' +
        'Mauris a libero eu sem luctus consectetur in nec nunc. Maecenas in sapien et erat consequat laoreet nec eget quam. In scelerisque, risus in varius blandit, lacus est auctor mauris, vitae pharetra enim augue nec lectus. Ut non molestie nisl. Sed aliquet tellus a iaculis lacinia. Donec volutpat ex nec lobortis eleifend. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam vitae leo id enim laoreet posuere.\n' +
        '\n' +
        'Sed quis ante sapien. Ut pretium malesuada sagittis. Donec consectetur sit amet sapien et luctus. Ut venenatis nulla vel ipsum convallis, sed porta justo dictum. Suspendisse nibh enim, tincidunt at ante vitae, facilisis vulputate turpis. Nunc eleifend eleifend velit sed malesuada. Curabitur ut ligula vel ipsum porta tristique. Quisque mollis nisl turpis. Proin at est dolor.\n' +
        '\n' +
        'Phasellus placerat ultricies metus id dapibus. Vivamus at sagittis purus. Ut nec dui at erat blandit volutpat. Sed cursus augue sed nunc scelerisque ornare. Curabitur eleifend dapibus diam, sed condimentum tortor sagittis at. Nam laoreet eleifend lacus et efficitur. Duis aliquet tincidunt varius. Pellentesque molestie tempus tortor, eget varius lorem ultricies ut. Phasellus id velit sit amet nunc tempus volutpat eu ac purus. Suspendisse consequat maximus felis nec tempus. Duis posuere nec arcu eu pretium. Proin imperdiet justo lorem, nec viverra leo sagittis sed. Integer feugiat augue nec ex fermentum, non ultricies enim ultricies.\n' +
        '\n', upvotes: 2, downvotes: 0 },
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
