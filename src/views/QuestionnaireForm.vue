<template>
  <!-- Phone Verification Screen -->
  <div
    v-if="!phoneVerified"
    class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4"
  >
    <div
      class="w-full max-w-lg bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-slate-200/50"
    >
      <div class="mt-6">
        <div class="text-center mb-6">
          <div
            class="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl mb-4 shadow-lg shadow-indigo-500/25"
          >
            <svg
              class="w-6 h-6 sm:w-7 sm:h-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
            Verifikasi Nomor HP
          </h2>
          <p class="text-slate-600">
            Masukkan nomor HP Anda untuk memulai pengisian kuesioner.
          </p>
        </div>

        <div class="space-y-4">
          <div>
            <label
              for="phone"
              class="block text-sm font-medium text-slate-700 mb-1"
              >Nomor HP</label
            >
            <input
              v-model="phoneNumber"
              type="tel"
              id="phone"
              placeholder="628xxxxxxxxxx"
              class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              :class="{ 'border-red-500': phoneError }"
            />
            <p v-if="phoneError" class="mt-1 text-sm text-red-600">
              {{ phoneError }}
            </p>
          </div>

          <button
            @click="verifyPhone"
            :disabled="isVerifying"
            class="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg
              v-if="isVerifying"
              class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            {{ isVerifying ? 'Memverifikasi...' : 'Verifikasi' }}
          </button>

          <p v-if="verificationError" class="text-sm text-center text-red-600">
            {{ verificationError }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <div
    v-else
    class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-4 sm:py-8 lg:py-12"
  >
    <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-6 sm:mb-10">
        <div
          class="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl mb-4 shadow-lg shadow-indigo-500/25"
        >
          <svg
            class="w-6 h-6 sm:w-8 sm:h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <h1
          class="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-2 sm:mb-3 tracking-tight"
        >
          Form Kuesioner
        </h1>
        <div class="text-center mb-6 pb-6 border-b border-slate-200">
          <h1
            class="text-xl sm:text-2xl font-bold text-slate-800 leading-tight"
          >
            Penguatan Green Transformational Leadership melalui Green
            Organizational Culture dan Green Self-Efficacy untuk Meningkatkan
            Employee Green Behavior di Organisasi Berkelanjutan
          </h1>
        </div>
        <p
          class="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed"
        >
          Mohon lengkapi semua informasi yang diperlukan untuk membantu kami
          memberikan pelayanan terbaik
        </p>
      </div>

      <!-- Progress Bar -->
      <div class="mb-6 sm:mb-8">
        <div
          class="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-200/50"
        >
          <div
            class="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4 space-y-2 sm:space-y-0"
          >
            <div class="flex items-center space-x-2">
              <span
                class="inline-flex items-center px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-indigo-100 text-indigo-700 border border-indigo-200"
              >
                Bagian {{ currentSectionIndex + 1 }} dari
                {{ questionnaireData.length }}
              </span>
            </div>
            <span class="text-xs sm:text-sm font-medium text-indigo-600">
              {{ Math.round(progress) }}% selesai
            </span>
          </div>
          <div
            class="w-full bg-slate-200 rounded-full h-2 sm:h-3 overflow-hidden"
          >
            <div
              class="bg-gradient-to-r from-indigo-500 to-purple-500 h-full rounded-full transition-all duration-700 ease-out"
              :style="{ width: `${progress}%` }"
            ></div>
          </div>
        </div>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-6 sm:space-y-8">
        <!-- Current Section -->
        <div
          v-if="currentSection.id === 'personal-data'"
          class="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-slate-200/50 overflow-hidden"
        >
          <div
            class="bg-gradient-to-r from-slate-50 to-slate-100 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 border-b border-slate-200"
          >
            <div class="space-y-4">
              <p class="text-sm sm:text-base text-slate-600 leading-relaxed">
                Kepada :
              </p>
              <p class="text-sm sm:text-base text-slate-600 leading-relaxed">
                Yth. Bapak/Ibu Karyawan Karyawati.
              </p>
              <p class="text-sm sm:text-base text-slate-600 leading-relaxed">
                Dengan Hormat,
              </p>
              <p class="text-sm sm:text-base text-slate-600 leading-relaxed">
                Dalam rangka pengembangan ilmu khususnya di bidang Manajemen
                Sumber Daya Manusia, maka kami bermaksud mengadakan penelitian
                yang berjudul “Penguatan Green Transformational Leadership
                melalui Green Organizational Culture dan Green Self-Efficacy
                untuk Meningkatkan Employee Green Behavior di Organisasi
                Berkelanjutan”. Untuk itu kami sangat mengharapkan kesediaan
                bapak/ibu untuk mengisi kuesionar terlampir. Pernyataan –
                pernyataan yang ada dalam kuesioner tidak mencerminkan benar
                atau salah, oleh karena itu kami mohon bapak/ibu memberikan
                penilaian secara jujur.
              </p>
              <p class="text-sm sm:text-base text-slate-600 leading-relaxed">
                Data dan informasi yang kami peroleh dari jawaban bapak/ibu akan
                sangat membantu untuk penelitian dalam bidang manajemen, data
                serta informasi tersebut akan dijaga kerahasiaannya dan hanya
                digunakan untuk penelitian. Data akan dianalisis secara agregat
                dari semua responden yang ada, bukan secara individual atau satu
                individu saja.
              </p>
              <p class="text-sm sm:text-base text-slate-600 leading-relaxed">
                Demikian permohonan ini kami sampaikan, atas kesediaan dan
                perkenan bapak/ibu disampaikan banyak terima kasih.
              </p>
            </div>
          </div>
          <!-- Section Header -->
          <div
            class="bg-gradient-to-r from-slate-50 to-slate-100 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 border-b border-slate-200"
          >
            <h2
              class="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-2 flex items-center"
            ></h2>

            <span
              class="inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-indigo-600 text-white rounded-lg text-xs sm:text-sm font-bold mr-3 flex-shrink-0"
            >
              {{ currentSectionIndex + 1 }}
            </span>
            <span class="break-words">{{ currentSection.title }}</span>
          </div>

          <!-- Questions -->
          <div class="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
            <FormInput
              v-for="question in currentSection.questions"
              :key="question.id"
              :question="question"
              :model-value="formData[question.id]"
              :error="errors[question.id]"
              @update:model-value="updateFormData(question.id, $event)"
              class="transform transition-all duration-200 hover:scale-[1.005] focus-within:scale-[1.005]"
            />
          </div>
        </div>

        <!-- Navigation Buttons -->
        <div
          class="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 sm:gap-4 pt-4"
        >
          <!-- Previous Button -->
          <button
            v-if="currentSectionIndex > 0"
            type="button"
            @click="previousSection"
            class="group inline-flex items-center justify-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4 border-2 border-slate-300 text-sm sm:text-base font-semibold rounded-xl text-slate-700 bg-white hover:bg-slate-50 hover:border-indigo-300 focus:outline-none focus:ring-4 focus:ring-indigo-100 transition-all duration-200 order-2 sm:order-1"
          >
            <svg
              class="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 group-hover:-translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            Sebelumnya
          </button>
          <div v-else class="hidden sm:block sm:w-32"></div>

          <!-- Next/Submit Button -->
          <button
            v-if="currentSectionIndex < questionnaireData.length - 1"
            type="button"
            @click="nextSection"
            :disabled="!isSectionValid"
            class="group inline-flex items-center justify-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4 border-2 border-transparent text-sm sm:text-base font-semibold rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-indigo-100 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-indigo-600 disabled:hover:to-purple-600 transition-all duration-200 shadow-lg shadow-indigo-500/25 order-1 sm:order-2"
          >
            <span>Selanjutnya</span>
            <svg
              class="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>

          <button
            v-else
            type="submit"
            :disabled="!isFormValid || isSubmitting"
            class="group inline-flex items-center justify-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4 border-2 border-transparent text-sm sm:text-base font-semibold rounded-xl text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 focus:outline-none focus:ring-4 focus:ring-green-100 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-green-600 disabled:hover:to-emerald-600 transition-all duration-200 shadow-lg shadow-green-500/25 order-1 sm:order-2"
          >
            <svg
              v-if="isSubmitting"
              class="animate-spin -ml-1 mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span>{{ isSubmitting ? 'Mengirim...' : 'Kirim Kuesioner' }}</span>
            <svg
              v-if="!isSubmitting"
              class="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              ></path>
            </svg>
          </button>
        </div>
      </form>

      <!-- Success Message -->
      <div
        v-if="isSubmitted"
        class="mt-6 sm:mt-10 bg-green-50 border-2 border-green-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm animate-fade-in"
      >
        <div class="flex items-start space-x-3 sm:space-x-4">
          <div class="flex-shrink-0">
            <div
              class="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full border-2 border-green-200"
            >
              <svg
                class="h-5 w-5 sm:h-6 sm:w-6 text-green-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div class="flex-1 min-w-0">
            <h3
              class="text-base sm:text-lg font-bold text-green-900 mb-1 sm:mb-2"
            >
              Terima kasih!
            </h3>
            <p class="text-sm sm:text-base text-green-700 leading-relaxed">
              Kuesioner Anda telah berhasil dikirim. Kami akan memproses
              informasi yang Anda berikan dan menghubungi Anda dalam waktu 1-2
              hari kerja.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive, onMounted } from 'vue';
