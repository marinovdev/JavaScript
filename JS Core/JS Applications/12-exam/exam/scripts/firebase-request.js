/**
 * Factory that returns object with function invoking CRUD operation over firebase database
 * @param {string} apiKey firebase database url
 * @param {string} collectionName entity name
 */
export const fireBaseRequestFactory = (apiKey, collectionName, token) => {
    if (!apiKey.endsWith('/')) {
        throw new Error('The api key must end with "/"');
    }

    let collectionUrl = apiKey + collectionName;

    /**
     * Returns all elements from firebase database collection
     */
    const getAll = () => {
        return fetch(collectionUrl + '.json' + (token ? `?auth=${token}` : ``)).then(x => x.json());
    };

    /**
     * Based on id returns one element from firebase database collection
     * @param {string} id 
     */
    const getById = (id) => {
        return fetch(`${collectionUrl}/${id}.json`+ (token ? `?auth=${token}` : ``)).then(x => x.json());
    };

    /**
     * Receive any javascript and creates entity in pre configured collection 
     * @param {{[key:string]: any}} entityBody javascript object
     */
    const createEntity = (entityBody) => {
        console.log(collectionUrl);
        console.log(entityBody);
        console.log(token);
        
        return fetch(collectionUrl + '.json' + (token ? `?auth=${token}` : ``), {
            method: 'POST',
            body: JSON.stringify(entityBody)
        }).then(x => x.json())
        .catch(err => {
            console.error(err);
            
        });
    };

    /**
     * Receive any javascript and overrides entity in pre configured collection based on the provided Id
     * @param {{[key:string]: any}} entityBody 
     * @param {string} id 
     */
    const updateEntity = (entityBody, id) => {
        console.log(JSON.stringify(entityBody));
        
        return fetch(`${collectionUrl}/${id}.json` + (token ? `?auth=${token}` : ``), {
            method: 'PUT',
            body: JSON.stringify(entityBody)
        }).then(x => x.json());
    };

    /**
     * Receive any javascript and updates entity in pre configured collection based on the provided Id
     * @param {{[key:string]: any}} entityBody 
     * @param {string} id 
     */
    const patchEntity = (entityBody, id) => {
        return fetch(`${collectionUrl}/${id}.json` + (token ? `?auth=${token}` : ``), {
            method: 'PATCH',
            body: JSON.stringify(entityBody)
        }).then(x => x.json());
    };

    /**
     * Based on id deletes entity in pre configured collection
     * @param {string} id 
     */
    const deleteEntity = (id) => {
        return fetch(`${collectionUrl}/${id}.json` + (token ? `?auth=${token}` : ``), {
            method: 'DELETE'
        }).then(x => x.json());
    };

    return {
        getAll,
        getById,
        createEntity,
        updateEntity,
        patchEntity,
        deleteEntity
    };
};