import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const [photoData, userData] = await Promise.allSettled([
      uploadPhoto(),
      createUser(),
    ]);

    if (photoData.status !== 'fulfilled' || userData.status !== 'fulfilled') {
      return { photo: null, user: null };
    }

    const response = {
      photo: photoData.value,
      user: userData.value,
    };

    return response;
  } catch (error) {
    return { photo: null, user: null };
  }
}
