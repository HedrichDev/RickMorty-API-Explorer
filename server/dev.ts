// server/dev.ts
import { createServer } from "http";
import app, { log } from ".";
import { setupVite } from "./vite";

const httpServer = createServer(app);

(async () => {
  await setupVite(httpServer, app);

  const port = parseInt(process.env.PORT || "5000", 10);
  httpServer.listen(
    {
      port,
      host: "0.0.0.0",
    },
    () => {
      log(`serving on port ${port}`);
    },
  );
})();