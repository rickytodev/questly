import express from "express";
import configServer from "./config";
import path from "node:path";
import dotenv from "dotenv";
import Console from "./commands/terminal";

dotenv.config();

const app = express();

const dirname = import.meta.dirname;

app.use(express.static(path.join(dirname, "public")));
app.use(express.json());

app.get("/", (_, res) => {
  res.sendFile(path.join(dirname, "src", "pages", "index.html"));
});

app.get("/dashboard", (_, res) => {
  res.sendFile(path.join(dirname, "src", "pages", "dashboard.html"));
});

let tokenAccount: string = "";

app.post("/auth/access", (req, res) => {
  const { email, password } = req.body;

  Console({ name: "💾 Datos Acceso", value: JSON.stringify(req.body) });

  if (
    email !== configServer.auth.email ||
    password !== configServer.auth.password
  ) {
    res.status(401).send({ error: "Acceso denegado" });
    Console({ name: "❌ Acceso Denegado", value: "Credenciales incorrectas" });
    return;
  }

  const token = crypto.randomUUID().replaceAll("-", "");
  tokenAccount = token;

  Console({ name: "✅ Acceso Concedido", value: `Token: ${token}` });

  res
    .status(200)
    .header({
      Location: "/dashboard",
    })
    .send({ token });
});

app.get("/token/check", (req, res) => {
  const cookies = req.headers.cookie;

  if (cookies === "") {
    res.status(401).send({ error: "Token no encontrado" });
  }

  let token: string | undefined = "";

  if (cookies?.includes("; ")) {
    token = cookies
      .split("; ")
      .filter((cookies) => cookies.includes("token="))
      .pop();
    return;
  }

  token = cookies?.split("token=").pop();

  Console({ name: "🔒 Token Obtenido", value: token || "No token" });
  Console({ name: "🗝️ Token Cuenta", value: tokenAccount });

  if (token === tokenAccount) {
    res.status(200).send();
    return;
  }

  res
    .status(401)
    .header({ Location: "/" })
    .send({ error: "Token no encontrado" });
});

app.listen(configServer.port, () =>
  Console({
    name: "🚀 Servidor Iniciado",
    value: `Puerto [${configServer.port}]`,
  })
);
