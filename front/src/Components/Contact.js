import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import { deleteContact, getContact } from "../JS/actions/contacts";
import { toggleTrue } from "../JS/actions/edit";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <div className="crd">
      <Card >
        <Card.Content>
          <Image
            floated="right"
            // size="mini"
            src="data:image/png;base64,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"
          />
          <Card.Header>{contact.name}</Card.Header>
          <Card.Meta>{contact.email}</Card.Meta>
          <Card.Description>
            <strong>{contact.Phone}</strong>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
          <Link to={`/edit/${contact._id}`}><Button
              inverted
              color="green"
              onClick={()=>{dispatch(getContact(contact._id));dispatch(toggleTrue());
              }}
            >
              Edit
            </Button></Link>
            <Button
              inverted
              color="red"
              onClick={() => dispatch(deleteContact(contact._id))}
            >
              Delete
            </Button>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Contact;
