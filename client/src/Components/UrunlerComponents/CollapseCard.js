import React from 'react';

function Card(props) {
  return (
    <div>
     <ul className="nav nav-pills nav-stacked anyClass" style={{display:'block',height:300}}>
                            <li className="nav-item">
                            <input type="checkbox" style={{marginRight:15,width:18,height:18}}/>3 GB  ve Altı
                            </li>
                            <li className="nav-item">
                            <input type="checkbox" style={{marginRight:15,width:18,height:18}}/>4 GB
                            </li>
                            <li className="nav-item">
                            <input type="checkbox" style={{marginRight:15,width:18,height:18}}/>6 GB
                            </li>
                            <li className="nav-item">
                            <input type="checkbox" style={{marginRight:15,width:18,height:18}}/>8 GB

                            </li><li className="nav-item">
                            <input type="checkbox" style={{marginRight:15,width:18,height:18}}/>12 GB

                            </li>
                            <li className="nav-item">
                            <input type="checkbox" style={{marginRight:15,width:18,height:18}}/>16 GB


                            </li><li className="nav-item">
                            <input type="checkbox" style={{marginRight:15,width:18,height:18}}/>20 GB

                            </li>
                            <li className="nav-item">
                            <input type="checkbox" style={{marginRight:15,width:18,height:18}}/>24 GB

                            </li><li className="nav-item">
                            <input type="checkbox" style={{marginRight:15,width:18,height:18}}/>32 GB

                            </li>
                            <li className="nav-item">
                            <input type="checkbox" style={{marginRight:15,width:18,height:18}}/>36 GB

                            </li>
                            <li className="nav-item">
                            <input type="checkbox" style={{marginRight:15,width:18,height:18}}/>40 GB

                            </li>
                            <li className="nav-item">
                            <input type="checkbox" style={{marginRight:15,width:18,height:18}}/>48 GB

                            </li>
                            <li className="nav-item">
                            <input type="checkbox" style={{marginRight:15,width:18,height:18}}/>64 GB

                            </li>
                            <li className="nav-item">
                            <input type="checkbox" style={{marginRight:15,width:18,height:18}}/>128 GB

                            </li>
                            <li className="nav-item">
                            <input type="checkbox" style={{marginRight:15,width:18,height:18}}/>256 GB

                            </li>
                            
                        </ul>
  </div>
  );
}

export default Card;
