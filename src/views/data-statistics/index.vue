<script setup lang="ts">
import PageLayout from '@/components/PageLayout.vue';
</script>

<template>
  <PageLayout background="var(--secondaryBackground)" hideBack>
    <template #navigationBarCenter>
      <div>{{ $t('data_statistics.index') }}</div>
    </template>
    <div class="w-100vw h-full p-16">
      <router-view></router-view>
    </div>
  </PageLayout>
</template>

<style scoped lang="scss"></style>
