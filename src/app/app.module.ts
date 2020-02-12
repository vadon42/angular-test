import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import {UserListComponent} from './user-list/user-list.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { BaseComponent } from './base/base.component'
import { UserComponent } from './user/user.component'
import { PhonePipe } from './phone.pipe'
import {UsersService} from './users.service'

const appRoutes: Routes = [
  { path: '', component: BaseComponent },
  { path: 'users', component: UserListComponent },
  { path: 'user/:id', component: UserComponent },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    NotFoundComponent,
    BaseComponent,
    UserComponent,
    PhonePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
