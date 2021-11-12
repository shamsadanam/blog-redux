import { React, Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return <div>UserHeader</div>;
  }
}

const mapStateToProps = (state) => {
  return state.user;
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
