import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
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
import { AuthService } from "./services/auth.service";
import { AppConfig } from "./app.config";
import { AuthGuard } from "./guards/auth-guard/auth.guard";
import { AuthInterceptor } from "./guards/auth-guard/auth.interceptor";
import { Router } from "@angular/router";
import { AppState } from "./app.state";
import { AreaComponent } from "./components/area/area.component";
import { StreetObjectComponent } from "./components/game-object/street-object/street-object.component";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MobileHeaderComponent,
        GamePageComponent,
        LoginPageComponent,
        SignUpPageComponent,
        NotFoundPageComponent,
        AreaComponent,
        StreetObjectComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useFactory: (router: Router): AuthInterceptor => new AuthInterceptor(router),
            multi: true,
            deps: [Router]
        },
        AuthGuard,
        AuthService,
        AppConfig,
        AppState
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
