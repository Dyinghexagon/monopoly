import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IAccountModel } from "../models/account.model";
import { IResponse } from "../models/response.model";
import { Observable, catchError, map, of } from "rxjs";
import { AppConfig } from "../app.config";
import { IUserClaim } from "../models/user-claim.model";

@Injectable()
export class AuthService {

    constructor(
        private http: HttpClient,
        private config: AppConfig
    ) {}

    public signIn(account: IAccountModel): Observable<IResponse> {
        return this.http.post<IResponse>(`${this.config.authUrl}/signin`, {
            name: account.name,
            password: account.password
        });
    }

    public signUp(account: IAccountModel): Observable<IResponse> {
        return this.http.post<IResponse>(`${this.config.authUrl}/signup`, {
            name: account.name,
            password: account.password
        });
    }

    public signOut():Observable<object> {
        return this.http.get(`${this.config.authUrl}/signout`);
    }

    public account(): Observable<IUserClaim[]> {
        return this.http.get<IUserClaim[]>(`${this.config.authUrl}/account`);
    }

    public isSignedIn(): Observable<boolean> {
        return this.account().pipe(
            map(userClaim => {
                const hasClaims = userClaim.length > 0;
                return !hasClaims ? false : true;
            }),
            catchError(() => {
                return of(false);
            })
        );
    }

}