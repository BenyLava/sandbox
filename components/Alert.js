import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

export default function AlertDismissible() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
    <div className="width66">
      <Alert className="width66" variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert>
      </div>
    );
  }
  return <div className="d-flex text-align-right just-content-center"><Button className="d-flex just-content-flex-end"onClick={() => setShow(true)}>Show Alert</Button></div>;
}



{/*width66 is width=66vw 






*/}