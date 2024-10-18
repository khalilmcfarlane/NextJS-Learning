"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export default function Posts() {

    const [posts, SetPosts] = useState([]);
    interface Post {
        id: number;
        title: string;
        body: string;
    }
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://dummyjson.com/posts");
                const data = await response.data;
                const posts = data.posts;
                SetPosts(posts);

            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <ul>
                {posts.map((post: Post) => (
                    <li key={post.id}>
                        {post.title}
                        {post.body}
                    </li>                               
                ))}
            </ul>
        </div>
    )
}