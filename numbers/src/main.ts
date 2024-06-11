import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';
import { getStorage, provideStorage } from '@angular/fire/storage';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)), provideFirebaseApp(() => initializeApp({"projectId":"enacment-a2578","appId":"1:83459355052:web:9e0a9937ed9de9211d4a09","storageBucket":"enacment-a2578.appspot.com","apiKey":"AIzaSyD94fJn6QLAG_bfFCaIkqAuQGUJwj_p5e8","authDomain":"enacment-a2578.firebaseapp.com","messagingSenderId":"83459355052","measurementId":"G-Q46M9Z1J97"})), provideAuth(() => getAuth()), provideAnalytics(() => getAnalytics()), ScreenTrackingService, UserTrackingService, provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()), provideRemoteConfig(() => getRemoteConfig()), provideFirebaseApp(() => initializeApp({"projectId":"enacment-a2578","appId":"1:83459355052:web:9e0a9937ed9de9211d4a09","storageBucket":"enacment-a2578.appspot.com","apiKey":"AIzaSyD94fJn6QLAG_bfFCaIkqAuQGUJwj_p5e8","authDomain":"enacment-a2578.firebaseapp.com","messagingSenderId":"83459355052","measurementId":"G-Q46M9Z1J97"})), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()), provideStorage(() => getStorage()),
  ],
});
