import React from "react"
import "../App.css"
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import AuthedNav from "../components/authedNav";

const Landing = () => {

    const {id} = useParams()


    const navigate = useNavigate()

    const medList = () => {
        navigate(`/user/entry/create/${id}`); // Navigate away when done
    };

    const drugInteractionPage = () => {
        navigate(`/druginteraction`); // Navigate away when done
    };


    return (
        <div>
            <AuthedNav/>
             <div class="px-4 pt-5 my-5 text-center">
                <h1 class="display-4 fw-bold text-body-emphasis">Medication Tracking</h1>
                <div class="col-lg-6 mx-auto">
                <p class="lead mb-4">This medication tracker list helps you manage your current medications by allowing you to easily add and record them in a digital log, keeping all your prescriptions organized and readily accessible.</p>
                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <button type="button" class="btn btn-primary btn-lg px-4 me-sm-3" onClick={medList}>Medication List</button>

                </div>
                </div>
                <div class="overflow-hidden" style={{maxHeight: 300}}>
                <div class="container px-5">
                    <img src="https://t3.ftcdn.net/jpg/02/75/13/76/360_F_275137644_4Uy5of2eXBKkRXN7db5yLDEBTN70LyPG.jpg" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy"/>
                </div>
                </div>
            </div>

            <div class="b-example-divider"></div>

             <div class="px-4 pt-5 my-5 text-center border-bottom">
                <h1 class="display-4 fw-bold text-body-emphasis">AI Powered Drug Interaction Scanner</h1>
                <div class="col-lg-6 mx-auto">
                <p class="lead mb-4">Worried about conflicting medications? This AI-powered drug interaction checker analyzes medications you enter in a text field, instantly searching for any potential negative interactions to help keep you safe and informed.</p>
                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <button type="button" class="btn btn-primary btn-lg px-4 me-sm-3" onClick={drugInteractionPage}>Check interactions</button>
                </div>
                </div>
                <div class="overflow-hidden" style={{maxHeight: 300}}>
                <div class="container px-5">
                    <img src="https://www.pridepharmacysd.com/sites/default/files/page_pridepharmacy_drug-interaction-screening.png" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy"/>
                </div>
                </div>
            </div>
           
        </div>
    )
}

export default Landing