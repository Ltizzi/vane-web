const express = require("express");
const helmet = require("helmet");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(helmet());
// app.use(
//   cors({
//     origin: process.env.CLIENT_URL,
//   })
// );

const allowedOrigins = "https://vane-web-git-main-ltizzis-projects.vercel.app";

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

//process.env.DEV_CLIENT_URL,"http://localhost:5174"

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  tls: {
    ciphers: "SSLv3",
    rejectUnauthorized: false,
  },
});

app.options("*", cors());

app.post("/api/send-email", async (req, res) => {
  const data = req.body;

  const mailOptions = {
    from: `API Service <${process.env.EMAIL}>`,
    to: process.env.EMAIL,
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
    <h4>Nombre: ${data.name}</h4>
    <h4>Teléfono: ${data.phone ? data.phone : "no proporcionó teléfono"}</h4>
    <h4>Email: ${data.email ? data.email : "no proporcionó email"} </h4>
    <h4>Asunto: ${data.subject ? data.subject : "no proporcionó asunto"} </h4>
    </br>
    </br>
    <h4>Fecha: ${now.toUTCString()} </h4>
    </br>
    <h4>Mensaje: </h4>
    </br>
    <h5>${data.text}</h5>
    </br>
    <h5></h5>
    `;
}

module.exports = app;
