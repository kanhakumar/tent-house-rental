import React from "react";

import axios from "axios";

const Api = "http://localhost:3000/api/";

export default class DetailedReportList extends React.Component {
  state = {
    reports: [],
  };

  componentDidMount() {
    console.log("component mounted");
    const getTableData = async () => {
      try {
        const response = await axios.get(Api + "reports/detailedReport");
        console.log(response.data.success);
        this.setState({ reports: response.data });
      } catch (error) {}
    };
    getTableData();
  }

  render() {
    return (
      <>
        {this.state.reports.success === true && (
          <ul>
            {this.state.reports.report.map((product) => (
              <li key={product._id}>{product.product_title}{product.quantity_total}</li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
