import React from 'react';
import './App.css';
import EmojiForm from './component/EmojiForm';

function App() {
  const EmojiImage =[
    {id: 1, src: './HEART.gif', title: 'heart', description:'Heart Emoji'},
    {id: 2, src: './HEARTEYE_EMOJI.gif', title: 'heart eye', description:'Heart Eye Emoji'},
    {id: 3, src: './ROCK_ON.gif', title: 'rock on', description:'Rock On Emoji'},
    {id: 4, src: './TEARS_OF_JOY.gif', title: 'tears of joy', description:'Tears of Joy Emoji'},
    {id: 5, src: './THUMBS_UP.gif', title: 'thumps up', description:'Thumps Up Emoji'},
];

  return (
    <div className="App">
      <header className="App-header">
   <EmojiForm/>

   <h1>Emoji List</h1>
      {EmojiImage.map(({id, src, title, description}) => <img key={id} src={src} title={title} alt={description} />)} 

        </header>
    </div>
  );
}

export default App;
