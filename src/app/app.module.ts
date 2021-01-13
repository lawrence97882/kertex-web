import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ImportComponent } from './components/import/import.component';
import { ExportComponent } from './components/export/export.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FruitsComponent } from './components/fruits/fruits.component';
import { EquipmentsComponent } from './components/equipments/equipments.component';
import { OthersComponent } from './components/others/others.component';
import { HoticultureComponent } from './components/hoticulture/hoticulture.component';
import { BuildingComponent } from './components/building/building.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { DefaultComponent } from './components/default/default.component';
import { DescriptionComponent } from './components/description/description.component';
import { CerealsComponent } from './components/cereals/cereals.component';
import { PicComponent } from './components/pic/pic.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImportComponent,
    ExportComponent,
    ContactUsComponent,
    FooterComponent,
    HeaderComponent,
    FruitsComponent,
    EquipmentsComponent,
    OthersComponent,
    HoticultureComponent,
    BuildingComponent,
    VehiclesComponent,
    DefaultComponent,
    DescriptionComponent,
    CerealsComponent,
    PicComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