import FormInput from '../components/FormInput.vue';
import { questionnaireData } from '../stores/question';
import { api } from '../api';

// Phone Verification State
const phoneNumber = ref('');
const phoneVerified = ref(false);
const isVerifying = ref(false);
const phoneError = ref('');
const verificationError = ref('');

// State
const currentSectionIndex = ref(0);
const formData = reactive<Record<string, any>>({});
const errors = reactive<Record<string, string>>({});
const isSubmitting = ref(false);
const isSubmitted = ref(false);

// Computed properties
const currentSection = computed(
  () => questionnaireData[currentSectionIndex.value]
);

const progress = computed(() => {
  const totalQuestions = questionnaireData.reduce(
    (total, section) => total + section.questions.length,
    0
  );
  const answeredQuestions = Object.keys(formData).filter((key) => {
    const value = formData[key];
    if (Array.isArray(value)) {
      return value.length > 0;
    }
    return value !== undefined && value !== null && value !== '';
  }).length;

  return (answeredQuestions / totalQuestions) * 100;
});

const isSectionValid = computed(() => {
  return currentSection.value.questions.every((question) => {
    if (!question.required) return true;

    const value = formData[question.id];

    if (question.type === 'checkbox') {
      return Array.isArray(value) && value.length > 0;
    }

    return value !== undefined && value !== null && value !== '';
  });
});

