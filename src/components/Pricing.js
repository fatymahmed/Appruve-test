import React from "react";

class Pricing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { btn0: "white", btn1: "white", btn2: "white" };
    this.handleSubscribe = this.handleSubscribe.bind(this);
  }

  API_response = {
    object: "list",
    url: "/v1/plans",
    has_more: false,
    data: [
      {
        id: "plan_HBVlVwe9HwBPpc",
        object: "plan",
        active: true,
        description: "For those just starting out",
        active_users: "10000",
        aggregate_usage: null,
        amount: "99",
        amount_decimal: "0",
        billing_scheme: "per_unit",
        created: 1588139165,
        currency: "$",
        interval: "month",
        interval_count: 1,
        livemode: false,
        metadata: {},
        name: "Bronze",
        usage_type: "licensed",
        services: ["one on one chats", "real-time texts"],
      },
      {
        id: "plan_HBVlVwe9HwBPpc",
        object: "plan",
        active: true,
        description: "Best for growing businesses who want to do more",
        active_users: "25000",
        aggregate_usage: null,
        amount: "49",
        amount_decimal: "0",
        billing_scheme: "per_unit",
        created: 1588139165,
        currency: "$",
        interval: "month",
        interval_count: 1,
        livemode: false,
        metadata: {},
        name: "Silver",
        usage_type: "licensed",
        services: ["one on one chats", "real-time texts"],
      },
      {
        id: "plan_HBVlVwe9HwBPpc",
        object: "plan",
        active: true,
        description: "Premium services",
        active_users: "50000",
        aggregate_usage: null,
        amount: "199",
        amount_decimal: "0",
        billing_scheme: "per_unit",
        created: 1588139165,
        currency: "$",
        interval: "month",
        interval_count: 1,
        livemode: false,
        metadata: {},
        name: "Gold",
        usage_type: "licensed",
        services: ["one on one chats", "real-time texts"],
      },
    ],
  };
  getServices = (i) =>
    this.API_response.data[i].services.map((service) => <li>service</li>);
  handleSubscribe(e) {
    console.log(e.target.className);
    this.setState({ [e.target.className]: "#7BB77B" });
    console.log(this.state);
  }
  render() {
    const { btn0, btn1, btn2 } = this.state;
    console.log("btn 2 is", btn2);
    return (
      <div className='Pricing'>
        <div className='plan-container'>
          <div className='price-plan'>
            <h2>{this.API_response.data[0].name}</h2>
            <p>{this.API_response.data[0].description}</p>
            <h3 style={{ fontSize: "larger" }}>
              {this.API_response.data[0].currency}
              {this.API_response.data[0].amount}/
              {this.API_response.data[0].interval}
            </h3>
            <p>{this.API_response.data[0].active_users} active users</p>
            <ul>
              {this.API_response.data[0].services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
            <button
              className='btn0'
              style={{ backgroundColor: btn0 }}
              onClick={this.handleSubscribe}
            >
              Subscribe
            </button>
          </div>
          <div className='price-plan'>
            <h2>{this.API_response.data[1].name}</h2>
            <p>{this.API_response.data[1].description}</p>
            <h3 style={{ fontSize: "larger" }}>
              {this.API_response.data[1].currency}
              {this.API_response.data[1].amount}/
              {this.API_response.data[1].interval}
            </h3>
            <p>{this.API_response.data[1].active_users} active users</p>
            <ul>
              {this.API_response.data[1].services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
            <button
              className='btn1'
              style={{ backgroundColor: btn1 }}
              onClick={this.handleSubscribe}
            >
              Subscribe
            </button>
          </div>
          <div className='price-plan'>
            <h2>{this.API_response.data[2].name}</h2>
            <p>{this.API_response.data[2].description}</p>
            <h3 style={{ fontSize: "larger" }}>
              {this.API_response.data[2].currency}
              {this.API_response.data[2].amount}/
              {this.API_response.data[2].interval}
            </h3>
            <p>{this.API_response.data[2].active_users} active users</p>
            <ul>
              {this.API_response.data[2].services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
            <button
              className='btn2'
              style={{ backgroundColor: btn2 }}
              onClick={this.handleSubscribe}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Pricing;
