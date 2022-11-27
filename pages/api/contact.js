import nodemailer from "nodemailer"

export default async (req, res) => {
  const { name, email, message } = req.body
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.email, //kittythecreative1@gmail.com
      pass: process.env.emailpwd,
    },
  })

  try {
    await transporter.sendMail({
      from: email,
      to: "kittythecreativeartist@gmail.com",
      subject: `Contact form submission from ${name}`,
      html: `<p>You have a contact form submission</p><br>
        <p><strong>Email: </strong> ${email}</p><br>
        <p><strong>Message: </strong> ${message}</p><br>
      `,
    })
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() })
  }
  return res.status(200).json({ error: "" })
}

// const transporter = nodemailer.createTransport({
//   port: 465,
//   host: "smtp.gmail.com",
//   auth: {
//     user: 'kittythecreative1@gmail.com',
//     pass: 'BakugoIsBombKing',
//   },
//   secure: true,
// })
// const mailData = {
//   from: 'demo@demo.com',
//   to: 'your email',
//   subject: `Message From ${req.body.name}`,
//   text: req.body.message,
//   html: <div>{req.body.message}</div>
//  }

//  transporter.sendMail(mailData, function (err, info) {
//   if(err)
//     console.log(err)
//   else
//     console.log(info)
// })

// export default function (req, res) {
//   let nodemailer = require("nodemailer")
//   const transporter = nodemailer.createTransport({
//     port: 465,
//     host: "smtp.gmail.com",
//     auth: {
//       user: "kittythecreativeartist@gmail.com", //kittythecreative1@gmail.com
//       pass: "osavbhgtiuasjlxi",
//     },
//     secure: true,
//   })
//   const mailData = {
//     from: "demo email",
//     to: "your email",
//     subject: `Message From ${req.body.name}`,
//     text: req.body.message + " | Sent from: " + req.body.email,
//     html: `<div>${req.body.message}</div><p>Sent from:
//     ${req.body.email}</p>`,
//   }
//   transporter.sendMail(mailData, function (err, info) {
//     if (err) console.log(err)
//     else console.log(info)
//   })
//   res.status(200)
// }
