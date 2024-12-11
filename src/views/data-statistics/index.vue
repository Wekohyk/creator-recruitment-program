<script setup lang="ts">
import PageLayout from '@/components/PageLayout.vue';
</script>

<template>
  <PageLayout background="var(--secondaryBackground)" hideBack>
    <template #navigationBarCenter>
      <div>{{ $t('data_statistics.index') }}</div>
    </template>
    <router-view></router-view>
  </PageLayout>
</template>

<style scoped lang="scss"></style>
