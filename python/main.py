from fastapi import FastAPI
from pymongo import MongoClient
from bson import ObjectId

app = FastAPI()

# connect to MongoDB
client = pymongo.MongoClient(
    "mongodb+srv://user:RYyHSCIJ5L9Xaygw@blog-app.dxcvw0m.mongodb.net/?retryWrites=true&w=majority",
    server_api=ServerApi("1"),
)
db = client["blog-db"]
collection = db["blogs"]


# Add a blog
@app.post("/blogs")
async def create_blog(
    title: str, content: str, author: str, upvotes: int = 0, downvotes: int = 0
):
    # insert new blog document in collection
    blog = {
        "title": title,
        "content": content,
        "author": author,
        "upvotes": upvotes,
        "downvotes": downvotes,
    }
    result = collection.insert_one(blog)
    # return id of inserted document
    return {"id": str(result.inserted_id)}


# Fetch all blogs
@app.get("/blogs")
async def read_blogs():
    # retrieve all documents from collection
    blogs = []
    for blog in collection.find():
        blogs.append(blog)
    return {"blogs": blogs}


# Fetch blog by id
@app.get("/blogs/{blog_id}")
async def read_blog(blog_id: str):
    # retrieve document from collection by id
    blog = collection.find_one({"_id": ObjectId(blog_id)})
    if blog:
        return blog
    else:
        return {"error": "Blog not found"}
