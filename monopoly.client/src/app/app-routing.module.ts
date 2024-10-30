import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GamePageComponent } from "./pages/game-page/game-page.component";
import { LoginPageComponent } from "./pages/auth-pages/login-page/login-page.component";
import { SignUpPageComponent } from "./pages/auth-pages/sign-up-page/sign-up-page.component";
import { NotFoundPageComponent } from "./pages/not-found-page/not-found-page.component";
import { AuthGuard } from "./guards/auth-guard/auth.guard";
import { CreateLobbyPageComponent } from "./pages/create-game-lobby-page/create-lobby-page.component";

const routes: Routes = [
    { path: "game/:id", component: GamePageComponent, canActivate: [AuthGuard] },
    { path: "create-lobby", component: CreateLobbyPageComponent, canActivate: [AuthGuard] },
    { path: "login", component: LoginPageComponent },
    { path: "sign-up", component: SignUpPageComponent },
<<<<<<< HEAD
    { path: "", redirectTo: "create-lobby", pathMatch: "full" },
    { path: "**", component: NotFoundPageComponent }
=======
    { path: "", redirectTo: "game", pathMatch: "full" },
    { path: "**", component: NotFoundPageComponent },
>>>>>>> features/add_tree_js_lib
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
