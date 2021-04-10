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
               <footer className="footer d-flex flex-column flex-md-row align-items-center justify-content-between">
                   <p className="text-muted text-center text-md-left">
                       Use is subject to full acceptance of Terms of Use and Privacy
                       Policy, bar none. Investing is risky and can result in huge
                       losses.
                       <br/> Information provided is not financial advice and we do
                       not warrant or guarantee the contents are accurate, up-to-date
                       or reliable.{" "}
                   </p>
                   <p className="text-muted text-center text-md-left mb-0 d-none d-md-block">
                       StockApe ©{" "}
                       <a href="https://twitter.com/stock_ape">
                           <img src="twitter.svg"/>
                       </a>{" "}
                       <a href="https://www.reddit.com/r/StockApeAI/">
                           <img
                               src="reddit1.svg"
                               id="redditbg"
                               style={{height: "35px"}}
                           />
                       </a>{" "}
                   </p>
               </footer>
           </div>
        )
    }
}

export default Contact;
