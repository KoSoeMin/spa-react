import React from 'react'
import './index.css';
import styles from './single_post.module.css';

export default function PostList({posts}) {
    //  console.log(posts);
  return (
   
    <div className='post-list'>
        {posts.map(post => (
            <div className={`single-post ${styles.card}`} key={post.id}>
              <h3>{post.title}</h3>
              <h4>Status-{post.status}</h4>
            </div>
        ) )}
    </div>
  )
}
