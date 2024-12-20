<script setup lang="ts">
import PageLayout from '@/components/PageLayout.vue';
</script>

<template>
  <PageLayout background="var(--secondaryBackground)">
    <template #navigationBarCenter>
      <div>{{ $t('system_notification.index') }}</div>
    </template>
  </PageLayout>
</template>

<style scoped lang="scss"></style>
