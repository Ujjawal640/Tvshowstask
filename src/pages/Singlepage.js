import { useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
// Context
import ShowsContext from "../context/shows/showsContext";


const Singlepage = ({ match }) => {
  const history = useNavigate();
  const { getSingleShow, singleShow, loading } = useContext(ShowsContext);
  const { id } = useParams();

  useEffect(() => {
    
    getSingleShow(id);
    console.log(getSingleShow(id));

    // eslint-disable-next-line
  }, []);

  const removeTags = (text) => {
    if (text === null || text === "") {
      return false;
    } else {
      text = text.toString();
    }
    return text.replace(/(<([^>]+)>)/gi, "");
  };

  const book = (e) => {
    e.preventDefault();

        history(`/bookticket/${id}`)
    

    

}

  return (
    <>
      
        <div className="singleshow row mx-5">
          <div className="col-lg-12 col-10">
          <img
            src={
              singleShow.image
                ? singleShow.image.medium
                : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
            }
            alt={singleShow.name}
         className="float-start imageshadow p-3" />
          <div className="singleshow__info">
            <h1>{singleShow.name}</h1>
            {singleShow.genres &&
              singleShow.genres.map((genre) => (
                <span key={genre} className="singleshow__genre">
                  {genre}
                </span>
              ))}
            <p>
              <strong>Status:</strong> {singleShow.status && singleShow.status}
            </p>
            <p>
              <strong>Rating:</strong>{" "}
              {singleShow.rating ? singleShow.rating.average : "No rating"}
            </p>
            <p>
              <strong>Offical Site:</strong>{" "}
              {singleShow.officalSite ? (
                <a
                  href={singleShow.officalSite}
                  target="_blank"
                  rel="noreferrer"
                >
                  {singleShow.officalSite}
                </a>
              ) : (
                "No offical site"
              )}
            </p>
            <p>Summary : {singleShow.summary && removeTags(singleShow.summary)}</p>
            <button variant="primary" className='btn btn-danger m-4 ' onClick={book}  type="submit">Book Ticket</button>
  
          </div>
        </div>
        </div>
    
    </>
  );
};

export default Singlepage;
