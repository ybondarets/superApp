<template>
    <view class="view-container">
        <slot></slot>
    </view>
</template>

<script>
    export default {
        name: "Layout"
    }
</script>

<style>
    .view-container {
        padding-top: 30px;
        padding-bottom: 25px;
        padding-left: 10px;
        padding-right: 10px;
    }
</style>