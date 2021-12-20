<script setup lang="ts">
import { objectPick } from '@vueuse/core'
import type { ProductUnits } from '~/types/productunit.type'
import { fetchProductUnit } from '~/services/productunit.service'

const productunits = reactive({}) as ProductUnits

const fetch = async() => {
  const data = await fetchProductUnit()
  productunits.data = data.data
  productunits.meta = data.meta
  productunits.links = data.links
  console.log(productunits)
}

onMounted(fetch)
</script>

<template>
  <div class="flex justify-evenly">
    <div
      v-for="(productunit, index) of productunits.data"
      :key="index"
      class="
        container
        bg-orange-600
        rounded-lg
        mt-3
        text-light-50
        font-semibold
      "
    >
      <h1>{{ productunit.name }}</h1>
      <proper :last-name="productunit.slug" />
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
