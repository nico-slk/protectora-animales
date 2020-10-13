import React from 'react'
import { useFirebase, useFirestore } from "react-redux-firebase";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from 'react-bootstrap/Container'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export const CreatePet = () => {
    const firebase = useFirebase();
    const firestore = useFirestore();
    const { uid } = useSelector((state) => state.firebase.auth);

    const [pet, setPet] = React.useState({});
    const updateField = (e) => {
        setPet({
            ...pet,
            [e.target.name]: e.target.value
        });
    };

    const createAnimal = (e) => {
        e.preventDefault()
        firestore.collection('pet').add({
            name: pet.name,
            age: pet.age,
            gender: pet.gender,
            castreted: pet.castreted,
            kind: pet.kind,
            personality: pet.personality,
            size: pet.size
        })
        .then(() => {
            window.location = '/'
            // history.push("/")
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            return(error)
        });
    };

    return (
        <div>
            <Container fluid={true}>
                <h3 className="display-6 font-weight-light justify-content py-4 ml-5">CREAR MASCOTA</h3>
                <Row className='justify-content-center'>
                    <Col md={8}>
                        <Form onSubmit={createAnimal}>


                            <Form.Group>

                                <Row>

                                    <Col md={6}>
                                        <Form.Control id='name' name='name' type='text' placeholder='Nombre' onChange={updateField} value={pet.name} />

                                    </Col>
                                    <Col md={6}>
                                        <Form.Control id='age' name='age' type='number' placeholder='Edad' onChange={updateField} value={pet.age} />

                                    </Col>
                                </Row>
                            </Form.Group>

                            <Form.Group>
                                <Row>
                                    <Col md={6}>
                                        <label for="inputState">Genero</label>
                                        <select onChange={updateField} value={pet.gender} name='gender' id="inputState" class="form-control" placeholder="Genero">
                                            <option defaultValue>Seleccione una opción</option>
                                            <option value="Macho">Macho</option>
                                            <option value="Hembra">Hembra</option>
                                        </select>
                                    </Col>
                                    <Col md={6}>
                                        <label for="inputState">Castrado</label>
                                        <select onChange={updateField} value={pet.castreted} name='castreted' id="inputState" class="form-control">
                                            <option defaultValue>Seleccione una opción</option>
                                            <option value="SI">SI</option>
                                            <option value="NO">NO</option>
                                        </select>

                                    </Col>
                                    <Col md={6}>
                                        <label for="inputState">Tipo de mascota</label>
                                        <select onChange={updateField} value={pet.kind} name='kind' id="inputState" class="form-control">
                                            <option defaultValue>Seleccione una opción</option>
                                            <option value="Perro">Perro</option>
                                            <option value="Gato">Gato</option>
                                        </select>

                                    </Col>
                                </Row>
                            </Form.Group>

                            <Form.Group>
                                <Row>

                                    <Col md={6}>
                                        <Form.Control onChange={updateField} value={pet.personality} id='personality' name='personality' type='text' placeholder='Personalidad' />

                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group>
                                <Row>

                                    <Col md={6}>
                                        <Form.Control onChange={updateField} value={pet.size} id='size' name='size' type='number' placeholder='Tamaño' />

                                    </Col>
                                </Row>
                            </Form.Group>
                            <button type="submit" class="btn btn-primary">CREAR</button>

                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
