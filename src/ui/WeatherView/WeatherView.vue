<template>
    <view class="weather-container">
        <view class="item">
            <text>Show raw:</text>
            <switch
                    :on-value-change="switchChange"
                    :value="showRawWeather"
            />
        </view>

        <view class="item">
            <text>
                {{ description }}, {{ temperature }} C&deg;
            </text>
            <text v-if="showRawWeather">
                {{ weather }}
            </text>
        </view>
    </view>
</template>

<script>
    export default {
        name: "WeatherView",
        props: {
            weather: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                showRawWeather: false
            };
        },
        computed: {
            description() {
                return this.weather.weather[0].description;
            },
            temperature() {
                return this.weather.main.temp;
            }
        },
        methods: {
            switchChange(value) {
                this.showRawWeather = value;
            }
        }
    }
</script>

<style scoped>

    .weather-container .item {
        flex: 1;
    }
</style>