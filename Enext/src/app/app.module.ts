import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HubComponent } from './pages/hub/hub.component';
import { NavbarComponent } from './comp/navbar/navbar.component';
import { PotionProductComponent } from './comp/potion-product/potion-product.component';
import { FooterComponent } from './comp/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HubComponent,
    NavbarComponent,
    PotionProductComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
