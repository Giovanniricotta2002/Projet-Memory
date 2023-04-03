<script>

  export default {
    props: {
       label: type = String,
       tet2: {
        type: String,
        required: true,
        default: fl
       } 
    }
  }
</script>

<template>
  <div>
    <input class="status"/>

    {{ tet2 }}
  </div>
</template>