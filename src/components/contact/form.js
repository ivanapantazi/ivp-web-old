import React from 'react';
import { Form, Text, Scope, TextArea } from 'informed';

const SendData = (props) => {
    return (
    	 <div className="form" id="contact-form">
	    	 <Form action="contact/contact.php" method="post" className="contactForm">
	    	 	<div className="form-group field name">
					  <Text field="name" className="form-control" id="name-field" placeholder="Your Name" size="40" data-rule="maxlen:4" data-msg="Please enter at least 4 chars"/>
				</div>
				<div className="form-group field email">
					  <Text field="name" className="form-control" id="name-field" placeholder="Your Name" size="40" data-rule="maxlen:4" data-msg="Please enter at least 4 chars"/>
				</div>
				<div className="form-group field subject">
					  <Text field="name" className="form-control" id="name-field" placeholder="Your Name" size="40" data-rule="maxlen:4" data-msg="Please enter at least 4 chars"/>
				</div>
				<div className="form-group field message">
					  <TextArea field="name" className="form-control" id="name-field" placeholder="Your Name" size="40" data-rule="maxlen:4" data-msg="Please enter at least 4 chars"/>
				</div>
				<div className="text-center"><button type="submit">Send Message</button><button type="reset">Reset</button></div>
			</Form>
         
        </div>
    );
};

export default SendData;