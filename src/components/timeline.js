import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle
} from "reactstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import EventIcon from "@material-ui/icons/Event";

function Timeline() {
  return (
    // <>
      <div className="section-gray">
        <Container fluid>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Our Activities</h2>
              {/* <h5 className="description">
                The UI Kits, Templates and Dashboards that we've created are
                used by <b>790,000+ web developers</b> in over{" "}
                <b>1,400,00 Web Projects</b>. This is what some of them think:
              </h5> */}
            </Col>
          </Row>
          <Row>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="Coming Soon"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<EventIcon />}
              >
                <Card className="card-blog">
                  <Row>
                    <Col md="6" sm="12">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("./logo.png")}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col md="6" sm="12">
                      <CardBody className="text-center">
                        <CardTitle tag="h4">HI fjk</CardTitle>
                        {/* <div className="card-description">
                    Cards are an interaction model that are spreading pretty
                    widely, in fact. What all of these have in common is that
                    they're pulling...
                  </div> */}
                        <CardFooter>
                          {/* <Button
                      className="btn-round"
                      color="danger"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      View Article
                    </Button> */}
                        </CardFooter>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Nov 2019"
                iconStyle={{ background: "#f5593d", color: "#fff" }}
                icon={<EventIcon />}
              >
                <Card className="card-blog">
                  <Row>
                    <Col md="6" sm="12">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("./logo.png")}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col md="6" sm="12">
                      <CardBody className="text-center">
                        <CardTitle tag="h4">jo</CardTitle>
                        {/* <div className="card-description">
                    Cards are an interaction model that are spreading pretty
                    widely, in fact. What all of these have in common is that
                    they're pulling...
                  </div> */}
                        <CardFooter>
                          {/* <Button
                      className="btn-round"
                      color="danger"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      View Article
                    </Button> */}
                        </CardFooter>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2008 - 2010"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                // icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  Web Designer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Los Angeles, CA
                </h4>
                <p>User Experience, Visual Design</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2006 - 2008"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                // icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  Web Designer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  San Francisco, CA
                </h4>
                <p>User Experience, Visual Design</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="April 2013"
                iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                // icon={<SchoolIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  Content Marketing for Web, Mobile and Social Media
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Online Course
                </h4>
                <p>Strategy, Social Media</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="November 2012"
                iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                // icon={<SchoolIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  Agile Development Scrum Master
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Certification
                </h4>
                <p>Creative Direction, User Experience, Visual Design</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2002 - 2006"
                iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                // icon={<SchoolIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  Bachelor of Science in Interactive Digital Media Visual
                  Imaging
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Bachelor Degree
                </h4>
                <p>Creative Direction, Visual Design</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
                // icon={<StarIcon />}
              />
            </VerticalTimeline>
          </Row>
        </Container>
      </div>
    // </>
  );
}
export default Timeline;
