import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { fillINF } from "../../actions/authActions";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
// import { updateUser } from "../../actions/authActions";

class ViewFilledForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CID: this.props.auth.user.id,
      nameOfTheCompany: "",
      postalAddress: "",
      country: "",
      PINZIP: "",
      website: "",
      typeOfOrganization: "",
      natureOfBusiness: "",
      contactPerson: "",
      designation: "",
      emailAddress: "",
      telephone: "",
      mobile: "",
      internshipProfile: "",
      skillSetRequired: "",
      tentativeNoOfInterns: "",
      tentativeJobLocations: "",
      stipendPerMonth: "",
      accommodationProvided: "",
      bonusPerksTravel: "",
      durationOfInternship: Array(4).fill(false),
      eligibilityCriteria: "",
      prePlacementTalk: "",
      resumeShortlisting: "",
      groupDiscussion: "",
      modeOfTest: "",
      modeOfInterview: "",
      typeOfTest: Array(2).fill(false),
      typeOfInterview: Array(2).fill(false),
      aptitudeTest: "",
      technicalTest: "",
      numberOfMembers: "",
      numberOfRoomsRequired: "",
      otherRequirements: "",
      virtualDriveRequirements: "",
      durationOfEachRoundHR: "",
      durationOfEachRoundTech: "",
      noOfRoundsHR: "",
      noOfRoundsTech: "",
      eligibility: [],
      btech: Array(7).fill(false),
      mtech: Array(7).fill(false),
      msc: Array(3).fill(false),
      ms: Array(2).fill(false),
      phd: Array(4).fill(false),
      ma: Array(1).fill(false),
      DataisLoaded: false,
    };
  }

  async componentDidMount() {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const FID = params.get("fid");
    const type = params.get("type");
    await axios.post('api/recruiters/viewFilledForm', {fid: FID, type:type})
    .then((res)=>{
        let data = res.data;
        const test = Array(2).fill(false);
        const typeofTest = ["Aptitude test", "Technical test"];
        for(let i=0;i<typeofTest.length;i++){
            for(let j=0;j<data.typeOfTest.length;j++){
                if(data.typeOfTest[j]==typeofTest[i]){
                  test[i] = true;
                }
            }
        }
        const internDuration = [
            "2 months winter",
            "2 months Summer",
            "6 months winter",
            "6 months Summer",
          ];
        const duration = Array(4).fill(false);
        for(let i=0;i<internDuration.length;i++){
            for(let j=0;j<data.durationOfInternship.length;j++){
                if(data.durationOfInternship[j]==internDuration[i]){
                  duration[i] = true;
                }
            }
        }
        const typeInterview = Array(2).fill(false);
        const typeofInterview = ["Technical Interview",
          "HR Interview",];
          for(let i=0;i<typeofInterview.length;i++){
            for(let j=0;j<data.typeOfInterview.length;j++){
                if(data.typeOfInterview[j]==typeofInterview[i]){
                  typeInterview[i] = true;
                }
            }
        }
        const btech = [
          "CSE",
          "DSE",
          "EE",
          "ME",
          "CE",
          "EP",
          "BIOE",
        ];
        const mtech = [
          "EEM",
          "MES",
          "VLSI",
          "BIOT",
          "PED",
          "CSP",
          "SE",
        ];
        const msc = ["CM", "AM", "PY"];
        const ms = [
          "SE",
          "SCEE",
        ];
        const phd = [
          "SE",
          "SCEE",
          "SBS",
          "SHSS",
        ];
        const ma = ["Development Studies"]
        const btechArr = Array(7).fill(false);
        const mtechArr = Array(7).fill(false);
        const mscArr = Array(3).fill(false);
        const msArr = Array(2).fill(false);
        const phdArr = Array(4).fill(false);
        const maArr = Array(1).fill(false);
        const Arr1 = [btechArr,mtechArr,mscArr,msArr,maArr,phdArr];
        const Arr2 = [btech,mtech,msc,ms,ma,phd];
        for(let i=0;i<data.eligibility.length;i++){
          for(let j=0;j<data.eligibility[i].branch.length;j++){
            for(let k=0;k<Arr1[i].length;k++){
                if(data.eligibility[i].branch[j]==Arr2[i][k]){
                  Arr1[i][k] = true;
                }
            }
          }
        }
        this.setState({
            nameOfTheCompany: data.nameOfTheCompany,
            postalAddress: data.postalAddress,
            country: data.country,
            PINZIP: data.PINZIP,
            website: data.website,
            typeOfTest: test,
            durationOfInternship: duration,
            typeOfInterview: typeInterview,
            btech: Arr1[0],
            mtech: Arr1[1],
            msc: Arr1[2],
            ms: Arr1[3],
            ma: Arr1[4],
            phd: Arr1[5],
            typeOfOrganization: data.typeOfOrganization,
            natureOfBusiness: data.natureOfBusiness,
            contactPerson: data.contactPerson,
            designation: data.designation,
            emailAddress: data.emailAddress,
            telephone: data.telephone,
            mobile: data.mobile,
            internshipProfile: data.internshipProfile,
            skillSetRequired: data.skillSetRequired,
            tentativeNoOfInterns: data.tentativeNoOfInterns,
            tentativeJobLocations: data.tentativeJobLocations,
            stipendPerMonth: data.stipendPerMonth,
            accommodationProvided: data.accommodationProvided,
            bonusPerksTravel: data.bonusPerksTravel,
            eligibilityCriteria: data.eligibilityCriteria,
            prePlacementTalk: data.prePlacementTalk,
            resumeShortlisting: data.resumeShortlisting,
            groupDiscussion: data.groupDiscussion,
            modeOfTest: data.modeOfTest,
            modeOfInterview: data.modeOfInterview,
            aptitudeTest: data.aptitudeTest,
            technicalTest: data.technicalTest,
            numberOfMembers: data.numberOfMembers,
            numberOfRoomsRequired: data.numberOfRoomsRequired,
            otherRequirements: data.otherRequirements,
            virtualDriveRequirements: data.virtualDriveRequirements,
            durationOfEachRoundHR: data.hRInterview.durationOfEachRound,
            durationOfEachRoundTech: data.technicalInterview.durationOfEachRound,
            noOfRoundsHR: data.hRInterview.noOfRounds,
            noOfRoundsTech: data.technicalInterview.noOfRounds,
            DataisLoaded: true,
        })
    }).catch((e)=>{
        console.log(e);
    })
  }

  onLogout = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const orgs = [
      "Govt. Owned",
      "MNC(Indian origin)",
      "MNC(Foreign origin)",
      "Private sector",
      "Public sector",
      "Start-up",
      "Others",
    ];
    const business = [
      "Analytics",
      "Consulting",
      "Core (Technical)",
      "I.T/ITES",
      "FMCG",
      "Finance",
      "Management",
      "Research",
      "Education (Teaching)",
      "Others",
    ];
    const test = ["Paper Based", "Online"];
    const typeofTest = ["Aptitude test", "Technical test"];
    const interview = [
      "In Person",
      "Video Conferencing",
      "Skype",
      
    ];
    const typeofInterview = ["Technical Interview",
    "HR Interview",];
    const btech = [
      "Computer Science and Engineering",
      "Data Science and Engineering",
      "Electrical Engineering",
      "Mechanical Engineering",
      "Civil Engineering",
      "Engineering Physics",
      "Bio-Engineering (B.Tech.-M.Tech. Dual Degree)",
    ];
    const mtech = [
      "Energy Engineering with specialization in Materials (EEM)",
      "Mechanical Engineering with specialization in Energy systems (MES)",
      "EE (VLSI)",
      "Biotech",
      "Power Electronics and Drives",
      "Communications and Signal Processing",
      "Structural Engineering",
    ];
    const msc = ["Chemistry", "Applied Mathematics", "Physics"];
    const ms = [
      "School of Engineering",
      "School of Computing & Electrical Engineering",
    ];
    const phd = [
      "School of Engineering",
      "School of Computing & Electrical Engineering",
      "School of Basic Sciences",
      "School of Humanities and Social Sciences",
    ];
    const ma = ["Development Studies"]
    const internDuration = [
      "2 months winter",
      "2 months Summer",
      "6 months winter",
      "6 months Summer",
    ];
    console.log(this.state);
    return (
      <>
        <Container fluid>
          <Row>
            <Col md="12">
              <Card>
                <Card.Body>
                  <Form>
                    <h2>Company Details</h2>
                    <Row>
                      <Col className="pr-1" md="6">
                        <Form.Group>
                          <label>Company name</label>
                          <Form.Control
                            defaultValue={this.state.nameOfTheCompany}
                            disabled
                            placeholder="Company name"
                            type="text"
                            id="nameOfTheCompany"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="px-1" md="6">
                        <Form.Group>
                          <label>Website</label>
                          <Form.Control
                            id="website"
                            disabled
                            defaultValue={this.state.website}
                            placeholder="Website"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <Form.Group>
                          <label>Postal Address</label>
                          <Form.Control
                            disabled
                            id="postalAddress"
                            defaultValue={this.state.postalAddress}
                            placeholder="Postal Address"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="px-1" md="6">
                        <Form.Group>
                          <label>Country</label>
                          <Form.Control
                            disabled
                            id="country"
                            defaultValue={this.state.country}
                            placeholder="Country"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="px-1" md="6">
                        <Form.Group>
                          <label>Pin/Zip code</label>
                          <Form.Control
                            disabled
                            id="PINZIP"
                            defaultValue={this.state.PINZIP}
                            placeholder="Pin/Zip code"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="px-1" md="12">
                        <Form.Group>
                          <label>Type of organization</label>
                          <br />
                          <div className="container">
                            <Row>
                              {orgs.map((item, i) => {
                                  if(this.state.typeOfOrganization==item){
                                      return (
                                        <Col className="px-1" md="2">
                                          <Form.Check
                                            inline
                                            label={item}
                                            value={i}
                                            name="typeOfOrganization"
                                            type="radio"
                                            id={`org${i}`}
                                            disabled
                                            checked
                                          />
                                        </Col>
                                      );
                                  }else{
                                    return (
                                        <Col className="px-1" md="2">
                                          <Form.Check
                                            inline
                                            label={item}
                                            value={i}
                                            name="typeOfOrganization"
                                            type="radio"
                                            id={`org${i}`}
                                            disabled
                                          //   checked="false"
                                          />
                                        </Col>
                                      );
                                  }
                              })}
                            </Row>
                          </div>
                        </Form.Group>
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Col className="px-1" md="12">
                        <Form.Group>
                          <label>Nature of Business</label>
                          <br />
                          <div className="container">
                            <Row>
                              {business.map((item, i) => {
                                  if(this.state.natureOfBusiness==item){
                                    return (
                                        <Col className="px-1" md="3">
                                          <Form.Check
                                            inline
                                            label={item}
                                            name="natureOfBusiness"
                                            value={i}
                                            type="radio"
                                            id={`business${i}`}
                                            disabled
                                            checked
                                          />
                                        </Col>
                                      );
                                  }else{
                                    return (
                                        <Col className="px-1" md="3">
                                          <Form.Check
                                            inline
                                            label={item}
                                            name="natureOfBusiness"
                                            value={i}
                                            type="radio"
                                            id={`business${i}`}
                                            disabled
                                          />
                                        </Col>
                                      );
                                  }
            
                              })}
                            </Row>
                          </div>
                        </Form.Group>
                      </Col>
                    </Row>
                    <br />
                    <br />
                    <h2>Contact Details</h2>
                    <br />
                    <Row>
                      <Col className="px-1" md="4">
                        <Form.Group>
                          <label>Contact Person</label>
                          <Form.Control
                            disabled
                            id="contactPerson"
                            defaultValue={this.state.contactPerson}
                            placeholder="Contact Person"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pl-1" md="4">
                        <Form.Group>
                          <label>Email address</label>
                          <Form.Control
                            disabled
                            id="emailAddress"
                            defaultValue={this.state.emailAddress}
                            placeholder="Email"
                            type="email"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pr-1" md="4">
                        <Form.Group>
                          <label>Designation</label>
                          <Form.Control
                            disabled
                            id="designation"
                            Value={this.state.designation}
                            placeholder="Designation"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="px-1" md="4">
                        <Form.Group>
                          <label>Telephone</label>
                          <Form.Control
                            disabled
                            id="telephone"
                            defaultValue={this.state.telephone}
                            placeholder="telephone"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pl-1" md="4">
                        <Form.Group>
                          <label>Mobile</label>
                          <Form.Control
                            disabled
                            id="mobile"
                            defaultValue={this.state.mobile}
                            placeholder="mobile"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <h2>Internship Profile</h2>
                    <br />
                    <Row>
                      <Col className="px-1" md="4">
                        <Form.Group>
                          <label>Internship profile</label>
                          <Form.Control
                            disabled
                            id="internshipProfile"
                            defaultValue={this.state.internshipProfile}
                            placeholder="Contact Person"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pl-1" md="4">
                        <Form.Group>
                          <label>Skill set required</label>
                          <Form.Control
                            disabled
                            id="skillSetRequired"
                            defaultValue={this.state.skillSetRequired}
                            placeholder="Skill set required"
                            as="textarea"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pr-1" md="4">
                        <Form.Group>
                          <label>Tentative number of Interns</label>
                          <Form.Control
                            disabled
                            id="tentativeNoOfInterns"
                            Value={this.state.tentativeNoOfInterns}
                            placeholder="Number of Interns"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="px-1" md="4">
                        <Form.Group>
                          <label>Tentative Job Location(s)</label>
                          <Form.Control
                            disabled
                            id="tentativeJobLocations"
                            defaultValue={this.state.tentativeJobLocations}
                            placeholder="Tentative Job Location(s)"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pl-1" md="4">
                        <Form.Group>
                          <label>Stipend(per month)</label>
                          <Form.Control
                            disabled
                            id="stipendPerMonth"
                            defaultValue={this.state.stipendPerMonth}
                            placeholder="Stipend"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pl-1" md="4">
                        <Form.Group>
                          <label>Accommodation Provided</label>
                          <Form.Control
                            disabled
                            id="accommodationProvided"
                            defaultValue={this.state.accommodationProvided}
                            as="textarea"
                            placeholder="mobile"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pl-1" md="4">
                        <Form.Group>
                          <label>Bonus/Perks/Travel</label>
                          <Form.Control
                            disabled
                            id="bonusPerksTravel"
                            defaultValue={this.state.bonusPerksTravel}
                            as="textarea"
                            placeholder="mobile"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pl-1" md="12">
                        <Form.Group>
                          <label>Duration of Internship</label>
                          <br />
                          <div className="container">
                            <Row>
                              {internDuration.map((item, i) => {
                                  if(this.state.durationOfInternship[i]){
                                    return (
                                        <Col className="px-1" md="12">
                                          <Form.Check
                                            inline
                                            label={item}
                                            name="durationOfInternship"
                                            value={i}
                                            type="checkbox"
                                            id={`duration${i}`}
                                            disabled
                                            checked
                                          />
                                        </Col>
                                      );
                                  }else{
                                    return (
                                        <Col className="px-1" md="12">
                                          <Form.Check
                                            inline
                                            label={item}
                                            name="durationOfInternship"
                                            value={i}
                                            type="checkbox"
                                            id={`duration${i}`}
                                            disabled
                                          />
                                        </Col>
                                      );
                                  }
                              })}
                            </Row>
                          </div>
                        </Form.Group>
                      </Col>
                    </Row>
                    <br />
                    <br />
                    <br />
                    <h2>Selection Process</h2>
                    {/* <br /> */}
                    <Row>
                      <Col className="px-1" md="12">
                        <Form.Group>
                          <label>
                            Eligibility Criteria( like minimum CGPA, etc.. )
                          </label>
                          <Form.Control
                            disabled
                            id="eligibilityCriteria"
                            defaultValue={this.state.eligibilityCriteriai}
                            placeholder="Eligibility Criteria"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pl-1" md="4">
                        <Form.Group>
                          <label>Resume Shortlisting</label>
                          <Form.Control
                            disabled
                            id="resumeShortlisting"
                            defaultValue={this.state.resumeShortlisting}
                            placeholder="Criteria for resume shortlisting"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pr-1" md="4">
                        <Form.Group>
                          <label>Pre-Placement Talk</label>
                          <Form.Control
                            disabled
                            id="prePlacementTalk"
                            Value={this.state.prePlacementTalk}
                            placeholder="Number of Interns"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="px-1" md="4">
                        <Form.Group>
                          <label>Group Discussion</label>
                          <Form.Control
                            disabled
                            id="groupDiscussion"
                            defaultValue={this.state.groupDiscussion}
                            placeholder="Mention group size and other details"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pl-1" md="12">
                        <Form.Group>
                          <br />
                          <label>Mode of Test</label>
                          <br />
                          <div className="container">
                            <Row>
                              {test.map((item, i) => {
                                  if(this.state.modeOfTest==item){
                                    return (
                                        <Col className="px-1" md="2">
                                          <Form.Check
                                            inline
                                            label={item}
                                            name="modeOfTest"
                                            value={i}
                                            type="radio"
                                            id={`test${i}`}
                                            disabled
                                            checked
                                          />
                                        </Col>
                                      );
                                  }else{
                                    return (
                                        <Col className="px-1" md="2">
                                          <Form.Check
                                            inline
                                            label={item}
                                            name="modeOfTest"
                                            value={i}
                                            type="radio"
                                            id={`test${i}`}
                                            disabled
                                          />
                                        </Col>
                                      );
                                  }
                              })}
                            </Row>
                          </div>
                        </Form.Group>
                      </Col>
                      <Col className="pl-1" md="12">
                        <Form.Group>
                          <br />
                          <label>Type of Test</label>
                          <br />
                          <div className="container">
                            <Row>
                              {typeofTest.map((item, i) => {
                                  if(this.state.typeOfTest[i]){
                                    return (
                                        <Col className="px-1" md="2">
                                          <Form.Check
                                            inline
                                            label={item}
                                            name="typeOfTest"
                                            type="checkbox"
                                            id={`typeOfTest${i}`}
                                            value={i}
                                            disabled
                                            checked
                                          />
                                        </Col>
                                      );
                                  }else{
                                    return (
                                        <Col className="px-1" md="2">
                                          <Form.Check
                                            inline
                                            label={item}
                                            name="typeOfTest"
                                            type="checkbox"
                                            id={`typeOfTest${i}`}
                                            value={i}
                                            disabled
                                          />
                                        </Col>
                                      );
                                  }
                                  
                              })}
                            </Row>
                          </div>
                        </Form.Group>
                      </Col>
                      <Col className="px-1" md="4">
                        <Form.Group>
                          <label>Aptitude Test Duration</label>
                          <Form.Control
                            disabled
                            id="aptitudeTest"
                            defaultValue={this.state.aptitudeTest}
                            placeholder="Please specify the duration for the selected tests."
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="px-1" md="4">
                        <Form.Group>
                          <label>Technical Test Duration</label>
                          <Form.Control
                            disabled
                            id="technicalTest"
                            defaultValue={this.state.technicalTest}
                            placeholder="Please specify the duration for the selected tests."
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pl-1" md="12">
                        <Form.Group>
                          <br />
                          <label>Mode of Interview</label>
                          <br />
                          <div className="container">
                            <Row>
                              {interview.map((item, i) => {
                                  if(this.state.modeOfInterview==item){
                                    return (
                                        <Col className="px-1" md="2">
                                          <Form.Check
                                            inline
                                            label={item}
                                            value={i}
                                            name="modeOfInterview"
                                            type="radio"
                                            id={`interview${i}`}
                                            disabled
                                            checked
                                          />
                                        </Col>
                                      );
                                  }else{
                                    return (
                                        <Col className="px-1" md="2">
                                          <Form.Check
                                            inline
                                            label={item}
                                            value={i}
                                            name="modeOfInterview"
                                            type="radio"
                                            id={`interview${i}`}
                                            disabled
                                          />
                                        </Col>
                                      );
                                  }
                              })}
                            </Row>
                          </div>
                        </Form.Group>
                      </Col>
                      <Col className="pl-1" md="12">
                        <Form.Group>
                          <br />
                          <label>Type of Interview</label>
                          <br />
                          <div className="container">
                            <Row>
                              {typeofInterview.map((item, i) => {
                                  if(this.state.typeOfInterview[i]){
                                    return (
                                        <Col className="px-1" md="2">
                                          <Form.Check
                                            inline
                                            label={item}
                                            name="typeOfInterview"
                                            type="checkbox"
                                            value={i}
                                            id={`typeOfInterview${i}`}
                                            disabled
                                            checked
                                          />
                                        </Col>
                                      );
                                  }else{
                                    return (
                                        <Col className="px-1" md="2">
                                          <Form.Check
                                            inline
                                            label={item}
                                            name="typeOfInterview"
                                            type="checkbox"
                                            value={i}
                                            id={`typeOfInterview${i}`}
                                            disabled
                                          />
                                        </Col>
                                      );
                                  }
                              })}
                            </Row>
                          </div>
                        </Form.Group>
                      </Col>
                      <Col className="px-1" md="12">
                        <Form.Group>
                          <br />
                          <label>HR Interview Duration</label>
                          <Form.Control
                            disabled
                            id="durationOfEachRoundHR"
                            defaultValue={this.state.durationOfEachRoundHR}
                            as="textarea"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="px-1" md="12">
                        <Form.Group>
                          <br />
                          <label>HR Interview Rounds</label>
                          <Form.Control
                            disabled
                            id="noOfRoundsHR"
                            defaultValue={this.state.noOfRoundsHR}
                            as="textarea"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="px-1" md="12">
                        <Form.Group>
                          <br />
                          <label>Technical Interview Duration</label>
                          <Form.Control
                            disabled
                            id="durationOfEachRoundTech"
                            defaultValue={this.state.durationOfEachRoundTech}
                            as="textarea"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="px-1" md="12">
                        <Form.Group>
                          <br />
                          <label>Technical Interview Rounds</label>
                          <Form.Control
                            disabled
                            id="noOfRoundsTech"
                            defaultValue={this.state.noOfRoundsTech}
                            as="textarea"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <br />
                    <br />
                    <h2>Programme Details</h2>
                    <p>
                      Please tick mark the required degree and discipline in
                      which you are interested to recruit
                    </p>
                    <br />
                    <Row>
                      <Col className="pl-1" md="12">
                        <Form.Group>
                          <br />
                          <label>B.Tech</label>
                          <br />
                          <div className="container">
                            <Row>
                              {btech.map((item, i) => {
                                if(this.state.btech[i]){
                                  return (
                                    <Col className="px-1" md="4">
                                      <Form.Check
                                        inline
                                        label={item}
                                        value={i}
                                        name="btech"
                                        type="checkbox"
                                        id={`btech${i}`}
                                        disabled
                                        checked
                                      />
                                    </Col>
                                  );
                                }else{
                                  return (
                                    <Col className="px-1" md="4">
                                      <Form.Check
                                        inline
                                        label={item}
                                        value={i}
                                        name="btech"
                                        type="checkbox"
                                        id={`btech${i}`}
                                        disabled
                                      />
                                    </Col>
                                  );
                                }
                              })}
                            </Row>
                          </div>
                        </Form.Group>
                      </Col>
                      <Col className="pl-1" md="12">
                        <Form.Group>
                          <br />
                          <label>M.Tech</label>
                          <br />
                          <div className="container">
                            <Row>
                            {mtech.map((item, i) => {
                              if(this.state.mtech[i]){
                                return (
                                  <Col className="px-1" md="4">
                                    <Form.Check
                                      inline
                                      label={item}
                                      value={i}
                                      name="mtech"
                                      type="checkbox"
                                      id={`mtech${i}`}
                                      disabled
                                      checked
                                    />
                                  </Col>
                                );
                              }else{
                                return (
                                  <Col className="px-1" md="4">
                                    <Form.Check
                                      inline
                                      label={item}
                                      value={i}
                                      name="mtech"
                                      type="checkbox"
                                      id={`mtech${i}`}
                                      disabled
                                    />
                                  </Col>
                                );
                              }
                              })}
                            </Row>
                          </div>
                        </Form.Group>
                      </Col>
                      <Col className="pl-1" md="12">
                        <Form.Group>
                          <br />
                          <label>M.Sc</label>
                          <br />
                          <div className="container">
                            <Row>
                            {msc.map((item, i) => {
                              if(this.state.msc[i]){
                                return (
                                  <Col className="px-1" md="4">
                                    <Form.Check
                                      inline
                                      label={item}
                                      value={i}
                                      name="msc"
                                      type="checkbox"
                                      id={`msc${i}`}
                                      disabled
                                      checked
                                    />
                                  </Col>
                                );
                              }else{
                                return (
                                  <Col className="px-1" md="4">
                                    <Form.Check
                                      inline
                                      label={item}
                                      value={i}
                                      name="msc"
                                      type="checkbox"
                                      id={`msc${i}`}
                                      disabled
                                    />
                                  </Col>
                                );
                              }
                              })}
                            </Row>
                          </div>
                        </Form.Group>
                      </Col>
                      <Col className="pl-1" md="12">
                        <Form.Group>
                          <br />
                          <label>M.A.</label>
                          <br />
                          <div className="container">
                            <Row>
                            {ma.map((item, i) => {
                              if(this.state.ma[i]){
                                return (
                                  <Col className="px-1" md="4">
                                    <Form.Check
                                      inline
                                      label={item}
                                      value={i}
                                      name="ma"
                                      type="checkbox"
                                      id={`ma${i}`}
                                      disabled
                                      checked
                                    />
                                  </Col>
                                );
                              }else{
                                return (
                                  <Col className="px-1" md="4">
                                    <Form.Check
                                      inline
                                      label={item}
                                      value={i}
                                      name="ma"
                                      type="checkbox"
                                      id={`ma${i}`}
                                      disabled
                                    />
                                  </Col>
                                );
                              }
                              })}
                            </Row>
                          </div>
                        </Form.Group>
                      </Col>
                      <Col className="pl-1" md="12">
                        <Form.Group>
                          <br />
                          <label>M.S.</label>
                          <br />
                          <div className="container">
                            <Row>
                            {ms.map((item, i) => {
                                if(this.state.ms[i]){
                                  return (
                                    <Col className="px-1" md="4">
                                      <Form.Check
                                        inline
                                        label={item}
                                        value={i}
                                        name="ms"
                                        type="checkbox"
                                        id={`ms${i}`}
                                        disabled
                                        checked
                                      />
                                    </Col>
                                  );
                                }else{
                                  return (
                                    <Col className="px-1" md="4">
                                      <Form.Check
                                        inline
                                        label={item}
                                        value={i}
                                        name="ms"
                                        type="checkbox"
                                        id={`ms${i}`}
                                        disabled
                                      />
                                    </Col>
                                  );
                                }
                              })}
                            </Row>
                          </div>
                        </Form.Group>
                      </Col>
                      <Col className="pl-1" md="12">
                        <Form.Group>
                          <br />
                          <label>PhD.</label>
                          <br />
                          <div className="container">
                            <Row>
                            {phd.map((item, i) => {
                              if(this.state.phd[i]){
                                return (
                                  <Col className="px-1" md="4">
                                    <Form.Check
                                      inline
                                      label={item}
                                      value={i}
                                      name="phd"
                                      type="checkbox"
                                      id={`phd${i}`}
                                      disabled
                                      checked
                                    />
                                  </Col>
                                );
                              }else{
                                return (
                                  <Col className="px-1" md="4">
                                    <Form.Check
                                      inline
                                      label={item}
                                      value={i}
                                      name="phd"
                                      type="checkbox"
                                      id={`phd${i}`}
                                      disabled
                                    />
                                  </Col>
                                );
                              }
                              })}
                            </Row>
                          </div>
                        </Form.Group>
                      </Col>
                    </Row>
                    <br />
                    <br />
                    <h3>Logistic Requirements (on Campus Drive)</h3>
                    <br />
                    <Row>
                      <Col className="px-1" md="6">
                        <Form.Group>
                          <label>Number of Members</label>
                          <Form.Control
                            disabled
                            id="numberOfMembers"
                            defaultValue={this.state.numberOfMembers}
                            placeholder="Contact Person"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pl-1" md="6">
                        <Form.Group>
                          <label>
                            Number of Rooms required for selection process
                          </label>
                          <Form.Control
                            disabled
                            id="numberOfRoomsRequired"
                            defaultValue={this.state.numberOfRoomsRequired}
                            placeholder="No of rooms"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pr-1" md="12">
                        <Form.Group>
                          <label>Other Requirements</label>
                          <Form.Control
                            disabled
                            id="otherRequirements"
                            defaultValue={this.state.otherRequirements}
                            placeholder="Other Requirements"
                            as="textarea"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <br />
                    <br />
                    <h3>Logistic Requirements (Virtual Drive)</h3>
                    <br />
                    <Row>
                      <Col className="pr-1" md="12">
                        <Form.Group>
                          <label>Virtual Drive Requirements</label>
                          <Form.Control
                            disabled
                            id="virtualDriveRequirements"
                            defaultValue={this.state.virtualDriveRequirements}
                            placeholder="Virtual Drive Requirements"
                            as="textarea"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>

                    <div
                      className="clearfix"
                      style={{ textAlign: "center", margin: "10px 0px" }}
                    >
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

ViewFilledForm.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(ViewFilledForm);
