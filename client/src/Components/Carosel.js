import foto from"../Images/laptop-image.png"
import Carousel from 'react-bootstrap/Carousel';


import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function NavBar() {
    return (
      <center>
        <Carousel variant="dark" style={{width:1000,height:575,paddingRight:100,paddingLeft:100}}>
        <Carousel.Item >
 <Row xs={3} md={2} className="g-4 mt-3 d-inline">
            {Array.from({ length: 1 }).map((_, idx) => (
              <center>
              <Col >
                <Card>
                  <Card.Img variant="top" src="	https://cdn.cimri.io/image/240x240/asus-x515ja-ej2…-freedos-156-tasinabilir-bilgisayar_627521877.jpg" style={{height:350}}/>
                  <Card.Body>
                    <Card.Title style={{fontSize:20}}>Asus X515JA-EJ2120A6 Intel Core i7-1065G7 24 GB Ram 1 TB SSD Freedos 15.6" Taşınabilir Bilgisayar

                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            
              </center>
            ))}
              </Row>
    

        </Carousel.Item>
        <Carousel.Item>
        <Row xs={3} md={2} className="g-4 mt-3 d-inline">
            {Array.from({ length: 1 }).map((_, idx) => (
              <center>
              <Col >
                <Card>
                  <Card.Img variant="top" src="https://cdn.cimri.io/image/240x240/huawei-matebook…2-gb-16-inc-w11h-dizustu-bilgisayar_651895575.jpg" style={{height:350}}/>
                  <Card.Body>
                    <Card.Title style={{fontSize:20}}>Huawei MateBook 16 Ryzen 7 5800H 16 GB Ram 512 GB 16 inç W11H Dizüstü Bilgisayar
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            
              </center>
            ))}
              </Row>

        </Carousel.Item>
        <Carousel.Item>
        <Row xs={3} md={2} className="g-4 mt-3 d-inline">
            {Array.from({ length: 1 }).map((_, idx) => (
              <center>
              <Col >
                <Card>
                  <Card.Img variant="top" src="https://cdn.cimri.io/image/240x240/dell-g15-5521-g…-rtx3060-156-tasinabilir-bilgisayar_647616532.jpg" style={{height:350}}/>
                  <Card.Body>
                    <Card.Title style={{fontSize:20}}>Dell G15 5521 G55212300SEU03 i7-12700H 64 GB Ram 512 GB SSD RTX3060 15.6" Taşınabilir Bilgisayar

                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            
              </center>
            ))}
              </Row>

        </Carousel.Item>
      </Carousel>
      </center>
    );
  }
  
  export default NavBar;
  