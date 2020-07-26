import React from "react";
import style from "./ProfileInfo.module.css";

export default class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.state,
  };
  activateEditMode = () => {
    this.setState({ editMode: true });
  };
  deactivateEditMode = () => {
    this.setState({ editMode: false });
    this.props.updateStatus(this.state.status);
  };
  onStatusChange = (e) => {
    this.setState({
      status: e.target.value,
    });
  };
  componentDidUpdate(prevPorps) {
    if (prevPorps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  render() {
    return (
      <div>
        {!this.state.editMode ? (
          <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
        ) : (
          <input
            onChange={this.onStatusChange}
            autoFocus={true}
            onBlur={this.deactivateEditMode}
            value={this.state.status}
          />
        )}
      </div>
    );
  }
}
