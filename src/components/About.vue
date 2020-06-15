<template>
    <div>
        <div class="heading">
            <h3> <p>Here's Something about me</p></h3>
        </div>
        
         <div class="about-details">
             <div v-for="data in about" :key="data.id">
                 {{data}}
             </div>
         </div>
    </div>
</template>

<script>
export default {
    name:"About",
    props : ["about"],
}
</script>
<style scoped>

.about-details div{
padding: 10px;
font-size: 15px;
letter-spacing: 1px;
}
</style>