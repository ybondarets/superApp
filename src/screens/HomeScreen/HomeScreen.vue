<template>
    <layout>
        <view>
            <button
                    title="Update weather"
                    v-bind:on-press="updateWeather"
            />
        </view>

        <view v-if="weather">
            <weather-view :weather="weather"></weather-view>
        </view>
        <activity-indicator v-else size="large" color="#0000ff"/>
    </layout>
</template>

<script>
    import Layout from "../Layout/Layout";
    import WeatherView from "../../ui/WeatherView/WeatherView";
    import weather from '../../lib/weather/weather';
    import geoposition from '../../lib/geoposition/geoposition';

    export default {
        name: "HomeScreen",
        components: {
            Layout,
            WeatherView
        },
        data() {
            return {
                weather: null
            }
        },
        async mounted() {
            await this.updateWeather();
        },
        methods: {
            async updateWeather() {
                this.weather = null;
                this.weather = await this.getWeather();
            },
            async getLocation() {
                return await geoposition.getLocation();
            },
            async getWeather() {
                const location = await this.getLocation();

                const { data } = await weather.nowByCoords(location.latitude, location.longitude);

                return data;
            }
        }
    }
</script>

<style scoped>

</style>