import { useEffect, useState } from "react"

const ShelfSelect = ({ bookShelf, onShelfChange }) => {
    const [selectedShelf, setSelectedShelf] = useState("none");
    useEffect(() => {
        setSelectedShelf(bookShelf);
    }, [bookShelf]);
    const handelShelfChange = (e) => {
        setSelectedShelf(e.target.value);
        onShelfChange(e.target.value);
    }
    return (
        <div className="book-shelf-changer">
            <select value={selectedShelf} onChange={handelShelfChange}>
                <option value="" disabled>
                    Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}
export default ShelfSelect