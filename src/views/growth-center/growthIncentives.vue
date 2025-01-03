<script setup lang="ts"></script>

<template>
  <div class="p-12 w-full aspect-358/321 bg-#FFF rounded-16 mt-20">
    <div class="text-16 lh-22 font-500">
      {{ $t('growth_center.growth_incentives') }}
    </div>
    <div class="text-12 lh-17 text-$quaternaryText">
      {{ $t('growth_center.create_more_high_quality_work') }}
    </div>
    <div class="table-container">
      <table class="incentives-table">
        <thead>
          <tr>
            <th>{{ $t('growth_center.creator_title') }}</th>
            <th>{{ $t('growth_center.required_hot_value') }}</th>
            <th>{{ $t('growth_center.additional_reward') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="flex items-center gap-3">
              <img
                src="/growth-center/creator_title_1.svg"
                alt=""
                class="w-20 h-20"
              />
              <div>{{ $t('growth_center.creator_title_1') }}</div>
            </td>
            <td>1000</td>
            <td class="reward">
              {{ $t('growth_center.currency_symbol') + '5' }}
            </td>
          </tr>
          <tr>
            <td class="flex items-center gap-3">
              <img
                src="/growth-center/creator_title_2.svg"
                alt=""
                class="w-20 h-20"
              />
              <div>{{ $t('growth_center.creator_title_2') }}</div>
            </td>
            <td>10000</td>
            <td class="reward">
              {{ $t('growth_center.currency_symbol') + '25' }}
            </td>
          </tr>
          <tr>
            <td class="flex items-center gap-3">
              <img
                src="/growth-center/creator_title_3.svg"
                alt=""
                class="w-20 h-20"
              />
              <div>{{ $t('growth_center.creator_title_3') }}</div>
            </td>
            <td>50000</td>
            <td class="reward">
              {{ $t('growth_center.currency_symbol') + '300' }}
            </td>
          </tr>
          <tr>
            <td class="flex items-center gap-3">
              <img
                src="/growth-center/creator_title_4.svg"
                alt=""
                class="w-20 h-20"
              />
              <div>{{ $t('growth_center.creator_title_4') }}</div>
            </td>
            <td>250000</td>
            <td class="reward">
              {{ $t('growth_center.currency_symbol') + '1500' }}
            </td>
          </tr>
          <tr>
            <td class="flex items-center gap-3">
              <img
                src="/growth-center/creator_title_5.svg"
                alt=""
                class="w-20 h-20"
              />
              <div>{{ $t('growth_center.creator_title_5') }}</div>
            </td>
            <td>500000</td>
            <td class="reward">
              {{ $t('growth_center.currency_symbol') + '3000' }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="flex-center flex-col mt-10">
      <div class="text-12 lh-17 text-$tertiaryText">
        {{ $t('growth_center.hot_value_can_be_withdrawn') }}
      </div>
      <div class="text-12 lh-17 text-$quaternaryText">
        {{ $t('growth_center.hot_money') }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.table-container {
  border-radius: 16px;
  overflow: hidden;
  font-size: 12px;
  line-height: 17px;
  margin-top: 8px;
  border: 1px solid #edf7ff;
}

.incentives-table {
  width: 100%;
  border-collapse: collapse;
}

.incentives-table th,
.incentives-table td {
  padding: 10px;
  text-align: left;
}

.incentives-table th {
  background-color: #edf6ff;
  color: var(--tertiaryText);
  font-weight: 400;
}

.incentives-table tr {
  border-top: 1px solid #edf7ff;
}

.incentives-table .reward {
  color: red;
}

.icon {
  width: 16px;
  height: 16px;
  display: inline-block;
  margin-right: 8px;
}
</style>
