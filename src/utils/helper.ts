import axios from 'axios';

import { AIResponse } from './context';

const maxToken: number = 1000;

export const getJobDescription = async (
  prompt: string,
  key: string | undefined,
): Promise<AIResponse> => {
  try {
    const res = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: prompt },
        ],
        max_tokens: maxToken,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${key}`,
        },
      },
    );

    const data = res.data;
    const response = data?.choices[0]?.message?.content?.trim();

    return { response };
  } catch (error: any) {
    const errorMessage =
      error?.response?.data?.error?.message || error?.message || String(error);
    return {
      error: `(Error StatusCode: ${error?.response?.status}) ${errorMessage}`,
    };
  }
};
