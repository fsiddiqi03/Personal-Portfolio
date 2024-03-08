import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './projects.css';

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
    description: "Developed a python-based discord bot that integrates with a minecraft server hosted on AWS EC2, offering direct communication, server management, and control capabilities.",
    imageUrl: "https://via.placeholder.com/150",
    buttonUrl: "https://github.com/fsiddiqi03/DiscordAWS"
  },
  {
    id: 2,
    title: "Raspberry Pi Home Flood Detector",
    description: "Developed a Python script to detect home flooding using a sensor attached to a raspberry pi. Automatically sends email notifications whenever the raspberry pi detects water through the sensor alerting the homeowner of the flood/leak.",
    imageUrl: "https://via.placeholder.com/150",
    buttonUrl: "https://github.com/fsiddiqi03/RaspberryPi-Flood-Detector"
  },
  {
    id: 3,
    title: "Hand Gesture Light Control",
    description: "Utilized MediaPipe and OpenCV in python for hand gesture recognition, enabling philips hue light brightness control via their REST API. Brightness adjusted  based on the distance between the thumb and index finger.    ",
    imageUrl: "https://via.placeholder.com/150",
    buttonUrl: "https://github.com/fsiddiqi03/Hand-Gesture-Light-Control"
  }
];


const Projects = () => {
  return (
    <Container>
      <Row>
        {projects.map((project) => (
          <Col md={4} key={project.id}> {/* Ensure responsive layout */}
            <Card className = 'card'>
              <Card.Img className = 'img' variant="top" src={project.imageUrl} />
              <Card.Body className='body'>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button target= '_blank' variant="primary" className = 'button' href={project.buttonUrl}>Github</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects