import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Card, Row, Col } from "react-bootstrap";
import "../App.css";
import ColorCheckboxes from "./Checkbox";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const Entry = ({entryData, deleteSingleEntry, setChangeEntry}) => {
    console.log(entryData.medication_id)
    return (
        <div className="med-entry">
            <Card style={{boxShadow: '0px 7px 9px rgba(0, 0, 0, 0.2)'}}>
                <Card.Header className="card-header" style={{display: "flex", justifyContent: "center", alignItems: "center", fontSize: 30}}>{entryData !== undefined && entryData.name}
                    <Button style={{marginLeft: 10}} size="sm" onClick={() => changeEntry()}><FaEdit /></Button>
                    <Button style={{backgroundColor: "red", marginLeft: 10, borderColor: "red"}} type="button" class="btn btn-danger" className="delete-entry" size="sm" onClick={() => deleteSingleEntry(entryData.medication_id)}><MdDeleteForever /></Button>
                </Card.Header>

                <Row style={{fontSize: 18, height: 150}}>
                    <Col><b style={{fontSize: 20}}>Dosage:</b><Col>{entryData !== undefined && entryData.dosage}</Col></Col>
                    <Col><b style={{fontSize: 20}}>Description:</b><Col>{entryData !== undefined && entryData.description}</Col></Col>
                    <Col style={{fontSize: 20}}><ColorCheckboxes/></Col>
                </Row>
            </Card>
        </div>
    )


    function changeEntry(){
        setChangeEntry(
            {
                "change": true,
                "id": entryData.medication_id            }
        )
    }
}

export default Entry