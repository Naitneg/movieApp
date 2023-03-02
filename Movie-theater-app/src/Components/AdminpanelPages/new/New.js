import Navbar from "../../Adminpanel/navbar/Navbar";
import Sidebar from "../../Adminpanel/sidebar/Sidebar";
import "./new.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function New({title }) {
  const initialValues = {
    description: "",
    duration: "",
    movielanguage: "",
    releasedate: "",
    country: "",
    genre: "",
    movieimg: "",
    posterimg: "",
    title: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState(false);
  let navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
  };
  useEffect(() => {
    if (isSubmit) {
      fetch("https://hidden-lowlands-43310.herokuapp.com/api/movies", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          description: formValues.description,
          duration: formValues.duration,
          movielanguage: formValues.movielanguage,
          releasedate: formValues.releasedate,
          country: formValues.country,
          genre: formValues.genre,
          movieimg: formValues.movieimg,
          posterimg: formValues.posterimg,
          title: formValues.title,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            navigate("/movies");
          } else {
            console.log("unable to add movie");
          }
        });
    }
  }, [isSubmit]);
  return (
    <div className="new1">
      <Sidebar />
      <div className="newContainer1">
        <Navbar />
        <div className="top6">
          <h1 className="title6">{title}</h1>
        </div>
        <div className="bottom6">
          <div className="right6">
            <form onSubmit={handleSubmit}>
              <div className="formInput1">
                <input
                  type="text"
                  name="description"
                  placeholder="description"
                  value={formValues.description}
                  onChange={handleChange}
                />
              </div>
              <div className="formInput1">
                <input
                  type="number"
                  name="duration"
                  placeholder="duration"
                  value={formValues.duration}
                  onChange={handleChange}
                />
              </div>
              <div className="formInput1">
                <input
                  type="text"
                  name="movielanguage"
                  placeholder="movielanguage"
                  value={formValues.movielanguage}
                  onChange={handleChange}
                />
              </div>
              <div className="formInput1">
                <input
                  type="date"
                  name="releasedate"
                  placeholder="releasedate"
                  value={formValues.releasedate}
                  onChange={handleChange}
                />
              </div>
              <div className="formInput1">
                <input
                  type="text"
                  name="country"
                  placeholder="country"
                  value={formValues.country}
                  onChange={handleChange}
                />
              </div>
              <div className="formInput1">
                <input
                  type="text"
                  name="genre"
                  placeholder="genre"
                  value={formValues.genre}
                  onChange={handleChange}
                />
              </div>
              <div className="formInput1">
                <input
                  type="text"
                  name="movieimg"
                  placeholder="movieimg"
                  value={formValues.movieimg}
                  onChange={handleChange}
                />
              </div>
              <div className="formInput1">
                <input
                  type="text"
                  name="posterimg"
                  placeholder="posterimg"
                  value={formValues.posterimg}
                  onChange={handleChange}
                />
              </div>
              <div className="formInput1">
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={formValues.title}
                  onChange={handleChange}
                />
              </div>

              <button className="butoni1">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
