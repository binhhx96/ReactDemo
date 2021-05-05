import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
const historyPathname = [];
let isBack = false;

const locationHistory = {
    current: history.location,
    previous: {
        pathname: '',
    },
};

// Listen for changes to the current location.
history.listen((location) => {

    if (locationHistory.current.pathname === location.pathname){
        return;
    }

    locationHistory.previous = locationHistory.current;
    locationHistory.current = { ...location };

    if (isBack){
        isBack  = false;
        return;
    }

    if (historyPathname.length === 0){
        historyPathname.push(locationHistory.previous.pathname)
    }

    if (location.pathname === '/home'){
        historyPathname.length = 0;
    } else {
        historyPathname.push(location.pathname);
    }

});



export function getLocationHistory() {
    return locationHistory;
}

history.checkAndBack = () => {

    const location = getLocationHistory();
    isBack = true;

    if (!location.previous.pathname.length) {
        return history.push('/home');
    }

    historyPathname.splice(historyPathname.length - 1,1)

    if (historyPathname.length === 0){
        return history.push('/home');
    }

    return history.push(historyPathname[historyPathname.length - 1]);
}

export default history;
