export interface QuestionOption {
  value: string | number;
  label: string;
}

export interface Question {
  id: string;
  label: string;
  type:
    | 'text'
    | 'email'
    | 'number'
    | 'select'
    | 'radio'
    | 'checkbox'
    | 'textarea';
  required?: boolean;
  placeholder?: string;
  options?: QuestionOption[];
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
  };
}

export interface QuestionSection {
  id: string;
  title: string;
  description?: string;
  questions: Question[];
}

// Likert scale options (reusable across all questions)
const likertOptions: QuestionOption[] = [
  { value: 1, label: 'Sangat Tidak Setuju' },
  { value: 2, label: 'Tidak Setuju' },
  { value: 3, label: 'Netral' },
  { value: 4, label: 'Setuju' },
  { value: 5, label: 'Sangat Setuju' },
];

export const questionnaireData: QuestionSection[] = [
  {
    id: 'personal-data',
    title: 'Data Diri',
    description: 'Mohon lengkapi data diri Anda',
    questions: [
      {
        id: 'fullName',
        label: 'Nama Lengkap',
        type: 'text',
        required: true,
        placeholder: 'Masukkan nama lengkap Anda',
      },
      {
        id: 'gender',
        label: 'Jenis Kelamin',
        type: 'radio',
        required: true,
        options: [
          { value: 'Pria', label: 'Pria' },
          { value: 'Wanita', label: 'Wanita' },
        ],
      },
      {
        id: 'age',
        label: 'Usia',
        type: 'select',
        required: true,
        options: [
          { value: '<20', label: 'Dibawah 20 tahun' },
          { value: '20-30', label: '20-30 tahun' },
          { value: '30-40', label: '30-40 tahun' },
          { value: '>40', label: 'Diatas 40 tahun' },
        ],
      },
      {
        id: 'workDuration',
        label: 'Durasi Bekerja',
        type: 'select',
        required: true,
        options: [
          { value: '1-5', label: '1-5 tahun' },
          { value: '6-10', label: '6-10 tahun' },
          { value: '11-15', label: '11-15 tahun' },
          { value: '>15', label: 'Lebih dari 15 tahun' },
        ],
      },
      {
        id: 'workCity',
        label: 'Kota Bekerja',
        type: 'select',
        required: true,
        options: [
          { value: 'Malang', label: 'Malang' },
          { value: 'Surabaya', label: 'Surabaya' },
          { value: 'Banyuwangi', label: 'Banyuwangi' },
          { value: 'Batu', label: 'Batu' },
        ],
      },
      {
        id: 'phone',
        label: 'No HP (Untuk Free ShopeePay)',
        type: 'text',
        required: true,
        placeholder: '08xxxxxxxxxx',
        validation: {
          pattern: '^[0-9]{10,13}$',
        },
      },
    ],
  },
  {
    id: 'green-leadership',
    title: 'Green Transformational Leadership',
    questions: [
      // Green Person (1-4)
      {
        id: 'Q1',
        label:
          'Pimpinan saya mendorong penggunaan energi yang efisien di hotel, seperti mematikan lampu dan peralatan yang tidak digunakan.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      {
        id: 'Q2',
        label:
          'Pimpinan saya mendukung penggunaan produk ramah lingkungan, seperti perlengkapan mandi yang ramah lingkungan dan produk pembersih yang aman bagi lingkungan.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      {
        id: 'Q3',
        label:
          'Pimpinan saya memiliki komitmen untuk menjaga kebersihan lingkungan hotel dengan merawat area taman, mengurangi limbah, dan mendaur ulang.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      {
        id: 'Q4',
        label:
          'Pimpinan saya mengadopsi teknologi atau metode baru yang dapat mengurangi dampak lingkungan di hotel ini.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      // Green Manager (5-7)
      {
        id: 'Q5',
        label:
          'Pimpinan saya memberi dukungan yang jelas agar tim bisa bekerja untuk mengurangi dampak lingkungan.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      {
        id: 'Q6',
        label:
          'Pimpinan saya selalu memberi contoh dalam hal menggunakan produk yang ramah lingkungan.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      {
        id: 'Q7',
        label:
          'Pimpinan saya memberi arahan yang jelas agar kami bisa bekerja dengan cara yang lebih ramah lingkungan.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
    ],
  },

  // Green Self-Efficacy
  {
    id: 'green-efficacy',
    title: 'Green Self-Efficacy',
    questions: [
      // Keyakinan (8-10)
      {
        id: 'Q8',
        label:
          'Saya yakin bisa membuat pilihan yang ramah lingkungan setiap hari.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      {
        id: 'Q9',
        label:
          'Saya percaya tindakan kecil yang saya lakukan dapat membantu melindungi lingkungan.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      {
        id: 'Q10',
        label: 'Saya merasa bisa berbuat sesuatu yang baik untuk lingkungan.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      // Kemampuan (11-12)
      {
        id: 'Q11',
        label:
          'Saya percaya saya bisa menghemat energi dan air dengan cara yang mudah.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      {
        id: 'Q12',
        label:
          'Saya yakin bisa mengurangi sampah plastik dalam kehidupan sehari-hari.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      // Pengaruh (13-14)
      {
        id: 'Q13',
        label:
          'Saya bisa memberikan contoh kepada orang lain tentang cara hidup ramah lingkungan.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      {
        id: 'Q14',
        label:
          'Saya bisa mengajak orang lain untuk peduli terhadap lingkungan.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
    ],
  },

  // Green Organizational Culture
  {
    id: 'green-culture',
    title: 'Green Organizational Culture',
    questions: [
      // Artefak (15-17)
      {
        id: 'Q15',
        label:
          'Perusahaan saya banyak simbol atau tanda yang menunjukkan perhatian terhadap lingkungan, seperti tempat sampah terpisah untuk daur ulang atau penggunaan produk ramah lingkungan.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      {
        id: 'Q16',
        label:
          'Perusahaan saya menyediakan fasilitas atau alat yang membantu melestarikan lingkungan, seperti air dispenser daripada botol plastik.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      {
        id: 'Q17',
        label:
          'Perusahaan saya menerapkan kebijakan yang mendorong penghematan energi dan pengurangan limbah.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      // Nilai-nilai (18-19)
      {
        id: 'Q18',
        label:
          'Perusahaan saya memiliki nilai yang mendukung keberlanjutan lingkungan, yang jelas terlihat dalam visi dan tujuan perusahaan.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      {
        id: 'Q19',
        label:
          'Perusahaan saya sering mengadakan program untuk mendiskusikan dan mempromosikan pentingnya menjaga lingkungan.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      // Asumsi Dasar (20-22)
      {
        id: 'Q20',
        label:
          'Saya percaya bahwa menjaga lingkungan itu sangat penting untuk masa depan.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      {
        id: 'Q21',
        label:
          'Saya merasa bertanggung jawab untuk menjaga alam dan lingkungan sekitar saya.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      {
        id: 'Q22',
        label:
          'Saya yakin bahwa menjaga lingkungan adalah tanggung jawab bersama bagi kita semua.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
    ],
  },

  // Employee Green Behavior
  {
    id: 'green-behavior',
    title: 'Employee Green Behavior',
    questions: [
      // Green Learning (23-25)
      {
        id: 'Q23',
        label:
          'Saya mendapatkan informasi tentang tindakan melestarikan lingkungan perusahaan saya.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      {
        id: 'Q24',
        label: 'Saya mencetak dua sisi bila memungkinkan.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      {
        id: 'Q25',
        label: 'Saya memilih menggunakan gelas kaca daripada gelas plastik.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      // Organizational Voices (26-27)
      {
        id: 'Q26',
        label:
          'Saya memberikan saran tentang praktik ramah lingkungan kepada manajemen untuk meningkatkan kinerja lingkungan perusahaan.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      {
        id: 'Q27',
        label:
          'Saya memberi tahu manajemen tentang kebijakan dan praktik yang berpotensi tidak bertanggung jawab terhadap lingkungan.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      // Required Behavior (28-29)
      {
        id: 'Q28',
        label: 'Saya terlibat aktif dalam kegiatan pelestarian lingkungan.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      {
        id: 'Q29',
        label: 'Saya melakukan tugas dengan cara yang ramah lingkungan.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
    ],
  },
];
