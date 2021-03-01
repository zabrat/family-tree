// export const logIn  = async (userData) => {

//         return await fetch('http://localhost:3002/logIn', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(userData),
//         }).then(response => response.json());
// }

// export const submitFormData = async (formData) => {
//     return await fetch('http://localhost:3002/userPicture', {
//         method: 'POST',
//         body: formData,
//     }).then(response => response.json());
// }

// export const submitUser  = async (userInfo) => {
//     return await fetch('http://localhost:3002/userInfo', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userInfo),
//     }).then(response => response.json());
// }

// export const deleteUser  = async (userId) => {
//     return await fetch('http://localhost:3002/deleteUser', {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userId),
//     });
// }

export const getPeopleList = async () => {
    return await fetch('http://localhost:8000/api/people-list/')
    .then(response => response.json());
}