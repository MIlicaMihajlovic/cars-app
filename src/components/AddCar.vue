<template>
    <div>
        <form @submit.prevent="addCar">
            <div class="form-group">
                <label>Brand</label>
                <input v-model="newCar.brand" type="text" class="form-control" placeholder="Brand">
            </div>
            <div class="form-group">
                <label>Model</label>
                <input v-model="newCar.model" type="text" class="form-control" placeholder="Model">
            </div>
            <div class="form-group">
                <label>Select year</label>
                <select v-model="newCar.year" class="form-control">
                <!-- <option selected>Choose</option> -->
                <option v-for="(year, index) in years" :value="year" :key="index">{{year}}</option>
                </select>
            </div>
            <div class="form-group">
                <label>Max speed</label>
                <input v-model="newCar.maxSpeed" type="number" class="form-control" placeholder="Max speed">
            </div>
            <div class="form-check">
                <input v-model="newCar.isAutomatic" type="checkbox" class="form-check-input">
                <label class="form-check-label" for="exampleCheck1">Is automatic</label>
            </div>
            
            <div class="input-group">
                <label>Engine</label>
                <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input v-model="newCar.engine" value="Diesel" type="radio" aria-label="Radio button for following text input">
                        Diesel
                    </div>
                    </div>
                    <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input v-model="newCar.engine" value="Petrol" type="radio" aria-label="Radio button for following text input">
                        Petrol
                    </div>
                    </div>
                    <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input v-model="newCar.engine" value="Electric" type="radio" aria-label="Radio button for following text input">
                        Electric
                    </div>
                    </div>
                    <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input v-model="newCar.engine" value="Hybrid" type="radio" aria-label="Radio button for following text input">
                        Hybrid
                    </div>
                    </div>
            </div>
            <div class="form-group">
                <label>Number of doors</label>
                <input v-model="newCar.numberOfDoors" type="number" class="form-control" placeholder="Number of doors">
            </div>
            <button type="submit">Add car</button>
            <button @click="reset">Reset</button>
            <button @click="preview">Preview</button>
        </form>       
    </div>
</template>




<script>

import { cars } from '../service/cars.js'

export default {
    data() {
        return {
            years: Array(30).fill(1990).map((n, index) => n + index),

            newCar: {
                isAutomatic: false
            },

            //engines: ['diesel', 'petrol', 'electric', 'hybrid']
        }
    },

    methods: {
        addCar() {
            cars.add(this.newCar)
             .then(() => {
                 this.$router.push({path: '/cars'});
                 this.newCar = {};
             })
        },

        reset() {
            this.newCar = {};
        },

        preview() {
            let stringifyObject = JSON.stringify(this.newCar);
            let parseObject = JSON.parse(stringifyObject);

            return alert(`Brand: ${parseObject.brand}\n Model: ${parseObject.model}\n Year: ${parseObject.year}\n Max speed: ${parseObject.maxSpeed}\n ${parseObject.isAutomatic ? Automatic : 'Manual'}\n Engine: ${parseObject.engine}\n Number of doors: ${parseObject.numberOfDoors}`)
        }
    }
}


</script>

