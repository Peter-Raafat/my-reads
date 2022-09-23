import { Link } from "react-router-dom";
import Shelf from "../components/Shelf";

const ShelvesPage = ({ shelvesBooks, onShelfUpdate }) => {
    const shelves = [
        { title: "Currently Reading", books: shelvesBooks.filter(b => b.shelf === 'currentlyReading') },
        { title: "Want to Read", books: shelvesBooks.filter(b => b.shelf === 'wantToRead') },
        { title: "Read", books: shelvesBooks.filter(b => b.shelf === 'read') },
    ];
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {
                        shelves.map(shelf => {
                            return <Shelf key={shelf.title} title={shelf.title} books={shelf.books} onShelfUpdate={onShelfUpdate}></Shelf>
                        })
                    }
                </div>
            </div>
            <div className="open-search">
                <Link to="/search"></Link>
            </div>
        </div>)
}

export default ShelvesPage;