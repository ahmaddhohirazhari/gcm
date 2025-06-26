<template>
  <div class="mb-6">
    <label
      :for="question.id"
      class="block text-sm font-medium text-gray-700 mb-2"
    >
      {{ question.label }}
      <span v-if="question.required" class="text-red-500 ml-1">*</span>
    </label>

    <!-- Text Input -->
    <input
      v-if="question.type === 'text' || question.type === 'email'"
      :id="question.id"
      :type="question.type"
      :placeholder="question.placeholder"
      :required="question.required"
      v-model="inputValue"
      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
      :class="{
        'border-red-500': hasError,
        'bg-gray-100 cursor-not-allowed': question.id === 'phone',
      }"
      :disabled="question.id === 'phone'"
      :readonly="question.id === 'phone'"
    />
    <!-- Number Input -->
    <input
      v-else-if="question.type === 'number'"
      :id="question.id"
      type="number"
      :placeholder="question.placeholder"
      :required="question.required"
      :min="question.validation?.min"
      :max="question.validation?.max"
      v-model.number="inputValue"
      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
      :class="{ 'border-red-500': hasError }"
    />

    <!-- Textarea -->
    <textarea
      v-else-if="question.type === 'textarea'"
      :id="question.id"
      :placeholder="question.placeholder"
      :required="question.required"
      v-model="inputValue"
      rows="4"
      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
      :class="{ 'border-red-500': hasError }"
    ></textarea>

    <!-- Select Dropdown -->
    <select
      v-else-if="question.type === 'select'"
      :id="question.id"
      :required="question.required"
      v-model="inputValue"
      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
      :class="{ 'border-red-500': hasError }"
    >
      <option
        v-for="option in question.options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>

    <!-- Radio Buttons -->
    <div v-else-if="question.type === 'radio'" class="space-y-3">
      <div
        v-for="option in question.options"
        :key="option.value"
        class="flex items-center"
      >
        <input
          :id="`${question.id}-${option.value}`"
          :name="question.id"
          type="radio"
          :value="option.value"
          :required="question.required"
          v-model="inputValue"
          class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
        />
        <label
          :for="`${question.id}-${option.value}`"
          class="ml-3 text-sm text-gray-700 cursor-pointer"
        >
          {{ option.label }}
        </label>
      </div>
    </div>

    <!-- Checkboxes -->
    <div v-else-if="question.type === 'checkbox'" class="space-y-3">
      <div
        v-for="option in question.options"
        :key="option.value"
        class="flex items-center"
      >
        <input
          :id="`${question.id}-${option.value}`"
          type="checkbox"
          :value="option.value"
          v-model="checkboxValues"
          class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label
          :for="`${question.id}-${option.value}`"
          class="ml-3 text-sm text-gray-700 cursor-pointer"
        >
          {{ option.label }}
        </label>
      </div>
    </div>

    <!-- Error Message -->
    <p v-if="errorMessage" class="mt-2 text-sm text-red-600">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { Question } from '../stores/question';

interface Props {
  question: Question;
  modelValue?: any;
  error?: string;
}

interface Emits {
  (e: 'update:modelValue', value: any): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

// For checkbox handling
const checkboxValues = ref<(string | number)[]>([]);

// Computed property for input value
const inputValue = computed({
  get: () => {
    if (props.question.type === 'checkbox') {
      return checkboxValues.value;
    }
    return props.modelValue;
  },
  set: (value) => {
    emit('update:modelValue', value);
  },
});

// Initialize checkbox values if needed
if (props.question.type === 'checkbox' && Array.isArray(props.modelValue)) {
  checkboxValues.value = props.modelValue;
}

// Watch checkbox values and emit changes
watch(
  checkboxValues,
  (newValue) => {
    if (props.question.type === 'checkbox') {
      emit('update:modelValue', newValue);
    }
  },
  { deep: true }
);

// Error handling
const hasError = computed(() => !!props.error);
const errorMessage = computed(() => props.error);
</script>
