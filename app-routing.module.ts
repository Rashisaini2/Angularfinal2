import { NgModule } from '@angular/core';
import { RouterModule, Routes,RouterOutlet } from '@angular/router';
import { CreateComponent } from './users/create/create.component'; 

const routes: Routes = [
  {path:"users", loadChildren:()=>import("./users/users.module").then(mod=>mod.UsersModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,RouterOutlet]
})
export class AppRoutingModule { }
