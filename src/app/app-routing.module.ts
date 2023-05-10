import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { FactsSiteComponent } from './facts-site/facts-site.component';
import { AppFormsComponent } from './main-page/background-base/forms/app_forms.component';
import { IntroComponent } from './main-page/background-base/intro/intro.component';
import { OurChinchillasComponent } from './main-page/background-base/our-chinchillas/our-chinchillas.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {path: '', component : MainPageComponent},
  { path: 'main', component: MainPageComponent },
  { path: 'random-fact', component: FactsSiteComponent },
];

const routerOptions : ExtraOptions={
  scrollPositionRestoration : 'enabled',
  anchorScrolling : 'enabled'
}

@NgModule({
  imports: [
    RouterModule.forRoot(routes, routerOptions),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
