import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Redux Import
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import rReviews from "./reducers/rReviews";
import rProfile from "./reducers/rProfile";
import rMovies from "./reducers/rMovies";
import rActiveUser from "./reducers/rActiveUser";

// Style
import "./css/index.css";

// Component Import
import SignIn from "./components/SignIn";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import Recommended from "./components/Recommended";
import Browse from "./components/Browse";
import Movie from "./components/Movie";




// Redux Store
const rootReducer = combineReducers({
  users: rProfile,
  reviews: rReviews,
  movies: rMovies,
  activeUser: rActiveUser,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/////////////////////
// Page code
/////////////////////

ReactDOM.render(
  <React.StrictMode>
    <> 
        <Provider store={store}>

              

              <Router>
                  <Header/>
                  <main>
                    <Route path="/" exact> <SignIn /> </Route>
                    <Route path="/Browse"> <Browse /> </Route>
                    <Route path="/Recommended"> <Recommended /> </Route>
                    <Route path="/UserProfile"> <UserProfile /> </Route>
                    <Route path="/Movie"> <Movie /> </Route>
                  </main>

              </Router>
  

          <Footer />

      </Provider> 
      
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
