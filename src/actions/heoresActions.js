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

// ACTION CREATOR

export const fetchSuperHeroes = () => {
    return (dispatch) => {
        dispatch(fetchHeroesPending())
        fetch(`https://dev.consultr.net/superhero.json`)
            .then((response) => response.json())
            .then((superHeroesObj) => {
                const superHeroesArr = superHeroesObj.map(hero => {
                    return {
                        id: hero.id,
                        name: hero.name,
                        img: hero.images.sm,
                        height: hero.appearance.height[1],
                        weight: hero.appearance.weight[1]
                    };
                });
                dispatch(fetchHeroesSuccess(superHeroesArr));
            })
            .catch(() => console.log('error on the action creator'));
    };
};