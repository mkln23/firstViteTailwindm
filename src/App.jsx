import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './MovieCard';
<style>
*{
    // background-color : #282c34;
    // margin: 0;
}
</style>
function App() {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform some action here based on the input value if needed
  };
  const getInput = () =>{
    console.log('hello');
    // var word=document.getElementById('movie').value;
  }
  return (
    <>
      <div className='block m-0'>
        <div className='block w-full h-1/2 shadow-2xl mb-4'>
          <div className="italic font-normal text-2xl">Enter the movie which details you wish to see</div>
        </div>
        <div>
        <form onSubmit={handleSubmit}>
      <input
        className='w-100 mx-5 h-7 rounded-xl text-center mb-5'
        type="text"
        id="movie"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Movie name"
      />
       <button className='' onClick={getInput}>Submit</button>
       </form>
    </div>
    {
      inputValue==='Inception' ?
        <Card movie="Inception" dir="Christopher Nolan" yr="(2014)" genre="Sci-fi" pic="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg" link="https://www.imdb.com/title/tt1375666/"/> : null
    }
    {
      inputValue==='Edge Of Tomorrow' ?
      <Card movie="Edge Of Tomorrow" dir="Doug Liman" yr="(2014)" genre="Sci-fi" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq-uYPkMBwR3839SeocPELr1oab2QiU2UkeA&usqp=CAU" link="https://www.imdb.com/title/tt1631867/"/> : null
    }
    {inputValue !== 'Inception' && inputValue !== 'Edge Of Tomorrow' ? <p>Invalid input</p> : null}
         {/* <Card movie="Inception" dir="Christopher Nolan" yr="(2014)" genre="Sci-fi" pic="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg" link="https://www.imdb.com/title/tt1375666/"/> */}
         {/* <Card movie="Edge Of Tomorrow" dir="Doug Liman" yr="(2014)" genre="Sci-fi" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq-uYPkMBwR3839SeocPELr1oab2QiU2UkeA&usqp=CAU" link="https://www.imdb.com/title/tt1631867/"/> */}
      </div>
    </>
  )
}

// function getInput(){
//   var word=document.getElementById('movie').value; console.log(word);
// }

export default App
