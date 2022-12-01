import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GifsPageComponent } from './gifs/gifs-page/gifs-page.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'gif', component: GifsPageComponent },
    { path: 'home', component: HomeComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }