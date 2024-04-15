import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./projects.css";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  buttonUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AWS Minecraft Server Bot",
    description:
      "Developed a python-based discord bot that integrates with a minecraft server hosted on AWS EC2, offering direct communication, server management, and control capabilities.",
    imageUrl: "https://via.placeholder.com/150",
    buttonUrl: "https://github.com/fsiddiqi03/DiscordAWS",
  },
  {
    id: 2,
    title: "Raspberry Pi Home Flood Detector",
    description:
      "Developed a Python script to detect home flooding using a sensor attached to a raspberry pi. Automatically sends email notifications whenever the raspberry pi detects water through the sensor alerting the homeowner of the flood/leak.",
    imageUrl: "https://via.placeholder.com/150",
    buttonUrl: "https://github.com/fsiddiqi03/RaspberryPi-Flood-Detector",
  },
  {
    id: 3,
    title: "Youtube Clone",
    description:
      "Engineered a full stack YouTube clone focusing on backend functionalities like user authentication and video processing api to standardize quality to 360p. Utilized Google Cloud for deployment and Docker for containerization. ",
    imageUrl: "https://via.placeholder.com/150",
    buttonUrl: "https://github.com/fsiddiqi03/youtube-clone",
  },
  {
    id: 4,
    title: "Hand Gesture Light Control",
    description:
      "Utilized MediaPipe and OpenCV in python for hand gesture recognition, enabling philips hue light brightness control via their REST API. Brightness adjusted  based on the distance between the thumb and index finger.    ",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
    buttonUrl: "https://github.com/fsiddiqi03/Hand-Gesture-Light-Control",
  },
  {
    id: 5,
    title: "Youtube to Spotify",
    description:
      "Develop a Python script that streamlines the process of adding music from YouTube to Spotify. This script will automatically download a YouTube video, convert it to an MP3 file, and then place it into the Local Files section of your Spotify.",
    imageUrl: "https://via.placeholder.com/150",
    buttonUrl: "https://github.com/fsiddiqi03/Yotube-to-Spotify",
  },
  {
    id: 5,
    title: "Server-less Parking Notifcation System",
    description:
      "A serverless, cloud-based architecture designed to provide real-time parking status notifications. It informs users about the current parking availability through a web application hosted on AWS, utilizing a range of AWS services for optimized performance, scalability, and reliability. Infrastructure is handled through the use of Terraform.",
    imageUrl: "https://via.placeholder.com/150",
    buttonUrl: "https://github.com/fsiddiqi03/Parking-Status-Website",
  },
];

const Projects = () => {
  return (
    <Container>
      <Row>
        {projects.map((project) => (
          <Col xs={12} key={project.id}>
            <div className="card">
              <div className="card-header">Personal Project</div>
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a
                  href={project.buttonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Github
                </a>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
