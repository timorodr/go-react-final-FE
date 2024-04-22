import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Card, Row, Col } from "react-bootstrap";
import "../App.css";

const Entry = ({entryData, deleteSingleEntry, setChangeEntry}) => {
    return (
        <div className="med-entry">
            <Card>
                <Card.Header className="card-header">Name:{entryData !== undefined && entryData.name}</Card.Header>
                <Card.Body>Medication Name</Card.Body>
                <Row>
                    <Col>Name:{entryData !== undefined && entryData.name}</Col>
                    <Col>Dosage:{entryData !== undefined && entryData.dosage}</Col>
                    <Col>Description:{entryData !== undefined && entryData.description}</Col>
                    {/* <Col>Fat:{entryData !== undefined && entryData.fat}</Col> */}
                    <Col><Button type="button" class="btn btn-danger" className="delete-entry" size="sm" onClick={() => deleteSingleEntry(entryData._id)}>
                           Delete
                        </Button>
                    </Col>
                    {/* <Col><Button size="sm" onClick={() => changeIngredient()}>change ingredients</Button></Col> */}
                    <Col><Button size="sm" onClick={() => changeEntry()}>change entry</Button></Col>
                </Row>
            </Card>
        </div>
    )

    // function changeIngredient(){
    //     setChangeIngredient(
    //         {
    //             "change": true,
    //             "id": entryData._id
    //         }
    //     )
    // }

    function changeEntry(){
        setChangeEntry(
            {
                "change": true,
                "id": entryData._id
            }
        )
    }
}

export default Entry