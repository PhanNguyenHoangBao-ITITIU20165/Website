package com.petcare.rest.webservices.restful.service;

import java.util.Properties;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import com.petcare.rest.webservices.restful.config.EmailConfig;
import com.petcare.rest.webservices.restful.model.OtpRequest;

import jakarta.mail.Message;
import jakarta.mail.MessagingException;
import jakarta.mail.Session;
import jakarta.mail.Transport;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;

@Service
public class EmailSenderService {
    // @Autowired
    // private JavaMailSender mailSender;

    @Autowired
    EmailConfig emailConfig;
    
    @Autowired
    SmtpAuthenticator authentication;

    @Async
    public void sendEmail(OtpRequest otpRequest) {
        String body = "<!DOCTYPE html>\n" +
                "<html lang=\"en\">\n" +
                "  <head>\n" +
                "    <meta charset=\"UTF-8\">\n" +
                "    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">\n" +
                "    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n" +
                "    <title>Static Template</title>\n" +
                "    <link href=\"https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap\" rel=\"stylesheet\">\n" +
                "  </head>\n" +
                "  <body style=\"margin:0;font-family:Poppins,sans-serif;background:#fff;font-size:14px\">\n" +
                "    <div style=\"max-width:680px;margin:0 auto;padding:45px 30px 60px;background:#f4f7ff;background-image:url(https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661497957196_595865/email-template-background-banner);background-repeat:no-repeat;background-size:800px 452px;background-position:top center;font-size:14px;color:#434343\">\n" +
                "      <header>\n" +
                "        <table style=\"width:100%\">\n" +
                "          <tbody>\n" +
                "            <tr style=\"height:0\">\n" +
                "              <td style=\"font-size:33px; color:orange\">\n" +
                "                PetPalz\n" +
                "              </td>\n" +
                "              <td style=\"text-align:right\">\n" +
                "                <span style=\"font-size:16px;line-height:30px;color:#fff\"></span>\n" +
                "              </td>\n" +
                "            </tr>\n" +
                "          </tbody>\n" +
                "        </table>\n" +
                "      </header>\n" +
                "      <main>\n" +
                "        <div style=\"margin:0;margin-top:70px;padding:92px 30px 115px;background:#fff;border-radius:30px;text-align:center\">\n" +
                "          <div style=\"width:100%;max-width:489px;margin:0 auto\">\n" +
                "            <h1 style=\"margin:0;font-size:24px;font-weight:500;color:#1f1f1f\">Verify Your Email</h1>\n" +
                "            <p style=\"margin:0;margin-top:17px;font-size:16px;font-weight:500\">Hey " +
                otpRequest.getUserUserName() +
                ",</p>\n" +
                "            <p style=\"margin:0;margin-top:17px;font-weight:500;letter-spacing:.56px\">Thank you for choosing Petcare E-commerce application. So we can get you started, please enter the code below on the registration page. OTP is valid for <span style=\"font-weight:600;color:#1f1f1f\"> 5 minutes</span>. Do not share this code with others, including my teammates. </p>\n" +
                "            <p style=\"margin:0;margin-top:60px;font-size:40px;font-weight:600;letter-spacing:25px;color:#ba3d4f\">" +
                otpRequest.getOtp() +
                "</p>\n" +
                "          </div>\n" +
                "        </div>\n" +
                "        <p style=\"max-width:400px;margin:0 auto;margin-top:90px;text-align:center;font-weight:500;color:#8c8c8c\">Need help? Ask <a href=\"https://www.facebook.com/zetnguyen172\" style=\"color:#499fb6;text-decoration:none\"> Nghia </a>or visit our <a href=\"https://github.com/HCMIU-Software-Engineering/Software-Engineering-Project\" target=\"_blank\" style=\"color:#499fb6;text-decoration:none\">Help Center</a>\n" +
                "        </p>\n" +
                "      </main>\n" +
                "      <footer style=\"width:100%;max-width:490px;margin:20px auto 0;text-align:center;border-top:1px solid #e6ebf1\">\n" +
                "        <p style=\"margin:0;margin-top:40px;font-size:16px;font-weight:600;color:#434343\">Software Engineering Team 9</p>\n" +
                "        <p style=\"margin:0;margin-top:8px;color:#434343\">Address Quarter 6, Linh Trung Ward, Thu Duc District, HCMC</p>\n" +
                "        <div style=\"margin:0;margin-top:16px\">\n" +
                "          <a href=\"https://github.com/HCMIU-Software-Engineering/Software-Engineering-Project\" target=\"_blank\" style=\"display:inline-block\">\n" +
                "            <img width=\"36px\" alt=\"Facebook\" src=\"https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661502815169_682499/email-template-icon-facebook\">\n" +
                "          </a>\n" +
                "          <a href=\"https://github.com/HCMIU-Software-Engineering/Software-Engineering-Project\" target=\"_blank\" style=\"display:inline-block;margin-left:8px\">\n" +
                "            <img width=\"36px\" alt=\"Instagram\" src=\"https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661504218208_684135/email-template-icon-instagram\">\n" +
                "          </a>\n" +
                "          <a href=\"https://github.com/HCMIU-Software-Engineering/Software-Engineering-Project\" target=\"_blank\" style=\"display:inline-block;margin-left:8px\">\n" +
                "            <img width=\"36px\" alt=\"Twitter\" src=\"https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661503043040_372004/email-template-icon-twitter\">\n" +
                "          </a>\n" +
                "          <a href=\"https://github.com/HCMIU-Software-Engineering/Software-Engineering-Project\" target=\"_blank\" style=\"display:inline-block;margin-left:8px\">\n" +
                "            <img width=\"36px\" alt=\"Youtube\" src=\"https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661503195931_210869/email-template-icon-youtube\">\n" +
                "          </a>\n" +
                "        </div>\n" +
                "        <p style=\"margin:0;margin-top:16px;color:#434343\">Copyright © 2023 Company. All rights reserved.</p>\n" +
                "      </footer>\n" +
                "    </div>\n" +
                "  </body>\n" +
                "</html>";

        Properties props = new Properties();
        props.put("mail.smtp.host" , emailConfig.getHOST_NAME());
        props.put("mail.stmp.user" , emailConfig.getUSERNAME());
        //To use TLS
        props.put("mail.smtp.auth", emailConfig.getAUTH()); 
        props.put("mail.smtp.starttls.enable", emailConfig.getSTART_TLS());
        props.put("mail.smtp.password", emailConfig.getPASSWORD());
        //To use SSL
        props.put("mail.smtp.auth", emailConfig.getAUTH());
        props.put("mail.smtp.port", emailConfig.getPORT());

       
        Message message = new MimeMessage(Session.getInstance(props, authentication));
        try {
            message.setFrom(new InternetAddress(emailConfig.getUSERNAME()));
            message.addRecipient(Message.RecipientType.TO, new InternetAddress(otpRequest.getUserEmail(), true));
            message.setSubject("Verify your email");
            message.setContent(body, "text/html; charset=UTF-8");
            message.saveChanges();
            
            Transport.send(message);
            System.out.println("Email sent successfully");
        } catch (MessagingException e) {
           e.printStackTrace();
        }
    }
}