import "../CSS/Categories.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// import state reducers
import { updateSearchTerm } from "../redux/userSearchTermSlice";
import { pageReset } from "../redux/currentPageSlice";
import { imagesReset } from "../redux/imagesSlice";

const Categories = ({ handleSubmit }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // state selectors
  const currentPage = useSelector((state) => state.currentPage.value);

  const categoryClickSearch = async (newSearchTerm, e) => {
    e.preventDefault();
    // Reset the page to 1 and images state to empty when a new search or category is selected
    dispatch(pageReset());
    dispatch(imagesReset());

    dispatch(updateSearchTerm(newSearchTerm));
    navigate(`/s/${newSearchTerm}`);
    // Await the completion of the async operation in handleSubmit
    await handleSubmit(newSearchTerm, currentPage, e);
  };


  return (
    <div className="categories-container scroll-menu t-w-full t-mt-3 t-text-center">
      <Link onClick={(e) => categoryClickSearch("wallpapers", e)}>Wallpapers</Link>
      <Link onClick={(e) => categoryClickSearch("3d renders", e)}>3D Renders</Link>
      <Link onClick={(e) => categoryClickSearch("nature", e)}>Nature</Link>
      <Link onClick={(e) => categoryClickSearch("architecture & interior", e)}>
        Architecture & Interiors
      </Link>
      <Link onClick={(e) => categoryClickSearch("Experimental", e)}>Experimental</Link>
      <Link onClick={(e) => categoryClickSearch("Textures & Patterns", e)}>
        Textures & Patterns
      </Link>
      <Link onClick={(e) => categoryClickSearch("Film", e)}>Film</Link>
      <Link onClick={(e) => categoryClickSearch("Animals", e)}>Animals</Link>
      <Link onClick={(e) => categoryClickSearch("Street Photography", e)}>Street Photography</Link>
      <Link onClick={(e) => categoryClickSearch("Food & Drink", e)}>Food & Drink</Link>
      <Link onClick={(e) => categoryClickSearch("Travel", e)}>Travel</Link>
      <Link onClick={(e) => categoryClickSearch("Fashion & Beauty", e)}>Fashion & Beauty</Link>
      <Link onClick={(e) => categoryClickSearch("People", e)}>People</Link>
      <Link onClick={(e) => categoryClickSearch("Health & Wellness", e)}>Health & Wellness</Link>
      <Link onClick={(e) => categoryClickSearch("Sports", e)}>Sports</Link>
      <Link onClick={(e) => categoryClickSearch("Spirituality", e)}>Spirituality</Link>
      <Link onClick={(e) => categoryClickSearch("Current Events", e)}>Current Events</Link>
      <Link onClick={(e) => categoryClickSearch("Business & Work", e)}>Business & Work</Link>
      <Link onClick={(e) => categoryClickSearch("Art & Culture", e)}>Art & Culture</Link>
    </div>
  );
};

export default Categories;