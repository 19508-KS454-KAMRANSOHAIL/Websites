import { platformServer, renderToString } from "@angular/platform-server";
import { AppComponent } from "./app.component";
import { serverConfig } from "./app.config.server";

async function bootstrap() {
  const platformRef = platformServer();
  const app = platformRef.bootstrapModule(AppComponent, { ngZone: "zone.js" });

  const html = await app.then((moduleRef) =>
    renderToString(moduleRef.componentInstance)
  );

  console.log(html);
}

bootstrap().catch((err) => console.error(err));
