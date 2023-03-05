export class Blog {
  id?: string;
  title: string;
  content: string;
  author: string;
  upvotes: number;
  downvotes: number;
  constructor(blog: { title: string; content: string; author: string; upvotes: number; downvotes: number }) {
    this.title = blog.title;
    this.content = blog.content;
    this.author = blog.author;
    this.upvotes = blog.upvotes;
    this.downvotes = blog.downvotes;
  }
}
