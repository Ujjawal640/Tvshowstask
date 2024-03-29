import { useContext, useEffect, useState } from "react";

// Context
import ShowsContext from "../context/shows/showsContext";

// Components
import ListItem from "../components/ListItem";


const Homepage = () => {
  const showsContext = useContext(ShowsContext);
  const { loading, shows } = showsContext;
  console.log(shows);
  const [searchTerm, setSearchTerm] = useState("");

  
  const { searchShows } = showsContext;

  useEffect(() => {
    //Runs on the first render
    //And any time any dependency value changes
    searchShows(searchTerm);
  }, []);

  return (
    <div>
    <div className="row gy-3 mx-4 my-4">
    
        <div className="row">
          {shows.map((item) => (
          <div key={item.show.id} className="col-sm-6 col-md-4 col-lg-3 my-3" >
            <ListItem
              key={item.show.id}
              id={item.show.id}
              image={
                item.show.image.original
              }
              name={item.show.name}
              genres={
                item.show.genres[0]
                  
              }
            />  
            </div>
          ))}
        </div>
    
    </div>
            </div>
          
  
  );
};

export default Homepage;