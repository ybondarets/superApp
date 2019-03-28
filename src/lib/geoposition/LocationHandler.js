import { Location, Permissions } from "expo";

export default class LocationHandler {
    constructor() {
        this.defaultLat = 50.4547;
        this.defaultLon = 30.5238;
    }

    async getLocation() {
        const result = this.createResult();

        try {
            let { status } = await Permissions.askAsync(Permissions.LOCATION);

            if (status !== 'granted') {
                result.error = 'Permission to access location was denied, set default location.';
            } else {
                const location = await Location.getCurrentPositionAsync({
                    accuracy: 6
                });

                result.latitude = location.coords.latitude;
                result.longitude = location.coords.longitude;
            }
        } catch (e) {
            result.error = `Exception: ${e}`;
        }

        return result;
    }

    createResult() {
        return {
            latitude: this.defaultLat,
            longitude: this.defaultLon,
            error: null
        };
    }
}