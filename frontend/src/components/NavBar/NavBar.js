import { Navbar, NavbarBrand, Nav, NavItem } from "react-bootstrap";
import GitHubButton from "react-github-btn";

const NavBar = () => {
  return (
    <nav>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
          <NavbarBrand href="/" className="font-weight-bold">CV Generator App</NavbarBrand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavItem className="px-lg-3">
                {/* github fork repo button */}
                <abbr title="fork this project repo on github">
                  <GitHubButton
                    href="https://github.com/alitahir4024/cv-generator-app-reactjs/fork"
                    data-icon="octicon-repo-forked"
                    aria-label="Fork alitahir4024/cv-generator-app-reactjs on GitHub"
                  >
                    Fork
                  </GitHubButton>
                </abbr>
              </NavItem>
              <NavItem className="px-lg-3">
                {/* github star repo button */}
                <abbr title="star this project repo on github">
                  <GitHubButton
                    href="https://github.com/alitahir4024/cv-generator-app-reactjs"
                    data-icon="octicon-star"
                    aria-label="Star alitahir4024/cv-generator-app-reactjs on GitHub"
                  >
                    Star
                  </GitHubButton>
                </abbr>
              </NavItem>
              <NavItem className="px-lg-3">
                {/* github download repo button */}
                <abbr title="download the project from github">
                  <GitHubButton
                    href="https://github.com/alitahir4024/cv-generator-app-reactjs/archive/master.zip"
                    data-icon="octicon-download"
                    aria-label="Download alitahir4024/cv-generator-app-reactjs on GitHub"
                  >
                    Download
                  </GitHubButton>
                </abbr>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </nav>
  );
};

export default NavBar;
