import React, { Component } from "react"
import Modal from './modal';

class Interact extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <div className='interact' onClick={this.toggleModal}>
          { this.props.children }
        </div>
        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
          Here's some content for the modal
        </Modal>
      </div>
    );
  }
}

export default Interact;

// export default ({ children }) =>
//   <div className='interact'
//     style={
//       {
//         // paddingBottom: '12px'
//       }
//     }>
//     {children}
//   </div>
