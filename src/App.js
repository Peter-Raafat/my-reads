import "./App.css";
import './icons/loader_book.gif';
import SearchPage from "./pages/Search";
import ShelvesPage from "./pages/Shelves";
import { Route, Routes/*, useNavigate*/ } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAll } from "./BooksAPI";
import Loading from "./components/Loading";

function App() {
  // let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [shelvesBooks, setShelvesBooks] = useState([]);
  const getAllBooks = async () => {
    const result = await getAll();
    setShelvesBooks(result);
    setIsLoading(false);
  }
  const shelfDidUpdate = () => {
    setIsLoading(true);
    getAllBooks();
    // navigate("/");
  }
  useEffect(() => {
    getAllBooks();
  }, [])
  return (
    <>
      {
        isLoading ? (<Loading />) : ("")
      }
      <Routes>
        <Route exact path="/" element={<ShelvesPage shelvesBooks={shelvesBooks} onShelfUpdate={shelfDidUpdate}></ShelvesPage>} />
        <Route exact path="/search" element={<SearchPage shelvesBooks={shelvesBooks} onShelfUpdate={shelfDidUpdate}></SearchPage>} />
      </Routes>
    </>
  )
}

export default App;
