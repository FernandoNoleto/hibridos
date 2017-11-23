import { Injectable } from '@angular/core';

@Injectable()
export class RangeProvider {

    public range: number;

    constructor() {

    }

    setRange(r: number){
        this.range = r;
    }

}
