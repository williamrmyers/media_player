import React from 'react';
import { connect } from 'react-redux';

class CurrentSong extends React.Component {

  renderSong = () => {
    if (!this.props.song) {
      return ("--");
    } else {
      return (this.props.song);
    }
  }

  render() {
    return(
      <div>Playing: {this.renderSong().title}</div>
    );
  }
}

const mapStateToProps = (state) => {
  return { song: state.selectedSong }
}

export default connect(mapStateToProps)(CurrentSong);
