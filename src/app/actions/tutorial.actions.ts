import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { TutorialModel } from '../models/tutorial.model';

export const ADD_TUTORIAL = '[TUTORIAL] Add';
export const REMOVE_TUTORIAL = '[TUTORIAL] Remove';
export const REPLACE_TUTORIAL = '[TUTORIAL] Replace';
export const EDIT_ONE_TUTORIAL = '[TUTORIAL] edit one item';


export class AddTutorial implements Action{
    readonly type = ADD_TUTORIAL;

    constructor(public payload: TutorialModel ){}
}

export class ReplaceTutorial implements Action{
    readonly type = REPLACE_TUTORIAL;

    constructor(public payload: []){}
}

export class RemoveTutorial implements Action{
    readonly type = REMOVE_TUTORIAL;

    constructor(public payload: number ){}
}

export class EditOneTutorial implements Action{
    readonly type = EDIT_ONE_TUTORIAL;

    constructor(public index: number , public name: string ,public url: string){}
}

export type Actions = AddTutorial | RemoveTutorial | EditOneTutorial | ReplaceTutorial;