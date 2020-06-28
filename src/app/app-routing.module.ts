import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ExampleComponent } from './example/example.component';

const routes: Routes = [
 {path : '' , component : LoginComponent},
 {path : 'login' , component : LoginComponent},
 {path : 'home' , component : HomeComponent},
 {path : 'example' , component : ExampleComponent},

 {path : '**' , redirectTo : '/login' ,pathMatch: 'full'}




];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
