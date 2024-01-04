import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const [photoData, userData] = await Promise.allSettled([
      uploadPhoto(),
      createUser(),
    ]);

    const response = {
      photo: photoData.status === 'fulfilled' ? photoData.value : null,
      user: userData.status === 'fulfilled' ? userData.value : null,
    };

    return response;
  } catch (error) {
    return { photo: null, user: null };
  }
}