const isFormValid = computed(() => {
  return questionnaireData.every((section) =>
    section.questions.every((question) => {
      if (!question.required) return true;

      const value = formData[question.id];

      if (question.type === 'checkbox') {
        return Array.isArray(value) && value.length > 0;
      }

      return value !== undefined && value !== null && value !== '';
    })
  );
});

// Phone Verification Methods

const verifyPhone = async () => {
  verificationError.value = '';
  isVerifying.value = true;

  try {
    // Validasi format nomor HP
    if (!phoneNumber.value || !/^628[0-9]{8,12}$/.test(phoneNumber.value)) {
      throw new Error(
        'Format nomor HP tidak valid. Nomor harus diawali dengan 628 dan diikuti 8-12 digit lainnya.'
      );
    }

    const response = await api.checkPhoneNumber(phoneNumber.value);

    if (response.success && response.data.exists) {
      verificationError.value = 'Nomor HP sudah terdaftar';
    } else if (response.success) {
      phoneVerified.value = true;
      // Simpan nomor HP ke form data
      formData.no_hp = phoneNumber.value;
    } else {
      throw new Error(response.message || 'Gagal memverifikasi nomor HP');
    }
  } catch (error: any) {
    verificationError.value = error.message;
  } finally {
    isVerifying.value = false;
  }
};

// Methods
const updateFormData = (questionId: string, value: any) => {
  formData[questionId] = value;

  // Clear error when user starts typing
  if (errors[questionId]) {
    delete errors[questionId];
  }
};

