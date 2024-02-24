import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IUserModel } from "../models/user.model";
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

    public signIn(user: IUserModel): Observable<IResponse> {
        return this.http.post<IResponse>(`${this.config.authUrl}/signin`, {
            name: user.name,
            password: user.password
        });
    }

    public signUp(user: IUserModel): Observable<IResponse> {
        return this.http.post<IResponse>(`${this.config.authUrl}/signup`, {
            name: user.name,
            password: user.password
        });
    }

    public signOut():Observable<object> {
        return this.http.get(`${this.config.authUrl}/signout`);
    }

    public user(): Observable<IUserClaim[]> {
        return this.http.get<IUserClaim[]>(`${this.config.authUrl}/user`);
    }

    public isSignedIn(): Observable<boolean> {
        return this.user().pipe(
            map(userClaim => {
                console.warn(userClaim);
                const hasClaims = userClaim.length > 0;
                return !hasClaims ? false : true;
            }),
            catchError(() => {
                return of(false);
            })
        );
    }

}