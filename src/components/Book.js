import { update } from "../BooksAPI";
import ShelfSelect from "./ShelfSelect";

const Book = ({ book, onShelfUpdate }) => {
    const { title: bookTitle, authors: bookAuthors, imageLinks: bookCoverURLs, shelf: bookShelf } = book;
    const handelShelfChange = (shelf) => {
        updateShelf(book, shelf);
    }
    const updateShelf = async (book, shelf) => {
        await update(book, shelf);
        onShelfUpdate();
    }
    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${bookCoverURLs?.thumbnail || ''})`,
                    }}
                ></div>
                <ShelfSelect bookShelf={bookShelf} onShelfChange={handelShelfChange}></ShelfSelect>
            </div>
            <div className="book-title">{bookTitle}</div>
            <div className="book-authors">{bookAuthors?.join(', ')  || ''}</div>
        </div>
    )
}
export default Book;