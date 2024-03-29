import React, { useState } from "react";
import "./index.css";
import _ from "lodash";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Row, Col } from "reactstrap";
import {
  FaBaby,
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaBook,
} from "react-icons/fa";
const Timeline = () => {
  const [timeline] = useState([
    {
      icon: <FaBaby className="text-muted" />,
      date: "07 January 1999",
      position: "right",
      title: "First Cry",
      subTitle: "Madurai",
      para: "Was the first entry to the World...",
    },
    {
      icon: <FaBook className="text-muted" />,
      date: "2015 - 2016",
      position: "left",
      title: "School Life",
      subTitle: "Successfully completed School education with 60%",
      para: "At Sri sadhana Matriculation Higher Secondary School in Madurai.",
    },
    {
      icon: <FaCode className="text-muted" />,
      date: "June 2018",
      position: "right",
      title: "Internship",
      subTitle: "Position - UI/UX Developer",
      para: '<span class="text-success">3 Weeks</span> duration for the training period at <span class="text-info">Jaishu Consulting Pvt Ltd.',
    },
    {
      icon: <FaCode className="text-muted" />,
      date: "Sep - Nov 2018",
      position: "left",
      title: "Internship",
      subTitle: "Position - UI/UX Designer",
      para: '<span class="text-warning">2 Months</span> of learning UI/UX designing mobile interface at <span class="text-primary">Virtualgodown Technologies Pvt Ltd.',
    },
    {
      icon: <FaGraduationCap className="text-muted" />,
      date: "2016 - 2020",
      position: "right",
      title: "College Life",
      subTitle: "Successfully graduated in First class",
      para: "K.L.N. College of Engineering, Madurai",
    },
    {
      icon: <FaBriefcase className="text-muted" />,
      date: "Feb 2020 - Jun 2021",
      position: "left",
      title: "career",
      subTitle: "HRBluSky",
      para: "position as a Software Developer at Anna Nagar in Madurai.",
    },
    {
      icon: <FaBriefcase className="text-muted" />,
      date: "Jun 2021 - Present",
      position: "right",
      title: "career",
      subTitle: "RoaDo",
      para: "position as a UI/UX Designer at Bangalore.",
    },
  ]);
  const renderAsHtml = (data) => {
    return { __html: data };
  };
  const renderTimeline = () => {
    return _.map(timeline, (data, i) => {
      return (
        <VerticalTimelineElement
          key={i}
          dateClassName="text-light"
          date={data.date}
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgba(0,0,0,.3)",
            color: "#fff",
            borderTop: "2px solid rgb(255,255,255)",
            boxShadow: "none",
          }}
          position={data.position}
          contentArrowStyle={{ borderRight: "7px solid  rgb(255,255,255)" }}
          iconStyle={{
            boxShadow: "0px 0px 0px transparent",
            background: "rgb(255,255,255)",
            color: "#000",
          }}
          icon={data.icon}
        >
          <h1
            className="vertical-timeline-element-title"
            dangerouslySetInnerHTML={renderAsHtml(data.title)}
          />
          <h6
            className="vertical-timeline-element-subtitle text-muted lead mt-2"
            dangerouslySetInnerHTML={renderAsHtml(data.subTitle)}
          />
          <p dangerouslySetInnerHTML={renderAsHtml(data.para)} />
        </VerticalTimelineElement>
      );
    });
  };
  return (
    <div className="timeline">
      <div className="text-uppercase position-sticky">
        <h3 className="text-light display-4 text-center">Timeline</h3>
      </div>
      <div className="container">
        <Row>
          <Col xs={12}>
            <VerticalTimeline animate={true}>
              {renderTimeline()}
            </VerticalTimeline>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Timeline;
