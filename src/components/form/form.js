import {
  Container,
  Form,
  Col,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const FormComponent = () => {
  return (
    <Container className="mt-5 mb-2">
      <Form>
        <h1 className="text-dark">General Detail</h1>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel>First Name</FormLabel>
            <FormControl type="text" placeholder="First Name" />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel>Last Name</FormLabel>
            <FormControl type="text" placeholder="Last Name" />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel>Profession</FormLabel>
            <FormControl type="text" placeholder="e.g Full stack developer" />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel>Location</FormLabel>
            <FormControl type="text" placeholder="Lahore, Pakistan" />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> Mobile Phone </FormLabel>
            <FormControl type="number" placeholder="+01 23 456 789" />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> Email </FormLabel>
            <FormControl type="email" placeholder="info@domain.com" />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> House Address </FormLabel>
            <FormControl
              type="text"
              placeholder="House#0 St#0 street and city name"
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12}>
            <Form.Group>
              <Form.Label>Describe Yourself</Form.Label>
              <Form.Control as="textarea" rows={6} />
            </Form.Group>
          </FormGroup>
        </Form.Row>
        <h1 className="text-dark">Social Detail</h1>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Social Website</FormLabel>
            <FormControl as="select" defaultValue="GitHub">
              <option>GitHub</option>
              <option>LinkedIn</option>
              <option>Twitter</option>
              <option>Portfolio Website</option>
            </FormControl>
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Username</FormLabel>
            <FormControl type="text" placeholder="e.g johnDoe123" />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Social Website</FormLabel>
            <FormControl as="select" defaultValue="LinkedIn">
              <option>LinkedIn</option>
              <option>GitHub</option>
              <option>Twitter</option>
              <option>Portfolio Website</option>
            </FormControl>
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Username</FormLabel>
            <FormControl type="text" placeholder="e.g johnDoe123" />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Social Website</FormLabel>
            <FormControl as="select" defaultValue="Twitter">
              <option>Twitter</option>
              <option>GitHub</option>
              <option>LinkedIn</option>
              <option>Portfolio Website</option>
            </FormControl>
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Username</FormLabel>
            <FormControl type="text" placeholder="e.g johnDoe123" />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Social Website</FormLabel>
            <FormControl as="select" defaultValue="Portfolio Website">
              <option>Portfolio Website</option>
              <option>GitHub</option>
              <option>LinkedIn</option>
              <option>Twitter</option>
            </FormControl>
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Username</FormLabel>
            <FormControl type="text" placeholder="e.g johnDoe123" />
          </FormGroup>
        </Form.Row>
        <h1 className="text-dark">
          Educational Detail (Add 2 educational details)
        </h1>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> High school degree </FormLabel>
            <FormControl
              type="text"
              placeholder="e.g metric with computer sciences"
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> School Name </FormLabel>
            <FormControl type="text" placeholder="e.g govt school" />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Starting Date</FormLabel>
            <FormControl type="date" />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Ending Date</FormLabel>
            <FormControl type="date" />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> College degree </FormLabel>
            <FormControl
              type="text"
              placeholder="e.g bachelor in computer science"
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> College Name </FormLabel>
            <FormControl
              type="text"
              placeholder="e.g university of australia"
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Starting Date</FormLabel>
            <FormControl type="date" />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Ending Date</FormLabel>
            <FormControl type="date" />
          </FormGroup>
        </Form.Row>
        <h1 className="text-dark">
          {" "}
          Professional Experience Details (Add 3 latest experiences){" "}
        </h1>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> 1st Experience </FormLabel>
            <FormControl type="text" placeholder="e.g junior web developer" />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> Company Name </FormLabel>
            <FormControl type="text" placeholder="company name" />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Starting Date</FormLabel>
            <FormControl type="date" />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Ending Date</FormLabel>
            <FormControl type="date" />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> 2nd Experience </FormLabel>
            <FormControl type="text" placeholder="e.g junior web developer" />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> Company Name </FormLabel>
            <FormControl type="text" placeholder="company name" />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Starting Date</FormLabel>
            <FormControl type="date" />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Ending Date</FormLabel>
            <FormControl type="date" />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> 3rd Experience </FormLabel>
            <FormControl type="text" placeholder="e.g junior web developer" />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> Company Name </FormLabel>
            <FormControl type="text" placeholder="company name" />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Starting Date</FormLabel>
            <FormControl type="date" />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Ending Date</FormLabel>
            <FormControl type="date" />
          </FormGroup>
        </Form.Row>
        <Button
          variant="dark"
          type="submit"
          as={Col}
          sm={12}
          className="py-3 my-3"
        >
          <Link
            to="/view_resume"
            className="text-white font-weight-bold"
            style={{ fontSize: "1.3rem" }}
          >
            Generate CV
          </Link>
        </Button>
      </Form>
    </Container>
  );
};

export default FormComponent;
