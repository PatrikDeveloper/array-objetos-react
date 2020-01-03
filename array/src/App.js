import React from 'react';
import './App.css';

function App() {

  const posts = [
    {id: 1, title: 'POST 1', content: 'Primeiro Post'},
    {id: 2, title: 'POST 2', content: 'Primeiro Post'},
    {id: 3, title: 'POST 3', content: 'Primeiro Post'},
  ];

  const conteudo = posts.map((post) => 
    <div id={post.id}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
  
  return (
    <div className='App'>
      {conteudo}
    </div>
  );
}

export default App;
