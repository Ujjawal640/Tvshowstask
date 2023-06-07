import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Formcom = ({values}) => {
    const history = useNavigate();

    const [inpval, setInpval] = useState({
        movie:values,
        name: "",
        email: "",
        date: "",
        password: ""
    })

   

   

    const getdata = (e) => {
       


        const { value, name } = e.target;
    


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();

        const { name, email, date, password } = inpval;

     
            console.log("data added succesfully");
            history("/done")
            localStorage.setItem("user",JSON.stringify(inpval));

        

    }

  return (
    <div>
       <div className="container ">
        <form>
            
        
                    <div className="m-4 p-4" >
                    <label for="exampleInputEmail1" class="form-label  fw-bold fs-3 text-danger ">Book Ticket</label>
                     <div>
                    <label for="exampleInputEmail1" class="form-label fw-bold ">Movie Name : {values}</label>
                    </div>
                            <div className="p-3" controlId="formBasicEmail">
                            <label for="exampleInputEmail1" class="form-label">Name</label>
                                <input type="text" name='name' className='form-control' onChange={getdata} placeholder="Enter Your Name" />
                            </div>
                            <div className="p-3" controlId="formBasicEmail">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" name='email' className='form-control' onChange={getdata} placeholder="Enter email" />
                            </div>

                            <div className="p-3" controlId="formBasicEmail">
                            <label for="exampleInputEmail1" class="form-label">Date</label>
                                <input onChange={getdata} className='form-control' name='date' type="date" />
                            </div>

                            
                            <button variant="primary" className='btn btn-primary m-4' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                                Submit
                            </button>
                   
                    </div>
                  
            
                    </form>
            </div>
    </div>
  )
}

export default Formcom
