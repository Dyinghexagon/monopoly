import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { MobileHeaderComponent } from "./components/header/mobile-header/mobile-header.component";
import { GamePageComponent } from "./pages/game-page/game-page.component";
import { LoginPageComponent } from "./pages/auth-pages/login-page/login-page.component";
import { SignUpPageComponent } from "./pages/auth-pages/sign-up-page/sign-up-page.component";
import { NotFoundPageComponent } from "./pages/not-found-page/not-found-page.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MobileHeaderComponent,
        GamePageComponent,
        LoginPageComponent,
        SignUpPageComponent,
        NotFoundPageComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
