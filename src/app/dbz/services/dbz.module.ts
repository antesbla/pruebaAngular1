import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
    characters!: Character[];
onDeleteCharacter($event: Character) {
throw new Error('Method not implemented.');
}
    constructor() { }
    
}