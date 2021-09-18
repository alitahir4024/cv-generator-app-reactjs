import {
  Container,
  Form,
  Col,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
} from "react-bootstrap";
import { useState } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";

const FormComponent = ({ history }) => {
  // first name of the person
  const [userFirstName, setUserFirstName] = useState("");
  const handleFirstName = (e) => {
    setUserFirstName(e.target.value);
  };
  // second name of the person
  const [userSecondName, setUserSecondName] = useState("");
  const handleUserSecondName = (e) => {
    setUserSecondName(e.target.value);
  };
  // gender of user
  const [userGender, setUserGender] = useState("Male");
  const handleUserGender = (e) => {
    setUserGender(e.target.value);
  };
  // age of the user
  const [userAge, setUserAge] = useState("");
  const handleUserAge = (e) => {
    setUserAge(e.target.value);
  };
  // user profession
  const [userProfession, setUserProfession] = useState("");
  const handleUserProfession = (e) => {
    setUserProfession(e.target.value);
  };
  // user location
  const [userLocation, setUserLocation] = useState("");
  const handleUserLocation = (e) => {
    setUserLocation(e.target.value);
  };
  // user phone number
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const handleUserPhoneNumber = (e) => {
    setUserPhoneNumber(e.target.value);
  };
  // user email address
  const [userEmail, setUserEmail] = useState("");
  const handleUserEmail = (e) => {
    setUserEmail(e.target.value);
  };
  // user house address
  const [userHouseAddress, setUserHouseAddress] = useState("");
  const handleUserHouseAddress = (e) => {
    setUserHouseAddress(e.target.value);
  };
  // user description
  const [userProfileDescription, setUserProfileDescription] = useState("");
  const handleUserProfileDescription = (e) => {
    setUserProfileDescription(e.target.value);
  };
  // user profile website
  const [userFirstProfileWebsite, SetUserFirstProfileWebsite] =
    useState("GitHub");
  const handleFirstUserProfileWebsite = (e) => {
    SetUserFirstProfileWebsite(e.target.value);
  };
  // user github profile
  const [userGitHubProfileName, SetUserGitHubProfileName] = useState("");
  const handleUserGitHubProfileName = (e) => {
    SetUserGitHubProfileName(e.target.value);
  };
  // user profile website
  const [userSecondProfileWebsite, SetUserSecondProfileWebsite] =
    useState("LinkedIn");
  const handleSecondUserProfileWebsite = (e) => {
    SetUserSecondProfileWebsite(e.target.value);
  };
  // user LinkedIn profile
  const [userLinkedInProfileName, SetUserLinkedInProfileName] = useState("");
  const handleUserLinkedInProfileName = (e) => {
    SetUserLinkedInProfileName(e.target.value);
  };
  // user profile website
  const [userThirdProfileWebsite, SetUserThirdProfileWebsite] =
    useState("Personal Website");
  const handleThirdUserProfileWebsite = (e) => {
    SetUserThirdProfileWebsite(e.target.value);
  };
  // user personal website link
  const [userPersonalWebsiteLink, setUserPersonalWebsiteLink] = useState("");
  const handleUserPersonalWebsiteLink = (e) => {
    setUserPersonalWebsiteLink(e.target.value);
  };
  // user high school degree name
  const [userHighSchoolDegreeName, setUserHighSchoolDegreeName] = useState("");
  const handleUserHighSchoolDegreeName = (e) => {
    setUserHighSchoolDegreeName(e.target.value);
  };
  // user high school name
  const [userHighSchoolName, setUserHighSchoolName] = useState("");
  const handleUserHighSchoolName = (e) => {
    setUserHighSchoolName(e.target.value);
  };
  // user high school degree starting date
  const [userHighSchoolStartingDate, setUserHighSchoolStartingDate] =
    useState("");
  const handleUserHighSchoolDegreeStartingDate = (e) => {
    setUserHighSchoolStartingDate(e.target.value);
    console.log(e.target.value);
  };
  // user high school degree ending date
  const [userHighSchoolEndingDate, setUserHighSchoolEndingDate] = useState("");
  const handleUserHighSchoolDegreeEndingDate = (e) => {
    setUserHighSchoolEndingDate(e.target.value);
  };
  // user high school experience
  const [userHighSchoolExperience, setUserHighSchoolExperience] = useState("");
  const handleUserHighSchoolExperience = (e) => {
    setUserHighSchoolExperience(e.target.value);
  };
  // user college degree name
  const [userCollegeDegreeName, setUserCollegeDegreeName] = useState("");
  const handleUserCollegeDegreeName = (e) => {
    setUserCollegeDegreeName(e.target.value);
  };
  // user college name
  const [userCollegeName, setUserCollegeName] = useState("");
  const handleUserCollegeName = (e) => {
    setUserCollegeName(e.target.value);
  };
  // user college degree starting date
  const [userCollegeStartingDate, setUserCollegeStartingDate] = useState("");
  const handleUserCollegeStartingDate = (e) => {
    setUserCollegeStartingDate(e.target.value);
  };
  // user college degree ending date
  const [userCollegeEndingDate, setUserCollegeEndingDate] = useState("");
  const handleUserCollegeDegreeEndingDate = (e) => {
    setUserCollegeEndingDate(e.target.value);
  };
  // user college experience
  const [userCollegeExperience, setUserCollegeExperience] = useState("");
  const handleUserCollegeExperience = (e) => {
    setUserCollegeExperience(e.target.value);
  };
  // user bachelor degree name
  const [userBachelorDegreeName, setUserBachelorDegreeName] = useState("");
  const handleUserBachelorDegreeName = (e) => {
    setUserBachelorDegreeName(e.target.value);
  };
  // user university name
  const [userUniversityName, setUserUniversityName] = useState("");
  const handleUserUniversityName = (e) => {
    setUserUniversityName(e.target.value);
  };
  // user bachelor degree starting date
  const [userBachelorStartingDate, setUserBachelorStartingDate] = useState("");
  const handleUserBachelorStartingDate = (e) => {
    setUserBachelorStartingDate(e.target.value);
  };
  // user bachelor degree ending date
  const [userBachelorEndingDate, setUserBachelorEndingDate] = useState("");
  const handleUserBachelorDegreeEndingDate = (e) => {
    setUserBachelorEndingDate(e.target.value);
  };
  // user university experience
  const [userUniversityExperience, setUserUniversityExperience] = useState("");
  const handleUserUniversityExperience = (e) => {
    setUserUniversityExperience(e.target.value);
  };
  // user 1st experience
  const [user1stExperience, setUser1stExperience] = useState("");
  const handleUser1stExperience = (e) => {
    setUser1stExperience(e.target.value);
  };
  // user 1st company name
  const [user1stCompanyName, setUser1stCompanyName] = useState("");
  const handleUser1stCompanyName = (e) => {
    setUser1stCompanyName(e.target.value);
  };
  // user 1st experience starting date
  const [user1stExperienceStartingDate, setUser1stExperienceStartingDate] =
    useState("");
  const handleUser1stExperienceStartingDate = (e) => {
    setUser1stExperienceStartingDate(e.target.value);
  };
  // user 1st experience ending date
  const [user1stExperienceEndingDate, setUser1stExperienceEndingDate] =
    useState("");
  const handleUser1stExperienceEndingDate = (e) => {
    setUser1stExperienceEndingDate(e.target.value);
  };
  // user 1st company experience
  const [user1stCompanyExperience, setUser1stCompanyExperience] = useState("");
  const handleUser1stCompanyExperience = (e) => {
    setUser1stCompanyExperience(e.target.value);
  };
  // user 2nd experience
  const [user2ndExperience, setUser2ndExperience] = useState("");
  const handleUser2ndExperience = (e) => {
    setUser2ndExperience(e.target.value);
  };
  // user 2nd company name
  const [user2ndCompanyName, setUser2ndCompanyName] = useState();
  const handleUser2ndCompanyName = (e) => {
    setUser2ndCompanyName(e.target.value);
  };
  // user 2nd experience starting date
  const [user2ndExperienceStartingDate, setUser2ndExperienceStartingDate] =
    useState("");
  const handleUser2ndExperienceStartingDate = (e) => {
    setUser2ndExperienceStartingDate(e.target.value);
  };
  // user 2nd experience ending date
  const [user2ndExperienceEndingDate, setUser2ndExperienceEndingDate] =
    useState("");
  const handleUser2ndExperienceEndingDate = (e) => {
    setUser2ndExperienceEndingDate(e.target.value);
  };
  // user 2nd company experience
  const [user2ndCompanyExperience, setUser2ndCompanyExperience] = useState("");
  const handleUser2ndCompanyExperience = (e) => {
    setUser2ndCompanyExperience(e.target.value);
  };
  // user 3rd experience
  const [user3rdExperience, setUser3rdExperience] = useState("");
  const handleUser3rdExperience = (e) => {
    setUser3rdExperience(e.target.value);
  };
  // user 3rd company name
  const [user3rdCompanyName, setUser3rdCompanyName] = useState();
  const handleUser3rdCompanyName = (e) => {
    setUser3rdCompanyName(e.target.value);
  };
  // user 3rd experience starting date
  const [user3rdExperienceStartingDate, setUser3rdExperienceStartingDate] =
    useState("");
  const handleUser3rdExperienceStartingDate = (e) => {
    setUser3rdExperienceStartingDate(e.target.value);
  };
  // user 3rd experience ending date
  const [user3rdExperienceEndingDate, setUser3rdExperienceEndingDate] =
    useState("");
  const handleUser3rdExperienceEndingDate = (e) => {
    setUser3rdExperienceEndingDate(e.target.value);
  };
  // user 3rd company experience
  const [user3rdCompanyExperience, setUser3rdCompanyExperience] = useState("");
  const handleUser3rdCompanyExperience = (e) => {
    setUser3rdCompanyExperience(e.target.value);
  };
  // user experiences
  const [userSkills, setUserSkills] = useState("");
  const handleUserSkills = (e) => {
    setUserSkills(e.target.value);
  };
  // sum up all the information into one object
  const handleUserResumeData = (e) => {
    e.preventDefault();
    // https://cv-generator-mern.herokuapp.com/api
    axios
      .post("http://localhost:9999/api", {
        userFirstName,
        userSecondName,
        userGender,
        userAge,
        userProfession,
        userLocation,
        userPhoneNumber,
        userEmail,
        userHouseAddress,
        userProfileDescription,
        userFirstProfileWebsite,
        userGitHubProfileName,
        userSecondProfileWebsite,
        userLinkedInProfileName,
        userThirdProfileWebsite,
        userPersonalWebsiteLink,
        userHighSchoolDegreeName,
        userHighSchoolName,
        userHighSchoolStartingDate,
        userHighSchoolEndingDate,
        userHighSchoolExperience,
        userCollegeDegreeName,
        userCollegeName,
        userCollegeStartingDate,
        userCollegeEndingDate,
        userCollegeExperience,
        userBachelorDegreeName,
        userUniversityName,
        userBachelorStartingDate,
        userBachelorEndingDate,
        userUniversityExperience,
        user1stExperience,
        user1stCompanyName,
        user1stExperienceStartingDate,
        user1stExperienceEndingDate,
        user1stCompanyExperience,
        user2ndExperience,
        user2ndCompanyName,
        user2ndExperienceStartingDate,
        user2ndExperienceEndingDate,
        user2ndCompanyExperience,
        user3rdExperience,
        user3rdCompanyName,
        user3rdExperienceStartingDate,
        user3rdExperienceEndingDate,
        user3rdCompanyExperience,
        userSkills,
      })
      .then((res) => {
        if (res.data.success) {
          history.push(`/view_resume/${res.data.resumeData._id}`);
        }
      });
  };
  return (
    <Container className="mt-5 mb-2">
      <Form className="form-section">
        <h1 className="text-dark font-weight-bold py-3">General Detail</h1>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>First Name</FormLabel>
            <FormControl
              type="text"
              placeholder="First Name"
              onChange={handleFirstName}
              value={userFirstName}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Last Name</FormLabel>
            <FormControl
              type="text"
              placeholder="Last Name"
              onChange={handleUserSecondName}
              value={userSecondName}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Gender</FormLabel>
            <FormControl
              as="select"
              onChange={handleUserGender}
              value={userGender}
              required
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">other</option>
            </FormControl>
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Age</FormLabel>
            <FormControl
              type="number"
              min="1"
              onChange={handleUserAge}
              value={userAge}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Profession</FormLabel>
            <FormControl
              type="text"
              placeholder="e.g Full stack developer"
              onChange={handleUserProfession}
              value={userProfession}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Location</FormLabel>
            <FormControl
              type="text"
              placeholder="Lahore, Pakistan"
              onChange={handleUserLocation}
              value={userLocation}
              required
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> Mobile Phone </FormLabel>
            <FormControl
              type="number"
              placeholder="+01 23 456 789"
              onChange={handleUserPhoneNumber}
              value={userPhoneNumber}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> Email </FormLabel>
            <FormControl
              type="email"
              placeholder="info@domain.com"
              onChange={handleUserEmail}
              value={userEmail}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> House Address </FormLabel>
            <FormControl
              type="text"
              placeholder="House#0 St#0 street and city name"
              onChange={handleUserHouseAddress}
              value={userHouseAddress}
              required
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12}>
            <Form.Label>Describe Yourself</Form.Label>
            <Form.Control
              as="textarea"
              rows={6}
              onChange={handleUserProfileDescription}
              value={userProfileDescription}
              required
            />
          </FormGroup>
        </Form.Row>
        <h1 className="text-dark font-weight-bold py-4">Social Detail</h1>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Social Website</FormLabel>
            <FormControl
              as="select"
              onChange={handleFirstUserProfileWebsite}
              value={userFirstProfileWebsite}
              required
            >
              <option value="GitHub">GitHub</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Personal Website">Portfolio Website</option>
            </FormControl>
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Username</FormLabel>
            <FormControl
              type="text"
              placeholder="e.g johnDoe123"
              onChange={handleUserGitHubProfileName}
              value={userGitHubProfileName}
              required
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Social Website</FormLabel>
            <FormControl
              as="select"
              onChange={handleSecondUserProfileWebsite}
              value={userSecondProfileWebsite}
              required
            >
              <option value="LinkedIn">LinkedIn</option>
              <option value="GitHub">GitHub</option>
              <option value="Portfolio Website">Portfolio Website</option>
            </FormControl>
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Username</FormLabel>
            <FormControl
              type="text"
              placeholder="e.g johnDoe123"
              onChange={handleUserLinkedInProfileName}
              value={userLinkedInProfileName}
              required
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Social Website</FormLabel>
            <FormControl
              as="select"
              onChange={handleThirdUserProfileWebsite}
              value={userThirdProfileWebsite}
              required
            >
              <option value="Portfolio Website">Portfolio Website</option>
              <option value="GitHub">GitHub</option>
              <option value="LinkedIn">LinkedIn</option>
            </FormControl>
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Username</FormLabel>
            <FormControl
              type="text"
              placeholder="johnDoe.com"
              onChange={handleUserPersonalWebsiteLink}
              value={userPersonalWebsiteLink}
              required
            />
          </FormGroup>
        </Form.Row>
        <h1 className="text-dark font-weight-bold py-4">
          Educational Detail (Add 2 educational details)
        </h1>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> High school degree </FormLabel>
            <FormControl
              type="text"
              placeholder="e.g metric with computer sciences"
              onChange={handleUserHighSchoolDegreeName}
              value={userHighSchoolDegreeName}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> School Name </FormLabel>
            <FormControl
              type="text"
              placeholder="e.g govt school"
              onChange={handleUserHighSchoolName}
              value={userHighSchoolName}
              required
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Starting Date</FormLabel>
            <FormControl
              type="date"
              onChange={handleUserHighSchoolDegreeStartingDate}
              value={userHighSchoolStartingDate}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Ending Date</FormLabel>
            <FormControl
              type="date"
              onChange={handleUserHighSchoolDegreeEndingDate}
              value={userHighSchoolEndingDate}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12}>
            <FormLabel>Describe your experience</FormLabel>
            <Form.Control
              as="textarea"
              rows={6}
              onChange={handleUserHighSchoolExperience}
              value={userHighSchoolExperience}
              required
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> College degree </FormLabel>
            <FormControl
              type="text"
              placeholder="e.g Intermediate in computer science"
              onChange={handleUserCollegeDegreeName}
              value={userCollegeDegreeName}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> College Name </FormLabel>
            <FormControl
              type="text"
              placeholder="e.g MAO College"
              onChange={handleUserCollegeName}
              value={userCollegeName}
              required
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Starting Date</FormLabel>
            <FormControl
              type="date"
              onChange={handleUserCollegeStartingDate}
              value={userCollegeStartingDate}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Ending Date</FormLabel>
            <FormControl
              type="date"
              onChange={handleUserCollegeDegreeEndingDate}
              value={userCollegeEndingDate}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12}>
            <FormLabel>Describe your experience</FormLabel>
            <Form.Control
              as="textarea"
              rows={6}
              onChange={handleUserCollegeExperience}
              value={userCollegeExperience}
              required
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> University degree </FormLabel>
            <FormControl
              type="text"
              placeholder="e.g bachelor in computer science"
              onChange={handleUserBachelorDegreeName}
              value={userBachelorDegreeName}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> University Name </FormLabel>
            <FormControl
              type="text"
              placeholder="e.g university of the punjab"
              onChange={handleUserUniversityName}
              value={userUniversityName}
              required
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Starting Date</FormLabel>
            <FormControl
              type="date"
              onChange={handleUserBachelorStartingDate}
              value={userBachelorStartingDate}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Ending Date</FormLabel>
            <FormControl
              type="date"
              onChange={handleUserBachelorDegreeEndingDate}
              value={userBachelorEndingDate}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12}>
            <FormLabel>Describe your experience</FormLabel>
            <Form.Control
              as="textarea"
              rows={6}
              onChange={handleUserUniversityExperience}
              value={userUniversityExperience}
              required
            />
          </FormGroup>
        </Form.Row>
        <h1 className="text-dark font-weight-bold py-5">
          {" "}
          Professional Experience Details (Add 3 latest experiences){" "}
        </h1>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> 1st Experience </FormLabel>
            <FormControl
              type="text"
              placeholder="e.g junior web developer"
              onChange={handleUser1stExperience}
              value={user1stExperience}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> Company Name </FormLabel>
            <FormControl
              type="text"
              placeholder="company name"
              onChange={handleUser1stCompanyName}
              value={user1stCompanyName}
              required
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Starting Date</FormLabel>
            <FormControl
              type="date"
              onChange={handleUser1stExperienceStartingDate}
              value={user1stExperienceStartingDate}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Ending Date</FormLabel>
            <FormControl
              type="date"
              onChange={handleUser1stExperienceEndingDate}
              value={user1stExperienceEndingDate}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12}>
            <FormLabel>Describe your experience</FormLabel>
            <Form.Control
              as="textarea"
              rows={6}
              onChange={handleUser1stCompanyExperience}
              value={user1stCompanyExperience}
              required
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> 2nd Experience </FormLabel>
            <FormControl
              type="text"
              placeholder="e.g junior web developer"
              onChange={handleUser2ndExperience}
              value={user2ndExperience}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> Company Name </FormLabel>
            <FormControl
              type="text"
              placeholder="company name"
              onChange={handleUser2ndCompanyName}
              value={user2ndCompanyName}
              required
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Starting Date</FormLabel>
            <FormControl
              type="date"
              onChange={handleUser2ndExperienceStartingDate}
              value={user2ndExperienceStartingDate}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Ending Date</FormLabel>
            <FormControl
              type="date"
              onChange={handleUser2ndExperienceEndingDate}
              value={user2ndExperienceEndingDate}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12}>
            <FormLabel>Describe your experience</FormLabel>
            <Form.Control
              as="textarea"
              rows={6}
              onChange={handleUser2ndCompanyExperience}
              value={user2ndCompanyExperience}
              required
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> 3rd Experience </FormLabel>
            <FormControl
              type="text"
              placeholder="e.g junior web developer"
              onChange={handleUser3rdExperience}
              value={user3rdExperience}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> Company Name </FormLabel>
            <FormControl
              type="text"
              placeholder="company name"
              onChange={handleUser3rdCompanyName}
              value={user3rdCompanyName}
              required
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Starting Date</FormLabel>
            <FormControl
              type="date"
              onChange={handleUser3rdExperienceStartingDate}
              value={user3rdExperienceStartingDate}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Ending Date</FormLabel>
            <FormControl
              type="date"
              onChange={handleUser3rdExperienceEndingDate}
              value={user3rdExperienceEndingDate}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12}>
            <FormLabel>Describe your experience</FormLabel>
            <Form.Control
              as="textarea"
              rows={6}
              onChange={handleUser3rdCompanyExperience}
              value={user3rdCompanyExperience}
              required
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12}>
            <Form.Label>Write Your Skills</Form.Label>
            <Form.Control
              as="textarea"
              rows={6}
              placeholder="e.g HTML|CSS|REACTJS|NODEJS|EXPRESSJS"
              onChange={handleUserSkills}
              value={userSkills}
              required
            />
          </FormGroup>
        </Form.Row>
        <Button
          variant="dark"
          type="button"
          as={Col}
          sm={12}
          className="py-3 my-3"
          onClick={handleUserResumeData}
        >
          Generate CV
        </Button>
      </Form>
    </Container>
  );
};

export default FormComponent;
