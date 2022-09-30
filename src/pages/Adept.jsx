import { Button, Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';


function Adept({products}){


   
    return (

        <>
        <h1>Pagina de adept</h1>

        <p>Dedicated to supporting our customers with meaningful medical solutions to improve people’s lives. 
            Clinically led solutions for patient & workspace management in Interventional Radiology & Cardiology, 
            and devices in Otology, Rhinology and Sterilisation, designed and manufactured in New Zealand.</p>

        {products.map( product => {
            return(
                <>
                 <Card className="my-2">
            <CardImg
              alt="Card image cap"
              src={product.image}
              style={{
                height: 300,
              width: 500}}
              top
              width="auto"
            />
            <CardBody>
              <CardTitle tag="h5">
                  {product.name}
              </CardTitle>
              <CardText>
                  {product.shortDescription}
              </CardText>
              <CardText>
                <Button>More details</Button>
              </CardText>
            </CardBody>
          </Card>
                </>
            )
           
        })}

            
        


        </>

    )
}

export default Adept;