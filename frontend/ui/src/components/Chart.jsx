import React from "react";

import axios from "axios";

const Api = "http://localhost:3000/api/";

export default class Chart extends React.Component {
  state = {
    customers: [],
  };

  componentDidMount() {
    console.log("component mounted");
    const getTableData = async () => {
      try {
        const response = await axios.get(Api + "customers/");
        console.log(response.data.success);
        this.setState({ customers: response.data });
      } catch (error) {}
    };
    getTableData();
  }

  render() {
    return (
      <>
        {this.state.customers.success === true && (
          <ul>
            {this.state.customers.customers.map((customer) => (
              <li key={customer._id}>{customer.customer_name}</li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
