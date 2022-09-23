import { useState/*, useRef*/ } from "react";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";
import BookList from "../components/BookList";

const SearchPage = ({ shelvesBooks, onShelfUpdate }) => {
    const [query, setQuery] = useState("");
    const [books, setBooks] = useState([]);
    // const searchInput = useRef(); 
    const bookSearch = async (searchQuery) => {
        const booksResult = await search(searchQuery);
        setBooks(booksResult?.error ? [] : booksResult);
    }
    const changeQuery = (event) => {
        const searchQuery = event.target.value;
        setQuery(searchQuery);
        if (searchQuery.trim() === "") {
            setBooks([]);
            return;
        }
        bookSearch(searchQuery);
    }
    // const handelSubmit = (e)=>{
    //     e.preventDefault();
    //     const searchQuery = searchInput.current.value;
    //     if (searchQuery.trim()) {
    //         bookSearch(searchQuery);
    //         return;
    //     }
    //     setBooks([]);
    // }
    return (
        <div className="search-books" /*onSubmit={handelSubmit}*/>
            <div className="search-books-bar">
                <Link className="close-search" to="/"></Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                        value={query}
                        onChange={(e) => changeQuery(e)}
                    //ref={searchInput}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <BookList books={
                    books.map(b => {
                        let shelfBook = shelvesBooks.find(sBook => b.id === sBook.id);
                        return (shelfBook?.shelf ? { ...b, shelf: shelfBook.shelf } : { ...b, shelf: 'none' })
                    })}
                    onShelfUpdate={onShelfUpdate}>
                </BookList>
            </div>
        </div>
    )
}

export default SearchPage;