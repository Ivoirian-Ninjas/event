import React, { Component } from 'react'

let dialogStyles = {
    width:"500px",
    maxWidth:"100%",
    margin:"0 auto",
    position: "fixed",
    left:"50%",
    top:"50%",
    transform:"translate(-50%, -50%",
    zIndex:"999",
    backgroundColor:"#eee",
    padding:"10px 20px 40px",
    borderRadius:"8px",
    display:"flex",
    flexDirection:"column"
}
let dialogCloseButtonStyle = {
    marginBottom :"15px",
    padding:"3px 8px",
    cursor:"pointer",
    borderRadius:"50%",
    border:"none",
    width:"30px",
    height:"30px",
    fontWeight:"bold",
    alignSelf:"flex-end",
    outline:"none"
}
export class Modal extends Component {
         /* <button onClick={(e) => this.setState({isOpen : true})}>Open Dialog</button> 
    <Dialog isOpen={this.state.isOpen} onClose={(e) => this.setState({isOpen: false})}>
    Le bla bla habituel
    </Dialog>


    import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#yourAppElement')

function App(){
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal(){
    setIsOpen(false);
  }

    return (
      <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </div>
    );
}

ReactDOM.render(<App />, appElement);

*/

         render() {
           let dialog = (
             <div style={dialogStyles}>
               <button style={dialogCloseButtonStyle} onClose={this.props.onClose}> X </button>
               <div>{this.props.children}</div>
             </div>
           );
           if (!this.props.isOpen) {
             dialog = null;
           }
           return <div>{dialog}</div>;
         }
       }

export default Modal
