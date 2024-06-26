import React, {useState, useEffect} from "react";
import axios from "axios"
import {Button, Form, Container, Modal} from 'react-bootstrap'
import Entry from './singleEntry'
import AuthedNav from "./authedNav";
import ColorCheckboxes from "./Checkbox";
import { useParams, useSearchParams } from "react-router-dom";



const Entries = () => {
    
    const {id: _id} = useParams()
    
    console.log(_id)
    const [entries, setEntries] = useState([])
    const [refreshData, setRefreshData] = useState(false)
    const [changeEntry, setChangeEntry] = useState({"change": false, "id": 0}) // help us change the entire entry
    const [addNewEntry, setAddNewEntry] = useState(false) 
    const [newEntry, setNewEntry] = useState({"name": "", "dosage": "", "description": ""}) 
    const [searchParams] = useSearchParams()
    console.log(searchParams.entries())


    // INITIAL LOAD UP
    useEffect(() => {
        getAllEntries()
    }, [])

    if(refreshData){
        setRefreshData(false)
        getAllEntries()
    }

    return(
        <div>
            <AuthedNav/>
            <Container>
                <Button onClick={() => setAddNewEntry(true)}>Add A Medication</Button>
            </Container>
            <Container>
            {entries != null && entries.map((entry, i) => (
                <Entry entryData={entry} deleteSingleEntry={deleteSingleEntry} setChangeEntry={setChangeEntry}/>
                ))}
            </Container>

            <Modal show={addNewEntry} onHide={() => setAddNewEntry(false)} centered>
                <Modal.Header closeButton>
                <Modal.Title>Add Medication</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={(event) => {newEntry.name = event.target.value}}></Form.Control>
                        <Form.Label>Dosage</Form.Label>
                        <Form.Control onChange={(event) => {newEntry.dosage = event.target.value}}></Form.Control>
                        <Form.Label>Description</Form.Label>
                        <Form.Control onChange={(event) => {newEntry.description = event.target.value}}></Form.Control>
                    </Form.Group>
                    <Button onClick={() => addSingleEntry()}>Add</Button>
                    {/* To cancel we just set state back to how it was initially */}
                    <Button onClick={() => setAddNewEntry(false)}>Cancel</Button> 
                </Modal.Body>
            </Modal>


            <Modal show={changeEntry.change} onHide={() => setChangeEntry({"change": false, "id": 0})} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Change Entry</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={(event) => {newEntry.name = event.target.value}}></Form.Control>
                        <Form.Label>Dosage</Form.Label>
                        <Form.Control onChange={(event) => {newEntry.dosage = event.target.value}}></Form.Control>
                        <Form.Label>Description</Form.Label>
                        <Form.Control onChange={(event) => {newEntry.description = event.target.value}}></Form.Control>
                    </Form.Group>
                    <Button onClick={() => changeSingleEntry()}>Change</Button>
                    <Button onClick={() => setChangeEntry({"change": false, "id": 0})}>Cancel</Button>
                </Modal.Body>
            </Modal>
        </div>
    )



    function changeSingleEntry() {
        changeEntry.change = false;
        const token = localStorage.getItem('token');
        const userID = localStorage.getItem('user_id');
        const URL = `https://go-react-final-be.onrender.com/user/entry/update/${userID}/${changeEntry.id}`;
        if (!token) {
            console.log("Missing auth token!");
            return;
        }
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        };
        axios.put(URL, {
            name: newEntry.name,
            dosage: newEntry.dosage,
            description: newEntry.description
        }, {headers})
        .then(response => {
            if (response.status === 200) {
                setRefreshData(true);
            }
        })
        .catch(error => {
            console.error("Error updating entry:", error);
        });
    }

    function addSingleEntry() {

        setAddNewEntry(false);
        const token = localStorage.getItem('token');
        const userID = localStorage.getItem('user_id');
        const URL = `https://go-react-final-be.onrender.com/user/entry/create/${userID}`;
        if (!token) {
            console.log("Missing auth token!");
            return;
        }
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        };
        axios.post(URL, {
            name: newEntry.name,
            dosage: newEntry.dosage,
            description: newEntry.description
        }, { headers })
        .then(response => {
            if (response.status === 200) {
                setRefreshData(true);
            }
        })
        .catch(error => {
            console.error("Error adding entry:", error);
        });
    }

    function deleteSingleEntry(medication_id) {
        const token = localStorage.getItem('token');
        const userID = localStorage.getItem('user_id');
        let medID = entries.medication_id
        const URL = `https://go-react-final-be.onrender.com/user/entry/delete/${userID}/${medication_id}`;
        if (!token) {
            console.log("Missing auth token!");
            return;
        }
        const headers = {
            // 'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        };
        axios.delete(URL, {headers})
        .then(response => {
            if (response.status === 200) {
                setRefreshData(true);
            }
        })
        .catch(error => {
            console.error("Error deleting entry:", error);
        });
    }

    function getAllEntries() {
        const userID = localStorage.getItem('user_id');
        const URL = `https://go-react-final-be.onrender.com/user/entries/${userID}`;
        const token = localStorage.getItem('token');
        if (!token) {
            console.log("Missing auth token!");
            return;
        }
        axios.get(URL, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            if (response.status === 200) {
                setEntries(response.data);
            }
        })
        .catch(error => {
            console.error("Error getting entries:", error);
        });
    }
}

export default Entries