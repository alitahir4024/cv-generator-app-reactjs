import { useState, useEffect, Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { BiLink } from "react-icons/bi";
import axios from "axios";

const ResumeComponent = ({ match }) => {
  const [userResumeData, setUserResumeData] = useState({});
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const fetchedData = async () => {
      // "https://cv-generator-mern.herokuapp.com/api"
      await axios
        .get(`http://localhost:9999/api/${match.params.id}`)
        .then((res) => {
          if (res.data.success) {
            setMounted(true);
            setUserResumeData(res.data.resumeData);
          }
        });
    };
    fetchedData();
  }, [match.params.id]);

  return (
    <Fragment>
      {mounted ? (
        <Container className="mt-4 mb-2">
          <main className="resume-section pl-4">
            <header>
              <Row className="border-bottom border-dark w-100">
                <Col sm={12} md={6} className="py-4 px-4">
                  <h1 className="text-dark font-weight-bold">
                    {userResumeData.userFirstName}
                    {userResumeData.userSecondName}
                  </h1>
                  <h6 className="h5 text-dark">
                    {userResumeData.userProfession}
                  </h6>
                  <div className="w-25 d-flex justify-content-between user-social-icons">
                    <a
                      href={`https://www.linkedin.com/in/${userResumeData.userLinkedInProfileName}/`}
                      className="text-dark"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href={userResumeData.userPersonalWebsiteLink}
                      className="text-dark"
                    >
                      <BiLink />
                    </a>
                    <a
                      href={`https://github.com/${userResumeData.userGitHubProfileName}`}
                      className="text-dark"
                    >
                      <FaGithubSquare />
                    </a>
                  </div>
                </Col>
                <Col sm={12} md={6}>
                  <p className="py-4 text-dark">
                    {userResumeData.userProfileDescription}
                  </p>
                </Col>
              </Row>
            </header>
            <Row className="border-bottom border-dark w-100">
              <h1 className="text-center text-dark w-100 pt-4 font-weight-bold">
                General Info
              </h1>
              <Col sm={12} md={6} className="my-4">
                <ul>
                  <li className="d-flex align-items justify-content-start">
                    <h6 className="font-weight-bold text-dark">
                      Email Address:
                    </h6>
                    <p className="px-2">{userResumeData.userEmail}</p>
                  </li>
                  <li className="d-flex align-items justify-content-start">
                    <h6 className="font-weight-bold text-dark">Location:</h6>
                    <p className="px-2">{userResumeData.userLocation}</p>
                  </li>
                  <li className="d-flex align-items justify-content-start">
                    <h6 className="font-weight-bold text-dark">
                      Phone Number:
                    </h6>
                    <p className="px-2">{userResumeData.userPhoneNumber}</p>
                  </li>
                </ul>
              </Col>
              <Col sm={12} md={6} className="my-4">
                <ul>
                  <li className="d-flex align-items justify-content-start">
                    <h6 className="font-weight-bold text-dark">
                      House Address:
                    </h6>
                    <p className="px-2">{userResumeData.userHouseAddress}</p>
                  </li>
                  <li className="d-flex align-items justify-content-start">
                    <h6 className="font-weight-bold text-dark">Age:</h6>
                    <p className="px-2">{userResumeData.userAge}</p>
                  </li>
                  <li className="d-flex align-items justify-content-start">
                    <h6 className="font-weight-bold text-dark">Gender:</h6>
                    <p className="px-2">{userResumeData.userGender}</p>
                  </li>
                </ul>
              </Col>
            </Row>
            <Row className="border-bottom border-dark w-100">
              <h1 className="text-center text-dark w-100 pt-4 font-weight-bold">
                Educational Info
              </h1>
              <Col className="py-4">
                <ul>
                  <li>
                    <h3 className="text-dark font-weight-bold">
                      1.
                      {userResumeData.userHighSchoolDegreeName}
                    </h3>
                    <h6 className="text-dark font-weight-bold">
                      {userResumeData.userHighSchoolName}
                    </h6>
                    <p className="text-dark font-weight-bold">
                      
                      {userResumeData.userHighSchoolStartingDate}/
                      {userResumeData.userHighSchoolEndingDate}
                    </p>
                    <p className="text-dark font-weight-normal">
                      {userResumeData.userHighSchoolExperience}
                    </p>
                  </li>
                  <li>
                    <h3 className="text-dark font-weight-bold">
                      2.
                      {userResumeData.userCollegeDegreeName}
                    </h3>
                    <h6 className="text-dark font-weight-bold">
                      {userResumeData.userCollegeName}
                    </h6>
                    <p className="text-dark font-weight-bold">
                      
                      {userResumeData.userCollegeStartingDate}/
                      {userResumeData.userCollegeEndingDate}
                    </p>
                    <p className="text-dark font-weight-normal">
                      {userResumeData.userCollegeExperience}
                    </p>
                  </li>
                  <li>
                    <h3 className="text-dark font-weight-bold">
                      3.
                      {userResumeData.userBachelorDegreeName}
                    </h3>
                    <h6 className="text-dark font-weight-bold">
                      {userResumeData.userUniversityName}
                    </h6>
                    <p className="text-dark font-weight-bold">
                      
                      {userResumeData.userBachelorStartingDate}/
                      {userResumeData.userBachelorEndingDate}
                    </p>
                    <p className="text-dark font-weight-normal">
                      {userResumeData.userUniversityExperience}
                    </p>
                  </li>
                </ul>
              </Col>
            </Row>
            <Row className="w-100">
              <h1 className="text-center text-dark w-100 pt-4 font-weight-bold">
                Professional Info
              </h1>
              <Col className="py-4">
                <ul>
                  <li>
                    <h3 className="text-dark font-weight-bold">
                      1.
                      {userResumeData.user1stExperience}
                    </h3>
                    <h6 className="text-dark font-weight-bold">
                      {userResumeData.user1stCompanyName}
                    </h6>
                    <p className="text-dark font-weight-bold">
                      
                      {userResumeData.user1stExperienceStartingDate}/
                      {userResumeData.user1stExperienceEndingDate}
                    </p>
                    <p className="text-dark font-weight-normal">
                      {userResumeData.user1stCompanyExperience}
                    </p>
                  </li>
                  <li>
                    <h3 className="text-dark font-weight-bold">
                      2.
                      {userResumeData.user2ndExperience}
                    </h3>
                    <h6 className="text-dark font-weight-bold">
                      {userResumeData.user2ndCompanyName}
                    </h6>
                    <p className="text-dark font-weight-bold">
                      
                      {userResumeData.user2ndExperienceStartingDate}/
                      {userResumeData.user2ndExperienceEndingDate}
                    </p>
                    <p className="text-dark font-weight-normal">
                      {userResumeData.user2ndCompanyExperience}
                    </p>
                  </li>
                  <li>
                    <h3 className="text-dark font-weight-bold">
                      3.
                      {userResumeData.user3rdExperience}
                    </h3>
                    <h6 className="text-dark font-weight-bold">
                      {userResumeData.user3rdCompanyName}
                    </h6>
                    <p className="text-dark font-weight-bold">
                      
                      {userResumeData.user3rdExperienceStartingDate}/
                      {userResumeData.user3rdExperienceEndingDate}
                    </p>
                    <p className="text-dark font-weight-normal">
                      {userResumeData.user3rdCompanyExperience}
                    </p>
                  </li>
                </ul>
              </Col>
            </Row>
            <Row>
              <h1 className="w-100"> Hands On Skills </h1>
              <p>{userResumeData.userSkills}</p>
            </Row>
          </main>
          <Button
            variant="dark"
            as={Col}
            sm={12}
            className="py-2 my-3 text-white font-weight-bold"
          >
            Print
          </Button>
        </Container>
      ) : (
        "Loading....."
      )}
    </Fragment>
  );
};

export default ResumeComponent;
