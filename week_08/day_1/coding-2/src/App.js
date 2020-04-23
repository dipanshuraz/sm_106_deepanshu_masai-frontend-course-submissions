import React, { Component } from "react";
import "./App.css";
import Mobile from "./components/mobile";
import Button from "./components/button";
import Card from "./components/card";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: ["Mobile Operating system", "Mobile Manufactures"],
      os: ["Android", "BlackBerry", "BlackBerry", "Windows Phone"],
      manufacturer: ["Samsung", "HTC", "Micromax", "Apple"],
      btnData: [
        { label: "JOIN US", color: "#3998CD" },
        { label: "SETTINGS", color: "#6F9FAD" }
      ],
      btnData2: [
        { label: "LOGIN", color: "#F49D3F" },
        { label: "CONTACT US", color: "#B0282E" }
      ],
      btnData3: [
        { label: "SEARCH", color: "#689E40" },
        { label: "HELP", color: "#534E88" }
      ],
      btnData4: [
        { label: "HOME", color: "#EA4D92" },
        { label: "DOWNLOAD", color: "#986E3C" }
      ],
      card: {
        name: "Deepanshu Prajapati",
        location: "Patna",
        description: "Full Stack Developer UI / UX Designer",
        skills: [
          "UI/UX",
          "Front End Developer",
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Node"
        ]
      }
    };
  }
  render() {
    // console.log(this.state.color);
    console.log(this.state.card);
    return (
      <div>
        <Mobile heading={this.state.heading[0]} name={this.state.os} />
        <Mobile
          heading={this.state.heading[1]}
          name={this.state.manufacturer}
        />
        <Button data={this.state.btnData} />
        <Button data={this.state.btnData2} />
        <Button data={this.state.btnData3} />
        <Button data={this.state.btnData4} />
        <Card cardData={this.state.card} />
      </div>
    );
  }
}

export default App;
