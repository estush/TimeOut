// const jwt = require('jsonwebtoken');
// const { OAuth2Client } = require('google-auth-library');
// const client = new OAuth2Client(''); // יש להחליף במזהה הלקוח שלך ממנהל ה-API של Google

// const nodemailer = require('nodemailer');
// קונפיגורציה של Nodemailer
// let transporter = nodemailer.createTransport({
    
//     service: 'hotmail',
//     port: 587,
//     auth: {
//       //  user: 'timeout1@outlook.co.il',
//       //  pass: 'time1122'
//        user: 'mazaltovchagit16@gmail.com',
//             pass: 'bysr woai nxmd jtti'
//       }
// });

// const transporter = nodemailer.createTransport({
//   // secureConnection: true,
//   service: 'gmail',
//   auth: {
//       user: 'mazaltovchagit16@gmail.com',
//       pass: 'bysr woai nxmd jtti'
//   }
// });
// function sendTemporaryPasswordToCustomerEmail(user) {
//   const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//           user: 'mazaltovchagit16@gmail.com',
//           pass: 'bysr woai nxmd jtti'
//       }
//   });

//   const mailOptions = {
//       from: 'mazaltovchagit16@gmail.com',
//       to: "st3196420@gmail.com",
//       subject: 'סיסמא זמנית ND',
//       html: `
//       <div dir="rtl">
//       <p>הסיסמה הזמנית שלך היא: ${user.name}</p>
//       </div>
//   `
//   };

//   transporter.sendMail(mailOptions, function (error, info) {
//       if (error) {
//           console.error(error);
//       }
//   });

// }

// export const sendEmail = async (req, res) => {
  
//     //  const { to, subject, text } = req.body;
//     const user= "st3196420@gmail.com"
// debugger
//     try {
//         await transporter.sendMail({
//             from: 'mazaltovchagit16@gmail.com',
//             to: user,
//             subject : "succsesssssss",
//             text: "this is the kod"
//         });
//        console.log({ message: 'Email sent successfully!' });
//     } catch (error) {
//         console.error('Error sending email:', error);
//         // res.status(500).json({ message: 'Failed to send email.' });
//     }
// };

// module.exports = { sendEmail };
// sendEmail({}, {});

