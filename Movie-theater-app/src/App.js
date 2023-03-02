import React, { useContext, useState } from "react";
import HomePage from "./Pages/Dashboard/HomePage";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Movies from "./Pages/Dashboard/Movies";
import Footer from "./Components/footer/Footer";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/Login/Login";
import MovieDetail from "./Components/movieDetail/MovieDetail";
import Booking from "./Pages/Booking/Booking";
import { AuthContext } from "./Components/context/AuthContext";
import Profilpage from "./Pages/Profil/Profilpage";
import Home from "./Components/AdminpanelPages/home/Home";
import List from "./Components/AdminpanelPages/list/List";
import Single from "./Components/AdminpanelPages/single/Single";
import New from "./Components/AdminpanelPages/new/New";
import { productInputs, userInputs } from "./formSource";
import { movieColumns, userColumns } from "./datatablesource";
import SeatSelector from "./Pages/Booking/Seats";

const theaterSeats = [
  ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10"],
  ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10"],
  ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10"],
  ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10"],
  ["E1", "E2", "E3", "E4", "V1", "V2", "E7", "E8", "E9", "E10"],
  ["F1", "F2", "V3", "V4", "V5", "V6", "V7", "V8", "F9", "F10"],
];

const vipSeats = ["V1", "V2", "V3", "V4", "V5", "V6", "V7", "V8"];

const App = () => {
  const { user } = useContext(AuthContext);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else if (selectedSeats.length < 5) {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const ProtectedRoute = ({ children }) => {
    if (!user) {
      return <Navigate to="/" />;
    } else if (!user.isadmin) {
      return <Navigate to="/" />;
    }
    return children;
  };

  return (
    <BrowserRouter>
      <div className="app-contanier">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Booking" element={<Booking />} />
          <Route
            path="/Booking/:id"
            element={
              user ? (
                <SeatSelector
                  seats={theaterSeats}
                  selectedSeats={selectedSeats}
                  vipSeats={vipSeats}
                  onSeatClick={handleSeatClick}
                />
              ) : (
                <Login />
              )
            }
          />
          <Route path="/Movies/*" element={<Movies />} />
          <Route
            path="/:id/moviedetails"
            element={user ? <MovieDetail /> : <Login />}
          />
          <Route path="/profile" element={user ? <Profilpage /> : <Login />} />
          <Route path="/SignUp" element={user ? <Movies /> : <SignUp />} />
          <Route path="/Login" element={user ? <Movies /> : <Login />} />
          <Route path="/admin">
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="users">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={userColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":userID"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <New inputs={userInputs} title="Add New User" />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="movies">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={movieColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":movieID"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <New inputs={productInputs} title="ADD NEW MOVIE" />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
