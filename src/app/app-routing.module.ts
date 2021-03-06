import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupsComponent } from './components/groups/groups.component';
import { HomeComponent } from './components/home/home.component';
import { MatchWinnerComponent } from './components/match-winner/match-winner.component';
import { MatchesComponent } from './components/matches/matches.component';
import { ParticipantComponent } from './components/participant/participant.component';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'participant', component: ParticipantComponent },
  { path: 'group', component: GroupsComponent },
  { path: 'match', component: MatchesComponent },
  { path: 'match_winner', component: MatchWinnerComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
