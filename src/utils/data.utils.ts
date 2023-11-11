export const getData = async<T> (url:string):Promise<T> => {
    const resposne = await fetch(url);
    return resposne.json();
}

// Those are the parameter names that are most frequently used.

// So here we're going to say, okay, let me give you some type T and this is what you're going to pass

// into the promise.

// So doing this now, we're essentially saying, okay, get data is going to receive some type T, this

// type T is what you're going to return from this function inside of a promise.