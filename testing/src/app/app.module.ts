import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceTestComponent } from './components/service-test/service-test.component';
import { InputTestComponent } from './components/interaction/input-test/input-test.component';
import { OutputTestComponent } from './components/interaction/output-test/output-test.component';
import { PipeTestPipe } from './pipes/pipe-test.pipe';
import { PipeTestComponentComponent } from './components/pipe-test-component/pipe-test-component.component';
import { Routes, RouterModule } from '@angular/router';
import { EffectsDirective } from './directives/effects.directive';

const routes: Routes = [
  {
    path: '',
    component: ServiceTestComponent
  },
  {
    path: 'input',
    component: InputTestComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ServiceTestComponent,
    InputTestComponent,
    OutputTestComponent,
    PipeTestPipe,
    PipeTestComponentComponent,
    EffectsDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
