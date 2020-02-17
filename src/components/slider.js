import React from "react";
import Slider from "react-slick";

import { ClickMe, Piano } from "components/projects";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class ProjectSlider extends React.Component {
  render() {
    let projects = [ClickMe, Piano];
    var settings = {
      dots: true,
      infinite: true,
      speed: 750,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        {projects.map(item => {
          return (
            <a class="project-slide" key={item.title} href={item.url}>
              <div class="project-column-left">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div>
                  <u>{"Check it out \u203A"}</u>
                </div>
              </div>
              <div class="project-column-right">
                <img class="project-image" src={item.image} alt={item.alt} />
              </div>
            </a>
          );
        })}
      </Slider>
    );
  }
}
