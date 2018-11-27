<template>
    <div>
        <form @submit.prevent="">
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
                <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input type="radio" aria-label="Radio button for following text input">
                    </div>
                    </div>
                    <input type="text" class="form-control" aria-label="Text input with radio button">
            </div>
            <div class="form-group">
                <label>Number of doors</label>
                <input v-model="newCar.numberOfDoors" type="number" class="form-control" placeholder="Number of doors">
            </div>
            <button type="submit">Add car</button>
        </form>       
    </div>
</template>




<script>
export default {
    data() {
        return {
            years: Array(30).fill(1990).map((n, index) => n + index),

            newCar: {
                isAutomatic: false
            },
        }
    }
}

//`diesel`, `petrol`, `electric`, `hybrid`
</script>

