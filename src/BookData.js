const BookData = ({bookdata}) => (
    <div>
        <div className="App-bold-text">{bookdata.name}</div>
        <img src={bookdata.picture}></img>
        <div>{bookdata.description}</div>
        <div><br/></div>
        <div className="App-italic-text">Published: {bookdata.year}</div>
    </div>

)

export default BookData;