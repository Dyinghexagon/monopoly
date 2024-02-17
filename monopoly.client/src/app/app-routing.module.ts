import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GamePageComponent } from "./pages/game-page/game-page.component";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { SignUpPageComponent } from "./pages/sign-up-page/sign-up-page.component";
import { NotFoundPageComponent } from "./pages/not-found-page/not-found-page.component";

const routes: Routes = [
    { path: "", component: GamePageComponent },
    { path: "login", component: LoginPageComponent },
    { path: "sign-up", component: SignUpPageComponent },
    { path: "**", component: NotFoundPageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
