import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceTestComponent } from './service-test/service-test.component';
import { InputTestComponent } from './interaction/input-test/input-test.component';
import { OutputTestComponent } from './interaction/output-test/output-test.component';
import { PipeTestPipe } from './pipe-test.pipe';
import { PipeTestComponentComponent } from './pipe-test-component/pipe-test-component.component';
import { Routes, RouterModule } from '@angular/router';

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
    PipeTestComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
