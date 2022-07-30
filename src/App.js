import { Routes, useParams } from "react-router-dom";
import { Route } from "react-router-dom";
import { Home } from "./pages/home/home.component";
import { fetchFeedbacks, panelToggler } from "./store/feedbackSlice";
import { fetchSuggestionsFilters } from "./store/suggestionFilterSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostComment } from "./pages/postComment/postComment.component";
import { AddFeedback } from "./pages/addFeedback/addFeedback.component";
import { Container } from "./components/container/container.component"
function App() {
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(fetchFeedbacks())
    dispatch(fetchSuggestionsFilters())
  }, [dispatch]);

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post-comment/:id" element={<PostComment />} />
        <Route path="/add-feedback" element={<AddFeedback />} />
        <Route path="/edit-feedback" element={"edit feedback"} />
        <Route path="/roadmap" element={"roadmap"} />
      </Routes>
    </Container> 
  );
}

export default App;
