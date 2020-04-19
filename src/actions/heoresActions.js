export const FETCH_HEROES_PENDING = 'FETCH_HEROES_PENDING';
export const FETCH_HEROES_SUCCESS = 'FETCH_HEROES_SUCCESS';
export const FETCH_HEROES_ERROR = 'FETCH_HEROES_ERROR';

export function fetchHeroesPending() {
    return {
        type: FETCH_HEROES_PENDING
    }
}

export function fetchHeroesSuccess(heroes) {
    return {
        type: FETCH_HEROES_SUCCESS,
        payload: heroes
    }
}

export function fetchHeroesError(error) {
    return {
        type: FETCH_HEROES_ERROR,
        error: error
    }
}
