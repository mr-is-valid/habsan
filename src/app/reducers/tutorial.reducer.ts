import { Action } from '@ngrx/store';
import { TutorialModel } from '../models/tutorial.model';
import * as tutorialActions from '../actions/tutorial.actions';

const initialState: TutorialModel = {
    name : 'initial State Tutorial',
    url : 'http://google.com'
}

export function TutorialReducer(state: TutorialModel[] = [initialState],action: tutorialActions.Actions){
    switch(action.type){
        case tutorialActions.ADD_TUTORIAL:
                return [...state,action.payload];

        case tutorialActions.REMOVE_TUTORIAL:
                const newState = [...state];
                newState.splice(action.payload, 1);
                return newState; 

        case tutorialActions.REPLACE_TUTORIAL:
                console.log(action.payload)
                return [...action.payload];

        case tutorialActions.EDIT_ONE_TUTORIAL:
            const index = action.index;
            const newStateItems = [...state];
            newStateItems[index] = { ...state[index], name: action.name ,url: action.url};
            return newStateItems; 

        default: 
            return state;
    }
}
