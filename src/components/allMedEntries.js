import React, {useState, useEffect} from "react";
import axios from "axios"
import {Button, Form, Container, Modal} from 'react-bootstrap'
import Entry from './singleEntry'


const Entries = () => {

    const [entries, setEntries] = useState([])
    const [refreshData, setRefreshData] = useState(false)
    const [changeEntry, setChangeEntry] = useState({"change": false, "id": 0}) // help us change the entire entry
    const [changeIngredient, setChangeIngredient] = useState({"change": false, "id": 0}) 
    const [newIngredientName, setNewIngredientName] = useState("") 
    const [addNewEntry, setAddNewEntry] = useState(false) 

    const [newEntry, setNewEntry] = useState({"name": "", "dosage": "", "description": ""}) 


    // INITIAL LOAD UP
    useEffect(() => {
        getAllEntries()
    }, [])

    if(refreshData){
        setRefreshData(false)
        getAllEntries()
    }


    console.log(entries)
    return(
        <div>
            <Container>
                <Button onClick={() => setAddNewEntry(true)}>Add A Medication</Button>
            </Container>
            <Container>
            {entries != null && entries.map((entry, i) => (
                <Entry entryData={entry} deleteSingleEntry={deleteSingleEntry} setChangeIngredient={setChangeIngredient} setChangeEntry={setChangeEntry}/>
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
                        {/* <Form.Label>Fat</Form.Label>
                        <Form.Control type="number" onChange={(event) => {newEntry.fat = event.target.value}}></Form.Control> */}
                    </Form.Group>
                    <Button onClick={() => addSingleEntry()}>Add</Button>
                    {/* To cancel we just set state back to how it was initially */}
                    <Button onClick={() => setAddNewEntry(false)}>Cancel</Button> 
                </Modal.Body>
            </Modal>

            {/* <Modal show={changeIngredient.change} onHide={() => setChangeIngredient({"change": false, "id": 0})} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Change Ingredients</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>New Ingredients</Form.Label>
                        <Form.Control onChange={(event) => {setNewIngredientName(event.target.value)}}></Form.Control>
                    </Form.Group>
                    <Button onClick={() => changeIngredientForEntry()}>Change</Button>
                    <Button onClick={() => setChangeIngredient({"change": false, "id": 0})}>Cancel</Button>
                </Modal.Body>
            </Modal> */}

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
                        {/* <Form.Label>Fat</Form.Label>
                        <Form.Control type="number" onChange={(event) => {newEntry.fat = event.target.value}}></Form.Control> */}
                    </Form.Group>
                    <Button onClick={() => changeSingleEntry()}>Change</Button>
                    <Button onClick={() => setChangeEntry({"change": false, "id": 0})}>Cancel</Button>
                </Modal.Body>
            </Modal>
        </div>
    )

    // function changeIngredientForEntry(){
    //     changeIngredient.change = false
    //     let URL = "http://localhost:8000/ingredient/update/" + changeIngredient.id
    //     axios.put(URL, {
    //         "ingredients": newIngredientName
    //     }).then(response => {
    //         console.log(response.status)
    //         if(response.status === 200){
    //             setRefreshData(true)
    //         }
    //     })
    // }

    function changeSingleEntry(){
        changeEntry.change = false
        let URL = "http://localhost:8000/entry/update/" + changeEntry.id
        axios.put(URL, {
            "name": newEntry.name,
            "dosage": newEntry.dosage,
            "description": newEntry.description
        })
        .then(response => {
            if(response.status === 200){
                setRefreshData(true)
            }
        })
    }


// call api's

    function addSingleEntry(){
        setAddNewEntry(false)
        let URL = "http://localhost:8000/entry/create"
        axios.post(URL, {
            "name": newEntry.name,
            "dosage": newEntry.dosage,
            "description": newEntry.description
        }).then(response => {
            if(response.status === 200){
                setRefreshData(true)
            }
        })
    }

    function deleteSingleEntry(id){
        let URL = "http://localhost:8000/entry/delete/" + id
        axios.delete(URL, {

        }).then(response => {
            if(response.status === 200){
                setRefreshData(true)
            }
        })
    }

    function getAllEntries(){
        let URL = "http://localhost:8000/entries"
        axios.get(URL, {
            responseType: 'json'
        }).then(response => {
            if(response.status === 200){
                setEntries(response.data)
            }
        })
    }

}

export default Entries