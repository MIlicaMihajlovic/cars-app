<template>
    <div>
        <table border=1>
            <thead>
                <th>Brand</th>
                <th>Model</th>
                <th>Year</th>
                <th>Max Speed</th>
                <th>Automatic</th>
                <th>Engine</th>
                <th>Number of doors</th>
            </thead>
            <tbody>
                <tr v-for="(car, index) in cars" :key="index">
                    <td>{{ car.brand }}</td>
                    <td>{{ car.model }}</td>
                    <td>{{ car.year }}</td>
                    <td>{{ car.maxSpeed }}</td>
                    <td>{{ car.isAutomatic }}</td>
                    <td>{{ car.engine }}</td>
                    <td>{{ car.numberOfDoors }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

import { cars } from '../service/cars.js'

export default {
    data() {
        return {
            cars: []
        }
    },

    created() {
        cars.getAll() 
            .then(response => {
                this.cars = response.data
            })
            // .catch(error => {  nije nam potreban
            //     console.log(error)
            // })
    }
}
</script>

