import React from "react";
import style from "./ProfileInfo.module.css";

export default class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };

  activateEditMode() {
    this.setState({ editMode: true });
  }

  deactivateEditMode() {
    this.setState({ editMode: false });
  }

  render() {
    return (
      <div>
        {!this.state.editMode ? (
          <span onDoubleClick={this.activateEditMode.bind(this)}>
            {this.props.status}
          </span>
        ) : (
          <input
            autoFocus={true}
            onBlur={this.deactivateEditMode.bind(this)}
            value={this.props.status}
          />
        )}
      </div>
    );
  }
}
