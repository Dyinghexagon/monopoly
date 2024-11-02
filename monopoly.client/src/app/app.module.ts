import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { MobileHeaderComponent } from "./components/header/mobile-header/mobile-header.component";
import { GamePageComponent } from "./pages/game-page/game-page.component";
import { LoginPageComponent } from "./pages/auth-pages/login-page/login-page.component";
import { SignUpPageComponent } from "./pages/auth-pages/sign-up-page/sign-up-page.component";
import { NotFoundPageComponent } from "./pages/not-found-page/not-found-page.component";
import { AuthService } from "./services/auth.service";
import { AppConfig } from "./app.config";
import { AuthGuard } from "./guards/auth-guard/auth.guard";
import { AuthInterceptor } from "./guards/auth-guard/auth.interceptor";
import { Router } from "@angular/router";
import { AppState } from "./app.state";
import { AreaComponent } from "./components/areas/area/area.component";
import { StreetCellComponent } from "./components/cells/street-cell/street-cell.component";
import { TreasuryCellComponent } from "./components/cells/treasury-cell/treasury-cell.component";
import { IncomeTaxCellComponent } from "./components/cells/income-tax-cell/income-tax-cell.component";
import { RailwayCellComponent } from "./components/cells/railway-cell/railway-cell.component";
import { ChanceCellComponent } from "./components/cells/chance-cell/chance-cell.component";
import { JailCellComponent } from "./components/cells/jail-cell/jail-cell.component";
import { ParkingCellComponent } from "./components/cells/parking-cell/parking-cell.component";
import { WaterSupplyCellComponent } from "./components/cells/water-supply-cell/water-supply-cell.component";
import { ArrestedCellComponent } from "./components/cells/arrested-cell/arrested-cell.component";
import { PlayerAreaComponent } from "./components/areas/players-area/players-area.component";
import { PlayerComponent } from "./components/areas/players-area/player/player.component";
import { DiceComponent } from "./components/dice/dice.component";
import { ChanceCardGeneratedService } from "./services/card-generated-services/chance-card-generated.service";
import { TreasuryCardGeneratedService } from "./services/card-generated-services/treasury-card-generated.service";
import { AIChanceCardGeneratedService } from "./services/card-generated-services/ai-chance-card-generated.service";
import { AITreasuryCardGeneratedService } from "./services/card-generated-services/ai-treasury-card-generated.service";
import { SignalRService } from "./services/signalR.service";
import { CreateLobbyPageComponent } from "./pages/create-game-lobby-page/create-lobby-page.component";
import { GameService } from "./services/game.service";
import { StartCellComponent } from "./components/cells/start-cell/start-cell.component";
import { PowerhouseCellComponent } from "./components/cells/powerhouse-cell/powerhouse-cell.component";
import { GameDataTransferService } from "./services/game-data-transfer.service";
import { CellPurchaseModalComponent } from "./components/modals/cell-purchase-modal/cell-purchase-modal.component";

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
        StartCellComponent,
        StreetCellComponent,
        TreasuryCellComponent,
        IncomeTaxCellComponent,
        RailwayCellComponent,
        ChanceCellComponent,
        JailCellComponent,
        PowerhouseCellComponent,
        ParkingCellComponent,
        WaterSupplyCellComponent,
        ArrestedCellComponent,
        PlayerAreaComponent,
        PlayerComponent,
        DiceComponent,
        CreateLobbyPageComponent,
        CellPurchaseModalComponent
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
        SignalRService,
        GameService,
        GameDataTransferService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
