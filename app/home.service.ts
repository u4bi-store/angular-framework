import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {
    flag(bool): boolean {
        return bool = !bool;
    }
}
