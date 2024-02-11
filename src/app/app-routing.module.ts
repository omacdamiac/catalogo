import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch:'full'},
  {
    path: "",
    loadChildren: () =>
      import("./ui/views/dashborad/dashboard.module").then(
        (m) => m.DashboradModule
      ),
  },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
