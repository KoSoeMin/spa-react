import './App.css';
import  { useState } from 'react';
import Navbar from './components/Navbar';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import Modal from './components/Modal';

function App() {

  const [showModal, setShowModal] = useState(false);

  const [posts, setPosts] = useState([
    {
      id : 1,
      title : 'first post',
      status : 'dropped'
    },
    {
      id : 2,
      title : 'second post',
      status : 'ongoing'
    },
    {
      id : 3,
      title : 'third post',
      status : 'upcomming'
    }
  ]);

  let addPost = (post) => {
    setPosts(prevState => [...prevState, post]);
    setShowModal(false);
  }

  return (
    <>
      <Navbar setShowModal={setShowModal}></Navbar>

      <PostList posts={posts}></PostList>

      {showModal && <Modal setShowModal={setShowModal}>
        <PostForm addPost={addPost}></PostForm>
      </Modal>}

    </>
    
  );
}

export default App;
