import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Goal } from '../models/Goal';

@Injectable({
  providedIn: 'root',
})
export class GoalService {
  private baseURL = 'http://localhost:8080/goals/';

  constructor(private httpClient: HttpClient) {}

  getGoalsList(): Observable<Goal[]> {
    return this.httpClient.get<Goal[]>(`${this.baseURL}`);
  }
  createGoal(goal: Goal): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, goal);
  }
  getGoalById(id: number): Observable<Goal> {
    return this.httpClient.get<Goal>(`${this.baseURL}${id}`);
  }
  updateGoal(id: number, goal: Goal): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}${id}`, goal);
  }
  deleteGoal(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}${id}`);
  }
}
