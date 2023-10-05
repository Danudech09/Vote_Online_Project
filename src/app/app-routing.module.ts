import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DetailComponent } from './components/detail/detail.component';
import { ReportComponent } from './components/report/report.component';
import { VoteComponent } from './components/vote/vote.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageuserComponent } from './components/manageuser/manageuser.component';
import { ManageEventComponent } from './components/manage-event/manage-event.component';
import { AdminReportComponent } from './components/admin-report/admin-report.component';
import { ReportforAdminComponent } from './components/reportfor-admin/reportfor-admin.component';
import { AddeventComponent } from './components/addevent/addevent.component';
import { AddcandidatesComponent } from './components/addcandidates/addcandidates.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { AdminadduserComponent } from './components/adminadduser/adminadduser.component';
import { EventComponent } from './components/event/event.component';
import { AdminEditUesrComponent } from './components/admin-edit-uesr/admin-edit-uesr.component';
import { EditcandidatesComponent } from './components/editcandidates/editcandidates.component';
import { EditeventComponent } from './components/editevent/editevent.component';
import { UserresetpasswordComponent } from './components/userresetpassword/userresetpassword.component';


const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  // {path: '',
  //   redirectTo: 'main',
  //   pathMatch: 'full'
  // },
  {path: 'detail', component: DetailComponent},
  {path: 'report', component: ReportComponent},
  {path: 'vote', component: VoteComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'manageuser', component: ManageuserComponent},
  {path: 'manageEvent', component: ManageEventComponent},
  {path: 'adminReport', component: AdminReportComponent},
  {path: 'ReportforAdmin', component: ReportforAdminComponent},
  {path: 'addevent', component: AddeventComponent},
  {path: 'addcandidates', component: AddcandidatesComponent},
  {path: 'resetpassword', component: ResetpasswordComponent},
  {path: 'adduser', component: AdminadduserComponent},
  {path: 'event', component: EventComponent},
  {path: 'edituser', component: AdminEditUesrComponent},
  {path: 'editcandidates', component: EditcandidatesComponent},
  {path: 'editevent', component: EditeventComponent},
  {path: 'userresetpassword', component: UserresetpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
