import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate  } from "react-router-dom";
import React, { useState,useEffect } from "react";
import { login } from "../axios";


function AdminLogin() {


  const navigate = useNavigate();

 

  
  const [formData, setFormData] = useState({
    admin_username: "",
    admin_password: "",
  });

  useEffect(() =>{

  });


  function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }



    return (
                <div className="container-sm w-25 mt-5" style={{backgroundColor:'#222222',color:'white',borderRadius:10}}>                
                  <Form style={{marginTop:100,paddingBottom:50,paddingTop:50,paddingRight:25,paddingLeft:25}}
                              
                              onSubmit={(e) => {
                                e.preventDefault();
                                login(formData)
                                  .then((res) => {
                                    
                                      alert("Giriş Başarılı")
                                      navigate("/AdminPage/1");
                                    
                                  })
                                  .catch((err) => {
                                    alert(err.response.data.message);
                                  });
                              }}
                            
                  >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Kullanıcı Adı</Form.Label>
                        <Form.Control type="text" placeholder="Kullanıcı adınızı girin"   
                        onChange={(e) =>
                          setFormData({ ...formData, admin_username: e.target.value })
                        } />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Şifre</Form.Label>
                        <Form.Control type="password" placeholder="Şifre"  id="myInput"   
                        onChange={(e) =>
                          setFormData({ ...formData, admin_password: e.target.value })
                        }
                        />
                    </Form.Group>

                    <div className="row">
                    <div className="col-md-4">
                      <Form.Group className="mb-3" controlId="formBasicCheckbox">
                          <Form.Check type="checkbox" label="Şifreyi göster" onClick={myFunction}/>
                      </Form.Group>
                    </div>
                    <div className="col-md-4 offset-md-4">
                      <Button variant="primary" type="submit" style={{backgroundColor:'#044343',border:0,padding:'10px 20px'}}>
                          Giriş
                      </Button>
                    </div>
                    </div>
                </Form>
      </div>
    );  }
  
  export default AdminLogin;
