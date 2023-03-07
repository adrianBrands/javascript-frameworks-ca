import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";


export default function Navbar() {
  return ( 
    <NavbarBs className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto fs-5">
          <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
          <Nav.Link to="/cart" as={NavLink}>Cart</Nav.Link>
          <Nav.Link to="/checkout" as={NavLink}>Checkout</Nav.Link>
        </Nav>
        <Button className="cartBt"  variant=""><img alt="cart" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACrUlEQVR4nO2ZO4xMURjHf1YyjalorAqVkXg0VuFViA2xGla2oGIlXhGroluFR8Go6GzhHatCRWM7q/Co2MSuhFgVjV2yEhn55H/lkp2559wZe7+IX3KSyZzv/93/yb333O+cA/+pSwnoAW4Cr4AJNft9Q30W45qdwBhQy2ijwA4cMhuopow+BQ4DFWCOWkX/PUvFnZPWDVUZ+wrsAWY1iG0DehWbDMbN41QDvgBrInRrU4PZTsGUUu+E3YlY9kn7uugJoCf1TtgjE4tpniuH3dnCuCUTh5rIcUQ5rlMgIzKxpIkcS5XDvjOF8Vkmyk3kKCuH5SqM5HvgJc+/P5DJgHJjptpk3kHMc2C+9kebm2cgKwNmk5l6tEbUvyJP8m0SP2jCQChZeR6qvytP8oMSD9Tp35gyYL/zEpJnQP3mKZqzEvfX6R9NGbBaKS8heU6q/0yeC1yT2Eru6XiXMvA2zwUi8vSq3zxFMyRxZ53+LTJhF9+c5wIReTrlxTxF86YFdVSrqMiLLRmiy+upFtRRraIsL99ilwsLJPyIHz7JU3uMaLVEtujxwgt56sizDr+LH+7JU3eM6JhEF/HDJXnqixFdkOg4fjghT7b1FMwdiXbhh93yNBgjeiLROvywXp6GY0QfJFqIHxbJ03iowDbKvqt52jUvxfparJG/xx/j8mZ3J5MNCn6MP4blzd6X4NnhNv4YjJlNk/n6PP6oxnzfki/oUfzRF1Nx3Fewx6Oxbnmzuiu4ylyFPzpiqvKk7p+PP9pD10nJSmwq58HN36YtdOWarI1ti8YrYyF7CcluxSP8MiSPmxoF7VXQFfxyNeTwtV9Bp/DL6Ywd0N/2WPfjlwPyeJmAXe+t+KUr4JTg51mIBS3DL8vl8WWjoAkHp1K1wGZep8XjUVtW+3UU9wNY5IVjWCP9OAAAAABJRU5ErkJggg=="></img>
          <div className="cartNum rounded-circle bg-secondary d-flex justify-content-center align-items-center">
            3
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
}