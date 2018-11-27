<template>
    <div>
        <nav class="nav">
            <ul class="navbar-nav">
                    <li class="nav-item active">
                        <router-link class="nav-link" :to="{name: 'cars'}">Cars</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name: 'add-car'}">Add car</router-link>
                    </li>
            </ul>
      </nav>
    </div>
</template>

<script>
export default {
    
}
</script>

