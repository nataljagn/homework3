import './App.css';
import BookData from './BookData';
import BooksList from './BooksList';
import { BOOKS } from './andmed';
import { useState } from 'react';




function App() {

  const [valitudRaamatuId, setValitudRaamatuId] = useState(null);



  return (
  <div calssName="App">
    <header className="App-header" style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>


      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <p>
          <strong> Top 3: Bestselling Books</strong>
        </p>


        {
          BOOKS.map((book, index) => (
            <div >
              <a style={{cursor: 'pointer' }} key={book.name} onClick={() => setValitudRaamatuId(index)} ><BooksList book={book}></BooksList></a>
              <br />
            </div>
          ))
        }</div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        { valitudRaamatuId != null ? <BookData  bookdata={BOOKS[valitudRaamatuId]} /> : null}
       </div>
    </header>
  </div>

);
}

export default App;
