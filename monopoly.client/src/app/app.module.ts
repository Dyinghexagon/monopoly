import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
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
import { AreaComponent } from "./components/areas/area/area.component";
import { StreetObjectComponent } from "./components/game-object/street-object/street-object.component";
import { TreasuryComponent } from "./components/game-object/treasury/treasury.component";
import { IncomeTaxComponent } from "./components/game-object/income-tax/income-tax.component";
import { RailwayComponent } from "./components/game-object/railway/railway.component";
import { StartComponent } from "./components/game-object/start/start.component";
import { ChanceComponent } from "./components/game-object/chance/chance.component";
import { JailComponent } from "./components/game-object/jail/jail.component";
import { PowerhouseComponent } from "./components/game-object/powerhouse/powerhouse.component";
import { ParkingComponent } from "./components/game-object/parking/parking.component";
import { WaterSupplyComponent } from "./components/game-object/water-supply/water-supply.component";
import { ArrestedComponent } from "./components/game-object/arrested/arrested.component";
import { PlayerAreaComponent } from "./components/areas/players-area/players-area.component";
import { PlayerComponent } from "./components/areas/players-area/player/player.component";
import { DiceComponent } from "./components/dice/dice.component";
import { ChanceCardGeneratedService } from "./services/card-generated-services/chance-card-generated.service";
import { TreasuryCardGeneratedService } from "./services/card-generated-services/treasury-card-generated.service";
import { AIChanceCardGeneratedService } from "./services/card-generated-services/ai-chance-card-generated.service";
import { AITreasuryCardGeneratedService } from "./services/card-generated-services/ai-treasury-card-generated.service";
import { SignalRService } from "./services/signalR.service";

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
        StartComponent,
        StreetObjectComponent,
        TreasuryComponent,
        IncomeTaxComponent,
        RailwayComponent,
        ChanceComponent,
        JailComponent,
        PowerhouseComponent,
        ParkingComponent,
        WaterSupplyComponent,
        ArrestedComponent,
        PlayerAreaComponent,
        PlayerComponent,
        DiceComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule
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
        AppState,
        ChanceCardGeneratedService,
        TreasuryCardGeneratedService,
        AIChanceCardGeneratedService,
        AITreasuryCardGeneratedService,
        SignalRService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
