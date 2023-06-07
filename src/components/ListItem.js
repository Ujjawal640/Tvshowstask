import { Link } from "react-router-dom";

const ListItem = ({ image, name, genres, id }) => {
  console.log(id);
  return (
  
   
      <div class="card">
  <img src={image} alt={name} class="card-img-top" />
  <div class="card-body">
  <h4 className="text-center fw-bold card-title">{name}</h4>
        <h6 className="text-center" >{genres}</h6>
        <Link to={`/singleshow/${id}`} className="btn btn-primary link" >More</Link>
       
  </div>
</div>


   

  );
};

export default ListItem;
