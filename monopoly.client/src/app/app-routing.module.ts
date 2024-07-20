import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GamePageComponent } from "./pages/game-page/game-page.component";
import { LoginPageComponent } from "./pages/auth-pages/login-page/login-page.component";
import { SignUpPageComponent } from "./pages/auth-pages/sign-up-page/sign-up-page.component";
import { NotFoundPageComponent } from "./pages/not-found-page/not-found-page.component";
import { AuthGuard } from "./guards/auth-guard/auth.guard";
import { CreateGameLobbyPageComponent } from "./pages/create-game-lobby-page/create-game-lobby-page.component";

const routes: Routes = [
    { path: "game", component: GamePageComponent, canActivate: [AuthGuard] },
    { path: "createGameLobby", component: CreateGameLobbyPageComponent, canActivate: [AuthGuard] },
    { path: "login", component: LoginPageComponent },
    { path: "sign-up", component: SignUpPageComponent },
    { path: "", redirectTo: "createGameLobby", pathMatch: "full" },
    { path: "**", component: NotFoundPageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
