import React, { ChangeEvent } from "react";
import style from "./ProfileInfo.module.css";

type PropsType = {
  status: string
  updateStatus: (status: string) => void
}

export default class ProfileStatus extends React.Component<PropsType> {
  state = {
    editMode: false,
    status: this.props.status,
  };
  activateEditMode = () => {
    this.setState({ editMode: true });
  };
  deactivateEditMode = () => {
    this.setState({ editMode: false });
    this.props.updateStatus(this.state.status);
  };
  onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: e.target.value,
    });
  };
  componentDidUpdate(prevProrps: PropsType) {
    if (prevProrps.status !== this.state.status) {
      this.setState({
        status: this.state.status,
      });
    }
  }

  render() {
    return (
      <div>
        {!this.state.editMode ? (
          <span onDoubleClick={this.activateEditMode}>{this.state.status}</span>
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
