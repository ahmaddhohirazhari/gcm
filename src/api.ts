// src/api.ts
import axios from 'axios';

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwhPk4aDScNyU6xne_bf_dc7AkTOPLxbAtHzCheK_5hCQA8G5DoSoUQ64QgF75g13oW7Q/exec';

export const api = {
  async checkPhoneNumber(phoneNumber: string) {
    const response = await axios.get(SCRIPT_URL, {
      params: {
        action: 'checkPhoneNumber',
        phoneNumber,
      },
    });
    return response.data;
  },

  async submitQuestionnaire(data: any) {
    const response = await fetch(`${SCRIPT_URL}?action=submitQuestionnaire`, {
      method: 'POST',
      body: JSON.stringify(data),
    });

    return await response.json();
  },
  async getQuestions() {
    const response = await axios.get(SCRIPT_URL, {
      params: {
        action: 'getQuestions',
      },
    });
    return response.data;
  },
};
