import React from 'react'
import { useState } from 'react'
import Card from 'react-bootstrap/Card';
import AuthedNav from '../components/authedNav';
import {Button} from 'react-bootstrap'


const ApiKey = process.env.REACT_APP_API_KEY

const OpenAIDrugInteraction = () => {

    const [drug, setDrug] = useState("")
    const [aiAnswer, setAiAnswer] = useState("")

    const APIBody = {
        "model": "gpt-3.5-turbo-instruct",
        "prompt": "You are an expert in medicine. Please identify if there are any drug interactions between the following:" + drug,
        "max_tokens": 300,
        "temperature": 0
      }


    async function callOpenAIAPI() {
        console.log("reached the openai api")
        await fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + ApiKey
            },
            body: JSON.stringify(APIBody)
        }).then((data) => { // data request to json
            return data.json()
        }).then((data) => { // take return and save into this data variable
            console.log(data)
            setAiAnswer(data.choices[0].text.trim())
        })
    }

    console.log(drug)

    return (
        <div>
            <AuthedNav/>
            <div style={{position: 'sticky', paddingTop: 50}}>
                <textarea
                onChange={(e) => setDrug(e.target.value)}
                placeholder='list medications here'
                cols={50}
                rows={10}
                />
            </div>
            <div>
                <Button onClick={callOpenAIAPI}>Check potential interactions</Button>
                {aiAnswer !== "" ?
                <div style={{paddingTop: '5%'}}>
                    <Card style={{ width: '90%', margin: 'auto', boxShadow: '0px 7px 9px rgba(0, 0, 0, 0.2)'}}>
                        <Card.Header>Drug Interactions</Card.Header>
                        <Card.Body>
                        {/* <Card.Title>...Awaiting input</Card.Title> */}
                        <Card.Text>
                            <h3>{aiAnswer}</h3>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                : null}
                </div>
        </div>
    )
}

export default OpenAIDrugInteraction