import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
  const result = [];

  return Promise.allSettled(promises)
    .then((res) => {
      res.forEach(({ status, value, reason }) => result.push({
        status,
        value: status === 'fulfilled' ? value : `${reason}`,
      }));

      return result;
    });
}
