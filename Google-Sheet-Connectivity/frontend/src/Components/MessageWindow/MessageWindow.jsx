 

import { useState } from "react";
import "./MessageWindow.css";
import emailjs from "emailjs-com";

const MessageWindow = () => {
  const [emailInfo, setEmailInfo] = useState({
    from_name: "",
    to_name: "",
    to_email: "",  // New field for the recipient's email
    subject: "",
    message: "",
  });

  const handleTextChange = (e) => {
    setEmailInfo({ ...emailInfo, [e.target.name]: e.target.value });
  };

  const sendEmail = async () => {
    // EmailJS parameters
    const emailParams = {
      to_name: emailInfo.to_name,
      from_name: emailInfo.from_name,
      message: emailInfo.message,
      to_email: emailInfo.to_email,  // Recipient email
       
    };

    try {
      await emailjs.send(
        "service_nhiwkc2",       // Service ID
        "template_djp3nn6",      // Template ID
        emailParams,             // Parameters (dynamic data)
       );
      alert("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email: " + error.message);
    }
  };

  return (
    <div className="message-window">
      <div className="message-to">
        <input
          name="from_name"
          value={emailInfo.from_name}
          onChange={handleTextChange}
          placeholder="Your name"
        />
      </div>
      <div className="message-to">
        <input
          name="to_name"
          value={emailInfo.to_name}
          onChange={handleTextChange}
          placeholder="Recipient's name"
        />
      </div>
      <div className="message-to">
        <input
          name="to_email"
          value={emailInfo.to_email}
          onChange={handleTextChange}
          placeholder="Recipient's email address"
        />
      </div>
      <div className="given-message">
        <input
          name="subject"
          value={emailInfo.subject}
          onChange={handleTextChange}
          placeholder="Subject of the email..."
        />
      </div>
      <div className="given-message">
        <textarea
          name="message"
          value={emailInfo.message}
          onChange={handleTextChange}
          placeholder="Write your message..."
        />
      </div>
      <div className="send-to">
        <button className="btn-send-to" onClick={sendEmail}>
          Send Email
        </button>
      </div>
    </div>
  );
};

export default MessageWindow;

 