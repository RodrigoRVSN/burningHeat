import { serverHttp } from "./app";

serverHttp.listen(4000, () =>
  console.log("🔥 Aplicação rodando na porta 4000 🔥")
);
