import React from "react"
import Nav from "../components/Nav"
import "../App.css"

const Dashboard = () => {
    return (
        <div>
            <header data-bs-theme="dark">
                <Nav/>
            </header>

            <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
                <div class="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://keystone.health/images/resources/nurse-showing-elderly-man-brochure.jpg" width="100%" height="100%" class="object-fit-fill" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" alt="image"/>
                    {/* <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" /></svg> */}
                    <div class="container">
                    <div class="carousel-caption text-start">
                        <h1>Simplify Your Medication Journey:</h1>
                        <p class="opacity-75">Organize, Track, and Stay Informed</p>
                        <p><a class="btn btn-lg btn-primary" href="/signup">Sign up today</a></p>
                    </div>
                    </div>
                </div>
                <div class="carousel-item">
                <img src="https://wellness360magazine.com/wp-content/uploads/2019/01/pexels-anna-shvets-3683074-scaled.jpg" width="100%" height="100%" class="object-fit-fill" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" alt="image"/>
                    <div class="container">
                    <div class="carousel-caption">
                        <h1 style={{textAlign: "left"}}>Empower You:</h1>
                        <p style={{textAlign: "left"}}>Manage Medications with Ease.</p>
                        <p><a class="btn btn-lg btn-primary" href="#dashboard-medmanage">Learn more</a></p>
                    </div>
                    </div>
                </div>
                <div class="carousel-item">
                <img src="https://t3.ftcdn.net/jpg/01/87/74/16/360_F_187741612_ls8rZmrgj8q7Bbd6Mz9kOV64Nqn4T8Q4.jpg" width="100%" height="100%" class="object-fit-fill" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" alt="image"/>
                    <div class="container">
                    <div class="carousel-caption text-end">
                        <h1>Drug Interaction Checks:</h1>
                        <p>Stay Safe and Avoid Unintended Side Effects.</p>
                        <p><a class="btn btn-lg btn-primary" href="#dashboard-drug-interactions">Learn More</a></p>
                    </div>
                    </div>
                </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
                </button>
            </div>

            <div class="container marketing">


                <div class="row">
                <div class="col-lg-4">
                <img src="https://vspnow.com/images/improved-health.png" class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img"></img>
                    {/* <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg> */}
                    <h2 class="fw-normal">Heading</h2>
                    <p>Adhering to a medication regimen as prescribed by a healthcare provider can lead to better health outcomes. This includes managing chronic conditions effectively, preventing disease progression, and reducing the risk of complications. Consistently taking medications as directed can help control symptoms, stabilize conditions, and improve overall well-being..</p>
                    {/* <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p> */}
                </div>
                <div class="col-lg-4">
                <img src="https://kao-h.assetsadobe3.com/is/image/content/dam/sites/kao/www-kao-com/global/en/sustainability/me/qol/image-01.jpg?fmt=webp&wid=1680" class="bd-placeholder-img rounded-circle" width="200" height="140" xmlns="http://www.w3.org/2000/svg" role="img"></img>
                    {/* <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg> */}
                    <h2 class="fw-normal">Heading</h2>
                    <p>Effective medication management can alleviate symptoms, improve daily functioning, and enhance overall well-being. By managing medications properly, you can maintain their independence, engage in activities they enjoy, and experience a higher quality of life.</p>
                    {/* <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p> */}
                </div>
                <div class="col-lg-4">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/717-money-bag.svg/768px-717-money-bag.svg.png" class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img"></img>
                    {/* <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg> */}
                    <h2 class="fw-normal">Heading</h2>
                    <p>Proper medication management can help minimize the need for emergency room visits, hospitalizations, and costly medical procedures by effectively managing chronic conditions and preventing complications. This can lead to significant cost savings for both individuals and healthcare systems.</p>
                    {/* <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p> */}
                </div>
                </div>




                <hr class="featurette-divider"/>

                <div class="row featurette">
                <div class="col-md-7" id="dashboard-medmanage">
                    <h2 class="featurette-heading fw-normal lh-1">Complete Medication Management. <span class="text-body-secondary">Give yourself one less worry:</span></h2>
                    <p class="lead">Stay organized and safe with ease.</p>
                </div>
                <div class="col-md-5">
                    <img src="https://i.imgur.com/GyZ16x4.png" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img"></img>
                    {/* <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg> */}
                </div>
                </div>

                <hr class="featurette-divider"/>

                <div class="row featurette">
                <div class="col-md-7 order-md-2" id="dashboard-drug-interactions">
                    <h2 class="featurette-heading fw-normal lh-1">Peace of Mind with Drug Interaction Checks: <span class="text-body-secondary">See for yourself.</span></h2>
                    <p class="lead">Know Your Medications are Safe with the power of AI Technology.</p>
                </div>
                <div class="col-md-5 order-md-1">
                    {/* <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg> */}
                    <img src="https://i.imgur.com/08EYjsS.png" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img"></img>
                </div>
                </div>

                <hr class="featurette-divider"/>

                <div class="row featurette">
                <div class="col-md-7">
                    <h2 class="featurette-heading fw-normal lh-1">Coming Soon: <span class="text-body-secondary">Appointment Calendar.</span></h2>
                    <p class="lead">No more worrying about missed doctors visits or medication refills. Stay on top of upcoming appointments with automatic notifications.</p>
                </div>
                <div class="col-md-5">
                <img src="https://mellowoodmedical.com/wp-content/uploads/2021/04/9.png" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img"></img>
                    {/* <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg> */}
                </div>
                </div>

                <hr class="featurette-divider"/>

            </div>

            <footer class="container">
                <p class="float-end"><a href="#">Back to top</a></p>
                <p>&copy; 2024 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
            </footer>


           
        </div>
    )
}

export default Dashboard