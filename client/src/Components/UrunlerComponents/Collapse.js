import React,{ useState } from 'react';
import "../../Styles/Collapse.css";

function Collapse(props) {

    const [state, setState] = useState(false);

    function showMore(){//binding kullanmadan kullanılabilir.
        setState(current => !current);
    }
        return (
            <div id="CardCollapse">
                <p style={{display:''}}>
                    <button className="CardButton dropdown-toggle w-100 " id={props.cardTitle} itemID="secondid" onClick={showMore} style={{marginTop:5,padding:0,fontSize: 22,borderRadius:10,border:0,backgroundColor:'white',textAlign:'left',color:'black'}}>
                        {React.Children.map(props.children, children => children.props.cardTitle)}

                    </button>
                    <div>
                    {
                        state ? (
                          
                                <div className="card card-body" >
                                {React.Children.map(props.children, children => children)}
                                </div>
                       
                            ) : null
                    }
                    </div>
                </p>
                        
            </div>
        );
    }

export default Collapse;//export edilince çağırılabiliyor

