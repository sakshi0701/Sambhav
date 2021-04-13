import { Container, Card, Carousel } from 'react-bootstrap'
import React from 'react'

const Health = () => {
    return (
        <>

            {/* -------------------------------------------------Carousel-------------------------------------------------- */}
            <Carousel>
                <Carousel.Item style={{ height: "300px" }}>
                    <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE4MjkwNTA2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1400" />
                    <Carousel.Caption>
                        <h2>First</h2>
                        <p>abc</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: "300px" }}>
                    <img src="https://images.unsplash.com/photo-1616390865493-ef36c0680870?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE4MjkwNjkx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1400" />
                    <Carousel.Caption>
                        <h2>Sec</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: "300px" }}>
                    <img src="https://images.unsplash.com/photo-1615631570866-4ff59a69093a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE4MjkwNzg0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1400" />
                    <Carousel.Caption>
                        <h2>3</h2>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* -------------------------------------------------Corona Tracker-------------------------------------------------- */}
            <Card className="mb-3 m-5">
                <img src="https://images.unsplash.com/photo-1616526628217-c21fd2eef624?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE4MjkxMDgz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1400" class="card-img-top" alt="..." />
                <Card.Body>
                    <h2 class="card-title text-center text-primary">Corona Tracker</h2>
                    <p class="card-text text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </Card.Body>
            </Card>

            {/* -------------------------------------------------Government-------------------------------------------------- */}
            <Container className="d-flex p-2 align-items-center justify-content-center flex-wrap mt-5">
                <Card className="m-4 mb-3" style={{ width: "18rem" }}>
                    <img src="https://images.unsplash.com/photo-1616064988065-d7f80aa3b54f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE4MjkwNTQ3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300" />
                    <Card.Body>
                        <h5 class="card-title">Ganga Action Plan</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-info">Learn More</a>
                    </Card.Body>
                </Card>

                <Card className="m-4 mb-3" style={{ width: "18rem" }}>
                    <img src="https://images.unsplash.com/photo-1616391182219-e080b4d1043a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE4MjkwNDM4&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300" />
                    <Card.Body>
                        <h5 class="card-title">National Clean Air Programme (NCAP)</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-info">Learn More</a>
                    </Card.Body>
                </Card>

                <Card className="m-4 mb-3" style={{ width: "18rem" }}>
                    <img src="https://images.unsplash.com/photo-1615631648086-325025c9e51e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=310&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE4MjkxMDA2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=310" />
                    <Card.Body>
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-info">Learn More</a>
                    </Card.Body>
                </Card>
            </Container>

            {/* -------------------------------------------------Contribute-------------------------------------------------- */}
            <Container className="d-flex p-2 align-items-center justify-content-around flex-wrap mt-4 mb-3">
                <h1 className="w-100 text-center m-3 text-primary">Contribute</h1>
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
                        <h5 class="card-title">Donte blood</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-info">Donate</a>
                    </Card.Body>
                </Card>

                <Card className="text-center m-2">
                    <Card.Header>
                        <ul class="nav nav-pills card-header-pills">
                            <li class="nav-item">
                                {/* <a class="nav-link active btn-info" href="#">Active</a> */}
                            </li>
                            <li class="nav-item">
                                {/* <a class="nav-link" href="#">Learn more</a> */}
                            </li>
                        </ul>
                    </Card.Header>
                    <Card.Body>
                        <h5 class="card-title">Hospital Foundations</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-info">Learn more</a>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default Health;
