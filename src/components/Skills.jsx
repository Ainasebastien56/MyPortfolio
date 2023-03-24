import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import cercle from "../images/circle95-percent.png"

export function Skills(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div className="skill" id="skills">
                <div className="skill-bx">
                    <h2>Skills</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat amet saepe laudantium quam maxime esse labore adipisci autem, numquam impedit ullam ad quisquam similique vitae ratione excepturi ducimus doloribus. Cumque.</p>

                <Carousel responsive={responsive} infinite={true} className = "skill-slider">
                    <div className="item">
                        <img src={cercle} alt="image" />
                        <h5>Web Designer</h5>
                    </div>
                    <div className="item">
                        <img src={cercle} alt="image" />
                        <h5>Web developer</h5>
                    </div>
                    <div className="item">
                        <img src={cercle} alt="image" />
                        <h5>Web developer</h5>
                    </div>
                </Carousel>

                </div>
        </div>
    )
}