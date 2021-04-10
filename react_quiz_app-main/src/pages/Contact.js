import React from "react";
// import {Link ,BrowserRouter as Router} from "react-router-dom";

class Contact extends React.Component{
    render() {
        return(
           <div className={'main'}>
               <div className="row">
                   <div className="col-lg-6 grid-margin">
                       <div className="card" id="myalign">
                           <div className="card-body">
                               <h4 className="card-title">Contact Us</h4>
                               <form
                                   className="cmxform"
                                   id="signupForm"
                                   method="get"
                                   action="#"
                               >
                                   <fieldset>
                                       <div className="form-group">
                                           <label htmlFor="name">Name</label>
                                           <input
                                               id="name"
                                               className="form-control"
                                               name="name"
                                               type="text"
                                           />
                                       </div>
                                       <div className="form-group">
                                           <label htmlFor="email">Email</label>
                                           <input
                                               id="email"
                                               className="form-control"
                                               name="email"
                                               type="email"
                                           />
                                       </div>
                                       <div className="form-group">
                                           <label htmlFor="password">Password</label>
                                           <input
                                               id="password"
                                               className="form-control"
                                               name="password"
                                               type="password"
                                           />
                                       </div>
                                       <div className="form-group">
                                           <label htmlFor="confirm_password">
                                               Confirm password
                                           </label>
                                           <input
                                               id="confirm_password"
                                               className="form-control"
                                               name="confirm_password"
                                               type="password"
                                           />
                                       </div>
                                       <input
                                           className="btn btn-primary"
                                           type="submit"
                                           value="Submit"
                                       />
                                   </fieldset>
                               </form>
                           </div>
                       </div>
                   </div>
               </div>

           </div>
        )
    }
}

export default Contact;
