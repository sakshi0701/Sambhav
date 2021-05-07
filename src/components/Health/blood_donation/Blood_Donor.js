import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'

const Blood_Donor = () => {
    return (
        <div>
            <Container>
                <h1 class='text-info' style={{ textAlign: 'center' }} > Blood Donation </h1>
                <Form>
                    <Form.Group>
                        <Form.Label class="control-label">Donor Name:</Form.Label>
                        <Form.Control placeholder='Full Name' class="form-control" id="disabledInput" required />
                    </Form.Group>

                    <Form.Group>
                        <fieldset>
                            <Form.Label class="control-label">Existing Country:</Form.Label>
                            <Form.Control placeholder='Country' class="form-control" id="readOnlyInput" type="text"
                                required />
                        </fieldset>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label class="form-control-label">Existing City:</Form.Label>
                        <Form.Control placeholder='City' class="form-control" id="inputValid" required />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label class="form-control-label" >Existing Area:</Form.Label>
                        <Form.Control placeholder='Area' class="form-control" id="inputInvalid" required />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label class="col-form-label col-form-label-lg">Phone No: </Form.Label>
                        <Form.Control placeholder='+91 XXXXXXXXXX' class="form-control" id="inputLarge"
                            type='number' required />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label class="col-form-label">Age:</Form.Label>
                        <Form.Control placeholder='Age' class="form-control" id="inputDefault" type='number' required />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label for="exampleSelect1">Blood Type: </Form.Label>
                        <select class="form-control" id="exampleSelect1" required >
                            <option value="" > Blood Type </option>
                            <option value={'A+'} > A+  </option>
                            <option value={'B+'} > B+ </option>
                            <option value={'AB+'} > AB+ </option>
                            <option value={'A-'} > A- </option>
                            <option value={'B-'} > B- </option>
                            <option value={'AB-'} > AB- </option>
                            <option value={'O+'} > O+ </option>
                            <option value={'O-'} > O- </option>
                        </select>
                    </Form.Group> <br />

                    <Button type="submit" class="btn btn-info btn-lg mb-4">Submit</Button>
                </Form>
            </Container>
        </div>
    )
}

export default Blood_Donor;
