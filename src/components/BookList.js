import Book from "./Book";

const BookList = ({ books, onShelfUpdate }) => {
    return (
        <ol className="books-grid">
            {
                books.map(b => {
                    return (
                        <li key={b.id}>
                            <Book book={b} onShelfUpdate={onShelfUpdate}></Book>
                        </li>
                    )
                })
            }
        </ol>
    )
}
export default BookList;