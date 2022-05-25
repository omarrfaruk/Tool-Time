import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    console.log(token);
    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email };
        console.log(currentUser);
        if (email) {
            fetch(`https://secure-refuge-17271.herokuapp.com/users/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('data inside useToken', data);
                    const token = data?.token;
                    localStorage.setItem('accessToken', token)
                    setToken(token)
                })
        }

    }, [user]);
    return [token];
}

export default useToken;