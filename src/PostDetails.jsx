import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSinglePost } from "./redux/actions/post";
import { useParams } from "react-router-dom";

// import {
//   NavbarText,
//   Carousel,
//   CarouselItem,
//   CarouselIndicators,
//   CarouselCaption,
// } from "reactstrap";
import { Carousel, Container, Row, Col } from "react-bootstrap";

const PostDetails = () => {
  let params = useParams();
  // console.log(params.id);
  const [index, active] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSinglePost(params.id));
  });
  const currentPost = useSelector((state) => state.post.currentPost);
  console.log(currentPost);

  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={9}>
            <Carousel>
              {currentPost?.detailImage.map((image) => (
                <Carousel.Item>
                  <img
                    height={"400px"}
                    className="d-block w-100 "
                    src={image}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>{currentPost.room} </h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default PostDetails;
