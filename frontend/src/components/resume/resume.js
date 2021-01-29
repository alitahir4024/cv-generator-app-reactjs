import { Container, Row, Col, Button } from "react-bootstrap";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { BiLink } from "react-icons/bi";
import { useState, useEffect } from "react";
import axios from "axios";

const ResumeComponent = () => {
  const [userResumeData, setUserResumeData] = useState();
  useEffect(() => {
    const fetchedData = async () => {
      const { data } = await axios.get("http://localhost:9999/api");
      setUserResumeData(data);
      console.log(data);
    };
    fetchedData();
  }, []);
  if (userResumeData === undefined) {
    return <h1>data not found</h1>;
  } else {
    return (
      <Container className="mt-4 mb-2">
        <main className="resume-section pl-4">
          <header>
            <Row className="border-bottom border-dark w-100">
              <Col sm={12} md={6} className="py-4 px-4">
                <h1 className="text-dark font-weight-bold">
                  {userResumeData[userResumeData.length - 1].userFirstName}{" "}
                  {userResumeData[userResumeData.length - 1].userSecondName}
                </h1>
                <h6 className="h5 text-dark">
                  {userResumeData[userResumeData.length - 1].userProfession}
                </h6>
                <div className="w-25 d-flex justify-content-between user-social-icons">
                  <a
                    href={`https://www.linkedin.com/in/${
                      userResumeData[userResumeData.length - 1]
                        .SetUserLinkedInProfileName
                    }/`}
                    className="text-dark"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href={
                      userResumeData[userResumeData.length - 1]
                        .userPersonalWebsiteLink
                    }
                    className="text-dark"
                  >
                    <BiLink />
                  </a>
                  <a
                    href={`https://github.com/${
                      userResumeData[userResumeData.length - 1]
                        .userGitHubProfileName
                    }`}
                    className="text-dark"
                  >
                    <FaGithubSquare />
                  </a>
                </div>
              </Col>
              <Col sm={12} md={6}>
                <p className="py-4 text-dark">
                  {
                    userResumeData[userResumeData.length - 1]
                      .userProfileDescription
                  }
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
                  <h6 className="font-weight-bold text-dark">Email Address:</h6>
                  <p className="px-2">
                    {userResumeData[userResumeData.length - 1].userEmail}
                  </p>
                </li>
                <li className="d-flex align-items justify-content-start">
                  <h6 className="font-weight-bold text-dark">Location:</h6>
                  <p className="px-2">
                    {userResumeData[userResumeData.length - 1].userLocation}
                  </p>
                </li>
                <li className="d-flex align-items justify-content-start">
                  <h6 className="font-weight-bold text-dark">Phone Number:</h6>
                  <p className="px-2">
                    {userResumeData[userResumeData.length - 1].userPhoneNumber}
                  </p>
                </li>
              </ul>
            </Col>
            <Col sm={12} md={6} className="my-4">
              <ul>
                <li className="d-flex align-items justify-content-start">
                  <h6 className="font-weight-bold text-dark">House Address:</h6>
                  <p className="px-2">
                    {userResumeData[userResumeData.length - 1].userHouseAddress}
                  </p>
                </li>
                <li className="d-flex align-items justify-content-start">
                  <h6 className="font-weight-bold text-dark">Age:</h6>
                  <p className="px-2">
                    {userResumeData[userResumeData.length - 1].userAge}
                  </p>
                </li>
                <li className="d-flex align-items justify-content-start">
                  <h6 className="font-weight-bold text-dark">Gender:</h6>
                  <p className="px-2">
                    {userResumeData[userResumeData.length - 1].userGender}
                  </p>
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
                    {
                      userResumeData[userResumeData.length - 1]
                        .userHighSchoolDegreeName
                    }
                  </h3>
                  <h6 className="text-dark font-weight-bold">
                    {
                      userResumeData[userResumeData.length - 1]
                        .userHighSchoolName
                    }
                  </h6>
                  <p className="text-dark font-weight-bold">
                    {" "}
                    {
                      userResumeData[userResumeData.length - 1]
                        .userHighSchoolStartingDate
                    }
                    -
                    {
                      userResumeData[userResumeData.length - 1]
                        .userHighSchoolEndingDate
                    }
                  </p>
                  <p className="text-dark font-weight-normal">
                    {
                      userResumeData[userResumeData.length - 1]
                        .userHighSchoolExperience
                    }
                  </p>
                </li>
                <li>
                  <h3 className="text-dark font-weight-bold">
                    2.
                    {
                      userResumeData[userResumeData.length - 1]
                        .userCollegeDegreeName
                    }
                  </h3>
                  <h6 className="text-dark font-weight-bold">
                    {userResumeData[userResumeData.length - 1].userCollegeName}
                  </h6>
                  <p className="text-dark font-weight-bold">
                    {" "}
                    {
                      userResumeData[userResumeData.length - 1]
                        .userCollegeStartingDate
                    }
                    -
                    {
                      userResumeData[userResumeData.length - 1]
                        .userCollegeEndingDate
                    }{" "}
                  </p>
                  <p className="text-dark font-weight-normal">
                    {
                      userResumeData[userResumeData.length - 1]
                        .userCollegeExperience
                    }
                  </p>
                </li>
                <li>
                  <h3 className="text-dark font-weight-bold">
                    3.
                    {
                      userResumeData[userResumeData.length - 1]
                        .userBachelorDegreeName
                    }
                  </h3>
                  <h6 className="text-dark font-weight-bold">
                    {
                      userResumeData[userResumeData.length - 1]
                        .userUniversityName
                    }
                  </h6>
                  <p className="text-dark font-weight-bold">
                    {" "}
                    {
                      userResumeData[userResumeData.length - 1]
                        .userBachelorStartingDate
                    }
                    -
                    {
                      userResumeData[userResumeData.length - 1]
                        .userBachelorEndingDate
                    }{" "}
                  </p>
                  <p className="text-dark font-weight-normal">
                    {
                      userResumeData[userResumeData.length - 1]
                        .userUniversityExperience
                    }
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
                    {
                      userResumeData[userResumeData.length - 1]
                        .user1stExperience
                    }
                  </h3>
                  <h6 className="text-dark font-weight-bold">
                    {
                      userResumeData[userResumeData.length - 1]
                        .user1stCompanyName
                    }
                  </h6>
                  <p className="text-dark font-weight-bold">
                    {" "}
                    {
                      userResumeData[userResumeData.length - 1]
                        .user1stExperienceStartingDate
                    }
                    -
                    {
                      userResumeData[userResumeData.length - 1]
                        .user1stExperienceEndingDate
                    }{" "}
                  </p>
                  <p className="text-dark font-weight-normal">
                    {
                      userResumeData[userResumeData.length - 1]
                        .user1stCompanyExperience
                    }
                  </p>
                </li>
                <li>
                  <h3 className="text-dark font-weight-bold">
                    2.
                    {
                      userResumeData[userResumeData.length - 1]
                        .user2ndExperience
                    }
                  </h3>
                  <h6 className="text-dark font-weight-bold">
                    {
                      userResumeData[userResumeData.length - 1]
                        .user2ndCompanyName
                    }
                  </h6>
                  <p className="text-dark font-weight-bold">
                    {" "}
                    {
                      userResumeData[userResumeData.length - 1]
                        .user2ndExperienceStartingDate
                    }
                    -
                    {
                      userResumeData[userResumeData.length - 1]
                        .user2ndExperienceEndingDate
                    }{" "}
                  </p>
                  <p className="text-dark font-weight-normal">
                    {
                      userResumeData[userResumeData.length - 1]
                        .user2ndCompanyExperience
                    }
                  </p>
                </li>
                <li>
                  <h3 className="text-dark font-weight-bold">
                    3.
                    {
                      userResumeData[userResumeData.length - 1]
                        .user3rdExperience
                    }
                  </h3>
                  <h6 className="text-dark font-weight-bold">
                    {
                      userResumeData[userResumeData.length - 1]
                        .user3rdCompanyName
                    }
                  </h6>
                  <p className="text-dark font-weight-bold">
                    {" "}
                    {
                      userResumeData[userResumeData.length - 1]
                        .user3rdExperienceStartingDate
                    }
                    -
                    {
                      userResumeData[userResumeData.length - 1]
                        .user3rdExperienceEndingDate
                    }{" "}
                  </p>
                  <p className="text-dark font-weight-normal">
                    {
                      userResumeData[userResumeData.length - 1]
                        .user3rdCompanyExperience
                    }
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <h1 className="w-100"> Hands On Skills </h1>
            <p>{userResumeData[userResumeData.length - 1].userSkills}</p>
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
    );
  }
};

export default ResumeComponent;
