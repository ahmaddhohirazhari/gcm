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

// Skala Likert disesuaikan dengan formulir (termasuk singkatan)
const likertOptions: QuestionOption[] = [
  { value: 5, label: 'Sangat Setuju (SS)' },
  { value: 4, label: 'Setuju (S)' },
  { value: 3, label: 'Biasa / Netral (B/N)' },
  { value: 2, label: 'Tidak Setuju (TS)' },
  { value: 1, label: 'Sangat Tidak Setuju (STS)' },
];

export const questionnaireData: QuestionSection[] = [
  {
    id: 'personal-data',
    title: 'Data Responden',

    description: `Kepada : 
                  Yth. Bapak/Ibu Karyawan Karyawati.
                  Dengan Hormat,

                  Dalam rangka pengembangan ilmu khususnya di bidang Manajemen Sumber Daya Manusia, 
                  maka kami bermaksud mengadakan penelitian yang berjudul 
                  “Penguatan Green Transformational Leadership melalui Green Organizational Culture dan Green Self-Efficacy 
                  untuk Meningkatkan Employee Green Behavior di Organisasi Berkelanjutan”. 
                  Untuk itu kami sangat mengharapkan kesediaan bapak/ibu untuk mengisi kuesionar terlampir.
                  Pernyataan – pernyataan yang ada dalam kuesioner tidak mencerminkan benar atau salah,
                  oleh karena itu kami mohon bapak/ibu memberikan penilaian secara jujur.

                  Data dan informasi 
                  yang kami peroleh dari jawaban bapak/ibu akan sangat membantu untuk penelitian dalam bidang manajemen, 
                  data serta informasi tersebut akan dijaga kerahasiaannya dan hanya digunakan untuk penelitian. 
                  Data akan dianalisis secara agregat dari semua responden yang ada, bukan secara individual atau satu individu saja.

                  Demikian 
                  permohonan ini kami sampaikan,
                  atas kesediaan dan perkenan bapak/ibu disampaikan banyak terima kasih.`,
    questions: [
      {
        id: 'nama',
        label: 'Nama',
        type: 'text',
        required: false, // Di form aslinya tidak wajib
        placeholder: 'Masukkan nama Anda',
      },
      {
        id: 'jenisKelamin',
        label: 'Jenis Kelamin',
        type: 'radio',
        required: true,
        options: [
          { value: 'Pria', label: 'Pria' },
          { value: 'Wanita', label: 'Wanita' },
        ],
      },
      {
        id: 'usia',
        label: 'Usia',
        type: 'radio',
        required: true,
        options: [
          { value: '≤ 30 Tahun', label: '≤ 30 Tahun' },
          { value: '31 - 40 Tahun', label: '31 - 40 Tahun' },
          { value: '41 - 50 Tahun', label: '41 - 50 Tahun' },
          { value: '> 50 Tahun', label: '> 50 Tahun' },
        ],
      },
      {
        id: 'pendidikanTerakhir',
        label: 'Pendidikan Terakhir',
        type: 'radio',
        required: true,
        options: [
          { value: 'Setingkat SMU', label: 'Setingkat SMU' },
          { value: 'Sarjana Muda', label: 'Sarjana Muda' },
          { value: 'S1 (Strata Satu)', label: 'S1 (Strata Satu)' },
          { value: 'S2 (Strata Dua)', label: 'S2 (Strata Dua)' },
          { value: 'S3 (Strata Tiga)', label: 'S3 (Strata Tiga)' },
          { value: '__other_option__', label: 'Yang lain:' },
        ],
      },
      {
        id: 'statusPerkawinan',
        label: 'Status Perkawinan',
        type: 'radio',
        required: true,
        options: [
          { value: 'Menikah', label: 'Menikah' },
          { value: 'Belum Menikah', label: 'Belum Menikah' },
        ],
      },
      {
        id: 'lamaBekerja',
        label: 'Lama Bekerja',
        type: 'radio',
        required: true,
        options: [
          { value: '3 - 5 Tahun', label: '3 - 5 Tahun' },
          { value: '6 – 10 Tahun', label: '6 – 10 Tahun' },
          { value: '11 – 15 Tahun', label: '11 – 15 Tahun' },
          { value: '16 – 20 Tahun', label: '16 – 20 Tahun' },
          { value: '> 20 Tahun', label: '> 20 Tahun' },
          { value: '__other_option__', label: 'Yang lain:' },
        ],
      },
      {
        id: 'jabatan',
        label: 'Jabatan',
        type: 'radio',
        required: true,
        options: [
          { value: 'Head Of Department', label: 'Head Of Department' },
          { value: 'Rank and File', label: 'Rank and File' },
        ],
      },
      {
        id: 'wilayahHotel',
        label: 'Wilayah Hotel',
        type: 'radio', // Atau 'select' jika lebih disukai
        required: true,
        options: [
          { value: 'Kabupaten Bangkalan', label: 'Kabupaten Bangkalan' },
          { value: 'Kabupaten Banyuwangi', label: 'Kabupaten Banyuwangi' },
          { value: 'Kabupaten Blitar', label: 'Kabupaten Blitar' },
          { value: 'Kabupaten Bojonegoro', label: 'Kabupaten Bojonegoro' },
          { value: 'Kabupaten Bondowoso', label: 'Kabupaten Bondowoso' },
          { value: 'Kabupaten Gresik', label: 'Kabupaten Gresik' },
          { value: 'Kabupaten Jember', label: 'Kabupaten Jember' },
          { value: 'Kabupaten Jombang', label: 'Kabupaten Jombang' },
          { value: 'Kabupaten Kediri', label: 'Kabupaten Kediri' },
          { value: 'Kabupaten Lamongan', label: 'Kabupaten Lamongan' },
          { value: 'Kabupaten Lumajang', label: 'Kabupaten Lumajang' },
          { value: 'Kabupaten Madiun', label: 'Kabupaten Madiun' },
          { value: 'Kabupaten Magetan', label: 'Kabupaten Magetan' },
          { value: 'Kabupaten Malang', label: 'Kabupaten Malang' },
          { value: 'Kabupaten Mojokerto', label: 'Kabupaten Mojokerto' },
          { value: 'Kabupaten Nganjuk', label: 'Kabupaten Nganjuk' },
          { value: 'Kabupaten Ngawi', label: 'Kabupaten Ngawi' },
          { value: 'Kabupaten Pacitan', label: 'Kabupaten Pacitan' },
          { value: 'Kabupaten Pamekasan', label: 'Kabupaten Pamekasan' },
          { value: 'Kabupaten Pasuruan', label: 'Kabupaten Pasuruan' },
          { value: 'Kabupaten Ponorogo', label: 'Kabupaten Ponorogo' },
          { value: 'Kabupaten Probolinggo', label: 'Kabupaten Probolinggo' },
          { value: 'Kabupaten Sampang', label: 'Kabupaten Sampang' },
          { value: 'Kabupaten Sidoarjo', label: 'Kabupaten Sidoarjo' },
          { value: 'Kabupaten Situbondo', label: 'Kabupaten Situbondo' },
          { value: 'Kabupaten Sumenep', label: 'Kabupaten Sumenep' },
          { value: 'Kabupaten Trenggalek', label: 'Kabupaten Trenggalek' },
          { value: 'Kabupaten Tuban', label: 'Kabupaten Tuban' },
          { value: 'Kabupaten Tulungagung', label: 'Kabupaten Tulungagung' },
          { value: 'Kota Batu', label: 'Kota Batu' },
          { value: 'Kota Blitar', label: 'Kota Blitar' },
          { value: 'Kota Kediri', label: 'Kota Kediri' },
          { value: 'Kota Madiun', label: 'Kota Madiun' },
          { value: 'Kota Malang', label: 'Kota Malang' },
          { value: 'Kota Mojokerto', label: 'Kota Mojokerto' },
          { value: 'Kota Pasuruan', label: 'Kota Pasuruan' },
          { value: 'Kota Probolinggo', label: 'Kota Probolinggo' },
          { value: 'Kota Surabaya', label: 'Kota Surabaya' },
          { value: '__other_option__', label: 'Yang lain:' },
        ],
      },
      {
        id: 'namaHotel',
        label: 'Nama Hotel',
        type: 'text',
        required: true,
        placeholder: 'Masukkan nama hotel Anda',
      },
    ],
  },
  {
    id: 'green-leadership',
    title: 'Green Transformational Leadership',
    questions: [
      {
        id: 'b42dd6df-d909-4900-8f00-ddc73d03ae3a',
        label:
          '1. Pimpinan saya mendorong penggunaan energi yang efisien di hotel, seperti mematikan lampu dan peralatan yang tidak digunakan.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      {
        id: 'c05d8e9b-77af-479f-a450-5460f272ca31',
        label:
          '2. Pimpinan saya mendukung penggunaan produk ramah lingkungan, seperti perlengkapan mandi yang ramah lingkungan dan produk pembersih yang aman bagi lingkungan.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      {
        id: '3bfd6ce4-f3c8-4c2d-a15d-19f4f5d994d2',
        label:
          '3. Pimpinan saya memiliki komitmen untuk menjaga kebersihan lingkungan hotel dengan merawat area taman, mengurangi limbah, dan mendaur ulang.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      {
        id: '9201206a-6e76-4203-86ab-7910882a5f33',
        label:
          '4. Pimpinan saya mengadopsi teknologi atau metode baru yang dapat mengurangi dampak lingkungan di hotel ini.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      {
        id: 'fa87d1ea-e9b6-44e5-90d1-2a241baab68b',
        label:
          '5. Pimpinan saya memberi dukungan yang jelas agar tim bisa bekerja untuk mengurangi dampak lingkungan.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      {
        id: 'f6d0fce0-0b6b-43a1-8e6f-26c94ea20bea',
        label:
          '6. Pimpinan saya selalu memberi contoh dalam hal menggunakan produk yang ramah lingkungan',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      {
        id: '10e46a95-c8d3-49db-bd27-7ceaa8566f2b',
        label:
          '7. Pimpinan saya memberi arahan yang jelas agar kami bisa bekerja dengan cara yang lebih ramah lingkungan',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
    ],
  },
  {
    id: 'green-efficacy',
    title: 'Green Self-Efficacy',
    questions: [
      {
        id: '874d079f-613d-4cc5-bb85-74f587a580d9',
        label:
          '8. Saya yakin bisa membuat pilihan yang ramah lingkungan setiap hari.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      {
        id: 'd79f1311-2d6f-4e25-9a30-2896b1d6d571',
        label:
          '9. Saya percaya tindakan kecil yang saya lakukan dapat membantu melindungi lingkungan.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      {
        id: '9729d675-2b6d-4fa8-b1d8-fe20175d208c',
        label:
          '10. Saya merasa bisa berbuat sesuatu yang baik untuk lingkungan.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      {
        id: 'c1b59de7-b3b2-49e2-818a-a23de10fdd73',
        label:
          '11. Saya percaya saya bisa menghemat energi dan air dengan cara yang mudah.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      {
        id: '5e6d9a49-9a77-42f5-95db-931d68f0fe4c',
        label:
          '12. Saya yakin bisa mengurangi sampah plastik dalam kehidupan sehari-hari.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      {
        id: '44127f01-b21f-4d69-a86f-40f55b0f0f12',
        label:
          '13. Saya bisa memberikan contoh kepada orang lain tentang cara hidup ramah lingkungan.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      {
        id: 'f7cfd6c4-49b7-4781-a2df-e99d71a74555',
        label:
          '14. Saya bisa mengajak orang lain untuk peduli terhadap lingkungan.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
    ],
  },
  {
    id: 'green-culture',
    title: 'Green Organizational Culture',
    questions: [
      {
        id: 'b81f5928-3b76-43ab-a61c-f0bc8f17dbe0',
        label:
          '15. Perusahaan saya banyak simbol atau tanda yang menunjukkan perhatian terhadap lingkungan, seperti tempat sampah terpisah untuk daur ulang atau penggunaan produk ramah lingkungan.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      {
        id: '3b23b181-33f1-406c-9fdd-67e94e04d515',
        label:
          '16. Perusahaan saya menyediakan fasilitas atau alat yang membantu melestarikan lingkungan, seperti air dispenser daripada botol plastik.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      {
        id: 'b4f3a7b7-5040-4a9a-be31-0d8d72a1e24a',
        label:
          '17. Perusahaan saya menerapkan kebijakan yang mendorong penghematan energi dan pengurangan limbah.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      {
        id: 'a757bc2c-2e4d-48af-9861-295f80e72a8c',
        label:
          '18. Perusahaan saya memiliki nilai yang mendukung keberlanjutan lingkungan, yang jelas terlihat dalam visi dan tujuan perusahaan.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      {
        id: 'ca90db3b-087d-4503-b216-003e15625795',
        label:
          '19. Perusahaan saya sering mengadakan program untuk mendiskusikan dan mempromosikan pentingnya menjaga lingkungan.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      {
        id: '5da3dafd-37d6-4f7f-80bd-7ad34f7a873f',
        label:
          '20. Saya percaya bahwa menjaga lingkungan itu sangat penting untuk masa depan.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      {
        id: '95f0291c-cc57-4b68-b721-b0b888d8d10b',
        label:
          '21. Saya merasa bertanggung jawab untuk menjaga alam dan lingkungan sekitar saya.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      {
        id: 'bad0daa9-a568-4962-b3ab-b0170050f222',
        label:
          '22. Saya yakin bahwa menjaga lingkungan adalah tanggung jawab bersama bagi kita semua.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
    ],
  },

  {
    id: 'green-behavior',
    title: 'Employee Green Behavior',
    questions: [
      {
        id: 'f2d6f7f7-577e-4188-90a3-4961ba53b129',
        label:
          '23. Saya mendapatkan informasi tentang tindakan melestarikan lingkungan perusahaan saya',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      {
        id: '87ee6a7f-e25b-4076-a67b-78d8f0895326',
        label: '24. Saya mencetak dua sisi bila memungkinkan',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      {
        id: 'a34a8d31-07e4-457c-b8a5-4a801c6917a',
        label: '25. Saya memilih menggunakan gelas kaca daripada gelas plastik',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      {
        id: '2b49d6ac-2c41-46ba-b368-ff437f2add0d',
        label:
          '26. Saya memberikan saran tentang praktik ramah lingkungan kepada manajemen untuk meningkatkan kinerja lingkungan perusahaan',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      {
        id: 'f590cd87-a68f-47bc-a501-7c21070f01c1',
        label:
          '27. Saya memberi tahu manajemen tentang kebijakan dan praktik yang berpotensi tidak bertanggung jawab terhadap lingkungan.',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      {
        id: '3718c38b-3d7e-4a38-887e-2f03b272625c',
        label: '28. Saya terlibat aktif dalam lingkungan',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
      {
        id: 'a5e84cb6-1dab-4e9e-b4e9-3cd06443c72f',
        label: '29. Saya melakukan tugas dengan cara yang ramah lingkungan',
        type: 'radio',
        required: true,
        options: likertOptions,
      },
    ],
  },
];
