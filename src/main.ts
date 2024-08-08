import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// Using "component" approach:
// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent).catch((err) => console.error(err));

// Using "component" approach:

platformBrowserDynamic().bootstrapModule(AppModule);
