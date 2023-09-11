import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private apiUrl = 'my-backend-api-url'; 

  private hardcodedLogins = [
    { email: 'Buddhiravihansa1997@gmail.com', password: '12345', id: 1 },
    { email: 'user2@gmail.com', password: 'password2', id: 2 },
    
  ];

  constructor(private http: HttpClient) {}

  // login(formData: any): Observable<any> {
  //   // Make an HTTP POST request to my backend API with the login data
  //   return this.http.post(`${this.apiUrl}/login`, formData);
    
  // }

  login(formData: any): Observable<any> {
    
    const user = this.hardcodedLogins.find(
      (login) =>
        login.email === formData.email && login.password === formData.password
    );

    if (user) {
      const successfulResponse = {
        success: true,
        message: 'Login successful',
        user: user, 
      };
      return of(successfulResponse);
    } else {
      const errorResponse = {
        success: false,
        message: 'Invalid email or password',
      };
      return of(errorResponse);
    }
  }
}
