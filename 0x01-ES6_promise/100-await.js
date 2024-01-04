import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let responseData = {};

  try {
    const photoData = await uploadPhoto();
    const userData = await createUser();

    responseData = { photoData, userData };
  } catch (error) {
    responseData = { photoData: null, userData: null };
  }

  return responseData;
}
