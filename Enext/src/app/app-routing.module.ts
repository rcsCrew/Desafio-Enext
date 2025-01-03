import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HubComponent } from './pages/hub/hub.component';

const routes: Routes = [
  {path: "" , redirectTo: "Hub", pathMatch: "full"},
  {path: "Hub", component: HubComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
