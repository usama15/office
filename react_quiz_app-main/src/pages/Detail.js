import React from "react";
// import {Link ,BrowserRouter as Router} from "react-router-dom";

class Detail extends React.Component{
    render() {
        return(
           <div className='main'>
               <div className="row" style={{textAlign:'center'}}>
                   <div className="col-md-12">
                       <div className="card">
                           <div className="card-body">
                               <h6 className="card-title">Frequently Asked Questions</h6>
                               <div id="accordion" className="accordion" role="tablist">
                                   <div className="card">
                                       <div className="card-header" role="tab" id="headingOne">
                                           <h6 className="mb-0">
                                               <a data-toggle="collapse" href="#collapseOne" aria-expanded="true"
                                                  aria-controls="collapseOne">
                                                   Why is the moon sometimes out during the day?
                                               </a>
                                           </h6>
                                       </div>
                                       <div id="collapseOne" className="collapse show" role="tabpanel"
                                            aria-labelledby="headingOne" data-parent="#accordion">
                                           <div className="card-body">
                                               Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                               terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                               skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                               Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                                               single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                                               helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                               proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                                               beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                                               haven't heard of them accusamus labore sustainable VHS.
                                           </div>
                                       </div>
                                   </div>
                                   <div className="card">
                                       <div className="card-header" role="tab" id="headingTwo">
                                           <h6 className="mb-0">
                                               <a className="collapsed" data-toggle="collapse" href="#collapseTwo"
                                                  aria-expanded="false" aria-controls="collapseTwo">
                                                   Why is the sky blue?
                                               </a>
                                           </h6>
                                       </div>
                                       <div id="collapseTwo" className="collapse" role="tabpanel"
                                            aria-labelledby="headingTwo" data-parent="#accordion">
                                           <div className="card-body">
                                               Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                               terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                               skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                               Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                                               single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                                               helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                               proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                                               beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                                               haven't heard of them accusamus labore sustainable VHS.
                                           </div>
                                       </div>
                                   </div>
                                   <div className="card">
                                       <div className="card-header" role="tab" id="headingThree">
                                           <h6 className="mb-0">
                                               <a className="collapsed" data-toggle="collapse" href="#collapseThree"
                                                  aria-expanded="false" aria-controls="collapseThree">
                                                   Will we ever discover aliens?
                                               </a>
                                           </h6>
                                       </div>
                                       <div id="collapseThree" className="collapse" role="tabpanel"
                                            aria-labelledby="headingThree" data-parent="#accordion">
                                           <div className="card-body">
                                               Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                               terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                               skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                               Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                                               single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                                               helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                               proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                                               beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                                               haven't heard of them accusamus labore sustainable VHS.
                                           </div>
                                       </div>
                                   </div>
                                   <div className="card">
                                       <div className="card-header" role="tab" id="headingFour">
                                           <h6 className="mb-0">
                                               <a className="collapsed" data-toggle="collapse" href="#collapseFour"
                                                  aria-expanded="false" aria-controls="collapseFour">
                                                   How much does the Earth weigh?
                                               </a>
                                           </h6>
                                       </div>
                                       <div id="collapseFour" className="collapse" role="tabpanel"
                                            aria-labelledby="headingFour" data-parent="#accordion">
                                           <div className="card-body">
                                               Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                               terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                               skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                               Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                                               single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                                               helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                               proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                                               beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                                               haven't heard of them accusamus labore sustainable VHS.
                                           </div>
                                       </div>
                                   </div>
                                   <div className="card">
                                       <div className="card-header" role="tab" id="headingFive">
                                           <h6 className="mb-0">
                                               <a className="collapsed" data-toggle="collapse" href="#collapseFive"
                                                  aria-expanded="false" aria-controls="collapseFive">
                                                   How do airplanes stay up?
                                               </a>
                                           </h6>
                                       </div>
                                       <div id="collapseFive" className="collapse" role="tabpanel"
                                            aria-labelledby="headingFive" data-parent="#accordion">
                                           <div className="card-body">
                                               Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                               terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                               skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                               Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                                               single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                                               helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                               proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                                               beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                                               haven't heard of them accusamus labore sustainable VHS.
                                           </div>
                                       </div>
                                   </div>
                                   <div className="card">
                                       <div className="card-header" role="tab" id="headingSix">
                                           <h6 className="mb-0">
                                               <a className="collapsed" data-toggle="collapse" href="#collapseSix"
                                                  aria-expanded="false" aria-controls="collapseSix">
                                                   How can go to star?
                                               </a>
                                           </h6>
                                       </div>
                                       <div id="collapseSix" className="collapse" role="tabpanel"
                                            aria-labelledby="headingSix" data-parent="#accordion">
                                           <div className="card-body">
                                               Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                               terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                               skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                               Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                                               single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                                               helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                               proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                                               beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                                               haven't heard of them accusamus labore sustainable VHS.
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        )
    }
}

export default Detail;
