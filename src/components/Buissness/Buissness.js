import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Carousel } from 'react-bootstrap'

const Buissness = () => {
    return (
        <>

                {/* -------------------------------------------------Carousel-------------------------------------------------- */}
                <Carousel>
                    <Carousel.Item style={{ height: "300px" }}>
                        <img src="https://assets.phenompeople.com/CareerConnectResources/COGNGLOBAL/images/home-page-banner-1536070928470.jpg" />
                        <Carousel.Caption>
                            <h2 className="text-dark">First</h2>
                            <p>abc</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ height: "300px" }}>
                        <img src="https://images.unsplash.com/photo-1617854616735-d4a41198e6c1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE4MjE0OTAz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1400" />
                        <Carousel.Caption>
                            <h2>Sec</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ height: "300px" }}>
                        <img src="https://images.unsplash.com/photo-1618029215393-e8ab58c45148?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE4MjE1MDc0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1400" />
                        <Carousel.Caption>
                            <h2>3</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                {/* -------------------------------------------------Find a Job-------------------------------------------------- */}
                <Card className="mb-3 m-5">
                    <img src="https://images.unsplash.com/photo-1617529497471-9218633199c0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE4MjE1NzUz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1400" class="card-img-top" alt="..." />
                    <Card.Body>
                        <Link to="/jobs"><h2 class="card-title text-center text-primary">Find a Job</h2></Link>
                        <p class="card-text text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </Card.Body>
                </Card>

                {/* -------------------------------------------------Cryptocurrency-------------------------------------------------- */}
                <Card className="mb-3 m-5">
                    <img src="https://images.unsplash.com/photo-1616559012449-b567c84bc71e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE4MjE1OTQy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1400" class="card-img-top" alt="..." />
                    <Card.Body>
                        <Link to="/crypto"><h2 class="card-title text-center text-primary">Cryptocurrency</h2></Link>
                        <p class="card-text text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </Card.Body>
                </Card>

                {/* -------------------------------------------------Explore-------------------------------------------------- */}
                <Container className="d-flex p-2 align-items-center justify-content-center flex-wrap mt-5">
                    <Card className="m-4 mb-3" style={{ width: "18rem" }}>
                        <img src="https://images.unsplash.com/photo-1509475826633-fed577a2c71b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE4MjE2NTM1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300" />
                        <Card.Body>
                            <h5 class="card-title">Buissness Ideas</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-info">Explore${'>>'}</a>
                        </Card.Body>
                    </Card>

                    <Card className="m-4 mb-3" style={{ width: "18rem" }}>
                        <img src="https://images.unsplash.com/photo-1607544836657-08d9c1d97afe?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE4MjE2NTI4&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300" />
                        <Card.Body>
                            <h5 class="card-title">Interview Tips</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-info">Learn More</a>
                        </Card.Body>
                    </Card>

                    <Card className="m-4 mb-3" style={{ width: "18rem" }}>
                        <img src="https://images.unsplash.com/photo-1617617982378-c2f9325dae3e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE4MjE3MTYz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300" />
                        <Card.Body>
                            <h5 class="card-title">Work from home tips</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-info">Learn More</a>
                        </Card.Body>
                    </Card>
                </Container>

                {/* -------------------------------------------------Communicate-------------------------------------------------- */}
                <Container className="d-flex p-2 align-items-center justify-content-around flex-wrap mt-4 mb-3">
                    <Card className="text-center m-2">
                        <Card.Header>
                            <ul class="nav nav-pills card-header-pills">
                                <li class="nav-item">
                                    <a class="nav-link active btn-info" href="#">Active</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Learn more</a>
                                </li>
                            </ul>
                        </Card.Header>
                        <Card.Body>
                            <h5 class="card-title">Post a Job</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-info">Plant</a>
                        </Card.Body>
                    </Card>

                    <Card className="text-center m-2">
                        <Card.Header>
                            <ul class="nav nav-pills card-header-pills">
                                <li class="nav-item">
                                    <a class="nav-link active btn-info" href="#">Active</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Learn more</a>
                                </li>
                            </ul>
                        </Card.Header>
                        <Card.Body>
                            <h5 class="card-title">Submit your solution</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-info">Submit</a>
                        </Card.Body>
                    </Card>
                </Container>
            </>

            
    )
}

export default Buissness;
