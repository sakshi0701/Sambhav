import React, { useEffect, useState } from "react";
import { Card, CardDeck, Form } from "react-bootstrap";
import axios from "axios";
import Columns from "react-columns";
import NumberFormat from "react-number-format";
import ReactTooltip from "react-tooltip";

function Tracker() {
  const [latest, setLatest] = useState([]);
  const [results, setResults] = useState([]);
  const [searchCountries, setSearchCountries] = useState("");

  useEffect(() => {
    axios
      .all([
        axios.get("https://corona.lmao.ninja/v2/all"),
        axios.get("https://corona.lmao.ninja/v2/countries"),
      ])
      .then((responseArr) => {
        setLatest(responseArr[0].data);
        setResults(responseArr[1].data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const date = new Date(parseInt(latest.updated));
  const lastUpdated = date.toString();

  const filterCountries = results.filter((item) => {
    return searchCountries !== ""
      ? item.country.toLowerCase().includes(searchCountries.toLowerCase())
      : item;
  });

  const countries = filterCountries.map((data, i) => {
    return (
      <Card className="m-4">
        <Card.Img variant="top" src={data.countryInfo.flag} />
        <Card.Body>
          <Card.Title>{data.country}</Card.Title>
          <Card.Text>Cases {data.cases}</Card.Text>
          <Card.Text>Deaths {data.deaths}</Card.Text>
          <Card.Text>Recovered {data.recovered}</Card.Text>
          <Card.Text>Today's cases {data.todayCases}</Card.Text>
          <Card.Text>Today's deaths {data.todayDeaths}</Card.Text>
          <Card.Text>Active {data.active}</Card.Text>
          <Card.Text>Critical {data.critical}</Card.Text>
        </Card.Body>
      </Card>
    );
  });

  var queries = [
    {
      columns: 2,
      query: "min-width: 500px",
    },
    {
      columns: 3,
      query: "min-width: 1000px",
    },
  ];

  return (
    <>
      <h2 className="text-center text-info m-3">COVID-19 Cases</h2>
      <ReactTooltip effect="solid" />
      <br />
      <CardDeck>
        <Card bg="info" text="white" className="text-center m-3" >
          <Card.Body>
            <Card.Title>Cases</Card.Title>
            <NumberFormat value={latest.cases} displayType={"text"} thousandSeparator={true} style={{ fontSize: "30px" }} />
          </Card.Body>
        </Card>
        <Card bg="danger" text={"white"} className="text-center m-3" >
          <Card.Body>
            <Card.Title>Deaths</Card.Title>
            <Card.Text>
              {" "}
              <NumberFormat value={latest.deaths} displayType={"text"} thousandSeparator={true} style={{ fontSize: "30px" }} />
            </Card.Text>
          </Card.Body>
        </Card>
        <Card bg="success" text={"white"} className="text-center m-3" >
          <Card.Body>
            <Card.Title>Recovered</Card.Title>
            <Card.Text>
              {" "}
              <NumberFormat value={latest.recovered} displayType={"text"} thousandSeparator={true} style={{ fontSize: "30px" }} />
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
      <br />
      <Form className="m-5">
        <Form.Group controlId="formGroupSearch">
          <Form.Control bg="dark" type="text" placeholder="Search for countries" onChange={(e) => setSearchCountries(e.target.value)} />
        </Form.Group>
      </Form>
      <Columns queries={queries}>{countries}</Columns>
    </>
  );
}

export default Tracker;
