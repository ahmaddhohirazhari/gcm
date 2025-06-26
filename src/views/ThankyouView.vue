<template>
  <div class="thank-you-page">
    <div class="thank-you-container">
      <!-- Success Icon -->
      <div class="success-icon">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          stroke-width="3"
        >
          <path d="M20 6L9 17l-5-5"></path>
        </svg>
      </div>

      <!-- Main Content -->
      <h1 class="title">Terima Kasih!</h1>
      <p class="subtitle">Kuesioner Anda telah berhasil dikirim</p>

      <div class="message">
        <p>Partisipasi Anda sangat berarti bagi penelitian ini.</p>
        <p>
          Data yang Anda berikan akan membantu kami dalam mengembangkan layanan
          yang lebih baik.
        </p>
      </div>

      <!-- Respondent Info (optional) -->
      <div v-if="respondentId" class="respondent-info">
        <p class="info-label">ID Responden:</p>
        <p class="info-value">{{ respondentId }}</p>
      </div>

      <!-- Action Buttons -->
      <div class="actions">
        <button @click="goHome" class="btn btn-primary">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9,22 9,12 15,12 15,22"></polyline>
          </svg>
          Kembali ke Beranda
        </button>

        <button @click="fillAnother" class="btn btn-secondary">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
            ></path>
            <polyline points="14,2 14,8 20,8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10,9 9,9 8,9"></polyline>
          </svg>
          Isi Kuesioner Lain
        </button>
      </div>

      <!-- Footer -->
      <div class="footer">
        <p>{{ currentDateTime }}</p>
      </div>
    </div>

    <!-- Background Animation -->
    <div class="bg-animation">
      <div class="floating-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
        <div class="shape shape-4"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Props (optional)
const props = defineProps({
  respondentId: {
    type: String,
    default: null,
  },
});

// Reactive data
const currentDateTime = ref('');

// Computed
const formattedDateTime = computed(() => {
  const now = new Date();
  return now.toLocaleString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
});

// Methods
const goHome = () => {
  router.push('/');
};

const fillAnother = () => {
  router.push('/kuesioner');
};

// Lifecycle
onMounted(() => {
  currentDateTime.value = formattedDateTime.value;

  // Auto redirect after 10 seconds (optional)
  setTimeout(() => {
    // Uncomment if you want auto redirect
    // goHome()
  }, 10000);
});
</script>

<style scoped>
.thank-you-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.thank-you-container {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
  position: relative;
  z-index: 2;
  animation: slideUp 0.8s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.success-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(45deg, #4caf50, #45a049);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.7);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(76, 175, 80, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(76, 175, 80, 0);
  }
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  background: linear-gradient(45deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
}

.message {
  margin-bottom: 2rem;
  line-height: 1.6;
}

.message p {
  margin-bottom: 0.5rem;
  color: #555;
}

.respondent-info {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 2rem;
  border-left: 4px solid #4caf50;
}

.info-label {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.25rem;
}

.info-value {
  font-size: 1rem;
  font-weight: bold;
  color: #2c3e50;
  font-family: monospace;
}

.actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.btn-primary {
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
}

.btn-secondary {
  background: transparent;
  color: #667eea;
  border: 2px solid #667eea;
}

.btn-secondary:hover {
  background: #667eea;
  color: white;
  transform: translateY(-2px);
}

.footer {
  font-size: 0.9rem;
  color: #999;
  padding-top: 1rem;
  border-top: 1px solid #eee;
}

/* Background Animation */
.bg-animation {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  overflow: hidden;
}

.floating-shapes {
  position: relative;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: float 6s ease-in-out infinite;
}

.shape-1 {
  width: 60px;
  height: 60px;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 40px;
  height: 40px;
  top: 60%;
  right: 10%;
  animation-delay: 2s;
}

.shape-3 {
  width: 80px;
  height: 80px;
  bottom: 20%;
  left: 20%;
  animation-delay: 4s;
}

.shape-4 {
  width: 50px;
  height: 50px;
  top: 30%;
  right: 30%;
  animation-delay: 3s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

/* Responsive */
@media (max-width: 640px) {
  .thank-you-container {
    padding: 2rem;
    margin: 1rem;
  }

  .title {
    font-size: 2rem;
  }

  .actions {
    flex-direction: column;
  }
}
</style>
