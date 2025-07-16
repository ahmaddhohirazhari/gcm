// src/api.ts
import axios from 'axios';

// const SCRIPT_URL =
//   'https://script.google.com/macros/s/AKfycbwhPk4aDScNyU6xne_bf_dc7AkTOPLxbAtHzCheK_5hCQA8G5DoSoUQ64QgF75g13oW7Q/exec';
const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbypVwBO4ldSZPZUMdpEM7A_Gfs6jJh_YNFJCKkVFNMXJGP3fIrRQBaeU_JILVqecC-5SQ/exec';

export const api = {
  /**
   * Memeriksa ketersediaan nomor HP.
   */
  async checkPhoneNumber(phoneNumber: string) {
    const response = await axios.get(SCRIPT_URL, {
      params: {
        action: 'checkPhoneNumber',
        phoneNumber,
      },
    });
    return response.data;
  },

  /**
   * Mengirim seluruh data kuesioner ke Google Apps Script.
   * Diperbaiki menggunakan axios.post untuk konsistensi.
   */
  async submitQuestionnaire(data: any) {
    // Menggunakan axios.post untuk mengirim data.
    // 'data' akan otomatis diubah menjadi JSON string.
    const response = await axios.post(SCRIPT_URL, data, {
      params: {
        // 'action' dikirim sebagai URL parameter
        action: 'submitQuestionnaire',
      },
      headers: {
        // Header ini memastikan data dikirim sebagai teks biasa,
        // yang sangat andal untuk diterima oleh Google Apps Script.
        'Content-Type': 'text/plain;charset=utf-8',
      },
    });

    // axios secara otomatis mem-parsing respons JSON, jadi kita bisa langsung mengembalikan response.data
    return response.data;
  },

  /**
   * Mengambil daftar pertanyaan.
   */
  async getQuestions() {
    const response = await axios.get(SCRIPT_URL, {
      params: {
        action: 'getQuestions',
      },
    });
    return response.data;
  },
};
