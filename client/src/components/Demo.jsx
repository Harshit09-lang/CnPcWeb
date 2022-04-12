// import demo from "../images/demo.jpg";
import {
  PieChart,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Pie,
  Legend,
  Tooltip,
  ResponsiveContainer,
  Sector,
  Cell,
  Label
} from "recharts";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-elastic-carousel";
// import styled from "styled-components";
import Item from "./Item";

const data01 = [
  { name: " Mechanical Engineering", value: 23, fill: "#003399" },
  { name: "Civil Engineering", value: 20, fill: "#015100" },
  { name: "Computer Science and Engineering", value: 86, fill: "#FF6600" },
  { name: "Electrical Engineering", value: 62, fill: "#CE65DF" },
  // { name: 'Group E', value: 278, fill:'#AFCA54'},
  // { name: 'Group F', value: 189, fill:'#CE65DF'},
];
const data02 = [
  { name: " Mechanical Engineering", value: 25, fill: "#003399" },
  { name: "Civil Engineering", value: 21, fill: "#015100" },
  { name: "Computer Science and Engineering", value: 92, fill: "#FF6600" },
  { name: "Electrical Engineering", value: 51, fill: "#CE65DF" },
  { name: "Engineering Physics", value: 19, fill: "#990132" },
  { name: "Data Science and Engineering", value: 36, fill: "#7F7F7F" },
  { name: "Bio Engineering", value: 18, fill: "#ed1727" },
];
const data03 = [
  { name: "Bio Technology", value: 16, fill: "#003399" },
  { name: "STE", value: 13, fill: "#015100" },
  { name: "PED", value: 16, fill: "#FF6600" },
  { name: "CSP", value: 3, fill: "#CE65DF" },
  { name: "MES", value: 10, fill: "#990132" },
  { name: "VLSI", value: 14, fill: "#7F7F7F" },
  { name: "EEM", value: 12, fill: "#ed1727" },
];
const data04 = [
  { name: "PhD", value: 315, fill: "#003399" },
  // { name: "STE", value: 13, fill: "#015100" },
  // { name: "PED", value: 16, fill: "#FF6600" },
  // { name: "CSP", value: 3, fill: "#CE65DF" },
  // { name: "MES", value: 10, fill: "#990132" },
  // { name: "VLSI", value: 14, fill: "#7F7F7F" },
  { name: "MS", value: 62, fill: "#ed1727" },
];
const data05 = [{ name: "Development Studies", value: 12, fill: "#ed1727" }];
const data06 = [
  { name: "Chemistry", value: 42, fill: "#003399" },
  { name: "Physics", value: 27, fill: "#7F7F7F" },
  { name: "Applied Maths", value: 34, fill: "#ed1727" },
];
export const Demo = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }
    ]
  };
  return (
    // <div className="acadmic container demo blue">
    //   <h2 className="homehead">Student Demographics</h2>
    //   <img src={demo} className="demoimg" alt="Demographics" />
    // </div>
    <div id="demographics" className="Pie">
      <div>
        <hr className="left-lg" />
        <h3 className="homeHead homeHead-lg">Student Demographics</h3>
        <hr className="right-lg" />
      </div>
      {/* <h3 className="h3">
        <center>Number of Students in Each Stream</center>
      </h3> */}
      <div className="homeSlider2">
        <Slider {...settings}>
          <div className="sliderItem2">
            <div className="slidePallet2">
            <h3 style={{"fontSize":"25px"}}>Title</h3>
              <center>
                <PieChart
                  width={500}
                  height={300}
                  margin={{ top: 0, right: 10, left: 10, bottom: 0 }}
                >
                  <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={data01}
                    cx={170}
                    cy={160}
                    outerRadius={80}
                    fill="#fff"
                    label
                    // title={"Chart of diffferent branches"}
                  ></Pie>
                  <Tooltip />
                  <Legend
                    layout="vertical"
                    verticalAlign="middle"
                    align="left"
                  />
                </PieChart>
              </center>
            </div>
          </div>
          <div className="sliderItem2">
            <div className="slidePallet2">
              <h3 style={{"fontSize":"25px"}}>Title</h3>
              <center>
                <PieChart
                  width={500}
                  height={300}
                  margin={{ top: 0, right: 10, left: 10, bottom: 0 }}
                >
                  <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={data02}
                    cx={170}
                    cy={160}
                    outerRadius={80}
                    fill="#fff"
                    label
                  ></Pie>
                  <Tooltip />
                  <Legend
                    layout="vertical"
                    verticalAlign="middle"
                    align="left"
                  />
                </PieChart>
              </center>
            </div>
          </div>
          <div className="sliderItem2">
            <div className="slidePallet2">
              <h3 style={{"fontSize":"25px"}}>Title</h3>
              <center>
                <PieChart
                  width={500}
                  height={300}
                  margin={{ top: 0, right: 10, left: 10, bottom: 0 }}
                >
                  <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={data03}
                    cx={220}
                    cy={160}
                    outerRadius={80}
                    fill="#fff"
                    label
                  ></Pie>
                  <Tooltip />
                  <Legend
                    layout="vertical"
                    verticalAlign="middle"
                    align="left"
                    // textDecoration={fontSize="100px"}
                  />
                </PieChart>
              </center>
            </div>
          </div>
          <div className="sliderItem2">
            <div className="slidePallet2">
              <h3 style={{"fontSize":"25px"}}>Title</h3>
              <center>
                <PieChart
                  width={500}
                  height={300}
                  margin={{ top: 0, right: 10, left: 10, bottom: 0 }}
                >
                  <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={data04}
                    cx={250}
                    cy={160}
                    outerRadius={80}
                    fill="#fff"
                    label
                  ></Pie>
                  <Tooltip />
                  <Legend
                    layout="vertical"
                    verticalAlign="middle"
                    align="left"
                  />
                </PieChart>
              </center>
            </div>
          </div>
          <div className="sliderItem2">
            <div className="slidePallet2">
              <h3 style={{"fontSize":"25px"}}>Title</h3>
              <center>
                <PieChart
                  width={500}
                  height={300}
                  margin={{ top: 0, right: 0, left: 10, bottom: 0 }}
                >
                  <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={data05}
                    cx={190}
                    cy={160}
                    outerRadius={80}
                    fill="#fff"
                    label
                    //   innerRadius={40}
                    // outerRadius={90}
                  ></Pie>
                  <Tooltip />
                  <Legend
                    layout="vertical"
                    verticalAlign="middle"
                    align="left"
                  />
                </PieChart>
              </center>
            </div>
          </div>
          <div className="sliderItem2">
            <div className="slidePallet2">
              <h3 style={{"fontSize":"25px"}}>Title</h3>
              <center>
                <PieChart
                  width={500}
                  height={300}
                  margin={{ top: 0, right: 10, left: 10, bottom: 0 }}
                >
                  <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    // onMouseMove={onMouseMove}
                    data={data06}
                    // dataKey="duration"
                    cx={220}
                    cy={160}
                    outerRadius={80}
                    fill="#fff"
                    label
                  >
                    {/* <Label /> */}
                  </Pie>
                  <Tooltip />
                  <Legend
                    className="legendSize"
                    layout="vertical"
                    verticalAlign="middle"
                    align="left"
                  />
                </PieChart>
              </center>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
