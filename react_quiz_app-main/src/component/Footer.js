import React from "react";
import twitter from "../assets/twitter.svg";
import reddit from "../assets/new_reddit.svg";

const Footer = () => {
    return(
        <footer style={{ marginLeft: '250px'}} className="footer  d-flex flex-column flex-md-row align-items-center justify-content-between">
                   <p className="text-muted text-center text-md-left">
                       Use is subject to full acceptance of Terms of Use and Privacy
                       Policy, bar none. Investing is risky and can result in huge
                       losses.
                       <br/> Information provided is not financial advice and we do
                       not warrant or guarantee the contents are accurate, up-to-date
                       or reliable.
                   </p>
                   <p className="text-muted text-center text-md-left mb-0 d-none d-md-block">
                       StockApe ©{" "}
                       <a href="https://twitter.com/stock_ape">
                           <img src={twitter} style={{height: "20px"}}/>
                       </a>{" "}
                       <a href="https://www.reddit.com/r/StockApeAI/">
                           <img
                               src={reddit}
                               id="redditbg"
                               style={{height: "20px"}}
                           />
                       </a>{" "}
                   </p>
               </footer>
    )
};

export default Footer;
