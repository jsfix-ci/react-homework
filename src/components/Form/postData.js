import axios from "axios";

export const postData = async (form, setServerError, setSubmitForm) => {
   await axios.post('https://studapi.teachmeskills.by/auth/users/', {
        data: {
            'username': form.name,
            'email': form.email,
            'password': form.password
        },
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(async response => {
        const result = await response.json()
        if (response.status === 201) {
            setSubmitForm(true)
            return result
        } else {
            const error = await response.json()
            setServerError(true)
            const e = new Error('Error on the server!Try again!')
            e.data = error
            throw e
        }
    }).catch(function (error) {
        console.log(error)
    }).finally(function () {
        setSubmitForm(false)
    })
}
