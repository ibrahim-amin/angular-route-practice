import { Routes } from "@angular/router";
import { ActivateGuard } from "./activate.guard";
import { AdminComponent } from "./admin/admin.component";
import { BookResolver } from "./bookresolver";
import { DeactivateGuard } from "./deactivate.guard";
import { HomeComponent } from "./home/home.component";
import { viewDetailComponent } from "./home/view-detail.component";
import { MerchantComponent } from "./merchant/merchant.component";

export const approutes: Routes = [
    // {path:'', component:HomeComponent},
    {path:'home', component:HomeComponent},
    // {path:'admin', component:AdminComponent,canActivate:[ActivateGuard]},
    { path: 'admin', component: AdminComponent, canActivate : [ActivateGuard] },
    { path: 'merchant', component: MerchantComponent, canDeactivate : [DeactivateGuard] },
    { path: 'view-detail/:id', component: viewDetailComponent
        ,resolve:{ bookdetail:BookResolver}

    },
  ];