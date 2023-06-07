import { Link } from "react-router-dom";

const ListItem = ({ image, name, rating, id }) => {
  console.log(id);
  return (
  
    <Link to={`/singleshow/${id}`} className="link" >
      <div class="card">
  <img src={image} alt={name} class="card-img-top" />
  <div class="card-body">
  <h4 className="text-center card-title">{name}</h4>
        <h4 className="text-center" >{rating}</h4>
  </div>
</div>
</Link>

   

  );
};

export default ListItem;
