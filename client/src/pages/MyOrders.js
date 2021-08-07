import React, { Component } from "react";
import CustomParallax from "../components/CustomParallax";
import home_top from "../assets/home_top.jpg";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import { getUserAuth, removeOrder } from "../utils/api";

class MyOrders extends Component {
  state = {
    orders: [],
    email: "",
    loading: true,
    width: window.innerWidth,
    json: {},
  };

  async componentDidMount() {
    window.addEventListener("resize", () => {
      this.setState({ width: window.innerWidth });
    });
    const user = await getUserAuth();
    this.setState({ orders: user.data.orders });
    this.setState({ email: user.data.user.email });
    this.setState({ loading: false });
  }

  handleRemoveData = async (orderId) => {
    const res = await removeOrder(this.state.email, orderId);
    const user = await getUserAuth();
    this.setState({ orders: user.data.orders });
  };

  render() {
    return (
      <React.Fragment>
        <CustomParallax title="MyOrders" img={home_top} height={300} />

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Order#</th>
              <th>Items</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(this.state.orders).map((key, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>
                  <ul>
                    {Object.keys(this.state.orders[key].items).map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                </td>
                <td>{JSON.stringify(this.state.orders[key].totalPrice)}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => this.handleRemoveData(key)}
                  >
                    Cancel
                  </Button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </React.Fragment>
    );
  }
}

export default MyOrders;
