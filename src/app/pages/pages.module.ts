import { NgModule } from '@angular/core';

// Modules
import { SharedModule } from '../shared/shared.module';

// Routes
import { PAGES_ROUTES } from './pages.routes';

// Components
import { Graphics1Component } from './graphics1/graphics1.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graphics1Component
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graphics1Component
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES
    ]
})

export class PagesModule {}
