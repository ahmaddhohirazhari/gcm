<template>
  <div class="mb-6">
    <label
      :for="question.id"
      class="block text-sm font-medium text-gray-700 mb-2"
    >
      {{ question.label }}
      <span v-if="question.required" class="text-red-500 ml-1">*</span>
    </label>

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
      }"
    />
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

    <div v-else-if="question.type === 'radio'" class="space-y-3">
      <div
        v-for="option in question.options"
        :key="option.value"
        class="flex flex-col items-start"
      >
        <div
          v-if="option.value !== '__other_option__'"
          class="flex items-center"
        >
          <input
            :id="`${question.id}-${option.value}`"
            :name="question.id"
            type="radio"
            :value="option.value"
            :required="question.required"
            v-model="radioModel"
            class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
          />
          <label
            :for="`${question.id}-${option.value}`"
            class="ml-3 text-sm text-gray-700 cursor-pointer"
          >
            {{ option.label }}
          </label>
        </div>

        <div v-else class="w-full">
          <div class="flex items-center">
            <input
              :id="`${question.id}-${option.value}`"
              :name="question.id"
              type="radio"
              :value="option.value"
              :required="question.required"
              v-model="radioModel"
              class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <label
              :for="`${question.id}-${option.value}`"
              class="ml-3 text-sm text-gray-700 cursor-pointer"
            >
              {{ option.label }}
            </label>
          </div>
          <div
            v-if="radioModel === '__other_option__'"
            class="mt-2 ml-7 w-full pr-7"
          >
            <input
              ref="otherInputRef"
              type="text"
              v-model="otherValue"
              placeholder="Ketik jawaban Anda di sini"
              class="block w-full text-sm p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              :class="{ 'border-red-500': hasError && !otherValue }"
              :required="radioModel === '__other_option__'"
            />
          </div>
        </div>
      </div>
    </div>

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

    <p v-if="errorMessage" class="mt-2 text-sm text-red-600">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, nextTick } from 'vue';
import type { Question } from '../stores/question'; // Adjust path if needed

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

// --- General v-model for simple inputs (text, select, etc.) ---
const inputValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:modelValue', value);
  },
});

// --- Logic for Checkbox ---
const checkboxValues = ref<(string | number)[]>([]);
if (props.question.type === 'checkbox' && Array.isArray(props.modelValue)) {
  checkboxValues.value = props.modelValue;
}
watch(
  checkboxValues,
  (newValue) => {
    if (props.question.type === 'checkbox') {
      emit('update:modelValue', newValue);
    }
  },
  { deep: true }
);

// --- NEW AND REVISED LOGIC FOR RADIO BUTTONS ---
const radioModel = ref(''); // Internal state for radio button selection
const otherValue = ref(''); // Internal state for the "other" text input
const otherInputRef = ref<HTMLInputElement | null>(null);

// 1. Initialization: Set internal state based on initial modelValue
if (props.question.type === 'radio') {
  const standardOptions = props.question.options?.map((o) => o.value) || [];
  // If modelValue is a standard option, select it
  if (standardOptions.includes(props.modelValue)) {
    radioModel.value = props.modelValue;
  }
  // If modelValue is not null/undefined and not a standard option, it must be an "other" value
  else if (props.modelValue != null && props.modelValue !== '') {
    radioModel.value = '__other_option__';
    otherValue.value = props.modelValue;
  }
}

// 2. Watch for clicks on radio buttons
watch(radioModel, (newSelection) => {
  if (newSelection === '__other_option__') {
    // If "other" is selected, emit the text value and focus the input
    emit('update:modelValue', otherValue.value);
    nextTick(() => {
      otherInputRef.value?.focus();
    });
  } else {
    // If a standard option is selected, emit its value
    emit('update:modelValue', newSelection);
  }
});

// 3. Watch for typing in the "other" text input
watch(otherValue, (newText) => {
  // Only emit if the "other" radio button is currently active
  if (radioModel.value === '__other_option__') {
    emit('update:modelValue', newText);
  }
});

// --- Error Handling ---
const hasError = computed(() => !!props.error);
const errorMessage = computed(() => props.error);
</script>
