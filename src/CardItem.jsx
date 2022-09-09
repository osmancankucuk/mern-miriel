import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardSubtitle,
  CardText,
 
  ListGroup,
  ListGroupItem,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import "./css/CardItem.css";

import { fetchPosts } from "./redux/actions/post";
import { useDispatch, useSelector } from "react-redux";
import noImage from "./images/noimage.svg";
import moment from "moment";
import projectTours from "./images/project-tours.svg";
import "./css/General.css";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";

const CardItem = ({ calculateMd, layout }) => {
  const [nation, setCountry] = useState("");
  const [number, handleNumber] = useState("");
  const [input, setTel] = useState("");
  const [input1, setMessage] = useState("");
  let getData = (formattedValue) => {
    console.log(formattedValue);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      number: input,
      data: input1,
    };
    await axios
      .post(`https://mern-miriel.herokuapp.com/sendMail`, data)
      .then(console.log("Başarılıı"));
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  const posts = useSelector((state) => state.post.posts);
  const logUser = useSelector((state) => state.post.loginUser);
  let handleChangee = () => {
    console.log("hello");
  };
  const convertRelativeTime = (time) => {
    return moment(time).fromNow();
  };
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={10}>
            <div className="card-group">
              {posts.length > 0 &&
                posts.map((post) => (
                  <div className={`col-md-${layout}`} key={post._id}>
                    <Card
                      style={{
                        cursor: "pointer",
                      }}
                      className="m-1"
                    >
                      <CardImg
                        variant="top"
                        src={post.image ? post.image : noImage}
                        style={{ height: "181px" }}
                      />
                      <CardBody>
                        <CardTitle className="text-center">
                          <h4>{post.title} </h4>
                        </CardTitle>
                        <CardSubtitle className="mb-2 text-muted text-center">
                          {post.price ? post.price + "$" : "get information"}
                        </CardSubtitle>
                        <CardText>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </CardText>
                      </CardBody>
                      <ListGroup className="list-group-flush">
                        <ListGroupItem>Cras justo odio</ListGroupItem>
                        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                        <ListGroupItem>
                          {convertRelativeTime(post.createdAt)}
                        </ListGroupItem>
                      </ListGroup>
                      <CardBody>
                        <Link
                          className="text-decoration-none "
                          to={`/posts/${post._id}`}
                        >
                          <div className="d-grid gap-2">
                            <Button className="btn btn-default">
                              Daha Fazlası...
                            </Button>
                          </div>
                        </Link>
                      </CardBody>
                    </Card>
                  </div>
                ))}
            </div>
          </Col>
        </Row>
      </Container>
      <br />
      <Container fluid="md" style={{ background: "#FFFFFF" }} className="my-2">
        <Row>
          <div className="d-flex justify-content-md-center my-2">
            <Col lg={10}>
              <h3>Services</h3>
              <hr />
            </Col>
          </div>
          <div className="d-flex justify-content-md-center">
            <Col
              className="p-3 m-3"
              style={{ border: "1px solid grey", borderRadius: "20px" }}
              md={3}
            >
              <div className="d-flex">
                <div>
                  <img
                    src={projectTours}
                    alt=""
                    style={{ height: "100px", width: "100px" }}
                  />
                </div>
                <div>
                  <h5>
                    Keep an eye on developments with regular project tours
                  </h5>
                </div>
              </div>
            </Col>
            <Col
              className="p-3 m-3"
              style={{ border: "1px solid grey", borderRadius: "20px" }}
              xs
              lg={3}
            >
              <div className="d-flex">
                <div>
                  <img
                    src={projectTours}
                    alt=""
                    style={{ height: "100px", width: "100px" }}
                  />
                </div>
                <div>
                  <h5>
                    Keep an eye on developments with regular project tours
                  </h5>
                </div>
              </div>

              <p>
                We provide an array of transportation options for your
                convenience, including daily tours ...
              </p>
            </Col>
            <Col
              className="p-3 m-3"
              style={{ border: "1px solid grey", borderRadius: "20px" }}
              xs
              lg={3}
            >
              <div className="d-flex">
                <div>
                  <img
                    src={projectTours}
                    alt=""
                    style={{ height: "100px", width: "100px" }}
                  />
                </div>
                <div>
                  <h5>
                    Keep an eye on developments with regular project tours
                  </h5>
                </div>
              </div>

              <p>
                We provide an array of transportation options for your
                convenience, including daily tours ...
              </p>
            </Col>
          </div>
        </Row>
      </Container>
      <Container
        style={{ paddingTop: "30px", paddingBottom: "30px" }}
        fluid="md"
        id="formInput"
      >
        <div className="text-center">
          <h4 className="mt-2 mb-4">
            <span className="bold">LET US CALL YOU </span>
            <span className="light">
              WE WILL HELP YOU TO CHOOSE BEST INVESTMENT FOR YOU
            </span>
          </h4>
        </div>

        <Form>
          <Row className="mx-2">
            <Col md={6}>
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <FormGroup>
                    <Input
                      className="inputProp"
                      placeholder="Fullname"
                      type="text"
                    ></Input>
                  </FormGroup>
                </li>
                <li>
                  <FormGroup>
                    <IntlTelInput
                      style={{ width: "473px" }}
                      className="inputProp"
                      // containerClassName="intl-tel-input"
                      inputClassName="form-control"
                      defaultCountry="tr"
                      onFlagClick={(countryData) => {
                        handleNumber(countryData.dialCode);
                      }}
                      onPhoneNumberChange={(
                        status,
                        value,
                        countryData,
                        number,
                        id
                      ) => {
                        console.log("onPhoneNumberChange value", value);
                        console.log("onPhoneNumberChange number", number);
                      }}
                    />
                  </FormGroup>
                </li>
                <li>
                  <FormGroup>
                    <Input placeholder="Email Adress" type="email" />
                  </FormGroup>
                </li>
              </ul>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Input
                  placeholder="Intrested Projects / Messages"
                  type="textarea"
                  style={{ resize: "none", width: "500px", height: "100px" }}
                />
              </FormGroup>

              <Button
                id="submitFormBut"
                type="submit"
                style={{ background: "#EC6724" }}
              >
                SEND
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default CardItem;
