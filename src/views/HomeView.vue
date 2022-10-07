<template>
  <h1>{{$t('hello')}}</h1>
  <h1>{{$n(10, 'currency')}}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'HomeView',
});
</script>
