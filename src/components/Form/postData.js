export const postData = (form, setServerError, setSubmitForm) => {
    fetch('https://studapi.teachmeskills.by/auth/users/', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(async response => {
        if (response.status === 201) {
            setSubmitForm(true)
            return response.json()
        } else {
            const error = await response.json()
            setServerError(true)
            const e = new Error('Error on the server!Try again!')
            e.data = error
            throw e
        }
    }).then(data => console.log(data))
        .catch(err => console.log(err))
        .finally(setSubmitForm(false))

}