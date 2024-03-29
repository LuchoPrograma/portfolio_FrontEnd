import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { EducationAndExperienceComponent } from './components/education-and-experience/education-and-experience.component';
import { HardSoftSkillsComponent } from './components/hard-soft-skills/hard-soft-skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './components/login/login.component';
import { AboutEditComponent } from './components/forms/about-edit/about-edit.component';
import { EduExpAddComponent } from './components/forms/edu-exp-add/edu-exp-add.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { SkillsAddComponent } from './components/forms/skills-add/skills-add.component';
import { SkillsEditComponent } from './components/forms/skills-edit/skills-edit.component';
import { EduExpEditComponent } from './components/forms/edu-exp-edit/edu-exp-edit.component';
import { ProjectsAddComponent } from './components/forms/projects-add/projects-add.component';
import { ProjectsEditComponent } from './components/forms/projects-edit/projects-edit.component';
import { InterceptorService } from './services/interceptor.service';
import { PortfolioService } from './services/portfolio.service';


const routes: Routes = [
  {path : '', component:AppComponent},
  {path : 'edicion', component:AppComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    EducationAndExperienceComponent,
    HardSoftSkillsComponent,
    ProjectsComponent,
    LoginComponent,
    AboutEditComponent,
    EduExpAddComponent,
    ButtonsComponent,
    SkillsAddComponent,
    SkillsEditComponent,
    EduExpEditComponent,
    ProjectsAddComponent,
    ProjectsEditComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PortfolioService,
    {provide: HTTP_INTERCEPTORS,useClass: InterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
