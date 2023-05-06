import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

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
    EduExpAddComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
