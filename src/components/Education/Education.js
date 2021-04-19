import { Container, Card, Carousel } from 'react-bootstrap'
import React from 'react'

const Education = () => {
    return (
        <>

            {/* -------------------------------------------------Carousel-------------------------------------------------- */}
            <Carousel>
                <Carousel.Item style={{ height: "300px" }}>
                    <img src="https://images.unsplash.com/photo-1614607034276-45e1f7c25d88?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE4Mjk0OTg5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1400" alt="img"/>
                    <Carousel.Caption>
                        <h2>First</h2>
                        <p>abc</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: "300px" }}>
                    <img src="https://images.unsplash.com/photo-1617639172227-8cd70cf91476?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE4Mjk1MDgz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1400" alt="img"/>
                    <Carousel.Caption>
                        <h2>Sec</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: "300px" }}>
                    <img src="https://images.unsplash.com/photo-1616400619175-5beda3a17896?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE4Mjk0OTc5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1400" alt="img"/>
                    <Carousel.Caption>
                        <h2>3</h2>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* -------------------------------------------------XXX XXX-------------------------------------------------- */}
            <Card className="mb-3 m-5">
                <img src="https://images.unsplash.com/photo-1616915559700-cf820fb4d405?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE4MDU2NDMw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1400" class="card-img-top" alt="..." />
                <Card.Body>
                    <h2 class="card-title text-center text-primary">Lorem ipsum</h2>
                    <p class="card-text text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </Card.Body>
            </Card>

            {/* -------------------------------------------------Skills-------------------------------------------------- */}
            <Container className="d-flex p-2 align-items-center justify-content-center flex-wrap mt-5">
                <Card className="m-4 mb-3" style={{ width: "18rem" }}>
                    <img src="https://images.unsplash.com/photo-1617529497471-9218633199c0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE4Mjk0NTc1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300" alt="img"/>
                    <Card.Body>
                        <h5 class="card-title">Coding</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/education" class="btn btn-info">Learn More</a>
                    </Card.Body>
                </Card>

                <Card className="m-4 mb-3" style={{ width: "18rem" }}>
                    <img src="https://images.unsplash.com/photo-1612156514704-478bcd8734a3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE4Mjk0MDk4&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300" alt="img"/>
                    <Card.Body>
                        <h5 class="card-title">Cooking</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/education" class="btn btn-info">Learn More</a>
                    </Card.Body>
                </Card>

                <Card className="m-4 mb-3" style={{ width: "18rem" }}>
                    <img src="https://images.unsplash.com/photo-1617529497832-5ad49d9b5928?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE4Mjk0Nzgw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300" alt="img"/>
                    <Card.Body>
                        <h5 class="card-title">Reading</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/education" class="btn btn-info">Learn More</a>
                    </Card.Body>
                </Card>
            </Container>

            {/* -------------------------------------------------Contributions-------------------------------------------------- */}
            <Container className="d-flex p-2 align-items-center justify-content-around flex-wrap mt-4 mb-3">
                <h1 className="w-100 text-center m-3 text-primary">Contribute</h1>
                <Card className="text-center m-2">
                    <Card.Header>
                        <ul class="nav nav-pills card-header-pills">
                            <li class="nav-item">
                                <a class="nav-link active btn-info" href="/education">Active</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/education">Learn more</a>
                            </li>
                        </ul>
                    </Card.Header>
                    <Card.Body>
                        <h5 class="card-title">Donate books</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="/education" class="btn btn-info">Donate{'>>'}</a>
                    </Card.Body>
                </Card>

                <Card className="text-center m-2">
                    <Card.Header>
                        <ul class="nav nav-pills card-header-pills">
                            <li class="nav-item">
                                <a class="nav-link active btn-info" href="/education">Active</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/education">Learn more</a>
                            </li>
                        </ul>
                    </Card.Header>
                    <Card.Body>
                        <h5 class="card-title">Educate a Girl child</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="/education" class="btn btn-info">Continue{'>>'}</a>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default Education;