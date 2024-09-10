const express = require("express");
const helmet = require("helmet");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(helmet());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

const transporter = nodemailer.createTransport({
  //service: "hotmail",
  host: "smtp.zoho.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  // tls: {
  //   ciphers: "SSLv3",
  //   rejectUnauthorized: false,
  // },
});

app.options("*", cors());

app.post("/api/send-email", async (req, res) => {
  const data = req.body;

  const mailOptions = {
    from: `API Service <${process.env.EMAIL}>`,
    to: process.env.TO,
    subject: data.subject,
    text: generateText(data),
    html: generateTemplate(data),
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email enviado ", info });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Se ha producido un error al enviar el mail", error });
  }
});

app.get("/api/ping", async (req, res) => {
  return res.status(200).json({ message: "OK" });
});

function generateText(data) {
  const now = new Date();
  return `\n
    Nombre: ${data.name}\n
    Teléfono: ${data.phone ? data.phone : "<no proporcionó teléfono>"}\n
    Email: ${data.email ? data.email : "<no proporcionó email>"}\n
    Asunto: ${data.subject ? data.subject : "<no propocionó asunto>"}
    \n
    \n
    Fecha: ${now.toUTCString()}
    \n
    Mensaje: \n
    \n
    ${data.text}
    \n
    FIN DE MENSAJE

    `;
}

function generateTemplate(data) {
  const now = new Date();
  return `
    <h4>Nombre: <p>${data.name}</p></h4>
    <h4>Teléfono: <p>${
      data.phone ? data.phone : "no proporcionó teléfono"
    }</p></h4>
    <h4>Email: <p>${data.email ? data.email : "no proporcionó email"}</p> </h4>
    <h4>Asunto: <p>${
      data.subject ? data.subject : "no proporcionó asunto"
    }</p>  </h4>
    <h4>Fecha: <p>${now.toUTCString()}</p> </h4>
    <h4>Mensaje: </h4>
    </br>
    <h5>${data.text}</h5>
    <h5></h5>
    `;
}

module.exports = app;
