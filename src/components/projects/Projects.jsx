import { useEffect, useState } from "react";
import ProjectsList from "../projectsList/ProjectsList"
import "./Projects.scss"
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  pythonPortfolio,
  cplusplusPortfolio,
} from "../../data";

import { Fade, Slide } from "react-awesome-reveal";



export default function Projects() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "React",
    },
    {
      id: "mobile",
      title: "Flutter",
    },
    {
      id: "python",
      title: "Python",
    },
    {
      id: "c++",
      title: "C++",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "python":
        setData(pythonPortfolio);
        break;
      case "c++":
        setData(cplusplusPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (

    <div className="projects" id="projects">

      <Fade duration={2500} triggerOnce='true'>

        <h1><span>03. Projects</span></h1>
        <ul>
          {list.map((item) => (
            <ProjectsList
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          ))}
        </ul>
      </Fade>
      <div className="container">
        <Slide triggerOnce='true'>
          {data.map((d) => (
            <div className="item">
              <img
                src={d.img}
                alt="background-pic"
              />
              <h3>{d.title}</h3>
              <a href={d.github} target="somethingUnique">View Github</a>
            </div>

          ))}
        </Slide>
      </div>


    </div>
  );
}
