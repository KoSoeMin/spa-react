import React from 'react'
import './index.css';
import { useState } from 'react';
import {useRef} from 'react';

export default function Index({addPost}) {

let [ title, setTitle] = useState("");
// let title = useRef("");
let [status, setStatus] = useState("dropped");

let resetForm = () => {
  setTitle("");
  // title.current.value = "";
}

let uplodad_post = (e) => {
    e.preventDefault(); // prevent refreshing the page on form submission
    let post = {
        id: Math.floor(Math.random() * 1000),
        // title: title.current.value
        title: title,
        status: status
    }
    resetForm();
    addPost(post);
}

  return (
    <form className='post-form' onSubmit={uplodad_post}>
      <h1>Create Post Form</h1>
      <div className='form-control'>
        <label htmlFor='title'>Title</label>
        <input type='text' name='title' id='title' value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className='form-control'>
        <label htmlFor='title'>Status</label>
        <select name='status' id='status' value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value='dropped'>Dropped</option>
          <option value='ongoing'>Ongoing</option>
          <option value='upcomming'>Upcomming</option>
        </select>
      </div>
      <div className='form-control'>
        <button type='submit'>Post Now</button>
      </div>
    </form>
  )
}
