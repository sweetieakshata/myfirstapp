import { Routes,RouterModule } from "@angular/router";
import { UserResolverService } from '../user-resolver.service';
import { UsersComponent } from './users.component';
const arr : Routes=[
{path:'user1', resolve:{uData:UserResolverService}, component:UsersComponent}
];
export const usersrouting=RouterModule.forChild(arr);
