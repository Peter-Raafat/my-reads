
import BookList from "./BookList";

const Shelf = ({ title, books, onShelfUpdate }) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <BookList books={books} onShelfUpdate={onShelfUpdate}></BookList>
            </div>
        </div>
    )
}

export default Shelf;