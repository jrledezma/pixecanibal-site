import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

interface SessionData {
  showMenuOptions: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CacheDataService {

  protected projectId: string;

  constructor() {
  }

  setProjectId(projectId: string) {
    this.projectId = projectId;
  }

  getProjectId(): string {
    return this.projectId;
  }
}
