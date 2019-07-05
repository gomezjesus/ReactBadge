import React from "react";
import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";
import BadgesList from "../components/BadgesList";
import { Link } from "react-router-dom";
class Badges extends React.Component {
  constructor(props) {
    super(props);
    console.log("1. constructor");
    this.state = {
      loading: true,
      error: null,
      data: undefined
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData = () => {
    this.setState({ loading: true, error: null });

    try {
      const data = [];
      //this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("5. component didUpdate()");
    console.log({
      prevProps: prevProps,
      prevState: prevState
    });
    console.log({
      props: this.props,
      state: this.state
    });
  }

  render() {
    if (this.state.loading) {
      return "Loading ...";
    }
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" src={confLogo} alt="ConfLogo" />
            </div>
          </div>
        </div>

        <div className="Badge__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList badges={this.state.data} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
