import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./style.css";

function Loging() {
  return (
    <div className="contereAllLoginb">

        <div className='titleLoging'>{"Mybar.mg-Cocktail & Lounge"}</div>
        <Form className="contereLoginb container">
            <Form.Group className="row" controlId="formBasicText">
                <Form.Label className="col-3">Identifiant:</Form.Label>
                <Form.Control className="col-6" type="text" placeholder="Enter Identifiant" />
            </Form.Group>

            <Form.Group className="row" controlId="formBasicPassword">
                <Form.Label className="col-3">Mot de passe:</Form.Label>
                <Form.Control className="col-6" type="password" placeholder="Password" />
            </Form.Group>


            <Form.Group className="row justify-content-center" controlId="bouttonFunction1">
                <Button className="col-6" variant="primary" type="submit">
                    CONNEXION
                </Button>
            </Form.Group>

            <Form.Group className="row justify-content-center" controlId="bouttonFunction1">
                ou
            </Form.Group>

            <Form.Group className="row justify-content-center" controlId="bouttonFunction2">
                <Button className="col-6" variant="primary" type="submit">
                    VOIR LES COCKTAILS
                </Button>
            </Form.Group>

        </Form>
    </div>
  );
}

export default Loging;