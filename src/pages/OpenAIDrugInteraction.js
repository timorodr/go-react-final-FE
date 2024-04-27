import React from 'react'
import { useState } from 'react'
import Card from 'react-bootstrap/Card';
import AuthedNav from '../components/authedNav';


// const API_KEY = "sk-proj-PNBWS0LnobxJhDsLc1U4T3BlbkFJHg9qAlXukiuiUninlSQ9" // send to env
const API_KEY = "sk-proj-FpR8u2mrBTwUknkLvJgDT3BlbkFJ0BfXrbiNcv15bHywoC9M" // send to env

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
                "Authorization": "Bearer " + API_KEY
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
                <button onClick={callOpenAIAPI}>Check potential interactions</button>
                {setAiAnswer !== "" ?
                <div style={{paddingTop: '5%'}}>
                    <Card border="primary" style={{ width: '90%', margin: 'auto'}}>
                        <Card.Header>Drug Interactions</Card.Header>
                        <Card.Body>
                        <Card.Title>Primary Card Title</Card.Title>
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