const sendEmail = async (req, res) => {
    try {
      const{to,subject,message}=req.body;
      console.log('the request we have got is ',to,message,subject);
    
      const user = {
        name: "Satyawan",
        email: "roshnieducation2018@gmail.com",
      };
  
      const formData = {
        to_email: to,
        subject: subject,
        message: message,
      };
      const emailParams = {
        from_name: user.name,
        from_email: user.email,
        to_email: formData.to_email,
        subject: formData.subject,
        message: formData.message,
      };
  console.log('email params',emailParams);
  
      const infoForsend = {
        serviceId: "service_az6f0zj",
        templateId: "template_2fapudp",
        emailParameters: emailParams,
        userId: "DxHPyiBw0ZaZWiPHY",
      };
  
      emailjs
        .send(
          infoForsend.serviceId,
          infoForsend.templateId,
          infoForsend.emailParameters,
          infoForsend.userId
        )
        .then(
          (result) => {
            console.log("email send successfully");
            res.json({
              success: true,
              message: "email sent succesfully",
            });
          },
          (error) => {
            console.log("Error sending email", error.message);
            res.json({
              success: false,
              message: "email ❌ not sent succesfully",
            });
          }
        );
    } catch (error) {
      res.json({
        success: false,
        message: "error in sending email",
      });
    }
  
    console.log("the data at backend recieved =", req.body);
  };