const validateSection = () => {
  const sectionErrors: Record<string, string> = {};

  currentSection.value.questions.forEach((question) => {
    if (question.required) {
      const value = formData[question.id];

      if (question.type === 'checkbox') {
        if (!Array.isArray(value) || value.length === 0) {
          sectionErrors[question.id] = `${question.label} harus dipilih`;
        }
      } else if (value === undefined || value === null || value === '') {
        sectionErrors[question.id] = `${question.label} harus diisi`;
      }
    }

    // Additional validation
    if (question.validation && formData[question.id]) {
      const value = formData[question.id];

      if (
        question.validation.min !== undefined &&
        value < question.validation.min
      ) {
        sectionErrors[
          question.id
        ] = `Nilai minimum adalah ${question.validation.min}`;
      }

      if (
        question.validation.max !== undefined &&
        value > question.validation.max
      ) {
        sectionErrors[
          question.id
        ] = `Nilai maksimum adalah ${question.validation.max}`;
      }
    }
  });

  // Update errors
  Object.keys(errors).forEach((key) => {
    if (currentSection.value.questions.find((q) => q.id === key)) {
      delete errors[key];
    }
  });

  Object.assign(errors, sectionErrors);

  return Object.keys(sectionErrors).length === 0;
};

const nextSection = () => {
  if (validateSection()) {
    currentSectionIndex.value++;
  }
};

const previousSection = () => {
  currentSectionIndex.value--;
};

// Di dalam <script setup> component Anda
const handleSubmit = async () => {
  // Validasi form sebelum mengirim
  if (!isFormValid.value) {
    // Anda bisa menambahkan logika untuk men-trigger semua pesan error jika diperlukan
    console.error('Submit Gagal: Form tidak valid.');
    return;
  }

  isSubmitting.value = true;
  // Hapus pesan error submit sebelumnya
  if (errors.submission) delete errors.submission;

  try {
    // Siapkan data untuk dikirim dengan struktur yang benar
    const submissionData = {
      personalData: {
        // Mapping dari formData ke properti yang benar
        nama: formData.nama,
        jenisKelamin: formData.jenisKelamin,
        usia: formData.usia,
        pendidikanTerakhir: formData.pendidikanTerakhir,
        statusPerkawinan: formData.statusPerkawinan,
        lamaBekerja: formData.lamaBekerja,
        jabatan: formData.jabatan,
        wilayahHotel: formData.wilayahHotel,
        namaHotel: formData.namaHotel,
        no_hp: formData.no_hp,
      },
      // Filter jawaban kuesioner dari formData secara akurat
      responses: Object.entries(formData)
        .filter(([key]) => {
          // Hanya sertakan entri yang key-nya adalah ID pertanyaan kuesioner
          // dengan cara memeriksa ke sumber data 'questionnaireData'
          return questionnaireData.some(
            (section) =>
              section.id !== 'personal-data' &&
              section.questions.some((q) => q.id === key)
          );
        })
        .map(([questionId, answer]) => ({ questionId, answer })),
    };

    // Kirim data yang sudah rapi ke Apps Script
    const response = await api.submitQuestionnaire(submissionData);

    if (response.success) {
      isSubmitted.value = true;
      // Reset form setelah beberapa detik
      setTimeout(resetForm, 5000);
    } else {
      // Jika server mengembalikan 'success: false', lempar error
      throw new Error(response.message || 'Gagal menyimpan data di server.');
    }
  } catch (error: any) {
    errors.submission = error.message;
    console.error('Error saat submit:', error);
  } finally {
    isSubmitting.value = false;
  }
};
const resetForm = () => {
  Object.keys(formData).forEach((key) => delete formData[key]);
  Object.keys(errors).forEach((key) => delete errors[key]);
  currentSectionIndex.value = 0;
  phoneVerified.value = false;
  phoneNumber.value = '';
  isSubmitted.value = false;

  // Re-inisialisasi checkbox arrays jika diperlukan
  questionnaireData.forEach((section) => {
    section.questions.forEach((question) => {
      if (question.type === 'checkbox') {
        formData[question.id] = [];
      }
    });
  });
};

onMounted(() => {
  questionnaireData.forEach((section) => {
    section.questions.forEach((question) => {
      if (question.type === 'checkbox') {
        formData[question.id] = [];
      }
    });
  });
});
</script>
