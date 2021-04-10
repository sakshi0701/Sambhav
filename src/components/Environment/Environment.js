import { Container, Card, Carousel } from 'react-bootstrap'
import React from 'react'

const Environment = () => {
    return (
        <>

            {/* -------------------------------------------------Carousel-------------------------------------------------- */}
            <Carousel>
                <Carousel.Item style={{ height: "300px" }}>
                    <img src="https://images.unsplash.com/photo-1617958235394-8ee0218bf25f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE4MDQ2OTM3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1400" />
                    <Carousel.Caption>
                        <h2>First</h2>
                        <p>abc</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: "300px" }}>
                    <img src="https://images.unsplash.com/photo-1617904258492-678a5f40a4b0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE4MDQ2Njk4&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1400" />
                    <Carousel.Caption>
                        <h2>Sec</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: "300px" }}>
                    <img src="https://images.unsplash.com/photo-1617889818350-c3488f3d1efe?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE4MDQ2ODcy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1400" />
                    <Carousel.Caption>
                        <h2>3</h2>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* -------------------------------------------------Farmer's Portal-------------------------------------------------- */}
            <Card className="mb-3 m-5">
                <img src="https://images.unsplash.com/photo-1616915559700-cf820fb4d405?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE4MDU2NDMw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1400" class="card-img-top" alt="..." />
                <Card.Body>
                    <h2 class="card-title text-center text-primary">Farmer's Portal</h2>
                    <p class="card-text text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </Card.Body>
            </Card>

            {/* -------------------------------------------------Government-------------------------------------------------- */}
            <Container className="d-flex p-2 align-items-center justify-content-center flex-wrap mt-5">
                <Card className="m-4 mb-3" style={{ width: "18rem" }}>
                    <img src="https://images.unsplash.com/photo-1547453155-ae5be9428a4f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE4MDQ3NDc2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200" />
                    <Card.Body>
                        <h5 class="card-title">Ganga Action Plan</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-info">Learn More</a>
                    </Card.Body>
                </Card>

                <Card className="m-4 mb-3" style={{ width: "18rem" }}>
                    <img src="https://images.unsplash.com/photo-1617341547625-21fd3189804a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE4MDUxMjgz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200" />
                    <Card.Body>
                        <h5 class="card-title">National Clean Air Programme (NCAP)</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-info">Learn More</a>
                    </Card.Body>
                </Card>

                <Card className="m-4 mb-3" style={{ width: "18rem" }}>
                    <img src="https://images.unsplash.com/photo-1547453155-ae5be9428a4f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE4MDQ3NDc2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200" />
                    <Card.Body>
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-info">Learn More</a>
                    </Card.Body>
                </Card>
            </Container>

            {/* -------------------------------------------------Small Contributions-------------------------------------------------- */}
            <Container className="d-flex p-2 align-items-center justify-content-around flex-wrap mt-4 mb-3">
                <h1 className="w-100 text-center m-3 text-primary">Small Scale Contributions</h1>
                <Card className="text-center m-2">
                    <Card.Header>
                        <ul class="nav nav-pills card-header-pills">
                            <li class="nav-item">
                                <a class="nav-link active btn-success" href="#">Active</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Learn more</a>
                            </li>
                        </ul>
                    </Card.Header>
                    <Card.Body>
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-success">Plant</a>
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

export default Environment;
